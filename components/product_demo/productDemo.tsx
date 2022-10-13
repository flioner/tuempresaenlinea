import React, { useEffect, useState } from "react";
import s from "./productDemo.module.css";
import { ProductViewer } from "../threejs/threejs";
import { IncreasePrice } from "./increase_price";


  const ProductDemo = ({ lightmode, is3D, imgPath, objPath, scale, position, rotation, lightPosition }) => {
    const [selected, setOption] = useState(false);
    const [loaded, setLoadState] = useState(false);
  
    const setLoaded = () => {
      setLoadState(true);
    };
    const defaultOpt = () => {
      setOption(false);
    };
    const premiumOpt = () => {
      setOption(true);
    };

    if (is3D) {
        return ( 
            <div className={s.middle}> 
                <div className={lightmode ? s.flexContLight : s.flexCont}>  
              <div className={s.canvasCont}> 
                <ProductViewer objPath={ objPath } position={position} scale={scale} rotation={rotation} lightPosition = {lightPosition} />
              </div>
    
              <div className={s.textCont}>  
    
                <div className={s.title}>  Tu Producto </div> 
    
                <div className={s.subTitle}>  Decripción </div> 
                <div className={s.desc}>  
                   Una breve descripción de tu producto.
                </div> 
    
                <div className={s.subTitle}>  Version </div>   
                <div className={s.buttons}> 
                    <button
                    onClick={defaultOpt}
                    className={selected ? s.btn : s.selectedBtn}>
                        Default
                    </button>
                    <div className={s.spacing} />
                    <button
                    onClick={premiumOpt}
                    className={!selected ? s.btn : s.selectedBtn}
                    >
                        Premium
                    </button>
                </div> 
    
                <div className={s.middle}> 
                    <IncreasePrice
                    increase={selected}
                    inicio={selected ? 450 : 650}
                    final={selected ? 650 : 450}
                    />
                </div> 
            </div> 
            </div> 
            </div> 
        );
    }
    else 
    {
        return ( 
            <div className={s.middle}> 
                <div className={lightmode ? s.flexContLight : s.flexCont}>  
              <div className={s.imgCont}> 
                <img className={s.img} src={imgPath} />
              </div>
    
              <div className={s.textCont}>  
    
                <div className={s.title}>  Tu Producto </div> 
    
                <div className={s.subTitle}>  Decripción </div> 
                <div className={s.desc}>  
                   Una breve descripción de tu producto.
                </div> 
    
                <div className={s.subTitle}>  Version </div>   
                <div className={s.buttons}> 
                    <button
                    onClick={defaultOpt}
                    className={selected ? s.btn : s.selectedBtn}>
                        Default
                    </button>
                    <div className={s.spacing} />
                    <button
                    onClick={premiumOpt}
                    className={!selected ? s.btn : s.selectedBtn}
                    >
                        Premium
                    </button>
                </div> 
    
                <div className={s.middle}> 
                    <IncreasePrice
                    increase={selected}
                    inicio={selected ? 450 : 650}
                    final={selected ? 650 : 450}
                    />
                </div> 
            </div> 
            </div> 
            </div> 
        );
    }

    
  };
  
  export { ProductDemo };

 