import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AuthNavig.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(styles.link, isActive && styles.active);
};

const AuthNav = () => {
  return (
    <div className={styles.AuthNav}>
      <NavLink className={buildLinkClass} to="/registration">
        Registration
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;