import css from './HomePage.module.css'
import BookingBlock from '../../booking/BookingBlock';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';



export default function HomePage (){
    const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(()=>{
    AOS.init({ duration: 2000, once: true });
  },[]);

  return (
    <>
       <div className={css.main}>
        <div className={css.left}>
        <p className={css.mainLeft} data-aos="fade-right">Unlocking Confidence, One Haircut at a Time</p>
        <button className={css.bookBtn} data-aos="fade-right" onClick={()=> setIsModalOpen(true)}>Book your appointment</button>
        </div>
              {/* <p className={css.mainLeft} data-aos="fade-right">Unlocking Confidence, One Haircut at a Time</p> */}
              <p className={css.mainRight} data-aos="fade-left">
                At The Barberhood, we believe that true confidence starts with how you
                feel about yourself. Our master barbers use time-honored techniques,
                passed down through generations, to provide more than just a
                haircut—we offer a transformation. Each visit is designed to enhance
                your appearance and boost your inner confidence, leaving you ready to
                face the world with renewed self-assurance.
              </p>
            </div>
            {/* <button className={css.bookBtn} data-aos="fade-right" onClick={()=> setIsModalOpen(true)}>Book your appointment</button> */}
            <BookingBlock isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}/>

          </>
  )
};


