import React from 'react'
import styles from './styles.module.scss'

export default function Box({title, desc, icon, children, color}) {
  return (
    <div className={styles['requestbox__item']} style={{backgroundColor: color}}>
        <h2 className={styles['requestbox__item--title']}>{title}</h2>
        <p className={styles['requestbox__item--desc']}>{desc}</p>
        <div className='d-flex align-items-center justify-content-between'>
            {children}
            <img src={icon} className={styles['requestbox__item--icon']} alt='icon' />
        </div>
    </div>
  )
}
