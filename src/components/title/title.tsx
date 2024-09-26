import React from "react"
import styles from './title.module.scss'

function Title({word}) {
    return(
        <h2 className={styles.title}>{word}</h2>
    )
}

export default Title