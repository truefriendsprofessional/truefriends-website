 
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense, useRef, forwardRef } from "react";
import Kerabotoxanimation from "../../public/Kerabotoxanimation";

function Bottle() {
  const ref = useRef();
  const groupRef = useRef();

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.8;
    }
  });

  return (
    <group ref={groupRef} scale={[0.5, 0.5, 0.5]} position={[0, -1, 0]}>
      <Kerabotoxanimation ref={ref} />
    </group>
  );
}
const BottleOjb = forwardRef((props, ref) => {
  return (
    <div
        ref={ref}
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
            <Bottle />
          </Suspense>
        </Canvas>
      </div>
  )
})

export default BottleOjb