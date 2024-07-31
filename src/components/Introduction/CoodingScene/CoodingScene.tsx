import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useControls } from 'leva'
import { Avatar } from '../../Avatar/Avatar'
import { Office } from '../../Office/Office'
import { useRef } from 'react'
import { Mesh } from 'three'


export const CoodingScene = () => {

    const { animation } = useControls({
        animation: {
            value: "Typing",
            options: ["Typing", "Standing", "Falling"]
        }
    })
    const { viewport } = useThree()

    const isMobile = window.innerWidth < 768;
    const responsiveRatio = viewport.width / 12;
    const sceneScaleRatio = Math.max(0.5, Math.min(0.9 * responsiveRatio, 0.9))

    const avatarContaierOffice = useRef(null!)
    const avatar = useRef(null!)

    useFrame(() => {
        (avatarContaierOffice.current as Mesh).getWorldPosition((avatar.current as Mesh).position)
    })



    return (
        <>
            <ambientLight intensity={1} />
            <OrbitControls />
            <group ref={avatar} scale={[sceneScaleRatio, sceneScaleRatio, sceneScaleRatio]} rotation={[-3.141592653589793, 1.22, -3.141592653589793]}>
                <Avatar animation={animation} />
            </group>
            <group position={[isMobile ? 0 : 1.5, isMobile ? -viewport.height / 20 : 0, 3]} scale={[sceneScaleRatio, sceneScaleRatio, sceneScaleRatio]} rotation-y={-Math.PI / 4}>
                <Office />
                <group ref={avatarContaierOffice} position={[0.12, 1.17, -0.57]} rotation={[-Math.PI, 0.42, -Math.PI]}>
                </group>
            </group>
            <group position={[0, -3, -10]} scale={[2, 2, 2]}>
                <directionalLight intensity={0.4} position={[-5, 3, 5]} />
            </group>
        </>
    )
}
