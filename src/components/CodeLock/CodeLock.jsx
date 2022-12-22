import React from "react";
import Dialog from "@mui/material/Dialog";
import styles from "./CodeLock.module.css";
import { useNavigate } from "react-router-dom";

export const CodeLock = ({ close, isLock, ...props }) => {
  const navigate = useNavigate();
  return (
    <Dialog open={props.open}>
      <div className={styles.CodeLock}>
        <div className={styles.ScreenContainer}>
          <input
            autoFocus
            type="password"
            className={styles.Screen}
            onChange={(e) => {
              if (e.target.value === "password") {
                close(false);
                isLock(false);
              }
            }}
          />
        </div>
        <div className={styles.Btn}>
          <div className={styles.Parent}></div>
        </div>
      </div>
    </Dialog>
  );
};
