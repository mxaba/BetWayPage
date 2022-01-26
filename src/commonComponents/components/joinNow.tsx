import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Modal } from "./modal";
import { AppRootState } from "../../store/reducers";
import styles from "./joinNow.module.css";
import { JoinNowModal } from "../../shared/join";


export function JoinNow() {
  const userLoggedIn = useSelector(({ user }: AppRootState) => user.loggedIn);
  const [modalIsOpen, setModalToTrueAndFalse] = useState(false);

  if (userLoggedIn) {
    return null;
  }

  return (
    <div className={styles.containerFooter}>
      <div className={styles.contentFooterl}>
        <p className={styles.contentFooterP}>SPORTS NEW CUSTOMER OFFER</p>
        <h3>Get up to £10 in Free Bets</h3>
        <button className={styles.joinBtn} onClick={() => setModalToTrueAndFalse(true)}>
          Join Now
        </button>
      </div>
      {modalIsOpen && (
        <Modal
          title="Join Now"
          content={<JoinNowModal />}
          onClose={() => setModalToTrueAndFalse(false)}
        />
      )}
    </div>
  );
}
