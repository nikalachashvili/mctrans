import React from 'react'
import styles from './styles.module.scss'

export const Section = ({ children, bigTitle, smollTitle, background }) => {
    return (
        <section className={styles.section} style={background && {backgroundColor: '#F9FBFC'}}>
            <div className='container'>
                {smollTitle && (
                    <div className={styles.section__head}>
                        {smollTitle}
                    </div>
                )}
                {bigTitle && <h1 className={styles.section__title}>{bigTitle}</h1>}
            {children}
            </div>
        </section>
    )
}
