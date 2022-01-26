import React, { useState, useEffect } from "react";
import { inputValidate } from "../../commonComponents/utils/inputValidation";

import styles from "./../login/index.module.css";

export function JoinNowModal({ onLoginClickCallback }: { onLoginClickCallback?: () => void }) {
  const [details, setDetails] = useState({
    emailAddress: ""
  });
  const [formError, setFormError] = useState<null | string>(null);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    const { emailAddress: emailAddress } = details;

    if (!emailAddress.trim()) {
      setFormError("EmailAddress cannot be empty");
    }
  };

  useEffect(() => {
    if (details.emailAddress) {
      const { isInputvalid: valid, errorMessage: message } = inputValidate(
        details.emailAddress, details.emailAddress
      );

      setFormError(!valid ? message : null);
    }
  }, [details]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.passwordUsername}>
          <label htmlFor="emailAddress">Email Address</label>
          <input
            type="text"
            placeholder="Enter Email Address"
            id="emailAddress"
            name="emailAddress"
            onChange={handleOnChange}
          />
        </div>
        {formError && <div className={styles.formError}>{formError}</div>}
        <button className={styles.loginBtn} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}
