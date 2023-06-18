import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

const Category = ({ params }) => {
  console.log("params:", params);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h2 className={styles.cardTitle}>Creative PortFolio</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imageContainer}>
          <Image
            fill={true}
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h2 className={styles.cardTitle}>Creative PortFolio</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imageContainer}>
          <Image
            fill={true}
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.content}>
          <h2 className={styles.cardTitle}>Creative PortFolio</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imageContainer}>
          <Image
            fill={true}
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt=""
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
