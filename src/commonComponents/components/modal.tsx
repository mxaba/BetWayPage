import styles from "./modal.module.css";

interface IModalProps {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
}

export function Modal({ title, content, onClose }: IModalProps) {
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
