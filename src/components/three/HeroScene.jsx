import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function OrbitNode({ position, color, scale = 1 }) {
  const ref = useRef(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.6 + position[0]) * 0.12;
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.008;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[0.17, 20, 20]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} metalness={0.25} roughness={0.2} />
    </mesh>
  );
}

function FloatingSystem() {
  const group = useRef(null);
  const orbitRef = useRef(null);
  const phoneRef = useRef(null);
  const laptopRef = useRef(null);
  const paymentRef = useRef(null);
  const cloudRef = useRef(null);
  const nodes = useMemo(() => [[1.8, 1.4, -0.6], [-1.9, 1.2, 0.4], [2.2, -0.4, 0.2], [-2.1, -1.3, -0.4], [0.2, 2.1, 0.6], [0.8, -2, -0.8]], []);

  useFrame((state) => {
    const { pointer, clock } = state;
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointer.x * 0.25, 0.08);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, pointer.y * 0.12, 0.08);
      group.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.08;
    }
    if (orbitRef.current) {
      orbitRef.current.rotation.z += 0.0035;
    }

    if (phoneRef.current) {
      phoneRef.current.position.y = Math.sin(clock.elapsedTime * 1.2) * 0.08;
      phoneRef.current.rotation.z = 0.08 + Math.sin(clock.elapsedTime * 0.7) * 0.05;
    }

    if (laptopRef.current) {
      laptopRef.current.position.y = 0.18 + Math.cos(clock.elapsedTime * 1.1) * 0.06;
    }

    if (paymentRef.current) {
      paymentRef.current.position.y = -1.1 + Math.sin(clock.elapsedTime * 1.4 + 1) * 0.07;
      paymentRef.current.rotation.y += 0.004;
    }

    if (cloudRef.current) {
      cloudRef.current.position.y = -0.92 + Math.cos(clock.elapsedTime * 1.3 + 0.4) * 0.08;
      cloudRef.current.rotation.z = -0.2 + Math.sin(clock.elapsedTime * 0.6) * 0.04;
    }
  });

  return (
    <group ref={group}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 5, 3]} intensity={1.8} color="#9ec5ff" />
      <pointLight position={[-3, 1, 2]} intensity={1.5} color="#8f6fff" />

      <group ref={phoneRef} position={[-0.8, 0, 0.4]} rotation={[0.22, -0.32, 0.08]}>
        <mesh>
          <boxGeometry args={[1.2, 2.35, 0.16]} />
          <meshStandardMaterial color="#121f3a" metalness={0.72} roughness={0.22} />
        </mesh>
        <mesh position={[0, 0.12, 0.09]}><planeGeometry args={[0.92, 1.86]} /><meshBasicMaterial color="#2454b8" /></mesh>
        <mesh position={[0, 0.72, 0.1]}><planeGeometry args={[0.78, 0.44]} /><meshBasicMaterial color="#4f84ff" /></mesh>
        <mesh position={[0, -0.18, 0.1]}><ringGeometry args={[0.2, 0.31, 32]} /><meshBasicMaterial color="#8ce0ff" /></mesh>
      </group>

      <group ref={laptopRef} position={[1.28, 0.18, -0.2]} rotation={[-0.14, 0.36, 0.03]}>
        <mesh>
          <boxGeometry args={[2.26, 1.42, 0.14]} />
          <meshStandardMaterial color="#f3f6ff" metalness={0.16} roughness={0.1} />
        </mesh>
        <mesh position={[0, 0.07, 0.08]}><planeGeometry args={[1.86, 1.02]} /><meshBasicMaterial color="#cddcff" /></mesh>
        {[-0.56, -0.08, 0.36, 0.8].map((x, index) => (
          <mesh key={x} position={[x, 0.02 + index * 0.06, 0.09]}>
            <boxGeometry args={[0.22, 0.48 + index * 0.16, 0.05]} />
            <meshBasicMaterial color={index % 2 === 0 ? '#6694ff' : '#95b7ff'} />
          </mesh>
        ))}
      </group>

      <group ref={paymentRef} position={[1.48, -1.1, 0.52]} rotation={[0.18, -0.22, 0.1]}>
        <mesh>
          <boxGeometry args={[1.46, 0.82, 0.12]} />
          <meshStandardMaterial color="#101a2d" metalness={0.45} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.05, 0.08]}><planeGeometry args={[1.1, 0.46]} /><meshBasicMaterial color="#1fc8f9" /></mesh>
      </group>

      <group ref={cloudRef} position={[-1.84, -0.92, -0.1]} rotation={[0.12, 0.22, -0.2]}>
        <mesh>
          <boxGeometry args={[1.22, 0.72, 0.12]} />
          <meshStandardMaterial color="#121f31" metalness={0.4} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.04, 0.08]}><planeGeometry args={[0.88, 0.34]} /><meshBasicMaterial color="#7f6fff" /></mesh>
      </group>

      <group ref={orbitRef}>
        {nodes.map((position, index) => (
          <OrbitNode key={`${position.join('-')}-${index}`} position={position} color={index % 2 === 0 ? '#68c7ff' : '#9774ff'} scale={index % 3 === 0 ? 1.15 : 0.92} />
        ))}
      </group>
    </group>
  );
}

function HeroScene() {
  return (
    <div className="h-[340px] w-full overflow-hidden rounded-[32px] border border-cyan-300/12 bg-[radial-gradient(circle_at_top,_rgba(112,150,255,0.18),_transparent_36%),linear-gradient(180deg,rgba(15,21,40,0.92),rgba(7,10,18,0.78))] sm:h-[440px] lg:h-[500px]">
      <Canvas dpr={[1, 1.8]} camera={{ position: [0, 0.2, 6.4], fov: 36 }}>
        <FloatingSystem />
      </Canvas>
    </div>
  );
}

export default HeroScene;
