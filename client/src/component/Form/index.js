import React from 'react'
import styles from './styles.module.scss'
import { Cover } from './Cover';

export const Form = ({smallImage1,smallImage2, bigImage, title, children, onSubmit}) => {

    return ( 
        <div className={`${styles['formpage']}`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <Cover smallImage1={smallImage1} smallImage2={smallImage2} bigImage={bigImage}/>
                    </div>
                    <div className="col-md-7">
                        <form className={`${styles['form']}`} onSubmit={onSubmit}>
                            <h1 className={`${styles['form__title']}`}>{title}</h1>
                            {children}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
