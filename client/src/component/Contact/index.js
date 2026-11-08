import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './styles.module.scss'
import { Form } from '../Form';
import { CustomButton } from '../Common/CustomButton';
import contactimg1 from "../../assets/images/ctcimg2.png"
import contactimg2 from "../../assets/images/ctcimg1.png"
import contactimg3 from "../../assets/images/ctcimg3.png"
import { CustomInput } from '../Common/CustomInput';
import { useTranslation } from 'react-i18next';
import Loading from '../Loading/Loading';

export const Contact = () => {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        fullname: "",
        phonenumber: "",
    })

    function handleChange(e) {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/mail`, {
                name: values.fullname,
                phone: values.phonenumber,
            }).finally(() => {
                setValues({
                    fullname: "",
                    phonenumber: "",
                })
                setLoading(false)
            })
            alert('მაილი გაიგზავნა წარმატებით');
        } catch (err) {
            alert('დაფიქსირდა შეცდომა');
        }
    };

    useEffect(()=>{
        return
    }, [values])

    return (
        <div className={`${styles['contact']}`}>
            <Form
                smallImage1={contactimg2}
                smallImage2={contactimg3}
                bigImage={contactimg1}
                title={t("contact.title")}>
                <div>
                    <p className={styles.contact__firstp}>{t("contact.firstp")}</p>
                    <CustomInput
                        type={'text'}
                        title={t("contact.inputtitle1")}
                        name={'fullname'}
                        value={values.fullname}
                        placeholder={t("contact.plcholder1")}
                        onChange={handleChange}
                    />
                    <CustomInput
                        type={'text'}
                        title={t("contact.inputtitle2")}
                        name={'phonenumber'}
                        value={values.phonenumber}
                        placeholder={t("contact.plcholder2")}
                        onChange={handleChange}
                    />
                    <CustomButton disabled={loading}>
                        {loading && (
                            <div style={{ position: 'relative' }}>
                                <Loading />
                            </div>
                        )}
                        {!loading && (
                            <p className={styles.contact__btn} onClick={handleSubmit}>
                                {t("contact.submit")}
                            </p>
                        )}
                    </CustomButton>
                </div>
            </Form>
        </div>
    )
}
