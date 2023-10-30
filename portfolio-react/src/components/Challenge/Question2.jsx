/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./Question2.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { getImageUrl } from "../../utils";

const boxVariantPcMemory = {
  visible: {
    x: 0,
    transition: { duration: 1.2 },
  },
  hidden: {
    x: "-" + (window.innerWidth/3) + "px",
    transition: { duration: 0.5 },
  },
};

const boxVariantPcPeriodic = {
  visible: {
    x: 0,
    transition: { duration: 1.2 },
  },
  hidden: {
    x: (window.innerWidth/3) + "px",
    transition: { duration: 0.5 },
  },
};

const boxVariantPhoneView = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0, transition: { duration: 1 } },
};

const paths = [
  {
    path: getImageUrl("challenge/pc_memoria.png"),
    height: "300px",
  },
  {
    path: getImageUrl("challenge/app_celular.png"),
    height:"500px",
  },
  {
    path: getImageUrl("challenge/pc_tabela.png"),
    height:"300px",
  },
];

export const Question2 = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const control2 = useAnimation();
  const [ref2, inView2] = useInView();

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
  }, [control, inView, control2, inView2]);

  return (
    <div className={styles.question2}>
      <div className={styles.title}>
        Protagonizar
      </div>
      <div className={styles.imgs}>
        <motion.div
          ref={ref}
          variants={window.innerWidth>830 ? boxVariantPcMemory : boxVariantPhoneView}
          initial="hidden"
          animate={control}
        >
          <img
            src={paths[0].path}
            alt=""
            height={paths[0].height}
            id={styles.pcMemory}
          />
        </motion.div>
        
        <img
          src={paths[1].path}
          alt=""
          height={paths[1].height}
          id={styles.app}
        />

        <motion.div
          ref={ref2}
          variants={window.innerWidth>830 ? boxVariantPcPeriodic : boxVariantPhoneView}
          initial="hidden"
          animate={control2}
        >
          <img
            src={paths[2].path}
            alt=""
            height={paths[2].height}
            id={styles.pcPeriodic}
          />
        </motion.div>
      </div>
    </div>
  );
};
