import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float } from '@react-three/drei';
import { ShadowMaterial } from 'three';
import * as THREE from 'three';

const AnimatedBottle = ({ scale = 1, ...props }) => {
    const bottleRef = useRef();
    const shadowRef = useRef();
    const { nodes, materials } = useGLTF('./bottle_final_with_names.glb');

    // Animation frame updates - only for subtle floating effects
    useFrame((state) => {
        // Shadow animation
        if (shadowRef.current) {
            const shadowScale = 1 + Math.sin(state.clock.getElapsedTime() * 2) * 0.1;
            shadowRef.current.scale.set(shadowScale, shadowScale, shadowScale);
        }
    });

    return (
        <group {...props}>
            {/* Shadow plane - positioned behind the bottle */}
            <mesh
                ref={shadowRef}
                position={[0, 0, -3]}
                rotation={[0, 0, 0]}
                receiveShadow
            >
                <planeGeometry args={[10, 10]} />
                <shadowMaterial opacity={0.1} />
            </mesh>

            {/* Bottle model with floating animation */}
            <Float speed={2} rotationIntensity={1} floatIntensity={3}>
                <group ref={bottleRef} dispose={null} castShadow scale={scale} rotation={[0, Math.PI, 0]}>
                    {/* Always visible parts */}
                    <mesh
                        geometry={nodes.bottleBody.geometry}
                        material={materials['lotion_container_01.001']}
                        castShadow
                    />
                    <mesh
                        geometry={nodes.bottleCap.geometry}
                        material={materials.black}
                        castShadow
                    />
                    <mesh
                        geometry={nodes.bottomText.geometry}
                        material={materials.black}
                        position={[0, -9.255, 0.133]}
                        rotation={[0, 0, Math.PI]}
                        castShadow
                    />

                    {/* Front label with kerabotox material */}
                    <mesh
                        geometry={nodes.frontLable.geometry}
                        material={materials.keratin}
                        castShadow
                    />

                    {/* Back label with nanoplast material */}
                    <mesh
                        geometry={nodes.backLable.geometry}
                        material={materials.keratin}
                        position={[0, 0, -0.01]}
                        castShadow
                    />
                </group>
            </Float>
        </group>
    );
};

export default AnimatedBottle;
useGLTF.preload('./bottle_final_with_names.glb');

