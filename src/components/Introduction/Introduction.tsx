import { CoodingScene } from './CoodingScene/CoodingScene'
import './Introduction.scss'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei';
import { Suspense } from 'react';
import gsap from 'gsap';
import { useGSAP, } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Introduction = (props: {
    isOpen: boolean
}) => {
    const contaierTexts = useRef(null!)

    useGSAP(
        () => {
            gsap.from(['#hello', '#name', '#job', '#button'], {
                opacity: 0,
                y: "+=50",
                duration: 1,
                stagger: 0.5,
                ease: "back.out(5)",
                scrollTrigger: {
                    trigger: "#hello",
                    start: "top bottom",
                    end: "=-50 top",
                    toggleActions: "play reverse restart none",
                }
            })
        },
        { scope: contaierTexts }
    );

    return (
        <div className="main-intro" id='home'>
            <div className='text-intro-div' ref={contaierTexts}>
                <span id="hello">HELLO,</span>
                <span id="name">I'm  <span className='name'>Alireza</span></span>
                <span id="job">Front End Developer</span>
                <button className='hire' id="button"><a href='#contact'>Hire Me</a></button>
            </div>
            <Canvas id='canvas' resize={{ scroll: false }} shadows camera={{ position: [0, 3, 10.5], fov: 42 }}>
                <Suspense>
                    <CoodingScene isOpen={props.isOpen} />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}

export default Introduction;