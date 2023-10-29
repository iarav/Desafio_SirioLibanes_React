/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./Challenge.module.css";
import { getImageUrl } from "../../utils";
import questions from "../../data/challengeQuestions.json";
import { Question1 } from "./Question1";
import { Question2 } from "./Question2";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0, transition: { duration: 1 } },
};

export const Challenge = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  const [questionNumber, setQuestion] = useState(1);
  return (
    <div className={styles.challenge} id="challenge">
      <div className={styles.container}>
        <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          <div className={styles.questionsBalls}>
            {questions.map((question, id) => {
              return (
                <div
                  key={id}
                  className={styles.questionBall}
                  onClick={() => setQuestion(question.number)}
                >
                  <img
                    src={
                      questionNumber == question.number
                        ? getImageUrl("challenge/circle_blue.svg")
                        : getImageUrl("challenge/circle_grey.svg")
                    }
                    alt={question.number + "_circle"}
                  />
                  <p>{question.number}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
        <div className="content">
          {questionNumber == 1 ? <Question1 /> : <Question2 />}
        </div>
      </div>
    </div>
  );
};
