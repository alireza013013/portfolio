import './Introduction.scss'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Avatar } from '../Avatar/Avatar'
import { useControls } from 'leva'
import { Office } from '../Office/Office'

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
            <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
                <ambientLight intensity={1} />
                {/* <directionalLight intensity={2} position={[-2, 5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} /> */}

                <OrbitControls />

                <group position={[1.5, 0, 3]} scale={[0.9, 0.9, 0.9]} rotation-y={-Math.PI / 4}>
                    <Office />
                    <group position={[0.12, 1.17, -0.57]} rotation={[-Math.PI, 0.42, -Math.PI]}>
                        <Avatar animation={animation} />
                    </group>
                </group>
                {/* <group position={[0, -3, -10]} scale={[2, 2, 2]}>
                    <directionalLight intensity={0.4} position={[-5, 3, 5]} />
                    <Avatar animation={animation} />
                </group> */}




            </Canvas>

        </div>
    )
}