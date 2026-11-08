import React from 'react'
import styles from './styles.module.scss'
import Cover from './Cover'
import Body from './Body'

export const MainSlider = () => {
    return (
        <section className={styles.slider}>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <Body />
                    </div>
                </div> 
            </div>
            <Cover />
        </section>
    )
}
