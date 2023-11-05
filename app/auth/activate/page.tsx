"use client";

import Link from "next/link";
import Image from "next/image";

import { BiLogoFacebookCircle, BiLogoGoogle, BiLogoApple, BiCopyright } from "react-icons/bi";
import { useState } from "react";
import { useRouter , useSearchParams } from "next/navigation";



const Activate = () =>{
    let image = '/neo-img/unsplash.jpg';
    // let image = '/unsplash.jpg';

    // STATES
    let [code, setCode] = useState("");

    let searchParams = useSearchParams();
    const router = useRouter();

    let activationToken = searchParams.get('atk');
    
    const activateHandler = async(e:any) =>{
        e.preventDefault();

        const activateBlob = {
            "activation_code": code,
            "activation_token": activationToken
        }

        // ACCOUNT ACTIVATION API FETCH CALL
        try {
            await fetch("https://yulavapi.onrender.com/api/v1/activate-user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(activateBlob)
            }).then(async (res)=>{
                const data = await res.json()
    
                if(data.success){
                    alert("activation successful");
                    router.replace(
                        '/auth/login',
                    )
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
        <div className="activation bg-white text-black min-h-screen">
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

                        <form onSubmit={activateHandler} className="p-5 max-sm:text-sm">
                            <hr className="bg-black mb-5" />                        
                            {/* EMAIL */}
                            <div className="form-section flex flex-col gap-1 my-5">
                                <label className='font-semibold text-slate-600'>Enter the activation code:</label>
                                <input
                                    className='p-2 shadow shadow-slate-500 rounded outline-none font-medium focus:border-b-2 focus:border-black focus:bg-slate-400/40' 
                                    type="number"
                                    value={code}
                                    onChange={(e)=>{setCode(e.target.value)}}
                                />
                            </div>   

                            <div className="form-section flex gap-2 mt-5">
                                <input 
                                    className='p-3 bg-blue-700 text-white 
                                    rounded-md w-full cursor-pointer text-lg max-sm:text-sm font-medium' 
                                    type="submit" name="" id="" value={'Submit'} />
                            </div>
                        </form>
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

export default Activate;