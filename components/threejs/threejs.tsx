import React from 'react';
import { Suspense, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import {  Html, useGLTF, useProgress, OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import s from './threejs.module.css';



function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress} % loaded</Html>;
};

const ObjLoader = (args, objPath) => { 
    const modelRef = useRef(args);

    useFrame(() => {
      if (false) {
            modelRef.current.rotation.y -= 0.00075;
          }
      });
    const gltf = useGLTF("waterbottle_tuempresaenlinea_compressed.glb", "https://www.gstatic.com/draco/v1/decoders/");
    return <primitive ref={modelRef} object={gltf.scene} {...args} />;
  };

const ObjViewer = ({ objPath, scale, position, rotation }) => {

    return (   
    <Canvas camera={{fov: 15, near: 0.1, far: 1000, z: 5,}} shadows style={{ height: '40vw' , width: '100vw'} }  >
      <Suspense fallback={<Loader />}>
      <ambientLight /> 
      <pointLight /> 
      <OrbitControls />
        <ObjLoader objPath={ objPath } position={position} scale={scale} rotation={rotation} /> 
      </Suspense>
     
    </Canvas> 
    );
  };
  
export {ObjViewer};


const ProductViewer = ({ objPath, scale, position, rotation }) => {

  return (
      <Canvas camera={{fov: 15, near: 0.1, far: 1000, z: 5,}} shadows   >
        <Suspense fallback={<Loader />}>
        <ambientLight /> 
        <pointLight /> 
        <OrbitControls />
          <ObjLoader objPath={ objPath } position={position} scale={scale} rotation={rotation} /> 
        </Suspense>
      </Canvas> 
  );
};

export {ProductViewer};


  
//   <div  className={progress != 100 ? s.bg5 : s.bg4}> 
// <div onMouseEnter={() => Show()} className={!delayed ? s.bg3 : s.bg4}>  </div>