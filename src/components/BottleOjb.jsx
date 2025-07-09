import { Canvas } from "@react-three/fiber";
import { Environment, useGLTF, useAnimations } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";
// function Bottle() {
//   const ref = useRef();
//   const groupRef = useRef();
//   return (
//     <group ref={groupRef} scale={[0.5, 0.5, 0.5]} position={[0, -1, 0]}>
//       <Kerabotoxanimation ref={ref} />
//     </group>
//   );
// }

function BottleModel() {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/kerabotoxanimation.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const firstAction = actions[Object.keys(actions)[0]];
      firstAction.reset().play();
    }
  }, [actions]);

  return (
    <group ref={group} scale={[0.5, 0.5, 0.5]} position={[0, -1, 0]}>
      <group dispose={null}>
        <group name="Scene">
          <group name="Moisturizing_Lotion_Container_Type_01_Pose_01_Blank_Group" position={[0, -7.56, 0]}>
            <mesh name="bottle_part01" geometry={nodes.bottle_part01.geometry} material={materials['lotion_container_01.001']} position={[0, 8.987, 0]} />
            <mesh name="label_top_part02" geometry={nodes.label_top_part02.geometry} material={materials['lotion_container_01.001']} position={[0, 8.987, 0]} />
            <mesh name="labels_part03" geometry={nodes.labels_part03.geometry} material={materials['labels_bottle_01.001']} position={[0, 8.987, 0]} />
          </group>
        </group>
      </group>
    </group>
  );
}
// export default function BottleOjb(reff) {
export default function BottleOjb(reff) {
  return (
    <div
      reff={reff}
      className="fixed top-3/4 right-2/12 transform -translate-y-1/2 z-50 pointer-events-none"
      style={{
        width: "50vw",
        height: "50vh",
        transform: "translate(25vw, -50%) scale(1)",
      }}
    >
      <Canvas shadows camera={{ position: [10, 10, 10], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Environment preset="sunset" />
        <Suspense fallback={null}>
          <BottleModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

