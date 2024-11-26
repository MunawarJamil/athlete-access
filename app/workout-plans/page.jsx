import React from 'react'

function workOutPlans() {
  return (
    < > 
    <div className='w-full max-h-[100vh]    bg-slate-900'>
    <img src="./woplans-banner.jpg" alt="" width="80%" className=' mx-auto    object-cover'     />
 
    </div>

    <div>
<h1>POWER <span>ACCESS</span> </h1>
<h2>The Ultimate Fitness Solution</h2>
<p>For 20 years, Bodybuilding.com has been the internet’s go-to fitness resource. We connect you with the top experts in fitness to help you build your best body, and your best life. BodyFit is our new solution to help give you what you need, from full life-changing programs to great workouts and exercise instruction you can put into action any day of the week.</p>
<h3>Select Your Plan</h3>
  <div>
    <button>Monthly</button>
  <button>Yearly</button>
  </div>
{/* plan card */}
<div className='text-white'>
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