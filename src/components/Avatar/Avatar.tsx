import React, { useEffect, useRef } from 'react'
import { useGraph } from '@react-three/fiber'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { Mesh } from 'three'

// interface propAvatar {
//   animation: string
// }


export const Avatar = (props: any) => {
  const { scene } = useGLTF('models/Avatar.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)

  const group = useRef<Mesh>(null!)
  const { animations: typingAnimation } = useFBX("animations/Typing.fbx")
  const { animations: standingAnimation } = useFBX("animations/Standing.fbx")
  const { animations: fallingAnimation } = useFBX("animations/Falling.fbx")

  typingAnimation[0].name = "Typing"
  standingAnimation[0].name = "Standing"
  fallingAnimation[0].name = "Falling"

  const { actions } = useAnimations([typingAnimation[0], standingAnimation[0], fallingAnimation[0]], group)

  useEffect(() => {
    actions[props.animation]?.reset().fadeIn(0.5).play()

    return () => {
      actions[props.animation]?.reset().fadeOut(0.5)
    }
  }, [props.animation])

  // useFrame((state) => {
  //   group.current?.getObjectByName("Head")?.lookAt(state.camera.position);
  // })

  return (
    <group {...props} ref={group} dispose={null} position-y={-1}>
      <group>
        <primitive object={nodes.Hips} />
        <skinnedMesh geometry={(nodes.Wolf3D_Hair as any).geometry} material={materials.Wolf3D_Hair} skeleton={(nodes.Wolf3D_Hair as any).skeleton} />
        <skinnedMesh geometry={(nodes.Wolf3D_Body as any).geometry} material={materials.Wolf3D_Body} skeleton={(nodes.Wolf3D_Body as any).skeleton} />
        <skinnedMesh geometry={(nodes.Wolf3D_Outfit_Bottom as any).geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={(nodes.Wolf3D_Outfit_Bottom as any).skeleton} />
        <skinnedMesh geometry={(nodes.Wolf3D_Outfit_Footwear as any).geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={(nodes.Wolf3D_Outfit_Footwear as any).skeleton} />
        <skinnedMesh geometry={(nodes.Wolf3D_Outfit_Top as any).geometry} material={materials.Wolf3D_Outfit_Top} skeleton={(nodes.Wolf3D_Outfit_Top as any).skeleton} />
        <skinnedMesh name="EyeLeft" geometry={(nodes.EyeLeft as any).geometry} material={materials.Wolf3D_Eye} skeleton={(nodes.EyeLeft as any).skeleton} morphTargetDictionary={(nodes.EyeLeft as any).morphTargetDictionary} morphTargetInfluences={(nodes.EyeLeft as any).morphTargetInfluences} />
        <skinnedMesh name="EyeRight" geometry={(nodes.EyeRight as any).geometry} material={materials.Wolf3D_Eye} skeleton={(nodes.EyeRight as any).skeleton} morphTargetDictionary={(nodes.EyeRight as any).morphTargetDictionary} morphTargetInfluences={(nodes.EyeRight as any).morphTargetInfluences} />
        <skinnedMesh name="Wolf3D_Head" geometry={(nodes.Wolf3D_Head as any).geometry} material={materials.Wolf3D_Skin} skeleton={(nodes.Wolf3D_Head as any).skeleton} morphTargetDictionary={(nodes.Wolf3D_Head as any).morphTargetDictionary} morphTargetInfluences={(nodes.Wolf3D_Head as any).morphTargetInfluences} />
        <skinnedMesh name="Wolf3D_Teeth" geometry={(nodes.Wolf3D_Teeth as any).geometry} material={materials.Wolf3D_Teeth} skeleton={(nodes.Wolf3D_Teeth as any).skeleton} morphTargetDictionary={(nodes.Wolf3D_Teeth as any).morphTargetDictionary} morphTargetInfluences={(nodes.Wolf3D_Teeth as any).morphTargetInfluences} />
      </group>
    </group>
  )
}

useGLTF.preload('models/Avatar.glb')
