import React from 'react'
import styles from './Cars.module.scss'

export default function Item({ item, title, body, cover, createDate }) {

  return (
    <div className={styles.item}>
      <div className={styles.item__in}>
        {cover && <img src={cover} alt='' />}
      </div>
      <div className={styles.item__in}>{title}</div>
      <div className={styles.item__in}>{createDate}</div>
    </div>
  )
}
