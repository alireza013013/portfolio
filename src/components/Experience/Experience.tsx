import gsap from 'gsap';
import { useGSAP, } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './Experience.scss'
import nitc from "../../assets/nitc.jpg"
import payesh from "../../assets/payesh.jpg"

gsap.registerPlugin(ScrollTrigger);

export const Experience = () => {
    useGSAP(
        () => {
            gsap.to("#guid", {
                height: '90%',
                duration: 5,
                scrollTrigger: {
                    trigger: "#experience",
                    start: "top 60%",
                    end: "center center",
                    scrub: 1,
                }
            })
            gsap.from("#nitc", {
                opacity: 0,
                y: 100,
                duration: 5,
                scrollTrigger: {
                    trigger: "#experience",
                    start: "top 90%",
                    end: "center center",
                    scrub: 1,
                }
            })
            gsap.from("#payesh", {
                opacity: 0,
                y: 100,
                duration: 5,
                scrollTrigger: {
                    trigger: "#experience",
                    start: "top center",
                    end: "center center",
                    scrub: 1,
                }
            })

        },
    );


    return (
        <div className="main-experience" id="experience">
            <div className='guid-line' id='guid'>
            </div>
            <div className='card-experience nitc' id="nitc">
                <div className='circle'>
                </div>
                <div className='date-logo'>
                    <img src={nitc} alt="NITC LOGO" />
                    <span className='date'>Oct 2020 - Sep 2023</span>
                </div>
                <span className='position'>Frontend Developer NITC</span>
                <span className='desc'>Collaborated with design, product, and back-end teams to create 10+ international fully responsive super web-application products with different panels.</span>
            </div>

            <div className='card-experience payesh' id='payesh'>
                <div className='circle'>
                </div>
                <div className='date-logo'>
                    <img src={payesh} alt="PAYESH LOGO" />
                    <span className='date'>Sept 2022 - May 2024</span>
                </div>
                <span className='position'>Full Stack Developer Payesh Ghodrat</span>
                <span className='desc'>Development of a project to manage mechanical sensors including admin panel and user panel, and a SPA compatible with 100% device sizes.</span>
            </div>
        </div>
    )
}