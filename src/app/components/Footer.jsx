import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-black text-neutral-content items-center p-4">
  <aside className="grid-flow-col items-center">
     <Image
    src="/logo.png"
    alt="Logo"
    width={20}
    height={20}
    className="object-contain"
/>
 <h1 className='text-white'>FITLOG</h1>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <p>©  {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.</p>
  </nav>
</footer>
    );
};

export default Footer;