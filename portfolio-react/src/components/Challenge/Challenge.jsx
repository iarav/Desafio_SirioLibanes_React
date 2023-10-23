/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./Challenge.module.css";
import { getImageUrl } from "../../utils";
import questions from "../../data/challengeQuestions.json";

export const Challenge = () => {
  const [questionNumber, setQuestion] = useState(1);
  return (
    <div className={styles.challenge} id="challenge">
      <div className={styles.container}>
        <div className={styles.column1}>
          <h2 className={styles.title}>Desafio</h2>
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
        </div>
        <div className={styles.content}>
          <div className={styles.ballonImg}>
            <div className={styles.ballon}>
              <img
                src={getImageUrl("challenge/ballon.png")}
                alt="balão de pergunta"
              />
              <p>{questions[questionNumber - 1].question}</p>
            </div>
          </div>
          <div className={styles.circlesQuestions}></div>
        </div>
      </div>
    </div>
  );
};
