import React from 'react'
import Link from 'next/link';
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <>
    <div className='w-full h-[331px] top-[5550] text-white bg-black flex flex-col justify-center items-center '>
      <div className='w-[1372px] h-[213px]  left-[34px] top-[40px] flex'>
        <div className='w-[1029px] h-[213px] flex'>


          <div className='w-[245.25px] h-[169.63px] '>
          <p className=' mt-2 h-4 font-[Helvetica Neue] text-[10px] '>Find A Store</p>
          <p className=' mt-2 h-4 font-[Helvetica Neue] text-[10px] '>Become A Member</p>
          <p className=' mt-2 h-4 font-[Helvetica Neue] text-[10px] '>Sign Up for Email</p>
          <p className=' mt-2 h-4 font-[Helvetica Neue] text-[10px]'>Student Discounts</p>
          </div>


          <div className='w-[245.25px] h-[213px] left-[263.25px]'>
          <h3 className="font-bold">Get Help</h3>
          <p  className=" text-[#7E7E7E] mt-2 h-4 font-[Helvetica Neue] text-[10px] ">Order Status</p>
          <p  className=" text-[#7E7E7E] mt-2 h-4 font-[Helvetica Neue] text-[10px] ">Delivery</p>
          <p  className=" text-[#7E7E7E] mt-2 h-4 font-[Helvetica Neue] text-[10px] ">Returns</p>
          <p  className=" text-[#7E7E7E] mt-2 h-4 font-[Helvetica Neue] text-[10px] ">Payment Options</p>
          <p  className=" text-[#7E7E7E] mt-2 h-4 font-[Helvetica Neue] text-[10px] ">Contact Us On Nike.com Inquiries</p>
          <p  className=" text-[#7E7E7E] mt-2 h-4 font-[Helvetica Neue] text-[10px] ">Contact Us On All Other Inquiries</p>

          </div>


          <div className='w-[245.25px] h-[151px] left-[520.5px]'>
          <h3 className="font-bold">Get Help</h3>
          <p  className=" text-[#7E7E7E] mt-2 h-4 font-[Helvetica Neue] text-[10px] ">News</p>
          <p  className=" text-[#7E7E7E] mt-2 h-4 font-[Helvetica Neue] text-[10px] ">Careers</p>
          <p  className=" text-[#7E7E7E] mt-2 h-4 font-[Helvetica Neue] text-[10px] ">Investors</p>
          <p  className=" text-[#7E7E7E] mt-2 h-4 font-[Helvetica Neue] text-[10px] ">sustainability</p>
          </div>


          <div className='w-[337px] h-[37px] left-[1029px] flex gap-2'>
          <AiFillTwitterCircle /><FaFacebook /><TfiYoutube /><ImInstagram />
          </div>


      </div>
      </div>

      <div className="w-[1372px] h-[62px] top-[269px] left-[34px] flex gap-14">
    <div className='flex'>
      <p className='w-[61.28px] h-[15px]'>India</p>
      <p className='w-[323.67px] h-[17px]'>© 2023 Nike, Inc. All Rights Reserved</p>
    </div>
    <div className="flex gap-2 w-[680px] h-[46px] top-4 left-[686px]">
      <a href="#" className="hover:underline">Guides</a>
      <a href="#" className="hover:underline">Terms of Sale</a>
      <a href="#" className="hover:underline">Terms of Use</a>
      <a href="#" className="hover:underline">Nike Privacy Policy</a>
    </div>
  </div>
      

      </div>

       
    






    </>
  )
}

export default Footer
