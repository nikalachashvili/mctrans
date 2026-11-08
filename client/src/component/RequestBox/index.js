import React from 'react'
import styles from './styles.module.scss'
import Box from './Box'
import { CustomButton } from '../Common/CustomButton'
import { Section } from '../Common/Section'
import { Link } from 'react-router-dom'
import electricCar from "../../assets/icons/electric-car.svg.svg"
import electricCar2 from "../../assets/icons/electric-car2.svg"
import kutxis2 from "../../assets/icons/kutxis2.svg"
import { useTranslation } from 'react-i18next';


export const RequestBox = () => {
    const { t } = useTranslation();

    return (
        <Section>
            <div className={styles['requestbox']}>
                <div className='row'>
                    <div className={`col-12 col-lg-6 d-flex`}>
                        <Box
                            color={'#E9F2FF'}
                            title={t('request.box1')}
                            desc={t('request.box1txt')}
                            icon={electricCar}
                        >
                            <CustomButton>
                                <Link to={'/contact'} className={styles['requestbox__link']}>
                                    {t('request.contact')}
                                    <img src={kutxis2} alt='kutxis2'/>
                                </Link>
                            </CustomButton>
                        </Box>
                    </div>
                    <div className={`col-12 col-lg-6 d-flex`}>
                        <Box
                            color={'#FFE9F3'}
                            title={t('request.box2')}
                            desc={t('request.box2txt')}
                            icon={electricCar2}

                        >
                            <CustomButton dark>
                                <Link to={'/contact'} className={styles['requestbox__link']} >
                                    {t('request.contact')}
                                    <img src={kutxis2} alt='kutxis2'/>
                                </Link>
                            </CustomButton>
                        </Box>
                    </div>
                </div>
            </div>
        </Section>
    )
}
