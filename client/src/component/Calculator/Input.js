import React from 'react'
import styles from './styles.module.scss'

export const Input = ({ name, value, text, onChange }) => {
    return (
        <label className={`${styles['label']}`}>
            <input
                type={'radio'}
                name={name}
                value={value}
                className={`${styles['label__input']}`}
                onChange={onChange}
            />
            <p className={`${styles['label__text']}`}>{text}</p>
        </label>
    )
}
