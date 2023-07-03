import Link from "next/link";
import React from "react";
import Button from "../Button/Button";
import styles from "./page.module.css";

const Authform = ({ user, handleSubmit, handleChange, formData }) => {

const {email, password, view} = formData;

const handleInput = (e) =>{
  console.log("ee:", e.target)
  handleChange(e)

}
  
return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <h1 className={styles.title}>{ view ==="signin" ? 'Sign In ' : 'Sign Up'}</h1>
        <div className={styles.item}>
          <label htmlFor="email">Email</label>
          <input
            className={styles.input}
            type="email"
            placeholder="Example@gmail.com"
            name="email"
            value={email}
            onInput={(event) => handleInput(event)}
          />
        </div>

        <div className={styles.item}>
          <label htmlFor="password">Password</label>
          <input
            className={styles.input}
            type="password"
            placeholder=".........."
            name="password"
            value={password}
            onChange={(e)=> handleChange(e)}
          />
        </div>

        <p className={styles.accountText}>
          Do you have already account ?
          <Link href={ view ==="signin" ?  "/signin" : '/signup'} className={styles.signinText}>
            {
              view ==="signin" ? 'Sign Up' : 'Sign In'
            }
          </Link>
        </p>

        <Button url="/" text={ view ==="signin" ? 'Sign In' : 'Sign Up'} />
      </form>
    </div>
  );
};

export default Authform;
