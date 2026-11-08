import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Form } from '../Form';
import { Input } from './Input';
import { CustomButton } from '../Common/CustomButton';
import calcbigimg from "../../assets/images/imgtree.png"
import calcimg1 from "../../assets/images/one.png"
import calcimg2 from "../../assets/images/imagetwo.png"
import { useTranslation } from 'react-i18next';


export const Calculator = () => {
    const [jami, setJami] = useState('')
    const { t } = useTranslation();
    const [selected, seSelected] = useState({
        cartype: "",
        sache: "",
        gaformeba: "",
    })

    function handleChange(e) {
        seSelected({ ...selected, [e.target.name]: e.target.value })
        console.log(selected)
    }

    const cartype = [
        {
            value: "400",
            text: t("calculator.oil")
        },
        {
            value: "800",
            text: t("calculator.electric")
        },
        {
            value: "450",
            text: t("calculator.hybrid")
        },
    ]

    const sache = [
        {
            value: "150",
            text: t("calculator.left")
        },
        {
            value: "250",
            text: t("calculator.right")
        }
    ]

    const gaformeba = [
        {
            value: "400",
            text: t("calculator.single")
        },
        {
            value: "700",
            text: t("calculator.double")
        }
    ]


    return (
        <div className={`${styles['calculator']}`}>
            <Form
                smallImage1={calcimg1}
                smallImage2={calcimg2}
                bigImage={calcbigimg}
                title={t("calculator.calcul")}
                onSubmit={(e)=>e.preventDefault()}
                >
                <div className='row'>
                    <div className='col-12'>
                        <p className={styles.calculator__forp}>{t("calculator.cartype")}</p>
                        <div className='row'>
                            {cartype?.map(el => {
                                return (
                                    <div className='col-auto' key={el.text}>
                                        <Input
                                            name="cartype"
                                            value={el.value}
                                            text={el.text}
                                            onChange={handleChange}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='col-auto'>
                        <p className={styles.calculator__forp}>{t("calculator.wheel")}</p>
                        <div className='row'>
                            {sache?.map(el => {
                                return (
                                    <div className='col-auto' key={el.text}>
                                        <Input
                                            name="sache"
                                            value={el.value}
                                            text={el.text}
                                            onChange={handleChange}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='col-auto'>
                        <p className={styles.calculator__forp}>{t("calculator.decoration")}</p>
                        <div className='row'>
                            {gaformeba?.map(el => {
                                return (
                                    <div className='col-auto' key={el.text}>
                                        <Input
                                            name="gaformeba"
                                            value={el.value}
                                            text={el.text}
                                            onChange={handleChange}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='col-6'>
                        <div>
                            <p className={styles.calculator__forp}>{t("calculator.year")}</p>
                            <select name="year" onChange={handleChange} className={styles.calculator__select} defaultValue={""}>
                                <option></option>
                                <option>2024</option>
                                <option>2023</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div>
                            <p className={styles.calculator__forp}>{t("calculator.engine")}</p>
                            <select name="engine" onChange={handleChange} className={styles.calculator__select} defaultValue={""}>
                                <option></option>
                                <option>2.0</option>
                                <option>2.5</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='mt-5'>
                            <CustomButton>
                                <p
                                    className={`${styles['calculator__btn']}`}
                                    onClick={() => setJami(Number(selected.cartype) + Number(selected.gaformeba) + Number(selected.sache))}>
                                    {`${jami} $ ` || '$'}
                                </p>
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    )
}
