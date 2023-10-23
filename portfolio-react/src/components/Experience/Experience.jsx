/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <div className={styles.experience} id="experience">
      <section className={styles.container}>
        <h2 className={styles.title}>Experiência</h2>
        <div className={styles.content}>
          <div className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                    <p>Nível:<br/>{skill.level}</p>
                  </div>
                  <p className={styles.skillTitle}>{skill.title}</p>
                </div>
              );
            })}
          </div>
          <div className={styles.column2}>
            <ul className={styles.history}>
              {history.map((historyItem, id) => {
                return (
                  <li key={id} className={styles.historyItem}>
                    <div className={styles.historyItemDetails}>
                      <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                      <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                      <ul>
                        {historyItem.experiences.map((experience, id) => {
                          return <li key={id}>{experience}</li>;
                        })}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className={styles.curriculum}>
              <h3>Clique no botão abaixo e baixe todas as informações: </h3>
              <a
                href={getImageUrl("skills/curriculo.pdf")}
                download="Currículo Iara Vaneti.pdf"
                id="btn-download"
                title="Baixar Curriculo"
              >
                Baixar Currículo  
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
