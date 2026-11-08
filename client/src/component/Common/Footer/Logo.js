import React from 'react'
import styles from './styles.module.scss'
import logo from "../../../assets/images/logo.png"
import { useNavigate } from 'react-router-dom'

export const Logo = () => {

  const navigate = useNavigate();

  return (
    <figure className={styles['footer__logo']}>
        <img onClick={() => navigate("/")} src={logo} alt='logo' className=''/>
    </figure> 
  )
}
