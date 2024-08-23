import './Navbar.scss'
import close from "../../assets/close.svg"
import gsap from 'gsap';
import { useGSAP, } from '@gsap/react';

export const Navbar = (props: {
    closeMenu: () => void,
    isOpen: boolean
}) => {

    const tl = gsap.timeline();
    useGSAP(
        () => {
            tl.from(['#menu'], {
                x: "+=240",
                duration: 0.25,
                ease: "sine.out",
            }).from(["#nav-home", "#nav-exp", "#nav-skill", "#nav-project", "#nav-contact"], {
                x: "+=50",
                opacity: 0,
                duration: 0.25,
                stagger: 0.25,
                ease: "sine.out",
            })
        },
    );

    const handleClose = () => {
        tl.reverse().eventCallback('onReverseComplete', () => {
            props.closeMenu()
        })
    }

    return (
        <div className='header'>
            <div className='menu' id="menu">
                <div className='close-button' onClick={handleClose}>
                    <img src={close} alt="Close" />
                </div>

                <div className='menu-item'>
                    <a onClick={handleClose} className='item' id='nav-home' href={"#home"}>Home</a>
                    <a onClick={handleClose} className='item' id='nav-exp' href={"#experience"}>Experience</a>
                    <a onClick={handleClose} className='item' id='nav-skill' href={"#skills"}>Skills</a>
                    <a onClick={handleClose} className='item' id='nav-project' href={"#project"}>Project</a>
                    <a onClick={handleClose} className='item' id='nav-contact' href={"#contact"}>Contact Us</a>
                </div>
            </div>
        </div>
    )
}