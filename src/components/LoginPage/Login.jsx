import React from 'react';
import styles from './LoginPage.module.css';
import { Link } from 'react-router-dom';


// Importing images for login page
import loginImg from '../../assets/loginCredentialsImg.png';


const Login = () => {
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
                        <div className={styles.emailWrapper}>
                            <label htmlFor="email">Student ID</label>
                            <input className={styles.emailInput}  type="text" />
                        </div>
                        

                        <div className={styles.passwordWrapper}>
                            <label htmlFor="password">Password</label>
                            <input className={styles.passwordInput} type="password" />
                        </div>


                        <div className={styles.rememberMeWrapper}>
                            <input type="checkbox" className={styles.rememberMeCheckbox} />
                            <label htmlFor="rememberMeCheckbox">Remember Me</label>
                        </div>

                        <Link to="/dashboard" className={styles.submitButtonWrapper}>
                            <button type="submit" className={styles.submitButton}>Sign in</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;