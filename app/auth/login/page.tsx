"use client";

import Link from "next/link";
import Image from "next/image";

import { BiLogoFacebookCircle, BiLogoGoogle, BiLogoApple, BiCopyright } from "react-icons/bi";
import { useState } from "react";
import {useRouter } from "next/navigation";


const Login = () =>{
    let image = '/neo-img/unsplash.jpg';
    // let image = '/unsplash.jpg';
    
    // STATES
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    
    const router = useRouter();
    

    const loginHandler = async(e:any) =>{
        e.preventDefault();

        const loginBlob = {
            // "name": `${firstName} ${lastName}`,
            email,
            password
        }

        // LOGIN API FETCH CALL
        try {
            await fetch("https://yulavapi.onrender.com/api/v1/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(loginBlob)
            }).then(async (res)=>{
                const data = await res.json()

                console.log(data)
    
                if(data.success){
                    alert("login successful");
                    // router.push(
                    //     '/',
                    // )
                }
    
                if(data.success !== true){
                    alert(data.message);
                }
            })
        } catch (error: any) {
            console.log(error)
        }

    }

    return(
        <div className="login bg-white text-black min-h-screen">
            {/* MAIN */}
            <div className="h-screen flex justify-between items-center">
                {/* IMAGE */}
                <div className="form-imagery relative h-full w-4/6 hidden min-[600px]:flex">
                    <Image src={image} layout='fill' objectFit='cover' alt='Form image' />
                </div>

                {/* FORM */}
                <div className="auth-form flex flex-col items-center p-2 w-full min-[960px]:w-2/5">
                    <div className="form-login w-full">
                        <div className="logo w-2/4 mx-auto  h-14 relative">
                            <Image layout="fill" objectFit="contain" src="/logo1.png" alt="logo" />
                        </div>

                        {/* RESPONSE OUTPUT */}
                        {/* <div className="session-output px-5 mt-3 text-lg max-sm:text-sm grid place-items-center">
                            <h2 className='font-medium text-2xl max-sm:text-xl'>Your session expired</h2>
                            <p>Please sign in.</p>
                        </div> */}

                        <form onSubmit={loginHandler} className="p-5 max-sm:text-sm">
                            <hr className="bg-black mb-5" />                        
                            <h2 className="font-bold border-b-2 w-fit border-gray-800 text-gray-800 text-lg mx-auto uppercase mb-2">Login</h2>
                            {/* EMAIL */}
                            <div className="form-section flex flex-col gap-1 my-5">
                                <label className='font-semibold text-slate-600'>Email</label>
                                <input 
                                    className='p-2 shadow shadow-slate-500 rounded outline-none font-medium focus:border-b-2 focus:border-black focus:bg-slate-400/40' 
                                    type="email" placeholder='you@company.com'
                                    value={email}
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                />
                            </div>   

                            {/* PASSWORD */}
                            <div className="form-section flex flex-col gap-1 my-5">
                                <label className='font-semibold text-slate-600'>Password</label>
                                <input 
                                    className='p-2 shadow shadow-slate-500 rounded outline-none font-medium focus:border-b-2 focus:border-black focus:bg-slate-400/40' 
                                    type="password" placeholder='********'
                                    value={password}
                                    onChange={(e)=>{setPassword(e.target.value)}}
                                />
                            </div>
                            
                            {/* FORGOTTEN PASSWORD */}
                            <div className="form-section flex gap-2 mb-5">
                                <label className='font-semibold text-slate-600'><Link className='border-b-2 border-spacing-6 border-black/50' href={'/'}>Forgotten password?</Link></label>
                            </div>
                            
                            <div className="form-section flex gap-2 mt-5">
                                <input className='p-3 bg-blue-700 text-white rounded-md w-full cursor-pointer text-lg max-sm:text-sm font-medium' type="submit" name="" id="" value={'Sign In'} />
                            </div>
                            <div className="flex gap-2 my-2">
                                <h3>New to yulav? <Link href={'/auth/register'} className="text-purple-900">Create an account</Link></h3>
                            </div>
                        </form>
                    </div>

                    {/* OTHER OPTIONS */}
                    <div className="social-auth grid place-items-center">
                        <h2 className="mb-5">OR</h2>
                        <div className="social-option text-lg flex gap-4">
                            <Link href={"/"}>
                                <div className="social-btn py-1 px-5 shadow-sm shadow-black/40 rounded bg-slate-100">
                                    <BiLogoGoogle />
                                </div>
                            </Link>
                            <Link href={"/"}>
                                <div className="social-btn py-1 px-5 text-sky-700 shadow-sm shadow-black/40 rounded bg-slate-100">
                                    <BiLogoFacebookCircle />
                                </div>
                            </Link>
                            <Link href={"/"}>
                                <div className="social-btn py-1 px-5 text-black shadow-sm shadow-black/40 rounded bg-slate-100">
                                    <BiLogoApple />
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="copyRight flex item-center my-5 gap-1">
                        <BiCopyright />
                        <h3 className=" text-sm">2023 yulav.io | Powered by Yulav.io</h3>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Login;