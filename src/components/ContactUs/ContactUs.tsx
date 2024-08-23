import './ContactUs.scss'
import gsap from 'gsap';
import { useGSAP, } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useState } from 'react';
gsap.registerPlugin(ScrollTrigger);
import emailjs from '@emailjs/browser';
import loading from "../../assets/Spinner.svg"

export const ContactUs = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [showFail, setShowFail] = useState(false)
    const serviceId = "service_2n6q4cm"
    const templateId = "template_jhfda12"
    const publicKey = "MT7allLrE7NHTMkkI"



    useGSAP(
        () => {
            gsap.from(['#form'], {
                opacity: 0,
                y: "+=50",
                duration: 1,
                stagger: 0.5,
                ease: "back.out(5)",
                scrollTrigger: {
                    trigger: "#form",
                    start: "+=200 bottom",
                    toggleActions: "play reverse restart reverse",
                }
            })
        },
    );

    useGSAP(
        () => {
            gsap.from(['#send', "#loading"], {
                opacity: 0,
                x: "+=30",
                duration: 1,
                ease: "back.out(1)",
            })
        }, {
        dependencies: [isLoading]
    }
    );

    useGSAP(
        () => {
            gsap.from(["#success", "#fail"], {
                opacity: 0,
                x: "+=30",
                duration: 1,
                ease: "back.out(1)",
            })
        }, {
        dependencies: [showSuccess, showFail]
    }
    );


    const sendEmail = () => {
        setIsLoading(true)
        const templateParams = {
            from_name: name,
            to_name: "Alireza Abdollahi",
            from_email: email,
            message: message,
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                setShowSuccess(true)
                setIsLoading(false)
                setName('')
                setEmail('')
                setMessage('')
                setTimeout(() => {
                    setShowSuccess(false)
                }, 5000);
            }).catch((error) => {
                setShowFail(true)
                setIsLoading(false)
                setName('')
                setEmail('')
                setMessage('')
                setTimeout(() => {
                    setShowFail(false)
                }, 5000);
            })
    }

    return (
        <div className="main-contact" id='contact'>
            <div className='container-contact' id="form">
                <div className='form-div'>
                    <span className='title'>Contact Us</span>
                    <div className='contain-input'>
                        <span className='input-title'>Name</span>
                        <input value={name} onChange={event => {
                            setName(event.target.value);
                        }} className='inputs' type="text" />
                    </div>

                    <div className='contain-input'>
                        <span className='input-title'>Email</span>
                        <input value={email} onChange={event => {
                            setEmail(event.target.value);
                        }} className='inputs' type="email" />
                    </div>

                    <div className='contain-input'>
                        <span className='input-title'>Message</span>
                        <textarea value={message} onChange={event => {
                            setMessage(event.target.value);
                        }}></textarea>
                    </div>

                    {
                        showSuccess && <span id="success" className='success'>Your Message Send Successfully.</span>}
                    {
                        showFail && <span id="fail" className='error'>Please Try Again Later.</span>}

                    <button onClick={sendEmail} className='send' id="button">
                        {
                            isLoading ? <img id="loading" className='loading' src={loading} alt="Loading" /> : <span id="send">Send</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}