import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Modal } from "./modal";
import { logoutAction } from "./../../store/actions/user";
import { AppRootState } from "./../../store/reducers";

import betwayLogo from "./../utils/Betway_White.png";

import styles from "./header.module.css";
import { Login } from "./../../shared/login";
import { SignUp } from "./../../shared/signup";

export function Header() {
  const [loginModalIsOpen, setLoginModalToTrueFalse] = useState(false);
  const [signUpModalIsOpen, setsignUpModalToTrueFalse] = useState(false);
  const userSelect = useSelector(({ user }: AppRootState) => user);

  const closeOpenModal = () => {
    setLoginModalToTrueFalse(false);
    setsignUpModalToTrueFalse(false);
  };
  const actionsRight = (
    <div >
      {userSelect.loggedIn ? (
        <button className={styles.loginBtn} onClick={() => logoutAction()}>
          Logout
        </button>
      ) : (
        <>
          <button
            className={styles.loginBtn}
            onClick={() => {
              setLoginModalToTrueFalse(true)}
            }
          >
            Login
          </button>
          <button
            className={styles.signUpBtn}
            onClick={() =>{
              setsignUpModalToTrueFalse(true);
            }}
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
      {signUpModalIsOpen && (
        <Modal
          title='Sign Up'
          content={<SignUp closeOpenModal={closeOpenModal} />}
          onClickClose={closeOpenModal}
        />
      )}
      {loginModalIsOpen && (
        <Modal
          title='Login'
          content={<Login closeOpenModal={closeOpenModal} />}
          onClickClose={closeOpenModal}
        />
      )}
    </>
  );
}
