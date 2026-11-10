import { useRef } from "react";
import "./Projects.scss";
import rentHome from "../../assets/projects/rentHome.png";
import spgtel from "../../assets/projects/spgtel.png";
import herbal from "../../assets/projects/herbal.png";
import gamatrain from "../../assets/projects/gamatrain.jpg";
import carRacing from "../../assets/projects/carRacing.jpg";
import nova from "../../assets/projects/nova.jpg";
import portal from "../../assets/projects/portal.jpg";
import nightRoad from "../../assets/projects/nightRoad.jpg";
import playIcon from "../../assets/play-solid.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  id: string;
  imgSrc: string;
  name: string;
  description: string;
  url: string;
};

const webProjects: Project[] = [
  {
    id: "rentHome",
    imgSrc: rentHome,
    name: "Rent Home",
    description:
      "A real-estate platform for exploring homes available to rent or buy.",
    url: "https://drive.google.com/file/d/1dBw7oM07d2wWWP4Id6nuC_DqQoPXL4nz/view?usp=sharing",
  },
  {
    id: "herbal",
    imgSrc: herbal,
    name: "Sporting Goods Store",
    description:
      "A fast, SEO-focused e-commerce experience for discovering and purchasing sports products.",
    url: "https://drive.google.com/file/d/1PhNETcrTL81CPggsREkFBN2dxJmPagOp/view?usp=sharing",
  },
  {
    id: "spgtel",
    imgSrc: spgtel,
    name: "Sensor Monitoring",
    description:
      "A monitoring dashboard for registering sensors and presenting their data through tables and charts.",
    url: "https://drive.google.com/file/d/1-4Gn9HqEMI2oezHH4VV61EP2OAwxq56z/view",
  },
  {
    id: "gamatrain",
    imgSrc: gamatrain,
    name: "Gamatrain Platform",
    description:
      "A complete Nuxt 4 application with two dedicated panels and a full end-to-end product experience.",
    url: "https://gamatrain.com/",
  },
];

const motionProjects: Project[] = [
  {
    id: "carRacing",
    imgSrc: carRacing,
    name: "3D Car Racing",
    description:
      "An educational 3D racing game for children, built with Three.js.",
    url: "https://gamatrain.com/game/car-racing",
  },
  {
    id: "nova",
    imgSrc: nova,
    name: "Nova Landing Page",
    description:
      "A motion-rich landing page featuring complex, carefully sequenced GSAP animations.",
    url: "https://nova-landing-gsap.netlify.app",
  },
  {
    id: "portal",
    imgSrc: portal,
    name: "Three.js Portal",
    description:
      "A Blender-crafted 3D portal scene brought to the browser with Three.js.",
    url: "https://portal-threejs-v1.netlify.app/",
  },
  {
    id: "nightRoad",
    imgSrc: nightRoad,
    name: "Night Road",
    description:
      "A visual Three.js experiment recreating the atmosphere and lighting of a highway at night.",
    url: "https://threejs-night-road.netlify.app/#debug",
  },
];

export const CardProject = ({
  imgSrc,
  name,
  description,
  id,
  url,
}: Project) => {
  return (
    <article className="card-project" id={id}>
      <img
        loading="lazy"
        className="background"
        src={imgSrc}
        alt={`${name} project preview`}
      />
      <div className="info-div">
        <h4 className="title">{name}</h4>
        <p className="des">{description}</p>
      </div>
      <a
        className="circle-play"
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${name} project`}
      >
        <img className="play" src={playIcon} alt="" />
      </a>
    </article>
  );
};

const ProjectGroup = ({
  id,
  eyebrow,
  title,
  description,
  projects,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  projects: Project[];
}) => (
  <section className="project-group" id={id}>
    <div className="group-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <div className="contain-cards">
      {projects.map((project) => (
        <CardProject key={project.id} {...project} />
      ))}
    </div>
  </section>
);

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(["#projects-title", "#projects-description"], {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.25,
        ease: "back.out(3)",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.utils.toArray<HTMLElement>(".project-group").forEach((group) => {
        gsap.from(group.querySelectorAll(".group-heading, .card-project"), {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.12,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: group,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: projectsRef },
  );

  return (
    <div className="main-projects" id="project" ref={projectsRef}>
      <div className="title-des-div">
        <span className="title" id="projects-title">
          Projects
        </span>
        <span className="subtitle" id="projects-description">
          Explore a selection of production web applications and immersive
          visual experiments that reflect my approach to performance,
          interaction, and creative development.
        </span>
      </div>

      <ProjectGroup
        id="web-projects"
        eyebrow="Web development"
        title="Web Applications"
        description="Complete digital products focused on usability, performance, and real-world functionality."
        projects={webProjects}
      />

      <ProjectGroup
        id="motion-projects"
        eyebrow="Creative development"
        title="3D & Motion Projects"
        description="Interactive Three.js scenes and animation-led experiences built to explore movement, light, and depth on the web."
        projects={motionProjects}
      />
    </div>
  );
};

export default Projects;
