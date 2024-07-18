import React, { useState, useEffect } from 'react';
import './NavBar.css';
import namelogo from '/namelogo.png';
import Button from '../UI/Button';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`navBar ${isScrolled ? 'scrolled' : ''}`}>
            <div>
                <a href='#' className='flex gap-2 items-center justify-center'>
                    <img src={namelogo} className='w-8 ' />
                    <h3 className='text-[#64FFDA]'>Yosef Lakew</h3>
                </a>
            </div>
            <div className='navBarItems hidden md:flex'>
                <ol >                    
                    <a href='#aboutme' rel='noreferrer'>
                        <li> <span > 01. </span> About </li>
                    </a>
                    <a href='#experinace'>
                        <li> <span> 02. </span> Experience </li>
                    </a>
                    <a href='#projects'>
                        <li> <span> 03. </span> Projects </li>
                    </a>
                    <a href='#contact'>
                        <li> <span> 04. </span> Contact </li>
                    </a>
                    
                    <a href='https://drive.google.com/file/d/1MSK7Gfwp9tebqX_NB9aBxymGPOchZAfX/view?usp=sharing' target='_blank' className='ml-2' >
                    <Button text="Resume" />
                    </a>
                </ol>
            </div>
        </div>
    );
}

export default NavBar;
