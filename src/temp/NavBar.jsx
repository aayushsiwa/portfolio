import React, { useState } from 'react';
export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <nav id='' className='w-full h-auto py-[25px] ps-[40px] pe-[50px] flex justify-between fixed bg-white top-0 left-0 z-10 align-middle shadow-md text-[1.7rem]'>
                <a className='text-[#2d2e32] font-extrabold text-4xl' href="#home">
                    <h3>Aditya.dev</h3></a>
                <ul className="flex gap-8">
                    <li className=''>
                        <a className='transition-all font-semibold hover:text-[#147efb]' href="#home">Home</a>
                    </li>
                    <li className=''>
                        <a className='transition-all font-semibold hover:text-[#147efb]' href="#about">About</a>
                    </li>
                    <li className=''>
                        <a className='transition-all font-semibold hover:text-[#147efb]' href="#projects">Projects</a>
                    </li>
                    <li className=''>
                        <a className='transition-all font-semibold hover:text-[#147efb]' href="#contact">Contact</a>
                    </li>
                    <li>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={30}
                            height={30}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mobile-menu"
                            onClick={handleMenuToggle}
                        >
                            <path d="M4 6l16 0" />
                            <path d="M4 12l16 0" />
                            <path d="M4 18l16 0" />
                        </svg>
                    </li>

                </ul>
            </nav>
            <div className={`mobile-nav ${isMenuOpen ? 'open-menu' : 'closed-menu'}`} onClick={handleMenuToggle}>
                <span >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-x"
                    >
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </span>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </>
    )
}