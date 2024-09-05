import './Projects.scss'
import rentHome from "../../assets/projects/rentHome.png"
import spgtel from "../../assets/projects/spgtel.png"
import herbal from "../../assets/projects/herbal.png"
import playIcon from "../../assets/play-solid.svg"
import gsap from 'gsap';
import { useGSAP, } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const CardProject = (props: {
    imgSrc: string,
    name: string,
    description: string,
    id: string,
    video: string
}) => {
    return (
        <div className='card-project' id={props.id}>
            <img loading='lazy' className='background' src={props.imgSrc} alt="Rent Home" />
            <div className='info-div'>
                <span className='title'>{props.name}</span>
                <span className='des'>{props.description}</span>
            </div>
            <button className='circle-play'>
                <img className='play' src={playIcon} alt="Play" />
                <a href={props.video} target='_blank'></a>
            </button>
        </div>
    )
}



const Projects = () => {
    useGSAP(
        () => {
            gsap.from(['#title', '#description'], {
                opacity: 0,
                y: "+=50",
                duration: 1,
                stagger: 0.5,
                ease: "back.out(5)",
                scrollTrigger: {
                    trigger: "#project",
                    start: "+=100 bottom",
                    end: "5% top",
                    toggleActions: "play reverse restart reverse",
                }
            })

            gsap.from(['#rentHome', '#herbal', "#spgtel"], {
                opacity: 0,
                y: "+=50",
                duration: 1,
                stagger: 0.5,
                ease: "back.out(2)",
                scrollTrigger: {
                    trigger: "#contain-cards",
                    start: "+=100 bottom",
                    end: "center top",
                    toggleActions: "play reverse restart reverse",
                }
            })
        },
    );
    return (
        <div className='main-projects' id='project'>
            <div className='title-des-div'>
                <span className='title' id='title'>Projects</span>
                <span className='subtitle' id='description'>In this section, you can explore the projects I've completed so far. Each project tells a story—from the challenges I've faced to the creative solutions I've implemented. I hope these projects reflect my skills and passion for programming.</span>
            </div>
            <div className='contain-cards' id='contain-cards'>
                <CardProject
                    id='rentHome'
                    imgSrc={rentHome}
                    name='Rent Home'
                    description='The goal of this project is to display houses and provide the option to rent or buy them.'
                    video='https://drive.google.com/file/d/1dBw7oM07d2wWWP4Id6nuC_DqQoPXL4nz/view?usp=sharing'
                />
                <CardProject
                    id='herbal'
                    imgSrc={herbal}
                    name='Sporting goods store'
                    description='This was a store project where sports products were sold. In this project, in addition to speed, SEO was also very important, and both aspects were successfully achieved.'
                    video='https://drive.google.com/file/d/1PhNETcrTL81CPggsREkFBN2dxJmPagOp/view?usp=sharing'
                />
                <CardProject
                    id='spgtel'
                    imgSrc={spgtel}
                    name='Sensor Monitoring'
                    description='The goal of the project was to register sensors within the system, collect their data, and display it in various tables and charts. '
                    video='https://drive.google.com/file/d/1-4Gn9HqEMI2oezHH4VV61EP2OAwxq56z/view'
                />
            </div>

        </div>
    )
}

export default Projects;