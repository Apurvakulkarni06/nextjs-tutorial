import Image from 'next/image'
import React from 'react'
import styles from "./footer.module.css"
const Footer = () => {
  return (
    <div className={styles.container}>
      @2023 Apurva. All rights reserved.
      <div className={styles.images}>
        <Image src="/1.png" className={styles.accountImg} width={15} height={15} alt="Facebook Account Logo" />
        <Image src="/2.png" className={styles.accountImg} width={15} height={15} alt="Facebook Account Logo" />
        <Image src="/3.png" className={styles.accountImg} width={15} height={15} alt="Facebook Account Logo" />
        <Image src="/4.png" className={styles.accountImg} width={15} height={15} alt="Facebook Account Logo" />
      </div>
    </div>
    
  )
}

export default Footer