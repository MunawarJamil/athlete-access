import React from 'react'

function workOutPlans() {
  return (
    < > 
    <div className='w-full relative max-h-[100vh]    bg-slate-900'>

    <img src="./woplans-banner.jpg" alt="" width="80%" className=' mx-auto    object-cover'     />
 
    </div>

    <div className=' font-serif  absolute top-20   '>

   <div className='flex lg:my-10 text-black lg:text-white  flex-col p-5 mx-auto border border-violet-200 lg:border-0 w-[80%] leading-7   text-center' >   
<h1 className='text-6xl text-white py-5 font-bold'>POWER <span className='text-cyan-400  font-serif '>ACCESS</span> </h1>
<h2 className='text-3xl lg:text-4xl text-blue-700 pt-12 lg:p-8 lg:text-white font-bold '>The Ultimate Fitness Solution</h2>
<p className='lg:text-xl '>For 20 years, Bodybuilding.com has been the internet’s go-to fitness resource. We connect you with the top experts in fitness to help you build your best body, and your best life. BodyFit is our new solution to help give you what you need, <span className='text-black lg:text-white'> from full life-changing programs to great workouts and exercise instruction you can put into action any day of the week. </span>  </p>
<h3 className='text-3xl font-bold'>Select Your Plan</h3>
  <div className='flex text-white font-bold my-5 gap-5 justify-center '>
    <button className='bg-blue-500 py-2 rounded-md px-5'>Monthly</button>
  <button className='bg-blue-500 py-2 rounded-md px-6  '>Yearly</button>
  </div>
{/* plan card */}
<div className='text-white hidden'>
  <div className="upper">
  <h1>POWER-ACCESS</h1>
  <button>$9.99/month</button>
  <p>Billed as $9.99 USD monthly.
  Cancel anytime.</p>
  </div>
  <div className="bottom">
    <span>tick</span>
    <span> 2,500+ Workouts Created by Experts</span>

    <span>tick</span>
    <span> 3,500+ How-To Exercise Videos</span>

    <span>tick</span>
    <span>  90+ Premium Workout Plans</span>

    <span>tick</span>
    <span>  Fitness Tracking App</span>


    <span>tick</span>
    <span> 10% Discount in Store</span>

    <span>tick</span>
    <span> FREE Domestic Shipping</span>

  </div>

  <button>Show details</button>

</div>

{/* end plan card */}
</div>  
 
</div>

<section className=' flex flex-col  items-center text-center py-5   w-[80%] mt-[30rem] md:mt-[15rem]  font-serif mx-auto lg:mt-[1rem]'>
  <h1 className=' text-2xl md:text-4xl  font-bold '>What is BodyFit?</h1>
  <p className=' my-5 md:my-10 leading-7'>BodyFit is your source for full fitness programs to help you build muscle, lose fat, or become more athletic. It’s loaded with nutrition and exercise plans, follow-along workout videos, and thousands of individual workouts, available through our top-rated fitness app. BodyFit is everything you need to transform.</p>



  <div>
  <p className='text-lg  font-bold '>Whether you’re a beginner or a seasoned lifter, there’s a workout for your goals. Check them out below.
  </p>
  <img src="" alt="" />
  </div>
</section>



    </>
  )
}

export default workOutPlans






                                                                                                      























/* "use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const workOutPlans = () => {
  const [removeInneCircle, setRemoveInnerCircle] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRemoveInnerCircle(false);
    }, 5000);
  });

  return (
    <>
      <div>page</div>

      <div className="w-11/12 flex items-center h-5  mx-auto bg-cyan-300">
        <motion.div
          whileHover={{
            width: "95%",
          }}
          animate={{
            width: "45%",
            //rotateZ:[300, 200],
            //marginTop:"190px"
          }}
          transition={{
            duration: 2,
          }}
          className="bg-slate-500 h-3"
        ></motion.div>
      </div>

      <div className="m-10 w-60 h-60 bg-slate-500 rounded-full ">
        <AnimatePresence>
          {removeInneCircle && (
            <motion.div
              initial={{
                opacity: 0,
                y: 0,
                x: 0,
              }}
              animate={{
                opacity: 1,
                y: 40,
                x: 60,

                borderRadius: 100,
                scale: [null, 1.2, 0.5, 0.1, 1],
                backgroundColor: [null, "#11111", "#12ab12", "#11111"],
                borderRadius: [null, "40%", "10%", "100%"],
              }}
              transition={{ duration: 10 }}
              whileHover={{}}
              exit={{ opacity: 0, y: 100 }}
              className="  w-40 h-40   bg-white     "
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default workOutPlans;

//enter and exit animation ->initial and exit
//animat  , transition whileHover-/
//keyframes
*/