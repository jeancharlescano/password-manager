import React from "react";
import { Site } from "../../components/Site/Site";
import styles from "./Home.module.css";
export const Home = () => {
  return (
    <>
      <div className={styles.Container}>
        <h1 className={styles.Title}>Gestionnaire de mot de passe</h1>
        <div className={styles.List}>
          <Site />
          <Site />
          <Site />
          <Site />
          <Site />
          <Site />
          <Site />
          <Site />
        </div>
      </div>
      <div className={styles.Add}></div>
    </>
  );
};
