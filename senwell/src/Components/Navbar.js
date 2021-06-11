import React from 'react'
import styles from "./Css/Navbar.module.css";


const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.links}>
                <div className={styles.logo}>
                    <span>
                            <img src="https://s3-eu-west-1.amazonaws.com/wplivemedia/wp-content/uploads/20200417145801/logo-lotto.png"/>
                    </span>
                </div>
                <div className={styles.navigation}>
                    <span>HOME</span>
                    <span>STORE</span>
                    <span>CHARITY</span>
                    <span>HELP</span>
                </div>
            </div>
            <div className={styles.loginAndLang}> 
                <button className={styles.loginBtn}>login</button> 
                <select className={styles.select}>
                     <option value="English">
                        English
                    </option></select></div>
        </div>
    )
}

export { Navbar }
