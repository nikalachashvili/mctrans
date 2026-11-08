import React from 'react'
import { Section } from '../Common/Section'
import styles from './styles.module.scss'

export const Result = ({ item, setBigImage }) => {
    return (
        <Section smollTitle={`Vin: ${item?.vin}`}>
            <div className='row'>
                <div className='col-lg-7'>
                    <div className={styles['vin__result--images']}>
                        {item?.PhotoList?.map((img) => {
                            return (
                                <div key={img}>
                                    <img src={img} alt='img' onClick={e=>setBigImage(e.target.currentSrc)} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='col-lg-5'>
                    <div className={styles['vin__result--text']}>
                        <h2>Vehicle Information</h2>
                        <ul>
                            <li>VIN: {item?.vin}</li>
                            <li>Conteyner Entry Date: {item?.ContainerEntryDate}</li>
                            <li>Conteyner Open Date: {item?.ContainerOpenDate}</li>
                            <li>Conteyner Number: {item?.ContainerNumber}</li>
                            <li>Container Line: {item?.ContainerLine}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Section>
    )
}
