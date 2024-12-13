import css from "./Navigation.module.css";
import { Routes, Route, NavLink } from "react-router";
import { Team } from "../pages/Team/Team";
import { HomePage } from "../pages/HomePage/HomePage";
import { Pricing } from "../pages/Pricing/Pricing";

export default function Navigation() {
  return (
    <>
      <ul className={css.nav}>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/team">Team</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/team" element={<Team />} />
        <Route path="/pricing" element={<Pricing />} />
        {/* <Route path="*" element={<div>Not found page</div>}/> */}
      </Routes>
    </>
  );
}
