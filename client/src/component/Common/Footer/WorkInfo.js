import React from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'react-i18next';

export const WorkInfo = () => {

   const { t } = useTranslation();

  return (
    <div className={styles['footer__work']}>
      <h3 className={styles['footer__title']}>{t("footer.hour")}</h3>
      <p>{t("footer.dro1")}</p>
    </div>
  )
}
