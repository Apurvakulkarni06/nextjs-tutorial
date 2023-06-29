import React from "react";
import styles from "./page.module.css"

const Signup = ({ email, password, onSubmit}) =>{
    
    return(
        <div className={styles.container}>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email}  placeholder="Enter your email"/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} placeholder="Enter your password" />
                <button type="submit">Sign Up</button>
            </form>

        </div>
    )
}

export default Signup;