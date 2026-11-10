import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import "./Experience.scss";

import nitc from "../../assets/nitc.jpg";
import payesh from "../../assets/payesh.jpg";
import gamatrain from "../../assets/gamatrain.png";
import karlancer from "../../assets/karlancer.png";
import ponisha from "../../assets/ponisha.svg";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: "gama",
    image: gamatrain,
    alt: "GAMATRAIN LOGO",
    date: "Apr 2025 - Present",
    position: "Frontend & Three.js Developer",
    desc: "Contributed to migrating a production project from Nuxt 2 to Nuxt 4, improving maintainability, scalability, and compatibility with the modern Nuxt ecosystem.",
    start: "top 50%",
    end: "center end",
    side: "left",
    link: "https://gamatrain.com/",
  },
  {
    id: "freelancer",
    image: ponisha,
    secondImage: karlancer,
    alt: "Freelancer Company LOGO",
    date: "Aug 2024 - Apr 2025",
    position: "Frontend Developer(Freelancer)",
    desc: "Contributed to migrating a production project from Nuxt 2 to Nuxt 4, improving maintainability, scalability, and compatibility with the modern Nuxt ecosystem.",
    start: "top 50%",
    end: "center end",
    side: "right",
    link: "https://ponisha.ir/profile/alireza013013",
    linkSecond: "https://karlancer.com/profile/703078",
  },
  {
    id: "payesh",
    image: payesh,
    alt: "PAYESH LOGO",
    date: "Sept 2022 - May 2024",
    position: "Full Stack Developer Payesh Ghodrat",
    desc: "Development of a project to manage mechanical sensors including admin panel and user panel, and a SPA compatible with 100% device sizes.",
    start: "top center",
    end: "center center",
    side: "left",
    link: "https://www.samaneh-payesh.com/",
  },
  {
    id: "nitc",
    image: nitc,
    alt: "NITC LOGO",
    date: "Oct 2020 - Sep 2023",
    position: "Frontend Developer NITC",
    desc: "Collaborated with design, product, and back-end teams to create 10+ international fully responsive super web-application products with different panels.",
    start: "top 90%",
    end: "center center",
    side: "right",
    link: "https://topwebdesign.net/en",
  },
];

const Experience = () => {
  useGSAP(() => {
    gsap.to("#guid", {
      height: "90%",
      duration: 5,
      scrollTrigger: {
        trigger: "#experience",
        start: "top 60%",
        end: "center center",
        scrub: 1,
      },
    });

    experiences.forEach((item) => {
      gsap.from(`#${item.id}`, {
        opacity: 0,
        y: 100,
        duration: 5,
        scrollTrigger: {
          trigger: `#${item.id}`,
          start: "top 85%",
          end: "top 45%",
          scrub: 1,
        },
      });
    });
  });

  return (
    <div className="main-experience" id="experience">
      <div className="guid-line" id="guid" />

      {experiences.map((item) => (
        <a
          className={`card-experience ${item.id}`}
          id={item.id}
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="circle" />

          <div className="date-logo">
            <div className="images-div">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.image} alt={item.alt} />
              </a>

              {item.secondImage && (
                <a
                  href={item.linkSecond}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={item.secondImage} alt={item.alt} />
                </a>
              )}
            </div>
            <span className="date">{item.date}</span>
          </div>

          <span className="position">{item.position}</span>

          <span className="desc">{item.desc}</span>
        </a>
      ))}
    </div>
  );
};

export default Experience;
