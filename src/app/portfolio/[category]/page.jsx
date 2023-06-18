import Button from "@/components/Button/Button";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";

import { categories } from "./data";
import { notFound } from "next/navigation";

const getData = (category) => {
  const data = categories[category];
  return !!data ? data : notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{params.category}</h1>
      {data.map(({ title, id, desc, image }) => (
        <div className={styles.item} key={id}>
          <div className={styles.content}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <p>{desc}</p>
            <Button text="See More" url="#" />
          </div>
          <div className={styles.imageContainer}>
            <Image fill={true} src={image} alt="" className={styles.image} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
