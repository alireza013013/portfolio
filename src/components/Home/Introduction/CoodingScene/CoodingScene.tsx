import { useFrame, useThree } from '@react-three/fiber'
import Avatar from '../../Avatar/Avatar'
import { useRef, memo } from 'react'
import { Mesh } from 'three'


const CoodingScene = () => {

    const { viewport } = useThree()

    const isMobile = window.innerWidth < 768;
    const responsiveRatio = viewport.width / 12;
    const sceneScaleRatio = Math.max(0.5, Math.min(0.9 * responsiveRatio, 0.9))

    const avatar = useRef(null!)

    useFrame(() => {
    })


    return (
        <>
            <ambientLight intensity={1} />
            <group ref={avatar} scale={[sceneScaleRatio, sceneScaleRatio, sceneScaleRatio]} rotation={[-3.141592653589793, 1.22, -3.141592653589793]}>
                <Avatar />
            </group>
            <group position={[0, -3, -10]} scale={[2, 2, 2]}>
                <directionalLight intensity={0.4} position={[-5, 3, 5]} />
            </group>
        </>
    )
}


export default memo(CoodingScene)