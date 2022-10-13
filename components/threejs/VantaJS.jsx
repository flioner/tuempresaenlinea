import React, { useState, useEffect, useRef } from "react";
import WAVES from 'vanta/dist/vanta.waves.min'
import * as THREE from "three";
import s from "./vantajs.module.css";

const VantaBG = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE: THREE,
          color: 0xdfdfdf,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
         
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className={s.vanta} ref={vantaRef}>
    </div>
  );
};

export { VantaBG };