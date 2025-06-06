import React from 'react'
import Menubar from '../components/Menu'
import Navbar from '../components/Navbar'
import FeaturedPosts from '../components/posts'
import ImageComponent from '../components/image'
import PostItems from '../components/posts'
import BirdsProducts from '../components/birds.products'
import { useState } from 'react'

import FishProducts from '../components/Fishes.products'
const Homepage = () => {
     const [searchQuery, setSearchQuery] = useState("");
  
  return (
 <div  className='flex h-screen    '>

  <div className='position fixed -ml-6 w-16 '>
    <Menubar/>
  </div>

<div className='m-5 w-full ml-30 px-5'>
      <Navbar onSearch={(query) => setSearchQuery(query)} />

  
      <div className='mt-2 px-5'>
        <h1 className='text-5xl font-extrabold tracking-tight  glass'>Aquatic Fishes </h1>
      </div>


      <div>
        <FishProducts  searchQuery={searchQuery}/>
      </div>
</div>

    
    </div>
  )
}
export default Homepage
