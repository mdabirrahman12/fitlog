import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
       <div className="hero bg-base-200 min-h-screen rounded-4xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
<Image
    src="/banner.png"
    alt="Banner"
    width={500}
    height={500}
    className="rounded-lg shadow-2xl"
/>
    <div>
        <p className='text-lime-500'>WORKOUT LIBRARY</p>
      <h1 className="text-5xl font-bold">TRAIN WITH INTENT. LOG <br/> EVERY SET.</h1>
      <p className="py-6">
        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it<br/>
into today's plan, and watch the week's work add up.
      </p>
      <button className="btn bg-lime-500 text-black border-2 border-lime-500 rounded-xl hover:border-lime-500 ">BROWSE WORKOUTS</button>
    </div>
  </div>
</div>
    );
};

export default Hero;