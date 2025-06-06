import React from 'react'
import Menubar from '../components/Menu'
import Navbar from '../components/Navbar'
import FeaturedPosts from '../components/posts'
import ImageComponent from '../components/image'
import PostItems from '../components/posts'
import BirdsProducts from '../components/birds.products'
import FishProducts from '../components/Fishes.products'
import FoodProducts from '../components/food.products'
import { useEffect,useState } from 'react'

const Homepage = () => {

   const [searchQuery, setSearchQuery] = useState("");
   const handleSearch = (query) => {
    setSearchQuery(query);
  };

  
  return (
 <div  className='flex h-screen      '>

  <div className='position fixed -ml-6 w-16 '>
    <Menubar/>
  </div>

<div className='m-5 w-full ml-30 px-5'>
      <Navbar onSearch={(query) => setSearchQuery(query)} />

  
      <div className='mt-2 px-5'>
        <h1 className='text-5xl font-extrabold tracking-tight  glass'> FOODS </h1>
      </div>


      <div>
        <FoodProducts searchQuery={searchQuery}/>
      </div>
</div>

    
    </div>
  )
}
export default Homepage
