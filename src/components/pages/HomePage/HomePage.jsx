import css from './HomePage.module.css'
import BookingBlock from '../../booking/BookingBlock';


// export default function HomePage () {
//   return (
//     <>
//      <p>fdfdsfdsf</p>
//     </>
//   );
// }


const HomePage = () => {
  return (
    <>
       <div className={css.main}>
              <div className={css.mainLeft}>Unlocking Confidence, One Haircut at a Time</div>
              <div className={css.mainRight}>
                At The Syndicate, we believe that true confidence starts with how you
                feel about yourself. Our master barbers use time-honored techniques,
                passed down through generations, to provide more than just a
                haircut—we offer a transformation. Each visit is designed to enhance
                your appearance and boost your inner confidence, leaving you ready to
                face the world with renewed self-assurance.
              </div>
            </div>
<BookingBlock/>
          </>
  )
};

export {HomePage}; 
