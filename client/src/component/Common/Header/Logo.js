import React from 'react'
import logo from "../../../assets/images/logo.png"
import smallLogo from "../../../assets/images/small_logo.png"
import styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'

export default function Logo() {

  const navigate = useNavigate();

  return (
    <div className={styles.header__logo}>
      <img onClick={() => navigate("/")} src={logo} alt='logo' className='d-none d-md-block'/>
      <img onClick={() => navigate("/")} src={smallLogo} alt='smalllogo' className='d-block d-md-none'/>
    </div>
  )
}
