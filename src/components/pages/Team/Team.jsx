import { useEffect } from "react";
import css from "./Team.module.css";
import AOS from "aos";
import carlos from "../../../img/Carlos.jpg";
import sami from "../../../img/Sami.jpg";
import siroj from "../../../img/Siroj.jpg";






const Team = () => {

          useEffect(()=>{
            AOS.init({ duration: 1500, once: true });
          },[]);

    return (
        <div className={css.teamBlock} >

            <div className={css.barberCard} data-aos="zoom-in">
               <img src={carlos} className={css.barber}  alt="" />
            <span className={css.name}>Carlos</span> 
            </div>

            <div className={css.barberCard} data-aos="zoom-in">
              <img src={sami} className={css.barber}  alt="" /> 
              <span className={css.name}>Sami</span> 
            </div>

            <div className={css.barberCard} data-aos="zoom-in">
                <img src={siroj} className={css.barber}  alt="" />
                <span className={css.name}>Siroj</span>
            </div>
            
            
            
        </div>
)};

export {Team}; 