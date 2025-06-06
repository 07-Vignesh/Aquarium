import React from 'react'
import Menubar from '../components/Menu'
import Navbar from '../components/Navbar'
import FeaturedPosts from '../components/posts'
import ImageComponent from '../components/image'
import PostItems from '../components/posts'
import Pets from '../components/pets.products'
import Products from '../components/products'
import { useState } from 'react'
const Productpage = () => {

   const [searchQuery, setSearchQuery] = useState("");
  
  return (
 <div  className='flex h-screen   '>

  <div className='position fixed -ml-6 w-16 '>
    <Menubar/>
  </div>

<div className='m-5 w-full ml-30  px-5'>
      <Navbar onSearch={(query) => setSearchQuery(query)} />

  
      <div className='mt-2 px-5'>
        <h1 className='text-5xl font-extrabold tracking-tight  glass'>PRODUCTS </h1>
      </div>


      <div>
        <Products searchQuery={searchQuery} />
      </div>
</div>

    
    </div>
  )
}
export default Productpage