/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Question1.module.css";
import { getImageUrl } from "../../utils";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

let boxVariantQuestion1 = {
  visible: {
    x: 0,
    transition: { duration: 1.2 },
  },
  hidden: {
    x: "-" + (window.innerWidth/3) + "px",
    transition: { duration: 0.5 },
  },
};

let boxVariantQuestion2 = {
  visible: {
    x: 0,
    transition: { duration: 1.4 },
  },
  hidden: {
    x: "-" + ((window.innerWidth/3) + 100) + "px",
    transition: { duration: 0.5 },
  },
};

export const Question1 = () => {
  const control = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }

    if (inView2) {
      control2.start("visible");
    } else {
      control2.start("hidden");
    }

    if (inView3) {
      control3.start("visible");
    } else {
      control3.start("hidden");
    }
  }, [control, inView, control2, inView2, control3, inView3]);

  return (
    <div className={styles.question1}>
      <motion.div
        ref={ref}
        variants={boxVariantQuestion1}
        initial="hidden"
        animate={control}
        className={styles.title}
      >
        INOVAR
      </motion.div>
      <motion.div
        ref={ref3}
        variants={boxVariantQuestion2}
        initial="hidden"
        animate={control3}
        className={styles.circle}
      >
        <img
          className={styles.circleWords}
          src={getImageUrl("challenge/circle_words.svg")}
          alt=""
        />
        <div className={styles.girl}>
          <img src={getImageUrl("challenge/garota.png")} alt="" />
        </div>
      </motion.div>

      <motion.div
        ref={ref2}
        variants={boxVariantQuestion1}
        initial="hidden"
        animate={control2}
        className={styles.title}
        id={styles.tranformar}
      >
        Transformar o futuro da saúde
      </motion.div>
    </div>
  );
};
