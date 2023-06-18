import Image from "next/image";
import Hero from "public/hero.png";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for you digital products.</h1>
        <p className={styles.description}>Turning your idea into reality. We bring together the teams from globak tech industry.</p>
        <button className={styles.button}>See our works</button>
      </div>
      <div className={styles.item}>
        <Image className={styles.image} src={Hero} alt="main image" />
      </div>
    </div>
  );
}
