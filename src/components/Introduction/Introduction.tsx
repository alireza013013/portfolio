import { CoodingScene } from './CoodingScene/CoodingScene'
import './Introduction.scss'
import { Canvas } from '@react-three/fiber'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export const Introduction = () => {
    const contaierTexts = useRef(null!)

    useGSAP(
        () => {
            gsap.from(['#hello', '#name', '#job', '#button'], {
                opacity: 0,
                y: "+=50",
                duration: 1,
                stagger: 0.5,
            })
        },
        { scope: contaierTexts }
    );


    return (
        <div className="main-intro">
            <div className='text-intro-div' ref={contaierTexts}>
                <span id="hello">HELLO,</span>
                <span id="name">I'm  <span className='name'>Alireza</span></span>
                <span id="job">Front End Developer</span>
                <button id="button">Hire Me</button>
            </div>
            <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
                <CoodingScene />
            </Canvas>
        </div>
    )
}