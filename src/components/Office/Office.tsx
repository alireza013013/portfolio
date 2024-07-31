import { useGLTF, useTexture, useVideoTexture } from "@react-three/drei";
import * as THREE from "three";
import { Mesh } from "three"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from "react";

export const Office = (props: any) => {
  const { nodes } = useGLTF("models/scene.gltf");
  const texture = useTexture("textures/baked.jpg");
  const textureVSCode = useVideoTexture("textures/vscode.mp4");

  texture.flipY = false;
  (texture as any).encoding = (THREE as any).sRGBEncoding;

  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 1,
  });

  const textureGlassMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    opacity: 0.42,
  });


  const office = useRef(null!)
  const desk = useRef(null!)
  const tree = useRef(null!)
  const chair = useRef(null!)
  const carpet = useRef(null!)

  useGSAP(
    () => {
      const tl = gsap.timeline({});
      tl.from((office.current as Mesh).position,
        { x: 100, y: 0, z: 0, duration: 1 })
        .from([(desk.current as Mesh).scale,
        (tree.current as Mesh).scale,
        (chair.current as Mesh).scale,
        ],
          {
            x: 0, y: 0, z: 0, duration: 1
          })
        ;
    },
    []
  );


  return (
    <group {...props} dispose={null} ref={office}>
      <mesh
        name="Screen"
        geometry={(nodes.Screen as any).geometry}
        position={[0.45, 0.94, -1.72]}
        rotation={[Math.PI, -1.1, Math.PI]}
      >
        <meshBasicMaterial map={textureVSCode} toneMapped={false} />
      </mesh>
      <group
        name="Desk"
        position={[-0.07, 0, -1.52]}
        rotation={[0, -Math.PI / 2, 0]}
        ref={desk}
      >
        <mesh
          name="Plane001_Plane002_BlackWood001"
          geometry={(nodes.Plane001_Plane002_BlackWood001 as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_1"
          geometry={(nodes.Plane001_Plane002_BlackWood001_1 as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_2"
          geometry={(nodes.Plane001_Plane002_BlackWood001_2 as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_3"
          geometry={(nodes.Plane001_Plane002_BlackWood001_3 as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="Plane001_Plane002_BlackWood001_4"
          geometry={(nodes.Plane001_Plane002_BlackWood001_4 as any).geometry}
          material={textureMaterial}
        />
      </group>
      <group name="SM_ShelfSM_Shelf1" position={[-0.87, 1.69, -2.04]}>
        <mesh
          name="SM_ShelfSM_Shelf1_1"
          geometry={(nodes.SM_ShelfSM_Shelf1_1 as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="SM_ShelfSM_Shelf1_1_1"
          geometry={(nodes.SM_ShelfSM_Shelf1_1_1 as any).geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="LavaLamp"
        position={[-1.3, 2.07, -1.99]}
      >
        <mesh
          name="Node-Mesh001"
          geometry={(nodes["Node-Mesh001"] as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh001_1"
          geometry={(nodes["Node-Mesh001_1"] as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh001_2"
          geometry={(nodes["Node-Mesh001_2"] as any).geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="WawaRug"
        geometry={(nodes.WawaRug as any).geometry}
        material={textureMaterial}
        position={[-0.28, 0.01, 0.76]}
        ref={carpet}
      />
      <group
        name="salameche"
        position={[-0.61, 2.04, -1.96]}
        rotation={[-Math.PI, 0.73, -Math.PI]}
      >
        <mesh
          name="mesh434900071"
          geometry={(nodes.mesh434900071 as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_1"
          geometry={(nodes.mesh434900071_1 as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_2"
          geometry={(nodes.mesh434900071_2 as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_3"
          geometry={(nodes.mesh434900071_3 as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_4"
          geometry={(nodes.mesh434900071_4 as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh434900071_5"
          geometry={(nodes.mesh434900071_5 as any).geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="keyboard"
        position={[0.21, 0.98, -1.26]}
        rotation={[0, -0.22, 0]}
        scale={0.63}
      >
        <mesh
          name="mesh425587018"
          geometry={(nodes.mesh425587018 as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh425587018_1"
          geometry={(nodes.mesh425587018_1 as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh425587018_2"
          geometry={(nodes.mesh425587018_2 as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh425587018_3"
          geometry={(nodes.mesh425587018_3 as any).geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="iMac"
        position={[0.45, 0.94, -1.72]}
        rotation={[Math.PI, -1.1, Math.PI]}
      >
        <mesh
          name="iMac_1_1"
          geometry={(nodes.iMac_1_1 as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="iMac_1_2"
          geometry={(nodes.iMac_1_2 as any).geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="Comp_Mouse"
        geometry={(nodes.Comp_Mouse as any).geometry}
        material={textureMaterial}
        position={[0.05, 0, 0.02]}
      />
      <group
        name="plant"
        position={[-0.78, 1.07, -1.61]}
      >
        <mesh
          name="mesh24448074"
          geometry={(nodes.mesh24448074 as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh24448074_1"
          geometry={(nodes.mesh24448074_1 as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="mesh24448074_2"
          geometry={(nodes.mesh24448074_2 as any).geometry}
          material={textureMaterial}
        />
      </group>
      <group
        name="Houseplant_7"
        position={[-2.02, -0.04, -1.53]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <mesh
          name="Houseplant_7_1"
          geometry={(nodes.Houseplant_7_1 as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="Houseplant_7_2"
          geometry={(nodes.Houseplant_7_2 as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="Houseplant_7_3"
          geometry={(nodes.Houseplant_7_3 as any).geometry}
          material={textureMaterial}
        />
      </group>
      <group
        ref={tree}
        name="palm_tree_01"
        position={[2.13, -0.08, -1.06]}
        rotation={[-Math.PI, 0.67, -Math.PI]}
      >
        <mesh
          name="palm_tree_01-Mesh"
          geometry={(nodes["palm_tree_01-Mesh"] as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="palm_tree_01-Mesh_1"
          geometry={(nodes["palm_tree_01-Mesh_1"] as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="palm_tree_01-Mesh_2"
          geometry={(nodes["palm_tree_01-Mesh_2"] as any).geometry}
          material={textureMaterial}
        />
      </group>
      <group
        ref={chair}
        name="Chair"
        position={[0.09, -0.02, -0.66]}
        rotation={[0, -0.35, 0]}
      >
        <mesh
          name="Node-Mesh"
          geometry={(nodes["Node-Mesh"] as any).geometry}
          material={textureMaterial}
        />
        <mesh
          name="Node-Mesh_1"
          geometry={(nodes["Node-Mesh_1"] as any).geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        name="Plane001"
        geometry={(nodes.Plane001 as any).geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane001_1"
        geometry={(nodes.Plane001_1 as any).geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane001_2"
        geometry={(nodes.Plane001_2 as any).geometry}
        material={textureMaterial}
      />
      <mesh
        name="Plane001_3"
        geometry={(nodes.Plane001_3 as any).geometry}
        material={textureGlassMaterial}
      />
    </group >
  );
}

useGLTF.preload("models/scene.gltf");