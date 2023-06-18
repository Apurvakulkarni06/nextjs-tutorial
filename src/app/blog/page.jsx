import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
      <Link href="/blog/test1">
        <div className={styles.item}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.img}
              src="https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={400}
              height={250}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.cardTitle}>Test</h1>
            <p className={styles.description}>Desc</p>
          </div>
        </div>
      </Link>

      <Link href="/blog/test2">
        <div className={styles.item}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.img}
              src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={400}
              height={250}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.cardTitle}>Test</h1>
            <p className={styles.description}>Desc</p>
          </div>
        </div>
      </Link>
      <Link href="/blog/test3">
        <div className={styles.item}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.img}
              src="https://images.pexels.com/photos/3900437/pexels-photo-3900437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={400}
              height={250}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.cardTitle}>Test</h1>
            <p className={styles.description}>Desc</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
