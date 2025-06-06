import React from 'react'
import Menubar from '../components/Menu'
import Navbar from '../components/Navbar'
import FeaturedPosts from '../components/posts'
import ImageComponent from '../components/image'
import PostItems from '../components/posts'
import BirdsProducts from '../components/birds.products'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AboutPage = () => {
    const navigate = useNavigate()
  return (
 <div  className='flex h-screen     '>

  <div className='position fixed -ml-6 w-16 '>
    <Menubar/>
  </div>

<div className='m-5 w-full ml-30  px-5 '>
  <Navbar/>

  
      <div className='mt-2 px-5 '>
        <h1 className='font-sans text-4xl font-bold glass my-8 '>About </h1>
   

      <div className=''>
       

    
  
    <div className="min-h-screen bg-base-100 text-base-content">
      
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row gap-x-20">
   
    <div className="text-left">
      <h1 className="text-5xl font-serif">About AquaPaws Pets & Aquariums</h1>
      <p className="py-6 text-lg max-w-xl  ">
        Dive into the world of aquatic beauty and adorable pets with AquaPaws! We specialize in premium aquariums, colorful fish, and essential pet supplies. Whether you're a seasoned aquarist or a new pet owner, we’re here to make your journey exciting and stress-free. Explore our carefully curated collections and expert guidance to build the perfect habitat for your aquatic and furry friends.


      </p>
    </div>
    
<img src="image4.jpeg" className="max-w-sm rounded-lg shadow-2xl ml-30 mr-40 w-40% h-40% " />

  </div>
</div>



     
      <section className="py-12 px-6 bg-base-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4">Our Mission</h2>
          <p className="text-md leading-relaxed">
            At AquaPaws, we believe every pet deserves a safe, joyful, and loving environment. Our mission is to provide high-quality aquariums, pet care products, and professional support to help you care for your pets with confidence. From vibrant fish tanks to grooming tools, we make pet ownership easy and enjoyable.
          </p>
        </div>
      </section>

    
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Why Choose Us?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card bg-base-100 shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">Healthy & Happy Pets</h3>
              <p>We ensure our animals are well-cared for, healthy, and ready for loving homes.</p>
            </div>
            <div className="card bg-base-100 shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">Expert Advice
</h3>
              <p>Whether it's your first fish tank or a new puppy, our team offers personalized care tips and product guidance.</p>
            </div>
            <div className="card bg-base-100 shadow-md p-6">
              <h3 className="text-lg font-bold mb-2">Wide Range of Products</h3>
              <p>From filters to fish food, toys to tanks — we have everything your pets need.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-12 px-6 bg-accent text-primary-content text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Welcome a New Friend?</h2>
        <p className="mb-6">Explore our pet collections or visit us for expert aquarium setups and pet care support.

</p>
        <button className="btn btn-secondary" onClick={() => navigate("/modals")}>Visit Our Store</button>
      </section>
    </div>
      </div>
</div>

       </div>

    </div>
  )
}
export default AboutPage
