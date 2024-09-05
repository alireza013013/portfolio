import './Home.scss'
import { Navbar } from '../../components/Navbar/Navbar'
// import { Introduction } from '../../components/Introduction/Introduction'
// import { Experience } from '../../components/Experience/Experience'
// import { Skills } from '../../components/Skills/Skills'
// import { Projects } from '../../components/Projects/Projects'
// import { ContactUs } from '../../components/ContactUs/ContactUs'
import { useState } from 'react'
import menu from "../../assets/menu.svg"
import React from 'react';

const Skills = React.lazy(() => import('../../components/Skills/Skills'));
const Introduction = React.lazy(() => import('../../components/Introduction/Introduction'));
const Projects = React.lazy(() => import('../../components/Projects/Projects'));
const Experience = React.lazy(() => import('../../components/Experience/Experience'));
const ContactUs = React.lazy(() => import('../../components/ContactUs/ContactUs'));


const Home = (props: {
    loaded: boolean
}) => {
    const [openedNav, setOpenedNav] = useState(false)

    return (
        <>
            <div className='main'>
                <div className='container'>
                    {
                        openedNav && <Navbar isOpen={openedNav} closeMenu={() => setOpenedNav(false)} />
                    }
                    <button onClick={() => setOpenedNav(true)} className='menu-button'>
                        <img src={menu} alt="Menu" />
                    </button>
                    {
                        props.loaded && <Introduction isOpen={openedNav} />
                    }
                    <Experience />
                    {
                        props.loaded && <Skills />
                    }
                    <Projects />
                    <ContactUs />
                </div>
            </div>


        </>
    )
}

export default Home;
