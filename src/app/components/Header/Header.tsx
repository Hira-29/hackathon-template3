import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import { IoBagOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className='w-full h-24 flex flex-col'>
        <div className='w-[1440] h-[34px] flex '>
            <div  className='w-6 h-6 ml-12 flex  gap-[820px] '>
                <Image src={"/images/himg.svg"} alt="headerimg" height={19.2} width={17.97}></Image>
            

                
            <div className='w-[375px] h-9 flex'>
                <ul className='flex '>
                    <li className='w-[101.13px] h-[34px] py-2 px-[5.16px] gap-[13.97px] flex font-[Helvitica] text-xs leading-[18px]'>Find a Store</li>
                    <p className='border-r '></p>
                    <li className='w-[53px] h-9 py-[9px]  px-[3.16px] gap-[12.84px] flex font-[Helvitica] text-xs leading-[18px]'>Help</li>
                    <p className='border-r '></p>
                    <li className='w-[63px] h-[34px] py-[9px] px-2 gap-[13.97px] flex font-[Helvitica] text-xs leading-[18px]'>Join Us</li>
                    <p className='border-r '></p>
                    <li className='w-[68px] h-[18px] py-2 px-3 gap-[13.97px] flex font-[Helvitica] text-xs leading-[18px]'>Sign In</li>
                </ul>
            </div></div>
        </div>



        <div className='w-[1440px] h-[60px] mt-9  gap-[368px] flex '>
        
        <div className='w-[1275px] h-24 gap-[50px] flex  justify-center items-center'>
            <div id="logo" className='w-[78px] h-24'>
        <Image src={"/images/logo.svg"} alt="logo" height={78.47} width={78.47}></Image>
           </div>
       
        

        <div className='w-[567px] h-6 gap-7  flex justify-center items-center'>
            <ul className='flex justify-between gap-6'>
                <li className='w-32'><Link href="/feature">New & Featured</Link></li>
                <li className='w-12'><Link href="/Men">Men</Link></li>
                <li className='w-12'><Link href="/Women">Women</Link></li>
                <li className='w-12'><Link href="/Sale">Sale</Link></li>
                <li className='w-12'><Link href="/Snikers">SNKRS</Link></li>
            </ul>
         </div> 
           
        

            <div className='w-[347px] h-[38px] flex'>
               
               <div className='w-[243px] h-[38px] rounded-[4px] py-[7px] px-3  gap-[10px] flex'>
                   <div className='w-[211px] h-6 gap-[34px] flex'>
                    <div className='w-[153px] h-[18px]  text-xs leading-3 flex'>  
                    <div className='w-8 h-8 '>
                   <button><FaSearch /></button>
                   </div>
                   

                       <input type="text" placeholder='Search?'></input>
                   
                   </div>
                  

                  </div>
               </div>


                   <div className='w-[128px] h-8'>
                   <div className='w-[80px] h-8 gap-4 flex'>
                   <button className='w-8 h-8'><FiHeart /></button>
                   <button className='w-8 h-8'><IoBagOutline /></button>
                   </div>

                   </div>

           </div>



        </div>
    </div>
      
    </header>
  )
}

export default Header
