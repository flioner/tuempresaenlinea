import React, { useEffect, useState } from "react";
import s from "./productDemo.module.css";
import { ProductViewer } from "../threejs/threejs";
import { IncreasePrice } from "./increase_price";


  const ProductDemo = ({ lightmode, is3D, imgPath, objPath, scale, position, rotation, lightPosition }) => {
    /* Product Version Selector*/ 
    const [selected, setOption] = useState(false);

    const defaultOpt = () => {
        setOption(false);
      };
      const premiumOpt = () => {
        setOption(true);
      };

      
    /* LoadStates*/ 
    const [initial, setInitial] = useState(true);
    const [progress, setProgress] = useState(false);

    const checkLoaded = () => {
        setTimeout(() => {
          setInitial(false);
        }, 10000);
      };

      
    /* Product Demo Config */
    const [isImage, setImage] = useState(!is3D);
    const [warningOpen, setWarning] = useState(true);

        return ( 
            <div> 
            <div className={s.middle} onAnimationStart={()=> checkLoaded()}> 
                <div className={lightmode ? s.flexContLight : s.flexCont}>  
              <div className={s.canvasCont}> 
                  {!isImage ? 
                  <ProductViewer objPath={ objPath } position={position} scale={scale} rotation={rotation} lightPosition = {lightPosition} globalProgress={setProgress}/> 
                  : <img className={s.img} src={imgPath}/>}
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

            <div> 
                {!isImage && warningOpen ?         
                    <div> 
                    {progress ? null : 
                        <div className={s.middle}>
                            {initial ? null :   
                                <div className={lightmode ? s.warningLight : s.warning}>
                                    <div className={s.warningText}> Parece que el modelo 3D se está tardando en cargar. </div>
                                    <div onClick = {()=>setImage(true)} className={s.warningButton}> Cambiar a la vista de imagen </div>
                                    <img onClick = {()=>setWarning(false)}className={s.closeIcon} src="closeIcon.png"  />
                                </div> }
                        </div>
                    } 
                    </div> 
                : null
                } 
            </div>
             </div> 
        ); 
  };
  
  export { ProductDemo };

 