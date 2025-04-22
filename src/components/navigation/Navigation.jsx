import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";


export default function Navigation() {
  return (
    <>
      <ul className={css.nav}>
        <li>
          <NavLink to="/home"
          className={({ isActive }) =>
            isActive ? `${css.navLink} ${css.active}` : css.navLink
          }>Home</NavLink>
        </li>
        <li>
          <NavLink to="/team"
          className={({ isActive }) =>
            isActive ? `${css.navLink} ${css.active}` : css.navLink
          }>Team</NavLink>
        </li>
        <li>
          <NavLink to="/pricing"
          className={({ isActive }) =>
            isActive ? `${css.navLink} ${css.active}` : css.navLink
          }>Pricing</NavLink>
        </li>
      </ul>

    </>
  );
}
