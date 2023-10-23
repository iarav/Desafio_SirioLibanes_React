/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
      <footer className={styles.container}>
        <div className={styles.text}>
          <h4>Contate-me!</h4>
          <p>Desenvolvido por Iara Vaneti | 2023</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:iaravaneti9@gmail.com">iaravaneti9@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a href="https://www.linkedin.com/in/iara-de-souza-vaneti/" rel="noreferrer" target="_blank">linkedin.com/in/iara-de-souza-vaneti/</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
            <a href="https://www.github.com/iarav" rel="noreferrer" target="_blank">github.com/iarav</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
