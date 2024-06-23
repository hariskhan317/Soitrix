import { useState } from 'react';
import logo from '../assets/logo.svg';
import { RxHamburgerMenu } from "react-icons/rx";

const navigation = { 
    social: [
        // social links...
    ]
};

const Header = () => {
    const [showBar, setShowBar] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setShowBar(false);
            setActiveLink(sectionId); // Set the active link
        }
    };

    return (    
        <header>
            <div className='fixed w-full bg-brand-black z-50 pr-12 shadow-xl border-b border-brand-gray-100'> 
                <div className='flex justify-between'>
                    <div>
                        <img src={logo} className='py-5 w-full h-full' alt="" />
                    </div>
                    <ul className='hidden md:flex gap-14 pt-7 '>
                        <li 
                            className={`cursor-pointer text-white font-medium text-lg ${activeLink === 'home' ? 'active' : ''}`} 
                            onClick={() => handleScroll('home')}
                        >
                            Home
                        </li> 
                        <li 
                            className={`cursor-pointer text-white font-medium text-lg ${activeLink === 'services' ? 'active' : ''}`} 
                            onClick={() => handleScroll('services')}
                        >
                            Services
                        </li>
                        <li 
                            className={`cursor-pointer text-white font-medium text-lg ${activeLink === 'testimonials' ? 'active' : ''}`} 
                            onClick={() => handleScroll('testimonials')}
                        >
                            Testimonials
                        </li>
                        <li 
                            className={`cursor-pointer text-white font-medium text-lg ${activeLink === 'contact' ? 'active' : ''}`} 
                            onClick={() => handleScroll('contact')}
                        >
                            Contact Us
                        </li>
                    </ul>
                    <RxHamburgerMenu onClick={() => setShowBar(!showBar)} className='cursor-pointer block md:hidden text-white text-4xl mt-5' />
                </div>
                {showBar && (
                    <ul className='block md:hidden py-6 space-y-7 mt-6 h-screen'>
                        <li 
                            className={`px-14 cursor-pointer text-white text-xl font-medium ${activeLink === 'home' ? 'active' : ''}`} 
                            onClick={() => handleScroll('home')}
                        >
                            Home
                        </li> 
                        <li 
                            className={`px-14 cursor-pointer text-white text-xl font-medium ${activeLink === 'services' ? 'active' : ''}`} 
                            onClick={() => handleScroll('services')}
                        >
                            Services
                        </li>
                        <li 
                            className={`px-14 cursor-pointer text-white text-xl font-medium ${activeLink === 'testimonials' ? 'active' : ''}`} 
                            onClick={() => handleScroll('testimonials')}
                        >
                            Testimonials
                        </li>
                        <li 
                            className={`px-14 cursor-pointer text-white text-xl font-medium ${activeLink === 'contact' ? 'active' : ''}`} 
                            onClick={() => handleScroll('contact')}
                        >
                            Contact Us
                        </li>
                        <div className="fixed bottom-10 mt-10 w-full flex justify-center space-x-10">
                            {navigation.social.map((item) => (
                                <a key={item.name} href={item.href} className="text-brand-gray hover:text-brand-orange transition-all delay-all ease-in-out">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </ul>
                )}
            </div>
        </header>
    );
};

export default Header;
