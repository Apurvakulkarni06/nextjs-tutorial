"use client"
import Link from 'next/link'
import React from 'react'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import styles from "./navbar.module.css"

const Navbar = ({user}) => {
    const links = [
        {
            id:1,
            title:"About",
            url:"/about"
        },
        {
            id:2,
            title:"Contact",
            url:"/contact"
        },
        {
            id:3,
            title:"Portfolio",
            url:"/portfolio"
        },
        {
            id:4,
            title:"Blog",
            url:"/blog"
        },
        {
            id:5,
            title:"Dashbaord",
            url:"/dashboard"
        }
    ]
  return (
    <div className={styles.container}>
        <Link className={styles.logo} href="/">Home</Link>
        <div className={styles.links}>
            <DarkModeToggle />
        {
            links.map(({id:linkId, title, url}) =>(
                <Link className={styles.link} key={linkId} href={url}>{title}</Link>
            ))
        }
        {
            user &&
        <button className={styles.logoutButton} onClick={() => console.log("Logout now!")}>
            Logout  {user.email}!
        </button>
}
        </div>
    </div>
  )
}

export default Navbar