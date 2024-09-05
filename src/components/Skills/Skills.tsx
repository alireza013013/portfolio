import './Skills.scss'
import { technologies } from '../../constants'
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';

const Ball = (props: {
    imgUrl: string
}) => {
    const [decal] = useTexture([props.imgUrl]);
    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={decal}
                />
            </mesh>
        </Float>
    );
};


const BallCanvas = ({ icon }: { icon: string }) => {
    return (
        <Canvas
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense>
                <OrbitControls enableZoom={false} />
                <Ball imgUrl={icon} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};


const Skills = () => {
    return (
        <div className="main-skills" id='skills'>
            {technologies.map((technology) => (
                <div className='ball-container' key={technology.name} id={technology.name}>
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}
        </div>
    )
}

export default Skills;