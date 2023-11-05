"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import PageLinks from "../../components/PageLinks";

export default function ContactUs(){
    let image = '/neo-img/unsplash.jpg';
    // let image = '/unsplash.jpg';
    
    // STATES
    let [email, setEmail] = useState("");
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [message, setMessage] = useState("");
    let [phone, setPhone] = useState("");

    const reload = useRouter();



    const contactHandler = (e:any) =>{
        e.preventDefault();

        const contactBlob = {
            "name": `${firstName} ${lastName}`,
            email,
            message
        }

        fetch("https://yulavapi.onrender.com/api/v1/contact", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(contactBlob)
        }).then((res)=>{
            console.log(res);
            if(res.ok){
                alert("Mail Sent");
                reload.refresh();
            }
        })
    }

    return(
        <div className="contact-us bg-white text-black min-h-screen">
            <PageLinks />
            {/* HEADER */}
            <header className="home-header flex justify-between py-4 px-3 bg-white border-b-2">
                <div className="logo w-24 relative">
                    <Image layout="fill" objectFit="contain" src="/logo1.png" alt="logo" />
                </div>
                <div className="head-links flex">
                    <div className="link flex list-none gap-3">
                        <li className='active'>
                            <Link href='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                Degree
                            </Link>
                        </li>
                    </div>
                    <div className="profile-link"></div>
                </div>
            </header>

            {/* MAIN */}
            <div className="flex justify-around items-center">
                {/* FORM */}
                <div className="form-contact">
                    <div className="ti-tle px-5 mt-7 text-lg max-sm:text-sm">
                        <h2 className='font-medium text-3xl max-sm:text-xl'>Get in touch</h2>
                        <p>Our friendly team would love to hear from me.</p>
                    </div>
                    <form onSubmit={contactHandler} className="p-5 max-sm:text-sm">
                        {/* NAMES */}
                        <div className="names flex gap-3 max-[550px]:flex-col">
                            <div className="form-section flex flex-col gap-1">
                                <label className='font-semibold text-slate-600'>First name</label>
                                <input 
                                    name='firstName'
                                    className='p-2 shadow shadow-slate-500 rounded outline-none font-medium' 
                                    type="text" placeholder='First Name' 
                                    value={firstName}
                                    onChange={(e)=>{setFirstName(e.target.value)}}
                                />
                            </div>
                            <div className="form-section flex flex-col gap-1">
                                <label className='font-semibold text-slate-600'>Last name</label>
                                <input 
                                    name='lastName'
                                    className='p-2 shadow shadow-slate-500 rounded outline-none font-medium' 
                                    type="text" placeholder='Last Name' 
                                    value={lastName}
                                    onChange={(e)=>{setLastName(e.target.value)}}
                                />
                            </div>
                        </div>
                        
                        {/* EMAIL */}
                        <div className="form-section flex flex-col gap-1 my-5">
                            <label className='font-semibold text-slate-600'>Email</label>
                            <input 
                                name='email'
                                className='p-2 shadow shadow-slate-500 rounded outline-none font-medium' 
                                type="email" placeholder='you@company.com'
                                value={email}
                                onChange={(e)=>{setEmail(e.target.value)}}
                            />
                        </div>
                        
                        {/* PHONE NO. */}
                        <div className="form-section flex flex-col gap-1 my-5">
                            <label className='font-semibold text-slate-600'>Phone number</label>
                            <input 
                                className='p-2 shadow shadow-slate-500 rounded outline-none font-medium' 
                                type="number" 
                                placeholder='0801 234 5678'
                                value={phone}
                                onChange={(e)=>{setPhone(e.target.value)}}
                            />
                        </div>
                        
                        {/* MEESAGE */}
                        <div className="form-section flex flex-col gap-1 my-5">
                            <label className='font-semibold text-slate-600'>Message</label>
                            <textarea 
                                name='message'
                                className='p-2 shadow shadow-slate-500 rounded outline-none font-medium h-28 resize-none'
                                value={message}
                                onChange={(e)=>{setMessage(e.target.value)}}
                            ></textarea>
                        </div>
                        
                        {/* POLICY & BUTTON */}
                        <div className="form-section flex gap-2 my-5">
                            <input type="checkbox" name="" id="" />
                            <label className='font-semibold text-slate-600'>You agree to our <Link className='border-b-2 border-spacing-6 border-black/50' href={'/'}>privacy policy</Link></label>
                        </div>
                        
                        <div className="form-section flex gap-2 my-5">
                            <input className='p-3 bg-blue-700 text-white rounded-md w-full cursor-pointer text-lg max-sm:text-sm font-medium' type="submit" name="" id="" value={'Send message'} />
                        </div>
                    </form>
                </div>

                {/* IMAGE */}
                <div className="form-imagery relative h-[550px] w-1/3 hidden min-[1000px]:flex">
                    <Image src={image} layout='fill' objectFit='cover' alt='Form image' />
                </div>
            </div>
        </div>
    )
}