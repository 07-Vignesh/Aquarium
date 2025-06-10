import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from "@clerk/clerk-react";

const CartPage = () => {
  const { user } = useUser();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (!user) return;
    axios.get("https://ap-backend-9neb.onrender.com/api/carts", {
      headers: {
        Authorization: `Bearer ${user.sessionId}`
      }
    }).then(res => {
      setCart(res.data.items || []);
    }).catch(err => {
      console.error("Failed to load cart", err);
    });
  }, [user]);

  const handleRemove = async (itemId) => {
    try {
      const res = await axios.delete(`https://ap-backend-9neb.onrender.com/api/carts/${itemId}`, {
        headers: {
          Authorization: `Bearer ${user.sessionId}`
        }
      });
      setCart(res.data.items || []);
    } catch (err) {
      console.error("Remove failed", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-auto mx-10">YOUR CART ITEMS</h1>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item) => (
          










<div className="card card-side bg-base-100 shadow-sm w-220 h-70 m-10 border-1">
  <figure>
    <img

    src={item.image} alt={item.title}  className='w-80 h-full'
      />
     
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.title}</h2>
  
    <p>₹{item.rate} × {item.quantity}/</p>
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
      
    </ul>
    <div className="card-actions justify-end">
 <button className="btn btn-error" onClick={() => handleRemove(item.itemId)}>Remove</button>
    </div>
  </div>
</div>





        ))
      )}


      
    </div>
  );
};

export default CartPage;
