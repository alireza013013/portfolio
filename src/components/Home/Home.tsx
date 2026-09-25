import './Home.scss'
import { Navbar } from '../../components/Navbar/Navbar'
import { useEffect, useState } from 'react'
import menu from "../../assets/menu.svg"
import github from "../../assets/github.svg"
import linkedin from "../../assets/linkedin.svg"
import youtube from "../../assets/youtube.svg"
import React from 'react';
import { useLocation } from 'react-router-dom';

const Skills = React.lazy(() => import('../../components/Skills/Skills'));
const Projects = React.lazy(() => import('../../components/Projects/Projects'));
const Experience = React.lazy(() => import('../../components/Experience/Experience'));
const ContactUs = React.lazy(() => import('../../components/ContactUs/ContactUs'));
import Introduction from '../../components/Introduction/Introduction';
import { Loading } from '../Loading/Loading';


const Home = () => {
    const [openedNav, setOpenedNav] = useState(false)
    const [loaded, setLoaded] = useState(false)

    const location = useLocation();

    useEffect(() => {
        if (loaded) {
            if (location.hash.length > 0) {
                let id = location.hash.split("#")[1]
                let element = document.getElementById(id)
                element?.scrollIntoView({ behavior: "smooth" })
            }
        }
    }, [loaded])

    return (
        <>
            {
                loaded ? <div className='main'>
                    <div className='container'>
                        {
                            openedNav && <Navbar isOpen={openedNav} closeMenu={() => setOpenedNav(false)} />
                        }
                        <button onClick={() => setOpenedNav(true)} className='menu-button'>
                            <img src={menu} alt="Menu" />
                        </button>
                        <div className='container-link'>
                            <a href="https://github.com/alireza013013">
                                <img src={github} alt="github" />
                            </a>
                            <a href="https://www.linkedin.com/in/alireza-abdollahi-8869911a8/">
                                <img src={linkedin} alt="linkedin" />
                            </a>
                            <a href="https://www.youtube.com/@ALittleDeeper">
                                <img src={youtube} alt="youtube" />
                            </a>
                        </div>
                        <Introduction />
                        <Experience />
                        <Skills />
                        <Projects />
                        <ContactUs />
                    </div>
                </div> : <Loading loaded={loaded} setLoaded={() => {
                    setTimeout(() => {
                        setLoaded(true)
                    }, 2000);
                }} />
            }
        </>
    )
}

export default Home;
