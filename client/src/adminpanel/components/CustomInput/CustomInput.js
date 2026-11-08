import React from 'react'
import styles from './CustomInput.module.scss'

export default function CustomInput({
    type,
    value,
    name,
    title,
    placeholder,
    onChange,
}) {
  return (
    <div className={`${styles['custominput']}`}>
        <p className={`${styles['custominput__title']}`}>{title}</p>
        <input 
            className={`${styles['custominput__input']}`}
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={e => onChange(e)}
            />
        {false && <p>error</p>}
    </div>
  )
}
