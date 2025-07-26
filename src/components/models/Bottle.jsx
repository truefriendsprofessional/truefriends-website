import React from 'react'
import { useGLTF} from '@react-three/drei'


export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;
export default function Model(props) {

  const ref = React.useRef()

  
    const { nodes, materials } = useGLTF('/bottle.gltf')

    
    return (
      <group ref={ref} {...props} dispose={null}>
        <group name="Scene">
          <group name="Moisturizing_Lotion_Container_Type_01_Pose_01_Blank_Group" position={[0, -7.56, 0]}>
            <mesh 
              name="bottle_part01" 
              geometry={nodes.bottle_part01.geometry} 
              material={materials['lotion_container_01.001']} 
              position={[0, 8.987, 0]} 
              castShadow 
              receiveShadow
            />
            <mesh 
              name="label_top_part02" 
              geometry={nodes.label_top_part02.geometry} 
              material={materials['lotion_container_01.001']} 
              position={[0, 8.987, 0]} 
              castShadow 
              receiveShadow
            />
            <mesh 
              name="labels_part03" 
              geometry={nodes.labels_part03.geometry} 
              material={materials['labels_bottle_01.001']} 
              position={[0, 8.987, 0]} 
              castShadow 
              receiveShadow
            />
          </group>
        </group>
      </group>
    )
  }

useGLTF.preload('/bottle.gltf')
