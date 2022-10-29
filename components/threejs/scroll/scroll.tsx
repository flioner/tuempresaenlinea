import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Preload, Image as ImageImpl } from "@react-three/drei";
import { ScrollControls, Scroll, useScroll } from "./scroll_controls";
import s from "./scroll.module.css";
import { Autoplay } from "swiper";

function Image(props) {
  const ref = useRef();
  const group = useRef();
  const data = useScroll();

  return (
    <group ref={group}>
      <ImageImpl ref={ref} {...props} />
    </group>
  );
}

function Page({ m = 0.4, urls, ...props }) {
  const { width } = useThree((state) => state.viewport);
  const w = width < 10 ? 1.5 / 3 : 1 / 3;
  return (
    <group {...props}>
      <Image position={[-width * w, 0, -1]} scale={[4, 6, 1]} url={urls[0]} />
      <Image position={[0, 0, 0]} scale={[4, 6, 1]} url={urls[1]} />
      <Image position={[width * w, 0, 1]} scale={[4, 6, 1]} url={urls[2]} />
    </group>
  );
}

function Pages() {
  const { width } = useThree((state) => state.viewport);
  return (
    <>
      <Page
        position={[-width * 1, 0, 0]}
        urls={[
          "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642378891/Portrait%20and%20Fashion%20Photography/Moda_1_wyt57z.jpg",
          "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826506/Concert%20Photography/_MG_4200-min_c3dqt6.jpg",
          "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826515/Concert%20Photography/_MG_4529-min_w8sjpl.jpg",
        ]}
      />
      <Page
        position={[width * 0, 0, 0]}
        urls={[
          "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826512/Concert%20Photography/B_W1-min_vhfjb3.jpg",
          "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826512/Concert%20Photography/B_W2-min_fgskmb.jpg",
          "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826522/Concert%20Photography/b_w4-min_nxhx9q.jpg",
        ]}
      />
      <Page
        position={[width * 1, 0, 0]}
        urls={[
          "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1660957982/Street%20Photography/Street_1_rbxlgh.jpg",
          "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1660957981/Street%20Photography/Street_2_eturkw.jpg",
          "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1660957981/Street%20Photography/Street_3_ewi7eg.jpg",
        ]}
      />
      <Page
        position={[width * 2, 0, 0]}
        urls={[
          "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642378891/Portrait%20and%20Fashion%20Photography/Moda_1_wyt57z.jpg",
          "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826506/Concert%20Photography/_MG_4200-min_c3dqt6.jpg",
          "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826515/Concert%20Photography/_MG_4529-min_w8sjpl.jpg",
        ]}
      />
      <Page
        position={[width * 3, 0, 0]}
        urls={[
          "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826512/Concert%20Photography/B_W1-min_vhfjb3.jpg",
          "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826512/Concert%20Photography/B_W2-min_fgskmb.jpg",
          "https://res.cloudinary.com/dgb1oqgt3/image/upload/v1642826522/Concert%20Photography/b_w4-min_nxhx9q.jpg",
        ]}
      />
    </>
  );
}

const ScrollImages = () => {
  return (
    <Canvas
      style={{ height: "50vw", maxHeight: "1050px", width: "100%" }}
      gl={{ antialias: false }}
      dpr={[1, 1.5]}
    >
      <Suspense fallback={null}>
        <ScrollControls infinite horizontal damping={4} pages={4} distance={1}>
          <Scroll>
            <Pages />
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
  );
};

export { ScrollImages };
