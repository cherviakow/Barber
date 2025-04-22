import css from "./header.module.css";
import barberpin from "../../img/barber-pin.png"
import Navigation from "../navigation/Navigation";

export default function Header () {
  return (
    <>
      <header className={css.header}>
        <img src={barberpin} alt="" />
        <h1 className={css.barberhood}>Barberhood</h1>
        <Navigation/>

      </header>
    </>
  );
};


