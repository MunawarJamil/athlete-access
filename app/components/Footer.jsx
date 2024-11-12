import React from 'react'
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
function Footer( ) {
  return (
    <footer className='bg-slate-950 p-6 text-white flex flex-col md:flex-row justify-around flex-wrap md:items-center '>
 
 <div >
    <h1 className='text-whit text-2xl  font-serif my-3'>Stay Connected  </h1>
    <p className='font-serif my-3' >Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals</p>
    <h2 className='font-bold font-serif my-5'>Enter your email address to subscribe</h2>

    <input className='w-full p-2 font-serif rounded-lg border-none text-black focus:outline-none border-b-slate-400' type="text" 
    placeholder='EMAIL' />
    <button className='w-full bg-blue-600 text-white font-bold mt-6 p-2 rounded-lg' >SUBSCRIBE</button>
    <p className='text-sm mt-2 text-gray-400 font-serif ml-2'>Provide your email address to subscribe. For e.g abc@xyz.com  </p>
    <div className='flex gap-10 ml-2   my-5    justify-start'>
    <Instagram/>
    <Linkedin/>
    <Facebook/>
    <Github/>
    <Twitter/>
</div>
 </div>



<div className='font-serif mt-8 '>
<h1 className='text-whit text-2xl  font-serif my-3'>SUPPORT</h1>
    <p className='p-1 text-sm my-2 cursor-pointer'>Accessibility</p>
    <p className='p-1 text-sm my-2 cursor-pointer'>Help Center</p>
    <p className='p-1 text-sm my-2 cursor-pointer'>Returns & Exchanges</p>
</div>


<div className='font-serif mt-8 ' >
    <h1 className='text-whit text-2xl  font-serif my-3'>Inquire</h1>
    <p className='p-1 text-sm my-2 cursor-pointer'>Privacy Policy</p>
    <p className='p-1 text-sm my-2 cursor-pointer'>Privacy Settings</p>
    <p className='p-1 text-sm my-2 cursor-pointer'>Accessibility Statement</p>
    <p className='p-1 text-sm my-2 cursor-pointer'>California Supply Chain Act</p>
    <p className='p-1 text-sm my-2 cursor-pointer'>Terms of Use</p>
</div>

<div className='font-serif  mt-8' >
    <h1 className='text-whit text-2xl  font-serif my-3' >Company</h1>
    <p className='p-1 text-sm my-2 cursor-pointer' >About Us</p>
    <p className='p-1 text-sm my-2 cursor-pointer' >BodyFit</p>
    <p className='p-1 text-sm my-2 cursor-pointer' >Subscribe & Gain</p>
    <p className='p-1 text-sm my-2 cursor-pointer' >Our Partners</p>
    <p className='p-1 text-sm my-2 cursor-pointer' >Join the Athlete Team</p>
</div>

    </footer>
  )
}

export default Footer