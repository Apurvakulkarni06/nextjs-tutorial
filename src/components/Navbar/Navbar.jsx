import Link from 'next/link'
import React from 'react'

const Navbar = () => {
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
    <div>
        <Link href="/">Home</Link>
        {
            links.map(({id:linkId, title, url}) =>(
                <Link key={linkId} href={url}>{title}</Link>
            ))
        }
    </div>
  )
}

export default Navbar