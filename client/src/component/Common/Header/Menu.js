import styles from './styles.module.scss'
import React, { useEffect, useState } from "react";
import logo from "../../../assets/images/logo.png"
import burger from "../../../assets/icons/burger.svg"
import ixsiki from "../../../assets/icons/ixsiki.svg"
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation();


  const data = [
    { link: "/", title: t("menu.home") },
    { link: "/cars", title: t("menu.catalog")},
    { link: "/news", title: t("menu.news") }, 
    { link: "/teams", title: t("menu.salesteam") },
    { link: "/calculator", title: t("menu.customcl") },
    { link: "/vin", title:t("menu.vin") },
  ]

  return (
    <nav>
      <div className="d-flex align-items-center justify-content-between">
        <div className='d-none d-lg-block'>
          {data?.map((item) => {
            return (
              <NavLink className={({ isActive }) =>`${styles.header__item} ${isActive ? styles.active : ''}`} to={item.link} key={item.title}>{item.title}</NavLink>
            )
          })}
        </div>
        <button className="d-block d-lg-none" onClick={() => setIsOpen(!isOpen)} style={{ border: "none", background: "white" }}>
          {!isOpen ? (
            <img src={burger} onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }} />
          ) : (
            <img src={ixsiki} onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }} />
          )}
        </button>
      </div>

      <div className={`container ${isOpen ? "d-block" : "d-none"} d-lg-none`}>
        <div className={styles.header__open}>
          <div className={styles.header__boxrow}>
            {data?.map((item) => {
              return (
                <NavLink onClick={() => setIsOpen(!isOpen)} className={({ isActive }) =>`${styles.header__minibox} ${isActive ? styles.Phoneactive : ''}`} to={item.link} key={item.title}>{item.title}</NavLink>
              )
            })}
          </div>

          <img src={logo} alt='logo' className='d-block d-lg-none img-fluid mx-auto mt-1' style={{width: '100%'}} />
        </div>
      </div>
    </nav>
  );
}
