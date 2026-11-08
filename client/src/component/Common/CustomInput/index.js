import React from 'react'
import styles from './styles.module.scss'

export const CustomInput = ({ title, type, name, value, placeholder, onChange }) => {
  return (
    <label className={styles.custominput}>
      <p className={styles.custominput__title}>{title}</p>
      <input 
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={styles.custominput__input}
        />
    </label>
  )
}
