import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>At Forever, we believe clothing is more than just fabric—it’s a statement of confidence, individuality, and strength. Our brand is built for those who strive to lead, to stand out, and to redefine style on their own terms. With a focus on premium quality, modern designs, and everyday comfort, AlphaX brings you fashion that empowers you to be the best version of yourself—bold, fearless, and unstoppable.</p>
            <p>We work tirelessly to provide a vast range of clothing to our customers, to keep them satisfied with the quality of our products</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission is to empower customer with choices, convenience, and confidence, so that they can showcase their personality with what they wear</p>
        </div>
      </div>
      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>Quality comes first in every stitch and detail. We use premium fabrics and rigorous checks to ensure durability and comfort. Our commitment to excellence means you get clothing that looks great and lasts long.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience</b>
            <p className='text-gray-600'>We make shopping effortless with a smooth and user-friendly experience. From easy navigation to secure payments and fast delivery, every step is designed for you. Enjoy fashion without hassle—because convenience is part of our promise.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Customer Service</b>
            <p className='text-gray-600'>Our customers are at the heart of everything we do. Our dedicated support team is always ready to assist you with quick and reliable solutions. We believe in building trust through responsive, friendly, and hassle-free service.</p>
          </div>
          
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default About
