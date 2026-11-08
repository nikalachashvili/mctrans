import React from 'react'
import styles from './styles.module.scss'

export default function Item({ item, name, body, cover, createDate }) {

  return (
    <div className={styles.item}>
      <div className={styles.item__in}>
        {cover && <img src={cover} alt='' />}
      </div>
      <div className={styles.item__in}>{name}</div>
      <div className={styles.item__in}>{createDate}</div>
    </div>
  )
}
