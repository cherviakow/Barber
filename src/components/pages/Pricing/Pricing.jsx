import image from '../../../img/Pricing.png'
import css from "./Pricing.module.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function Pricing(){


      useEffect(()=>{
        AOS.init({ duration: 1500, once: true });
      },[]);
    

    return (
        <div className={css.wrapper} >

            <img src={image} data-aos="zoom-in" className={css.imageImg}  alt="Pricing" />
        </div>
        
    )
};

