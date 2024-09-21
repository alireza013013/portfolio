import './Skills.scss'
import { technologies } from '../../constants'


const Ball = ({ icon, color, randomDelay }: { icon: string, color: string, randomDelay: number }) => {
    return (
        <div className="wave-container">
            <div className="wave" style={{
                backgroundColor: color,
                animationDelay: randomDelay + "s"
            }}></div>
            <div className="wave" style={{
                backgroundColor: color,
                animationDelay: randomDelay + 0.5 + "s"
            }}></div>
            <div className="wave" style={{
                backgroundColor: color,
                animationDelay: randomDelay + 1 + "s"
            }}></div>
            <img src={icon} alt="icon skill" />
        </div>
    );
};


const Skills = () => {
    return (
        <div className="main-skills" id='skills'>
            {technologies.map((technology) => (
                <div className='ball-container' key={technology.name} id={technology.name}>
                    <Ball icon={technology.icon} color={technology.color} randomDelay={Math.random()} />
                </div>
            ))}
        </div>
    )
}

export default Skills;