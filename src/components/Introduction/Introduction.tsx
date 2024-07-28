import './Introduction.scss'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Avatar } from '../Avatar/Avatar'
import { useControls } from 'leva'

export const Introduction = () => {

    const { animation } = useControls({
        animation: {
            value: "Typing",
            options: ["Typing", "Standing", "Falling"]
        }
    })



    return (
        <div className="main-intro">
            <div className='text-intro-div'>
                <span>HELLO,</span>
                <span>I'm Alireza</span>
                <span>Front End Developer</span>
            </div>
            <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
                <ambientLight intensity={1} />
                <directionalLight intensity={2} position={[-2, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />

                <OrbitControls />
                <Avatar animation={animation} />



            </Canvas>

        </div>
    )
}