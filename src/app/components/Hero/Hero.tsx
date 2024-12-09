import React from 'react'
import Image from 'next/image'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className='w-full h-[5442.36px] mt-24 flex flex-col mx-9'>
         <div className='w-full h-[58px] flex flex-col items-center justify-center'>
             <div className='w-[105.15px] h-[17px] mt-[-1px]  flex flex-col'>
                <p className='font-medium font-[Helvetica Neue] text-[15px] text-center leading-4'>Hello Nike App</p>
             </div>
             <div className='w-[323.53px] h-6 top[19px] left-[558.23px] px-[11px] flex flex-col'>
                <p className='font-medium font-[Helvetica Neue] text-[11px] text-center leading-4 underline '>Download the app to access everything Nike. Get Your Great</p>
             </div>
         
         </div>

         <Image src={"/images/hero.svg"} alt="" height={700} width={1344}></Image>
         

         <div className='w-[1008px] h-[229px] mt-[84px] ml-[168px] flex flex-col justify-center items-center'>
         <div className='w-[70px] h-6  left-[468.88px] flex flex-col'>
            <p className='font-medium font-[Helvetica Neue] text-[15px] text-center'>First Look</p>
         </div>

            <div className='w-[574px] h-[60px] mt-[28px]  left-[216.38px] flex flex-col'>
            <p className='font-medium font-[Helvetica Neue] text-[56px] text-center'>Nike Air Max Pulse</p>
             
            </div>

            <div className='w-[1008px] h-[48px] mt-20 px-[248.45px] flex flex-col'>

            <p className='w-[511px] h-12  font-[Helvetica Neue] text-[15px] text-center'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
            —designed to push you past your limits and help you go to the max.</p>
            
            </div>
             <div className='w-[1008px] h-[45px] mt-10 justify-center  items-center flex gap-2'>
                <button className=' rounded-md bg-black text-white px-1 mx-1'>Notify Me</button>
                <button className='rounded-md bg-black text-white px-1 mx-1'>Shop Air Max</button>
                
             </div>
            
            </div>


            <div className='w-[1340px] h-[52px] mt-6 flex flex-col'>
               <div className='w-[161.59px] h-[27px]'>
                 <p className='font-medium font-[Helvetica Neue] text-[22px] '>Best of Air Max</p>
              
             
               <div className='w-[164.75px] h-[48px] gap-[12.38px] flex ml-[1227.61px]'>
                 <p className='w-[37px] h-6 font-medium font-[Helvetica Neue] text-[15px]'>Shop</p>

                 
            
               <IoIosArrowBack />
             <IoIosArrowForward />
           
             </div>
               </div>
            </div>


            <div className='w-[1340px] h-[540.36px] mt-16 flex  '>
               <div className='w-[441px] h-[510px] ml-12 border-slate-400 border-2 '>
               <Image src={"/images/p1.svg"} alt="" height={441.36} width={441.36}></Image>
               <div className='w-[425px] h-12 p-4'>
               <div className='flex justify-between items-center'>
                <div>
               <h3 className='font-medium font-[Helvetica Neue] text-[15px]'>Nike Air Max Pulse</h3>
               
               <p className=' font-[Helvetica Neue] text-[15px] text-gray-600'>Women's Shoes</p>
                </div>
               
               <p className='font-[Helvetica Neue] font-medium text-[15px]'>₹ 13,995</p>
               </div>
               
               </div>
               </div>
           



           
               <div className='w-[441px] h-[510px] ml-12 border-slate-400 border-2'>
               <Image src={"/images/p1.svg"} alt="" height={441.36} width={441.36}></Image>
               <div className='w-[425px] h-12 p-4'>
               <div className='flex justify-between items-center'>
                <div>
               <h3 className='font-medium font-[Helvetica Neue] text-[15px]'>Nike Air Max Pulse</h3>
               
               <p className=' font-[Helvetica Neue] text-[15px] text-gray-600'>Women's Shoes</p>
                </div>
               
               <p className='font-[Helvetica Neue] font-medium text-[15px]'>₹ 13,995</p>
               </div>
               
               </div>
               </div>
           





            
               <div className='w-[441px] h-[510px] ml-12 border-slate-400 border-2'>
               <Image src={"/images/shoe3.svg"} alt="" height={441.36} width={441.36}></Image>
               <div className='w-[425px] h-12 p-4'>
               <div className='flex justify-between items-center'>
                <div>
               <h3 className='font-medium font-[Helvetica Neue] text-[15px]'>Nike Air Max Pulse</h3>
               
               <p className=' font-[Helvetica Neue] text-[15px] text-gray-600'>Women's Shoes</p>
                </div>
               
               <p className='font-[Helvetica Neue] font-medium text-[15px]'>₹ 13,995</p>
               </div>
               
               </div>
               </div>
            
               </div>




            <div className="w-[1344px] h-[977px] mx-9 ">
         <h5 className="m-6">Featured</h5>
        <Image  src={"/images/featured.svg"} alt="featured" height={700} width={1344} />
    
        <div className="p-5 flex flex-col justify-center items-center">
        
         <h1 className="mb-2 text-2xl font-bold  text-gray-900 dark:text-white">STEP INTO WHAT FEELS GOOD</h1>
        
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Cause everyone should know the feeling of running in that perfect pair.</p>
        <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg">
        Find Your Shoe</button>
            </div>
            </div>


   <section id="card" className=" h-[561px] ">
          <div className="py-8">
  <h2 className="text-2xl font-bold mb-4">Gear Up</h2>
  <div className="flex  items-center mb-4 gap-28">
    <h1 className="text-lg font-semibold ml-[348px]">Shop Men's</h1>
    <div className="flex space-x-2">
      <button className="p-2 rounded-full border border-gray-300">&lt;</button>
      <button className="p-2 rounded-full border border-gray-300">&gt;</button>
    </div>
    <h1 className="text-lg font-semibold ml-[328px]">Shop Women's</h1>
    <div className="flex space-x-2">
      <button className="p-2 rounded-full border border-gray-300">&lt;</button>
      <button className="p-2 rounded-full border border-gray-300">&gt;</button>
    </div>
  </div>
  <div className="grid grid-cols-4 gap-4">
    {/*<!-- Card 1 -->*/}
    <div className="text-center">
      <Image src={"/images/image1.svg"} alt="Nike Dri-FIT ADV TechKnit Ultra" height={300} width={300} className="w-full mb-2"/>
      <h3 className="text-lg font-medium">Nike Dri-FIT ADV TechKnit Ultra</h3>
      <p className="text-sm text-gray-500">Men's Short-Sleeve Running Top</p>
      <p className="text-lg font-semibold">₹ 3,895</p>
    </div>


    {/*<!-- Card 2 -->*/}
    <div className="text-center">
      <Image src={"/images/image2.svg"} alt="Nike Dri-FIT Challenger" height={300} width={300} className="w-full mb-2"/>
      <h3 className="text-lg font-medium">Nike Dri-FIT Challenger</h3>
      <p className="text-sm text-gray-500">Men's 18cm (approx.) 2-in-1 Versatile Shorts</p>
      <p className="text-lg font-semibold">₹ 2,495</p>
    </div>


    {/*<!-- Card 3 -->*/}
    <div className="text-center">
      <Image src={"/images/image3.svg"} alt="Nike Dri-FIT ADV Run Division" height={300} width={300} className="w-full mb-2"/>
      <h3 className="text-lg font-medium">Nike Dri-FIT ADV Run Division</h3>
      <p className="text-sm text-gray-500">Women's Long-Sleeve Running Top</p>
      <p className="text-lg font-semibold">₹ 5,295</p>
    </div>


    {/*<!-- Card 4 -->*/}
    <div className="text-center border-2 border-red-500">
      <Image src={"/images/image4.svg"} alt="Nike Fast" height={300} width={300} className="w-full mb-2"/>
      <h3 className="text-lg font-medium">Nike Fast</h3>
      <p className="text-sm text-gray-500">Women's Mid-Rise 7/8 Running Leggings with Pockets</p>
      <p className="text-lg font-semibold">₹ 3,795</p>
    </div>
  </div>
</div>

            </section> 



   <div className='h-[977px] mt-[128px] ml-12'>
      <h1 className='font-[Helvetica Neue] font-medium text-[22px]'>Don't Miss</h1>
    <Image src={"/images/image.svg"} alt="Jordan Brand clothing" width={1344} height={700} className="w-full h-auto mt-12"/>
    <div className="bg-white text-center py-8">
  <h1 className="text-4xl font-bold mb-4">FLIGHT ESSENTIALS</h1>
  <p className="text-lg mb-6">Your built-to-last, all-week wears— but with style only Jordan Brand can deliver.</p>
  <button className="bg-black text-white py-2 px-4 rounded">Shop</button>
</div>

    
    
    </div>


    <div className=" py-8 ">
  <h2 className="text-2xl font-bold mb-6">The Essentials</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/*<!-- Men's Essentials -->*/}
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Image src={"/images/ess1.svg"} alt="Men's Essentials" width={440} height={540} className="w-full h-auto mb-4"/>
      <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full">Men's</button>
    </div>

    {/*<!-- Women's Essentials -->*/}
    <div className="bg-white p-4 rounded-lg shadow-md">
    <Image src={"/images/ess2.svg"} alt="Women's Essentials"  width={440} height={540} className="w-full h-auto mb-4"/>
      <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full">Women's</button>
    </div>

    {/*<!-- Kids' Essentials -->*/}
    <div className="bg-white p-4 rounded-lg shadow-md">
    <Image src={"/images/ess3.svg"} alt="Kids' Essentials"  width={440} height={540} className="w-full h-auto mb-4"/>
      <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-full">Kids'</button>
    </div>
  </div>
</div>


<div className='flex justify-center items-center'>
<div className="w-[880px] h-[192px] border border-blue-500 p-4 ">
  <div className="grid grid-cols-4 gap-4">
   
    <div>
      <h2 className="font-bold">Icons</h2>
      <ul>
        <li>Air Force 1</li>
        <li>Huarache</li>
        <li>Air Max 90</li>
        <li>Air Max 95</li>
      </ul>
    </div>
    
    <div>
      <h2 className="font-bold">Shoes</h2>
      <ul>
        <li>All Shoes</li>
        <li>Custom Shoes</li>
        <li>Jordan Shoes</li>
        <li>Running Shoes</li>
      </ul>
    </div>
  
    <div>
      <h2 className="font-bold">Clothing</h2>
      <ul>
        <li>All Clothing</li>
        <li>Modest Wear</li>
        <li>Hoodies & Pullovers</li>
        <li>Shirts & Tops</li>
      </ul>
    </div>
   
    <div>
      <h2 className="font-bold">Kids'</h2>
      <ul>
        <li>Infant & Toddler Shoes</li>
        <li>Kids' Shoes</li>
        <li>Kids' Jordan Shoes</li>
        <li>Kids' Basketball Shoes</li>
      </ul>
    </div>
  </div>
</div>
</div>
      
    </div>
  )
}

export default Hero
