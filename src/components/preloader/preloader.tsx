import React from 'react';
import styles from './preloader.module.scss';

function Preloader() {
    return (
        <div className={styles.back}>
            <div className={styles.loader}></div>
        </div>
        
    )
}

export default Preloader