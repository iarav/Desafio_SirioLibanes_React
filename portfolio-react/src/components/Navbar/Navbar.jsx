/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.title}>
            Desafio
          </div>
          <div className={styles.title}>
            <img src={getImageUrl("nav/logo_sirio.png")} alt="Logo Alma Sírio Libanes" />
          </div>
        </div>
      </nav>
      <div className={styles.leftBlur} />
      <div className={styles.rightBlur} />
    </div>
  );
};
