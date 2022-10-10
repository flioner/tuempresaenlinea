import React , {useState , useEffect} from 'react';
import { Suspense, useRef } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Environment, Html, OrbitControls, useProgress } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import s from './canvas.module.css';
import { Loading } from "../loading/loading";

function Loader() {
    const { progress } = useProgress();
    return <Html center>{progress} % loaded</Html>;
};

const Laptop = (args) => { 
    const modelRef = useRef(args);
    const gltf = useLoader(GLTFLoader, "scene.glb");
    return <primitive ref={modelRef} object={gltf.scene} {...args} />;
  };

const ObjViewer = ({  }) => {
    const { progress } = useProgress();
      
    return (   
        
  
    <Canvas camera={{fov: 15, near: 0.1, far: 1000, z: 5,}} shadows style={{ height: '40vw' , width: '100vw'} }  >
      <Suspense fallback={<Loader />}>
      <ambientLight /> 
        <Laptop position={[0.1, -0.3,  1]} scale={0.3} rotation={[0.3, -0.3, 0]} />   
      </Suspense>
    </Canvas> 
  
    );
  };
  
  export {ObjViewer};

  
//   <div  className={progress != 100 ? s.bg5 : s.bg4}> 
// <div onMouseEnter={() => Show()} className={!delayed ? s.bg3 : s.bg4}>  </div>