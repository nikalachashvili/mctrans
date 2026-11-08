import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import getApi from '../../http/getApi';
import { Link } from 'react-router-dom';
import { Section } from '../Common/Section';
import Item from './Item';
import { useTranslation } from 'react-i18next';

export const Benefits = () => {

    const { t } = useTranslation();

    return (
        // <Section>
        <div className={`${styles['benefits']}`}>
            <div className='container'>
                <div className={`${styles['benefits__container']}`}>
                    <div className='container'>
                        <div className={styles.benefits__title}>
                            <h3>{t("benefits.title")}</h3>
                        </div>
                        <div className='row'>
                            <div className={`col-lg-3  ${styles.benefits__marginrow}`}>
                                <Item title={t("benefits.title1")} text={t("benefits.benefit1")}/>
                            </div>
                            <div className={`col-lg-3 ${styles.benefits__marginrow}`}>
                                <Item title={t("benefits.title2")} text={t("benefits.benefit2")}/>
                            </div>
                            <div className={`col-lg-3 ${styles.benefits__marginrow}`}>
                                <Item title={t("benefits.title3")} text={t("benefits.benefit3")}/>
                            </div>
                            <div className={`col-lg-3 ${styles.benefits__marginrow}`}>
                                <Item title={t("benefits.title4")} text={t("benefits.benefit4")}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        // </Section>
    )
}
