/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <div className={styles.about} id="about">
      <section className={styles.container}>
        <div>
          <h2 className={styles.title}>Sobre mim</h2>
          <p className={styles.subtitle}>Características e hobbies</p>
        </div>
        <div className={styles.content}>
          <img
            src={getImageUrl("about/aboutImage.png")}
            alt="Me sitting with a laptop"
            className={styles.aboutImage}
          />
          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/book.png")} alt="Book icon" />
              <div className={styles.aboutItemText}>
                <h3>Ler</h3>
              </div>
            </li>
            <li className={styles.aboutItem}>
              <img src={getImageUrl("about/tv.png")} alt="TV icon" />
              <div className={styles.aboutItemText}>
                <h3>Séries e FIlmes</h3>
              </div>
            </li>
            {/* <li className={styles.aboutItem}>
              <img src={getImageUrl("about/draw.png")} alt="Pen icon" />
              <div className={styles.aboutItemText}>
                <h3>Desenhar</h3>
              </div>
            </li> */}
          </ul>
        </div>
      </section>
    </div>
  );
};
