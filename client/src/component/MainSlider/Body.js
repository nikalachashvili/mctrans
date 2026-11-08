import React from 'react'
import styles from './styles.module.scss'
import { CustomButton } from '../Common/CustomButton'
import coupe from "../../assets/icons/coupe.svg"
import hatckback from "../../assets/icons/hatchback.svg"
import hybrid from "../../assets/icons/hybrid.svg"
import sedan from "../../assets/icons/sedan.svg"
import suv from "../../assets/icons/suv.svg"
import kutxisS from "../../assets/icons/kutxisshavi.svg"
import kutxisT from "../../assets/icons/kutxis2.svg"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';



export default function Body() {
    const { t } = useTranslation();

    const data = [
        { link: "", icon: `${suv}`, name: t("mainsld.suv") },
        { link: "", icon: `${sedan}`, name: t("mainsld.sedan") },
        { link: "", icon: `${hatckback}`, name: t("mainsld.hatchback") },
        { link: "", icon: `${coupe}`, name: t("mainsld.coupe") },
        // { link: "", icon: `${hybrid}`, name: t("mainsld.hybrid") },
    ]

    const navigate = useNavigate();

    const InventoryHandleClick = () => {
        navigate('/cars');
    };

    const ContactUsHandleClick = () => {
        navigate('/contact');
    };


    return (
        <div className={styles.body}>
            <p className={styles.tag1}>{t("mainsld.tag1")}</p>
            <h1 className={styles.title}>
                {t("mainsld.title")}
            </h1>
            <div className={styles.btns}>
                <CustomButton>
                    <p className={styles.btn} onClick={InventoryHandleClick}>
                        {t("mainsld.inventory")}
                        <img src={kutxisT} alt='icon' />
                    </p>
                </CustomButton>
                <CustomButton light>
                    <p className={`${styles.btn} `} onClick={ContactUsHandleClick}>
                        {t("mainsld.contact")}
                        <img src={kutxisS} alt='icon' />
                    </p>
                </CustomButton>
            </div>
            <p className={styles.tag2}>{t("mainsld.tag2")}</p>
           
            <div className={styles.buttonWrapper}>
                <div className={styles.features}>
                    {data.map((item, index) => {
                        return (
                            <CustomButton light key={index}>
                                <Link to={item.link} className={styles.minibtn}>
                                    <img src={item.icon} className={styles.minibtn__img} />
                                    <p className={styles.minitxt}>{item.name}</p>
                                </Link>
                            </CustomButton>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}
