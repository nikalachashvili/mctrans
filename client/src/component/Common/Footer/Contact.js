import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import facebook from "../../../assets/icons/facebook.svg"
import instagram from "../../../assets/icons/instagram.svg"
import linkedin from "../../../assets/icons/linkedin.svg"
import twitter from "../../../assets/icons/twitter.svg"
import { useTranslation } from 'react-i18next';

export const Contact = () => {

  const { t } = useTranslation();

  return (
    <div className={styles['footer__social']}>
      <h3 className={styles['footer__title']}>{t("footer.connect")}</h3>
      <ul className={styles['footer__social--list']}>
        <li>
          <Link to="/test">
            <img src={facebook} alt='icon' /> 
          </Link>
        </li>
        <li>
          <Link to="/test">
            <img src={twitter} alt='icon' />
          </Link>
        </li>
        <li>
          <Link to="/test">
            <img src={instagram} alt='icon' />
          </Link>
        </li>
        <li>
          <Link to="/test">
            <img src={linkedin} alt='icon' />
          </Link>
        </li>
      </ul>
    </div>
  )
}
