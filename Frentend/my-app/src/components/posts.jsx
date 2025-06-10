import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from "@clerk/clerk-react";
import { Link } from 'react-router-dom';
import { ClerkLoaded, ClerkLoading } from '@clerk/clerk-react'
import { useUser } from "@clerk/clerk-react";
import { ADMIN_IDS } from "../utils/admin.js";


const PostItems =  ({searchQuery}) => {
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');
const [alertType, setAlertType] = useState('success');
const [filtered, setFiltered] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    quantity: 1
  });
const handleDelete = async (id) => {
  try {
    await axios.delete(`https://ap-backend-9neb.onrender.com/api/items/${id}`);
    setItems(items.filter(item => item._id !== id)); // remove item from state
    setAlertType('success');
    setAlertMessage('Pets item deleted successfully!');
    setTimeout(() => setAlertMessage(''), 3000);
  } catch (error) {
    console.error('Delete failed:', error);
    setAlertType('error');
    setAlertMessage('Failed to delete pets item.');
    setTimeout(() => setAlertMessage(''), 3000);
  }
};
useEffect(() => {
  if (searchQuery.trim() === "") {
    setFiltered(items);
  } else {
    const lowerQuery = searchQuery.toLowerCase();
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(lowerQuery)
    );
    setFiltered(filteredItems);
  }
}, [searchQuery, items]);



const { user } = useUser();
  const isAdmin = user && ADMIN_IDS.includes(user.id);

const [showAddForm, setShowAddForm] = useState(false);

const [newItem, setNewItem] = useState({
  title: '',
  image: '',
  rate: ''
});



const handleAddToCart = async (item) => {
  if (!isSignedIn) {
    setAlertType('error');
    setAlertMessage('Please sign in to add items to cart.');
    return;
  }

  const cartItem = {
    itemId: item._id,
    title: item.title,
    rate: item.rate,
    image: item.image,
    quantity: 1,
  };

  try {
    await axios.post("https://ap-backend-9neb.onrender.com/api/carts", { item: cartItem }, {
      headers: {
        Authorization: `Bearer ${user.sessionId}` // Clerk will handle this automatically if using session token
      }
    });
    setAlertType('success');
    setAlertMessage('Item added to cart!');
  } catch (err) {
    console.error("Failed to add to cart", err);
    setAlertType('error');
    setAlertMessage('Could not add to cart.');
  }

  setTimeout(() => setAlertMessage(''), 3000);
};
const handleAddItemChange = (e) => {
  setNewItem(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));
};
const handleAddItem = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('https://ap-backend-9neb.onrender.com/api/items', newItem);
    setItems(prev => [...prev, response.data]); // add new bird to list
    setAlertType('success');
    setAlertMessage('Item added successfully!');
    setShowAddForm(false);
    setNewItem({ title: '', image: '', rate: '' });
    setTimeout(() => setAlertMessage(''), 3000);
  } catch (err) {
    console.error('Error adding Item:', err);
    setAlertType('error');
    setAlertMessage('Failed to add Item.');
    setTimeout(() => setAlertMessage(''), 3000);
  }
};


const { isSignedIn } =  useAuth();

useEffect(() => {
  const fetchItems = async () => {
    try {
      const res = await axios.get(`https://ap-backend-9neb.onrender.com/api/items`, {
        params: { search: searchQuery }
      });
      setItems(res.data);
    } catch (err) {
      console.error('Failed to fetch items:', err);
    }
  };

  fetchItems();
}, [searchQuery]);
 const handleBuyNow = (item) => {
    setSelectedItem(item);
    setShowForm(true);
  };


  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      ...formData,
      itemId: selectedItem._id,
      itemTitle: selectedItem.title,
      itemRate: selectedItem.rate
    };


  try {
  await axios.post('https://ap-backend-9neb.onrender.com/api/orders', orderData);
  setAlertType('success');
  setAlertMessage('Order placed successfully!');
  setTimeout(() => setAlertMessage(''), 3000);
  setShowForm(false);
  setFormData({ name: '', contact: '', quantity: 1 });
} catch (error) {
  console.error('Error placing order:', error);
  setAlertType('error');
  setAlertMessage('Failed to place order.');
  
  console.log("orderdata", orderData);
}

}

  return (
    <>


{alertMessage && (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
      <div className={`alert ${alertType === 'success' ? 'alert-success' : 'alert-error'} shadow-lg`}>
        <span>{alertMessage}</span>
        <button onClick={() => setAlertMessage('')} className="btn btn-sm btn-ghost ml-auto">✕</button>
      </div>
    </div>
  )}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-15">
            {filtered.map((item) => (
              <div key={item.id} className="border mx-5  my-5 border-gray-300 hover:border-black-500 hover:shadow-lg hover:shadow-blue-300 transition-all duration-300 p-4 rounded-xl transition-transform duration-300 transform hover:scale-115">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg my-2"
                />
                <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
                <p className="text-green-600 font-medium">Rate: ${item.rate}</p>
                
    
              {( isSignedIn ==true) &&(
                <div className="card-actions justify-end ">
                  {!isAdmin && (
                  <button className="btn btn-accent my-2 mr-26  " onClick={() => handleAddToCart(item)}>
      Add to Cart
    </button>)}
    

              {!isAdmin&&(
              <button className="btn btn-primary mt-2 " onClick={() => handleBuyNow(item)}>Buy Now</button>
              ) }                  {isAdmin &&(
                      <button className="btn btn-error mt-2" onClick={() => handleDelete(item._id)}>Delete</button>
                      )}
    
                </div>)}


               
                {( isSignedIn==false) &&(
                <div className="card-actions justify-end">
                  <Link to="/login">
                        <button className="btn btn-accent my-2 mr-28  " onClick={() => handleAddToCart(item)}>
      Add to Cart
    </button>
         
                  <button className="btn btn-primary">Buy Now</button>
             </Link>
                </div>)}
               
              </div>
            ))}
    
    
            
          </div>
  {/* {(role === "admin" || role === "teacher") && (
              <FormContainer table="exam" type="create" />
            )} */}


      {showForm && selectedItem && (
        <div className="fixed inset-0 bg-black  flex justify-center items-center z-50">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-black">Order: {selectedItem.title}</h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full mb-3"
              required
            />
            <input
              type="number"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              className="input input-bordered w-full mb-3 "
              required
            />
            <input
              type="number"
              name="quantity"
              min="1"
              value={formData.quantity}
              onChange={handleChange}
              className="input input-bordered w-full mb-3"
              required
            />

            <div className="flex justify-between">
              <button type="submit" className="btn btn-success">Place Order</button>
              <button type="button" className="btn btn-outline bg-black text-white" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      {isAdmin && (
  <div className="flex justify-end mx-5">
    <button className="btn btn-success mb-4" onClick={() => setShowAddForm(true)}>
      + Add Bird
    </button>
  </div>
)}

{showAddForm && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <form onSubmit={handleAddItem} className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
      <h2 className="text-xl font-bold mb-4 text-black">Add New Item</h2>

      <input
        type="text"
        name="title"
        placeholder="Bird Name"
        value={newItem.title}
        onChange={handleAddItemChange}
        className="input input-bordered w-full mb-3"
        required
      />
      <input
        type="url"
        name="image"
        placeholder="Image URL"
        value={newItem.image}
        onChange={handleAddItemChange}
        className="input input-bordered w-full mb-3"
        required
      />
      <input
        type="number"
        name="rate"
        placeholder="Rate"
        value={newItem.rate}
        onChange={handleAddItemChange}
        className="input input-bordered w-full mb-3"
        required
      />

      <div className="flex justify-between">
        <button type="submit" className="btn btn-primary">Add</button>
        <button type="button" className="btn btn-outline bg-black text-white" onClick={() => setShowAddForm(false)}>Cancel</button>
      </div>
    </form>
  </div>
)}

    </>
  );
};

export default PostItems;
