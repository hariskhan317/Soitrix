import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaBuilding } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(name, email, phone, message)

        const templateParams = {
            from_name: name,
            reply_to: email,
            phone: phone,
            message: message,
        };

        // Replace with your EmailJS service ID and template ID
        emailjs.send('service_hf0vot8', 'template_au5nwet', templateParams, 'IJvEmlbmRvFKVA-eW')
        .then((response) => {
            console.log('Email sent:', response.status, response.text); 
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            return toast.success('Message sent successfully!');
        }, (error) => {
            console.error('Error sending email:', error); 
            return toast.error('Failed to send message. Please try again later.');
        });
    }
    return (
        <div id="contact" className="relative isolate bg-brand-black 2xl:max-w-[100rem] mx-auto">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48 ">
                    <div className="text-left mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden  lg:w-1/2">
                            <svg className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true" >
                                <defs>
                                    <pattern id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2" width={200} height={200} x="100%" y={-1} patternUnits="userSpaceOnUse">
                                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                                    </pattern>
                                </defs>
                                <svg x="100%" y={-1} className="overflow-visible fill-gray-800/20">
                                    <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                                </svg>
                                <rect width="100%" height="100%" strokeWidth={0} fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" />
                            </svg> 
                        </div>
                        <h2 className="text-3xl font-bold tracking-tight text-white">Get in touch</h2>
                        <p className="mt-5 text-lg text-brand-gray">We leverage the forefront of technological advancements to craft cutting-edge digital solutions tailored to meet the intricate demands of modern businesses.</p> 
                        <div>
                            <ul className="space-y-6 mt-10">
                                <li className="cursor-pointer flex gap-4 text-left text-brand-gray text-lg hover:text-brand-orange transition-all delay-all ease-in-out">
                                    <FaBuilding className="mt-0.5 text-2xl" />
                                    <p>
                                        Staten Island,
                                        New York, NY 10314
                                    </p>
                                </li>
                                <li className="cursor-pointer flex gap-4 text-left text-brand-gray text-lg hover:text-brand-orange transition-all delay-all ease-in-out">
                                    <LuMail className="mt-0.5 text-2xl"  />
                                    <a className="" href="mailto:hello@example.com">
                                    hello@example.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="px-6 lg:pb-24 lg:pt-20 lg:px-8 lg:py-48">
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div className="grid grid-cols-1 gap-y-6">
                            {/* name */}
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white"> Full Name</label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        onChange={(e) => setName(e.target.value)}    
                                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* email */}
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        onChange={(e) => setEmail(e.target.value)}   
                                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* phone */}
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
                                    Phone number
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="tel"
                                        name="phone-number"
                                        id="phone"
                                        autoComplete="tel"
                                        onChange={(e) => setPhone(e.target.value)}   
                                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* message */}
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        onChange={(e) => setMessage(e.target.value)}   
                                        className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-center lg:justify-start">
                            <button type="submit" className="rounded-md bg-brand-orange border-2 border-brand-orange px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-transparent hover:text-brand-orange transition-all delay-all ease-in-out">
                                Send message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact;