import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'


const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a Category</h1>
      <div className={styles.catgories}>
        <Link className={styles.catgory} href="/portfolio/illustration" >
          <span className={styles.categoryTitle}>Illustration</span>
        </Link>

        <Link className={styles.catgory} href="/portfolio/website" >
          <span className={styles.categoryTitle}>Webistes</span>
        </Link>

        <Link className={styles.catgory} href="/portfolio/application" >
          <span className={styles.categoryTitle}>Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio