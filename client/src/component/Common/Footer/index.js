import React from 'react'
import styles from './styles.module.scss'
import { Logo } from './Logo'
import { Menu } from './Menu'
import { WorkInfo } from './WorkInfo'
import { Contact } from './Contact'

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className='row'>
        <div className='col-lg-4'> 
          <Logo />
        </div>
        <div className='col-lg-8'>
          <div className='row'>
            <div className='col-md-6'>
              <Menu />
            </div>
            <div className='col-md-6 d-flex flex-sm-row flex-column justify-content-between'>
              <WorkInfo />
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
