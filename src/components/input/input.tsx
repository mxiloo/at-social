import React from "react"
import styles from './input.module.scss'


function Input({value, setValue, placeholder}) {

    const handleClear = () => {
        setValue('')
    }

    return(
        <label className={styles.box}>
            <span className={styles.text}>{placeholder}</span>
            <div className={styles.input_box}>
                <input className={styles.input}  value={value} onChange={e => setValue(e.target.value)} type={'text'} placeholder={`${placeholder}`} />
                {value ? <div className={styles.clear} onClick={() => handleClear()}></div> : null}
            </div>
        </label>
    )
}

export default Input