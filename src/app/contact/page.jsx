import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.item}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.contactImg}
            src="/contact.png"
            alt="contact image"
            fill={true}
          />
        </div>
      <form className={styles.form}>
        <input
          className={styles.input}
          name="name"
          type="text"
          placeHolder="name"
        />
        <input
          className={styles.input}
          name="email"
          type="email"
          placeHolder="email"
        />
        <textarea
          className={styles.textArea}
          name="message"
          placeHolder="message"
          cols={30}
          rows={10}
        ></textarea>
        <Button url="/" text="Send" />
      </form>
    </div>
    </div>
  );
};

export default Contact;
