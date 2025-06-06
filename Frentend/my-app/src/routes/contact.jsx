import React from 'react'
import Menubar from '../components/Menu'
import Navbar from '../components/Navbar'
import FeaturedPosts from '../components/posts'
import ImageComponent from '../components/image'
import PostItems from '../components/posts'
import BirdsProducts from '../components/birds.products'
const Contactpage = () => {
  return (
 <div  className='flex h-screen      '>

  <div className='position fixed -ml-6 w-16 '>
    <Menubar/>
  </div>

<div className='m-5 w-full ml-30  px-5  '>
  <Navbar  />

  
      <div className='mt-2 px-5 '>
      

<div className=" bg-base-200 m-5  ">

     
      <section className="hero min-h-[70vh] bg-accent text-primary-content flex flex-col justify-center px-8">
        <h1 className="text-5xl font-bold max-w-4xl">
Let’s Talk Pets & Aquariums        </h1>
        <p className="mt-4 max-w-2xl text-lg">
          Have questions about setting up an aquarium or caring for your pets? We're here to guide you every step of the way with expert advice and friendly support.
        </p>
      </section>
</div>
     
      <section className="max-w-6xl mx-5 px-8 py-16 flex flex-col lg:flex-row gap-12  mx-5   ">

        <div className="lg:w-1/2   ">
          <h2 className="text-3xl font-semibold mb-6  ">Get in Touch</h2>
          <p className="mb-4 text-lg leading-relaxed">
Whether you're looking for the perfect fish tank or pet care tips, feel free to contact us anytime:          </p>
          <ul className="space-y-3 text-base">
            <li><strong>Email:</strong> <a href="mailto:contact@wall3d.com" className="text-primary underline">contact@wall3d.com</a></li>
            <li><strong>Phone:</strong> +91 98765 43210</li>
            <li><strong>Address:</strong> 456 Ocean View Road, Chennai, Tamil Nadu, India</li>
          </ul>
        </div>

      
        <div className="lg:w-1/2 h-80 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Wall 3D Wallpapers Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d140016.48923606606!2d78.78450057106294!3d10.093190584277743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1748071381558!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

     
      <section className="bg-base-100 py-16 px-8 text-center max-w-full mx-auto">
        <h3 className="text-3xl font-semibold mb-4">Why Choose AquaPaws?</h3>
        <p className="text-lg leading-relaxed">
         We’re dedicated to helping you care for your pets with confidence. From high-quality aquariums to expert pet care advice, AquaPaws is your trusted partner in pet parenting.


        </p>
      </section>
    



      </div>


      
</div>

    
    </div>
  )
}
export default Contactpage
