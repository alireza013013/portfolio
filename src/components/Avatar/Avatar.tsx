import React, { useEffect, useRef, useState } from 'react'
import { useGraph } from '@react-three/fiber'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { Mesh } from 'three'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


export const Avatar = (props: any) => {
  const { scene } = useGLTF('./models/Avatar.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)

  const group = useRef<Mesh>(null!)
  const { animations: typingAnimation } = useFBX("./animations/Typing.fbx")
  typingAnimation[0].name = "Typing"

  const { actions } = useAnimations([typingAnimation[0]], group)

  const [animationSelect] = useState("Typing")


  useEffect(() => {
    actions[animationSelect]?.reset().play()
    return () => {
      actions[animationSelect]?.reset()
    }
  }, [animationSelect, props.isOpen])


  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#canvas",
          start: "top bottom",
          end: "40% top",
          toggleActions: "play reverse restart none",
        }
      });
      tl.from(group.current.scale, { x: 0, y: 1, z: 0, duration: 1, delay: 1, ease: "back.out(1.7)", });
    },
    []
  );

  return (
    <group {...props} ref={group} dispose={null} position-y={-1}>
      <group>
        <primitive object={nodes.Hips} />
        <skinnedMesh frustumCulled={false} geometry={(nodes.Wolf3D_Hair as any).geometry} material={materials.Wolf3D_Hair} skeleton={(nodes.Wolf3D_Hair as any).skeleton} />
        <skinnedMesh frustumCulled={false} geometry={(nodes.Wolf3D_Body as any).geometry} material={materials.Wolf3D_Body} skeleton={(nodes.Wolf3D_Body as any).skeleton} />
        <skinnedMesh frustumCulled={false} geometry={(nodes.Wolf3D_Outfit_Bottom as any).geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={(nodes.Wolf3D_Outfit_Bottom as any).skeleton} />
        <skinnedMesh frustumCulled={false} geometry={(nodes.Wolf3D_Outfit_Footwear as any).geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={(nodes.Wolf3D_Outfit_Footwear as any).skeleton} />
        <skinnedMesh frustumCulled={false} geometry={(nodes.Wolf3D_Outfit_Top as any).geometry} material={materials.Wolf3D_Outfit_Top} skeleton={(nodes.Wolf3D_Outfit_Top as any).skeleton} />
        <skinnedMesh frustumCulled={false} name="EyeLeft" geometry={(nodes.EyeLeft as any).geometry} material={materials.Wolf3D_Eye} skeleton={(nodes.EyeLeft as any).skeleton} morphTargetDictionary={(nodes.EyeLeft as any).morphTargetDictionary} morphTargetInfluences={(nodes.EyeLeft as any).morphTargetInfluences} />
        <skinnedMesh frustumCulled={false} name="EyeRight" geometry={(nodes.EyeRight as any).geometry} material={materials.Wolf3D_Eye} skeleton={(nodes.EyeRight as any).skeleton} morphTargetDictionary={(nodes.EyeRight as any).morphTargetDictionary} morphTargetInfluences={(nodes.EyeRight as any).morphTargetInfluences} />
        <skinnedMesh frustumCulled={false} name="Wolf3D_Head" geometry={(nodes.Wolf3D_Head as any).geometry} material={materials.Wolf3D_Skin} skeleton={(nodes.Wolf3D_Head as any).skeleton} morphTargetDictionary={(nodes.Wolf3D_Head as any).morphTargetDictionary} morphTargetInfluences={(nodes.Wolf3D_Head as any).morphTargetInfluences} />
        <skinnedMesh frustumCulled={false} name="Wolf3D_Teeth" geometry={(nodes.Wolf3D_Teeth as any).geometry} material={materials.Wolf3D_Teeth} skeleton={(nodes.Wolf3D_Teeth as any).skeleton} morphTargetDictionary={(nodes.Wolf3D_Teeth as any).morphTargetDictionary} morphTargetInfluences={(nodes.Wolf3D_Teeth as any).morphTargetInfluences} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/Avatar.glb')
useFBX.preload("./animations/Typing.fbx")