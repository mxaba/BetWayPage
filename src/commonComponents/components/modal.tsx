import styles from "./modal.module.css";

interface IModalProps {
  title: string;
  content: React.ReactNode;
  onClickClose: () => void;
}

export function Modal({ title, content, onClickClose: onClose }: IModalProps) {
  return (
    <div className={styles.modalPopWrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          <span className={styles.closeModalBtn} onClick={onClose}>&times;</span>
        </div>
        {content}
      </div>
    </div>
  );
}
