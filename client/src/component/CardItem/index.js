import React from 'react'
import styles from './styles.module.scss'
import { CustomButton } from '../Common/CustomButton'
import { Link } from 'react-router-dom'
import pin from "../../assets/icons/pin.svg"
import post from "../../assets/icons/post.svg"
import person from "../../assets/icons/person.svg"
import vector from "../../assets/icons/Vector.svg"
import isari from "../../assets/icons/isari.svg"
import petrol from "../../assets/icons/petrol.svg"
import kutxis from "../../assets/icons/kutxis.svg"
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux'

export const CardItem = ({ item, name }) => {
    const { t } = useTranslation();
    const { language } = useSelector(state => state.translate)

    return (
        <div className={styles.card}>
            {item?.cover && (
                <figure className={styles.card__cover}>
                    <img src={item?.cover} alt='cover' />
                </figure>
            )}
            {name === 'cars' && <h1 className={styles.card__title}>{item?.title}</h1>}
            {name === 'teams' && <h1 className={`${styles['card__title']} ${styles['card__title--team']}`}> <img src={person} style={{ marginRight: '6px' }} alt='person' />{item?.name}</h1>}
           
           
           
           
            {name === 'blogs' && <h1 className={`${styles.card__title}`}>
                <Link to={`/news/${item._id}`}>{item?.title?.[language]}</Link>
            </h1>}
            <div className={styles.card__body}>
                {/* blog description */}
                {item?.desc && <div dangerouslySetInnerHTML={{ __html: item?.desc?.[language] }}></div>}
                {item?.location && <div className={styles.icontext}><img src={pin} alt='pin' /><p>{item?.location}</p></div>}
                {item?.location && <div className={styles.icontext}><img src={post} alt='post' /><p>sale@mctrans.ge</p></div>}
                {item?.location && <div className="d-flex justify-content-center align-items-center"><CustomButton >
                    <Link to="/contact" className={styles['btn__link']}>
                        <div className='d-flex justify-content-center align-items-center'>
                            <p>{t("carditem.write")}</p>
                        </div>
                    </Link>
                </CustomButton></div>}
                {/* car */}
                {item?.fwd && (
                    <div className={styles.cardetail} >
                        <div>
                            <div><p className={styles.iconMid}><img src={isari} alt='isari' />{item?.fwd}</p></div>
                        </div>
                        <div >
                            <div><p className={styles.iconMid}><img src={vector} alt='vector' />{item?.kolofi}</p></div>
                        </div>
                        <div>
                            <div><p className={styles.iconMid}><img src={petrol} alt='petrol' />{item?.dzravi}</p></div>
                        </div>
                    </div>
                )}
                {item?.price && (
                    <div>
                        <p className={styles.pricetxt}>
                            {item?.price}
                        </p>
                    </div>
                )}
                {/* {item?.price && (
                    <div className={styles.Linkcontainer}>
                        <Link to="" className={styles.cornerlink}>
                            {t("carditem.details")}<img src={kutxis} alt='kutxis' className={styles.kutxis} style={{ display: "unset" }} />
                        </Link>
                    </div>
                )} */}
            </div>
        </div>
    )
}
