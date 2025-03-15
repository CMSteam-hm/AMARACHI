import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <h1 className={styles.title}>AMARACHI GRACE NNADI</h1>
      <p>Cedar County Estate, Sangotedo, Ajah, Lagos.</p>
      <p>+234 8130211548 | amarah1583@gmail.com</p>
      <div className={styles.socials}>
       
        <a href="" target="_blank" rel="noopener noreferrer">
          <img src="/images/f1 (2).png" alt="social-icon"
          className={styles.icon}
          />
        </a>

        <a href="" target="_blank" rel="noopener noreferrer">
          <img src="/images/lindedin.png" alt="social-icon"
          className={styles.icon}
          />
        </a>

        <a href="" target="_blank" rel="noopener noreferrer">
          <img src="/images/f1 (1).png" alt="social-icon"
          className={styles.icon}
          />
        </a>

      </div>
    </footer>
  );
};