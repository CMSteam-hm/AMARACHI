import styles from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <form
      className={styles.wrapper}
      target="_blank"
      action="https://formsubmit.co/saed.leo@gmail.com"
      method="POST"
    >
      <div className={styles.inputs}>
        <input
          className={styles.input}
          type="text"
          name="name"
          placeholder="Your name"
          required
        />
        <input
          className={styles.input}
          type="email"
          name="email"
          placeholder="Your email"
          required
        />
      </div>
      <div className={styles.textareas}>
        <textarea
          className={styles.textarea}
          type="text"
          name="message"
          placeholder="Your message"
          required
        />
        <button className={styles.send} type="submit">
          <img className={styles.icon} src="/images/submit2.png" alt="" />
        </button>
      </div>
    </form>
  );
};