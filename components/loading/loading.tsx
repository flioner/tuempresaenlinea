import React from "react";
import s from "./loading.module.css";


  const Loading = ({ progress }) => {
    
    const labelStyles = {
        backgroundColor: 'black',
        borderRadius: '50%',
        opacity: `${100-progress}%`,
      }
    return ( 
  
    <div className={s.loadingContainer}>
        <div className={s.contCont}>
            <div className={s.imgCont}>
            <div className={s.imgContCont}>
                <img  src= "https://res.cloudinary.com/ds5o5hlrl/image/upload/v1665196340/tuempresaenlinea/LogoIcon_gnus3g.png"/> 
                </div> 
            </div>
            <div className={s.abs}>
            <div style={labelStyles}>
                <div className={s.imgContCont}>
                    <img  src= "https://res.cloudinary.com/ds5o5hlrl/image/upload/v1665196340/tuempresaenlinea/LogoIcon_gnus3g.png"/> 
                </div> 
            </div>
            </div>
        </div>
    </div>
    );
  };
  

 
  
  export { Loading };

 