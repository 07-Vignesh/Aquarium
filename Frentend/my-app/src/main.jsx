// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Homepage from './routes/Homepage';
import Pets from './routes/Pets';
import Fishes from './routes/Fishes';
import { Outlet } from 'react-router-dom';
import Menubar from './components/Menu';
import Birds from './routes/birds';
import Foods from './routes/Foods';
import About from './routes/About';
import Contact from './routes/contact';
import Products from './routes/Products';
import AdminPage from './routes/Admin';
import LoginPage from './routes/Login';
import { ClerkProvider } from '@clerk/clerk-react'
import CartPage from './routes/card';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY



if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}


const router = createBrowserRouter([
  {

path: '/',
    element:(


      <>

      <Outlet/>
      
      
      </>
    ),






    children: [
      { index: true, element: <Homepage/> },
    ],
  },
  {
    path: '/pets',
    element: <Pets />, 
  },
   {
    path: '/fishes',
    element: <Fishes />, 
  },
   {
    path: '/birds',
    element: <Birds/>, 
  },
   {
    path: '/foods',
    element: <Foods/>, 
  },
   {
    path: '/products',
    element: <Products/>, 
  },
   {
    path: '/about',
    element: <About/>, 
  },
   {
    path: '/contact',
    element: <Contact/>, 
  },
    {
    path: '/login',
    element: <LoginPage/>, 
  },
  {
    path: '/admin',
    element: <AdminPage/>, 
  },
  {
    path: '/card',
    element: <CartPage/>, 
  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={router} />
</ClerkProvider>
  </React.StrictMode>,
)
