/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Intro.module.css";
import stylesTyping from "./IntroTyping.module.css";
import { getImageUrl } from "../../utils";

export const Intro = () => {
  return (
    <div>
      <div className={styles.intro} id={styles.intro}>
        <div id={stylesTyping.introPage} className={styles.introPage}>
          <div className={styles.introTexts}>
            <h1>Olá, meu nome é Iara Vaneti.</h1>
            <h2 id={styles.h2Intro}>Hi, my name is Iara Vaneti.</h2>
          </div>
        </div>
      </div>
      <div id={styles.oval}>
        <a id={styles.linkArrow} href="#about">
          <img id={styles.arrow} src={getImageUrl("intro/right-arrow.png")} alt="arrow" />
        </a>
      </div>
    </div>
  );
};
