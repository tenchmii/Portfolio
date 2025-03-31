import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Arcade = ({ isMobile }) => { 
  const { scene } = useGLTF('./gaming_desktop_pc/scene.gltf');

  return (
    <group>
      <ambientLight intensity={2} />
      <hemisphereLight intensity={0.4} position={[0, 5, 5]} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.2}
        penumbra={1}
        intensity={2.5}
        castShadow
        shadow-mapSize={1024}
      />
      <directionalLight intensity={2} position={[10, 10, 5]} castShadow />
      <pointLight intensity={2} position={[0, 5, 5]} />
      <primitive
        object={scene}
        scale={isMobile ? 0.8 : 1}
        position={[2, isMobile ? -1 : -1.5, 0]} 
        rotation={[-0.01, -0.2, 0]}
      />
    </group>
  );
};

const ArcadeCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1000px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="canvas-container">
      <Canvas
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 8, 20], fov: 50, near: 0.1, far: 1000 }}
        style={{ background: "black" }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={true}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 3}
          />
          <Arcade isMobile={isMobile} /> 
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ArcadeCanvas;
