/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0, transition: { duration: 1 } },
};
export const About = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <div className={styles.about} id="about">
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className={styles.container}
      >
        <section>
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
      </motion.div>
    </div>
  );
};
