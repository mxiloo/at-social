import React from "react"
import styles from './header.module.scss';
import { getUsers } from "../utils/api.ts";

function Header() {
    return (
        <header className={styles.section}>
            <div className={styles.container}>
                <div className={styles.logo}></div>
                <div className={styles.box}>
                    <div className={styles.like}></div>
                    <div className={styles.bell}></div>
                    <div className={styles.profile_box}>
                        <div className={styles.avatar_mini}></div>
                        <span className={styles.name}>Имя Фамилия</span>
                    </div>
                </div>
            </div>
            
        </header>
    )
}

export default Header