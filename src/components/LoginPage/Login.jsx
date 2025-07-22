import React from 'react';
import styles from './LoginPage.module.css';

// Importing images for login page
import loginImg from '../../assets/loginCredentialsImg.png';


export default function Login() {
    return (
        <div className={styles.container}>
            <div className={styles.loginBox}>
                <div className={styles.leftSideImg}>
                    <img src={loginImg} alt="didn't load image" />
                </div>

                <div className={styles.rightSideCredentials}>
                    <h2>Login</h2>
                    <p>Enter your credentials to access your account</p>

                    <form>
                        <label htmlFor="username">Student ID</label>
                        <input id="username" type="text" />

                        <label htmlFor="pasword">Password</label>
                        <input id="password" type="text" />

                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
