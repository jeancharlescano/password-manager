import styles from "./Site.module.css";

import React from "react";
import { useNavigate } from "react-router-dom";

export const Site = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.Element} onClick={() => navigate("/detail/1")}>
      <h3 className={styles.Title}>Facebook</h3>
    </div>
  );
};
