import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import getApi from '../../http/getApi';
import { Link } from 'react-router-dom';
import { Section } from '../Common/Section';
import Item from './Item';
import expoffers from "../../assets/icons/expoffers.svg"
import dealership from "../../assets/icons/dealership.svg"
import expricing from "../../assets/icons/expricing.svg"
import service from "../../assets/icons/service.svg"
import { useTranslation } from 'react-i18next';

export const WhyUs = () => {

    const { t } = useTranslation();

    return (
        <Section bigTitle={t("why.text")} background> 
            <div className={`${styles['']}`}>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <Item icon={expoffers} title={t("why.title1")} item={t("why.item1")}/>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <Item icon={dealership} title={t("why.title2")} item={t("why.item2")}/>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <Item icon={expricing} title={t("why.title3")} item={t("why.item3")}/>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <Item icon={service} title={t("why.title4")} item={t("why.item4")}/>
                    </div>
                </div> 
            </div>
        </Section>
    )
}
