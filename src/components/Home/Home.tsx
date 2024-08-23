import './Home.scss'
import { Navbar } from '../../components/Navbar/Navbar'
import { Introduction } from '../../components/Introduction/Introduction'
import { Experience } from '../../components/Experience/Experience'
import { Skills } from '../../components/Skills/Skills'
import { Projects } from '../../components/Projects/Projects'
import { ContactUs } from '../../components/ContactUs/ContactUs'
import { useState } from 'react'
import menu from "../../assets/menu.svg"

export const Home = () => {
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
                    <Introduction isOpen={openedNav} />
                    <Experience />
                    <Skills />
                    <Projects />
                    <ContactUs />
                </div>
            </div>


        </>
    )
}

