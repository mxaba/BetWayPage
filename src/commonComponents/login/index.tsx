import React, { useState, useEffect } from "react";
import { userApi } from "../../utils/userApi";
import { inputValidate } from "../../utils/inputValidation";
import { loginAction } from "../../store/actions/user";

import styles from "./index.module.css";

export function Login({ closeOpenModal }: { closeOpenModal?: () => void },) {
  const [loginDetails, setLoginUsernamePassword] = useState({
    username: "",
    password: ""
  });
  const { isInputvalid: valid, errorMessage: message } = inputValidate(
    loginDetails.username,
    loginDetails.password
  );
  const [formError, setFormError] = useState<null | string>(null);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginUsernamePassword({ ...loginDetails, [e.target.name]: e.target.value });
  };
  const onClickHandleLogin = async () => {
    const { username, password } = loginDetails;

    if (!username.trim() || !password.trim()) {
      setFormError("Username and Password cannot be empty");
      return
    }
    if(valid){
      await userApi.login({
        email: username,
        password: password
      }).then((res) => {
        if(res === 200){
          console.log(res)
          closeOpenModal && closeOpenModal();
          loginAction();
        }
      });
    }
        
  };

  useEffect(() => {
    if (loginDetails.username || loginDetails.password) {

      setFormError(!valid ? message : null);
    }
  }, [loginDetails]);

  return (
    <>
      <div className={styles.register}>New Customer? <span className={styles.registerHere}> Register here</span></div>
      <div className={styles.container}>
        <div className={styles.passwordUsername}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            onChange={onChangeHandler}
          />
        </div>
        <div className={styles.passwordUsername}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            onChange={onChangeHandler}
          />
        </div>
        {formError && <div className={styles.formError}>{formError}</div>}
        <button className={styles.loginBtn} onClick={onClickHandleLogin}>
          Login
        </button>
        <p className={styles.forgotCredentials}>Forgot Username/Password</p>
      </div>
    </>
  );
}
