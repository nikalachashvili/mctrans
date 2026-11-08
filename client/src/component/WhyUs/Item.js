import React from 'react'
import styles from './styles.module.scss'


export default function Item({ icon, title, item}) {

    return (
        <div className={styles.item}>
            <figure className={styles.item__icon}>
                <img src={icon}/>
            </figure>
            <h3 className={styles.item__title}>{title}</h3>
            <p className={styles.item__desc}>{item}</p>
        </div>
    ) 
}
