import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import { noFound } from 'next/navigation'

const getPosts = async () =>{

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if(!res.ok){
    return noFound()
  }

  return res.json()


}
const Blog = async() => {
  const data = await getPosts();

  return (
    <div className={styles.container}>
      {
        data.map(({id:postId, title, body })=>(
          <Link href={`/blog/${postId}`} key={postId}>
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
              <h1 className={styles.cardTitle}>{title}</h1>
              <p className={styles.description}>{body}</p>
            </div>
          </div>
        </Link>
        ))
      }
    </div>
  );
};

export default Blog;
