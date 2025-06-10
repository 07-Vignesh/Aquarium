import React from 'react'
import Menubar from '../components/Menu'
import Navbar from '../components/Navbar'
import Adminprocess from '../components/Admin.process'
import { useState,useEffect } from 'react'
import axios from 'axios';

const AdminPage = () => {


    const [items, setItems] = useState([]);



  useEffect(() => {
    axios.get('https://ap-backend-9neb.onrender.com/api/orders')
      .then(res => setItems(res.data))
      .catch(err => console.error('Failed to fetch items:', err));
  }, []);

      const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this order?")) return;

  try {
    await axios.delete(`https://ap-backend-9neb.onrender.com/api/orders/${id}`);
    setItems(items.filter(item => item._id !== id));
  } catch (err) {
    console.error('Failed to delete item:', err);
    alert("Error deleting item");
  }
};

  
  return (
 <div  className='flex h-screen      '>

  <div className='position fixed -ml-6 w-16 '>
    <Menubar/>
  </div>

<div className='m-5 w-full ml-30  px-5 '>
  <Navbar/>

  
      <div className='mt-2 px-5 '>
        <h1 className='text-5xl font-extrabold tracking-tight  glass   '>ADMIN</h1>
      </div>


      <div className=' p-5 mx-8 my-18 w-275 h-100  bg-base-100 top-12 '>
        <Adminprocess/>
      </div>


 
      <div className="w-150 m-22">
        {items.map((item) => (
          <div key={item.id} className=" mx-5 my-8 border-gray-300   ">
           <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">Orders</span>
    <div className="flex justify-between "key={item.id}>
      <h2 className="text-3xl font-bold" >
        {item.name}
      </h2>
     
      <span className="text-xl">${item.itemRate}</span>
    </div>
     <p className=" font-bold py-4" >
       CID : {item._id}
      </p>
       <p className=" font-bold " >
       Quntity: {item.quantity}
      </p>
      
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>High-quality pet and aquarium images</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Customizable habitat style templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Batch inventory and species management</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>AI-powered pet health insights</span>
      </li>
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Seamless cloud integration</span>
      </li>
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="line-through">Real-time customer assistance tools

</span>
      </li>
    </ul>
    <div className="mt-6">
 <button
    className="btn btn-error btn-block"
    onClick={() => handleDelete(item._id)}
  >
    DELETE ORDER
  </button>    </div>
  </div>
</div>
            <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
         
           
           
          </div>
        ))}
      </div>


</div>


<div>
  
</div>

    
    </div>
  )
}
export default AdminPage
