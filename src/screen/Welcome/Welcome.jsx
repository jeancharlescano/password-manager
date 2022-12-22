import React, { useState } from "react";

import fullDoor from "../../assets/img/FullDoor.svg";
import Door from "../../assets/img/Door.svg";
import Wheel from "../../assets/img/Wheel.svg";
import styles from "./Welcome.module.css";
import { CodeLock } from "../../components/CodeLock/CodeLock";
import { useNavigate } from "react-router-dom";

export const Welcome = () => {
  const [showModal, setShowModal] = useState(false);
  const [lock, setLock] = useState(true);
  const navigate = useNavigate()

  const openModal = () => {
    setShowModal(!showModal);
  };

  if (!lock) {
    setTimeout(() => {
      navigate("/home")
    }, 2000);
  }
  return (
    <div className={styles.App}>
      {lock ? (
        <img
          src={fullDoor}
          className={styles.Logo}
          alt="logo"
          onClick={() => openModal()}
        />
      ) : (
        <>
          <img src={Door} className={styles.LogoUnlock} alt="logo" />
          <div className={styles.CodeLock}>
            <img src={Wheel} className={styles.RotateWheel} alt="wheel" />
          </div>
        </>
      )}

      <CodeLock open={showModal} close={setShowModal} isLock={setLock} />
    </div>
  );
};
