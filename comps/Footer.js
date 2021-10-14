import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {useRouter} from 'next/router'


export default function Footer() {

    // const {register, handleSubmit, formState: {errors}, reset} = useForm();

    // const router = useRouter()

    // async function onSubmitForm(values) {
    //     let config = {
    //         method: 'post',
    //         url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         data: values,
    //     };

    //     try {
    //         const response = await axios(config);
    //         if(response.status == 200) {
    //             reset()
    //             router.push("/")
    //         }
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }
    
      return (
          <>
        <div className="container-fluid footer-container">
            <div className="row justify-content-center pl-md-5 pb-md-3 mx-md-5 pt-md-4">
                <div className="col-lg-9 col-12 text-center">
                    <h1 className="say-hello-h1 pb-5">
                        Let's create an <span className="footer-impression">impression</span> 
                    </h1>
                    <div className="row justify-content-md-around justify-content-center pb-4 pt-4 pt-lg-4 pb-lg-2 mt-lg-2 mt-3 phone-email-row">
                        <div className="col-lg-4 col-12 text-lg-left text-center pb-2 pb-md-0">
                            <Link href="mailto:ideas@potoo.studio" aria-label="email">
                                <a className="say-hello-a pb-lg-2">
                                    hello@potoo.studio
                                    <span className="bottom-line"></span>
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-1 col-4 col-md-5 text-lg-center text-md-right pt-4 pt-md-4  mt-md-1 pb-md-3 pt-lg-0">
                            <Link href="https://www.instagram.com/potoostudio/" aria-label="instagram">
                                <a  className="social-media-a">
                                    <Image
                                    src="/Instagram-icon.svg"
                                    width={35}
                                    height={35}
                                    alt="Instagram Icon"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-1 col-4 col-md-5 text-lg-center text-md-left pt-4 pt-md-4 mt-md-1 pb-md-3 pt-lg-0">
                            <Link href="https://dribbble.com/Potoo" aria-label="dribbble">
                                <a  className="social-media-a">
                                    <Image
                                    src="/Dribbble-icon.svg"
                                    width={35}
                                    height={35}
                                    alt="Dribbbkle Icon"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-12 text-lg-right pt-3 pt-md-0">
                            <Link href="tel:3202604416" aria-label="phone">
                                <a className="say-hello-a pb-lg-2">
                                    +1 320 260 4416
                                    <span className="bottom-line"></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid pl-lg-0 co-container pt-lg-5 mt-lg-2">
            <div className="row justify-content-md-start justify-content-center">
                <div className="col-lg-12 col-12">
                    <ul className="list co-list justify-content-center pl-md-5 pt-md-0 ml-md-0 pl-0">
                        <li className="item co-made-p item">
                            <p className="co-made">
                                Made in the high altitude of 
                            </p>
                        </li>
                        <li className="item co-made-icon item pl-lg-2 pl-1">
                            <Image
                            src='/CO-Logo.png'
                            width={25}
                            height={25}
                            alt="Colorado Made"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </>
      );
    }