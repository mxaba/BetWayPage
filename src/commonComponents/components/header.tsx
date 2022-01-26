import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Modal } from "./modal";
import { Login } from "./../../shared/login";
import { logoutAction } from "./../../store/actions/user";
import { AppRootState } from "./../../store/reducers";

import betwayLogo from "./../utils/Betway_White.png";

import styles from "./header.module.css";

export function Header() {
  const [loginModalIsOpen, setLoginModalToTrueFalse] = useState(false);
  const userSelect = useSelector(({ user }: AppRootState) => user);

  const closeOpenModal = () => {
    setLoginModalToTrueFalse(false);
  };
  const actionsRight = (
    <div>
      {userSelect.loggedIn ? (
        <button className={styles.loginBtn} onClick={() => logoutAction()}>
          Logout
        </button>
      ) : (
        <>
          <button
            className={styles.loginBtn}
            onClick={() => setLoginModalToTrueFalse(true)}
          >
            Login
          </button>
          <button
            className={styles.signUpBtn}
          >
            Sign Up
          </button>
        </>
      )}
    </div>
  );

  return (
    <>
      <div className={styles.container}>
        <img
          style={{width:'10%'}}
          src={betwayLogo}
          alt="Betway"
        />
        {actionsRight}
      </div>
      {loginModalIsOpen && (
        <Modal
          title="Login"
          content={<Login onLoginClickCallback={closeOpenModal} />}
          onClose={closeOpenModal}
        />
      )}
    </>
  );
}
