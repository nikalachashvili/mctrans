import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next';

export const Menu = () => {

  const { t } = useTranslation();

  const data = [
    { link: "/", title: t("footer.home") },
    { link: "/teams", title: t("footer.salesteam")},
    { link: "/vin", title: t("footer.vin")},
    { link: "/news", title: t("footer.news")},
    { link: "/cars", title: t("footer.catalog")},
    { link: "/calculator", title: t("footer.customcl")},
  ]

  return (
    <ul className={`${styles['footer__menu']} d-flex flex-row flex-wrap`}>
      {data.map((item) => {
        return (
          <li key={item.title}>
            <NavLink className={({ isActive }) => `${isActive ? styles['footer__menu--active'] : styles.txtblack}`} to={item.link}>{item.title}</NavLink>
          </li>
        )
      })}
    </ul>
  )
}
