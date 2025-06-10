import React, { useState ,useEffect} from 'react';
import SearchInput from './Search';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import Image from "react"
import { useUser } from "@clerk/clerk-react";
import { ADMIN_IDS } from "../utils/admin.js";
import {ShieldUser} from "lucide-react"
import { useAuth } from '@clerk/clerk-react';

const Navbar = ({onSearch}) => {
  const [open, setOpen] = useState(false);

  


  const [totall, setTotall] = useState(0);

  useEffect(() => {
    fetch('https://ap-backend-9neb.onrender.com/api/carts/total-items')
      .then(res => res.json())
      .then(data => {
        setTotall(data.totalItems);
      });
  }, []);



const { user } = useUser();
  const isAdmin = user && ADMIN_IDS.includes(user.id);
  const {isSignedIn}= useAuth()


 const [theme, setTheme] = useState("light");
useEffect(() => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // If using checkbox, make sure it's checked based on the saved theme
  const checkbox = document.querySelector('.theme-controller');
  if (checkbox) {
    checkbox.checked = savedTheme === "synthwave";
  }
}, []);


 const toggleTheme = (e) => {
  const theme = e.target.checked ? "synthwave" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

  return (
    <div className="flex justify-between  w-full   px-5 py-8 gap-x-8 ">
      {/* Left: Search */}
<SearchInput  onSearch={onSearch}/>
<label className="swap swap-rotate   ml-180">
  {/* this hidden checkbox controls the state */}
  <input   onClick={toggleTheme} type="checkbox" className="theme-controller" value="synthwave" />



   {/* moon icon */}
 



  <svg
    className="swap-off h-7 w-7 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* sun icon */}
   <svg
    className="swap-on h-7 w-7 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
  {/* moon icon */}
 



  

</label>
 
      

      {/* Right: NavLogo */}
      {/* <div className="relative w-auto  ">


        
        <div
          className="cursor-pointer text-4xl mx-10   "
          onClick={() => setOpen((pr) => !pr)}
        >
          {open ? 'x' : '='}
        </div>

        {/* Slide-out Menu */}
        {/* <div
          className={`w-full    h-screen flex flex-col  top-24 gap-12 font-medium text-lg absolute   flex items-center p-5   z-50  mr-8  transition-all duration-300 ease-in-out ${
            open ? 'block' : 'hidden'
          }`}
        >
          <Link to="/home" className='hover:bg-blue-100  rounded-lg '>Home</Link>
          <Link to="/pets" className='hover:bg-blue-100   rounded-lg'   >Pets</Link>
          <Link to="/birds" className='hover:bg-blue-100 rounded-lg'>Birds</Link>
          <Link to="/fishes" className='hover:bg-blue-100 rounded-lg'>Fishes</Link>
          <Link to="/foods" className='hover:bg-blue-100 rounded-lg'>Foods</Link>
          <Link to="/products" className='hover:bg-blue-100 rounded-lg'>Products</Link>
          <Link to="/about" className='hover:bg-blue-100 rounded-lg' >About</Link>
        </div>
      </div> */} 


   {(!isAdmin&&isSignedIn&&(
<div className="flex-none mr-2">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span className="badge badge-sm indicator-item">{totall}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">{totall}</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <Link to="/card">
            <button className="btn btn-primary btn-block">View cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>



    

    </div>))}
    
    <SignedOut>
      <Link to="/login">
            <button className=' rounded-3xl bg-blue-800 text-white       p-2'>Login</button>
            </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

    { isAdmin && <div className='mt-1'>
        <h1>
          <Link to="/admin" >
                    
          <ShieldUser  size={30}/>
           </Link>
        </h1>
      </div>
}
</div>
    
    
  );
};

export default Navbar;
