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
    useFrame(() => {
        if (modelRef.current.rotation.y < 0) {
            modelRef.current.rotation.y += 0.00075;
          }
   
        if (modelRef.current.rotation.x > 0) {
            modelRef.current.rotation.x -= 0.00075;
          }
        if (modelRef.current.position.z > 0) {
          modelRef.current.position.z -= 0.0025;
        }


   
      });
    const gltf = useLoader(GLTFLoader, "scene.glb");
    return <primitive ref={modelRef} object={gltf.scene} {...args} />;
  };

const LaptopViewer = ({  }) => {
    const { progress } = useProgress();
    const [selected, setView] = useState(false);
    const [delayed, setdelay] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 200 ) {
            Show();
          } 
        });
      }, []);

    const Hide = () => {
        setView(false);
        setTimeout(() => {
            setdelay(false);
          }, 2000);
      };
      const Show = () => {
        setView(true);
        setdelay(true);
      };
      
    return (   
        
    <div>
    <div onMouseEnter={() => Show()} className={delayed ? s.bg : s.bg2}> 
    <Canvas camera={{fov: 15, near: 0.1, far: 1000, z: 5,}} shadows style={{ height: '40vw' , width: '100vw'} }  >
      <Suspense fallback={<Loader />}>
      <ambientLight /> 
        <Laptop position={[0.1, -0.3, delayed ? 1 : 0]} scale={0.3} rotation={[delayed ? 0.3 : 0, delayed ? -0.3: 0, 0]} />   
      </Suspense>
    </Canvas> 
    </div>
    <div onAnimationStart={() => Show()} className={!delayed ? s.bg3 : s.bg4}>  </div>
    </div>
    
    );
  };
  
  export {LaptopViewer};

  
//   <div  className={progress != 100 ? s.bg5 : s.bg4}> 
// <div onMouseEnter={() => Show()} className={!delayed ? s.bg3 : s.bg4}>  </div>

/*
    <div>
    <div onMouseEnter={() => Show()} className={delayed ? s.bg : s.bg2}> 
    <Canvas camera={{fov: 15, near: 0.1, far: 1000, z: 5,}} shadows style={{ height: '40vw' , width: '100vw'} }  >
      <Suspense fallback={<Loader />}>
      <ambientLight /> 
        <Laptop position={[0.1, -0.3, delayed ? 1 : 0]} scale={0.3} rotation={[delayed ? 0.3 : 0, delayed ? -0.3: 0, 0]} />   
      </Suspense>
    </Canvas> 
    </div>
    <div  className={progress != 100 ? s.bg5 : s.bg4}> 
    <Loading progress={progress} />
    </div>
    <div onMouseEnter={() => Show()} className={!delayed ? s.bg3 : s.bg4}>  </div>
    </div>
*/