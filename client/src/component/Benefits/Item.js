import React from 'react'
import styles from './styles.module.scss'
import allstar from "../../assets/images/allstar.svg"
import { useTranslation } from 'react-i18next';

export default function Item({ item, title, text }) {

    const { t } = useTranslation();

    return (
        <div className={styles.item}>
            <h1>{title}</h1>
            <p>{text}</p>
            <div className={styles.forimg}>
                <img src={allstar}/>
            </div>
        </div>
    )
}
