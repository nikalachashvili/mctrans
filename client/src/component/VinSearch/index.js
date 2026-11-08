import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { Form } from '../Form';
import { CustomButton } from '../Common/CustomButton';
import calcbigimg from "../../assets/images/calcbigimg.svg"
import containers from "../../assets/images/containers.svg"
import calcimg2 from "../../assets/images/calcimg2.svg"
import { CustomInput } from '../Common/CustomInput';
import { useTranslation } from 'react-i18next';
import { Result } from './result';

export const VinSearch = () => {
    const { t } = useTranslation();
    const [ip, setIp] = useState('')
    const [bigImage, setBigImage] = useState('')

    const [values, setValues] = useState({
        vin: "",
        container: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setResponse(null);

        const vinTrimmed = values.vin.trim();
        const containerTrimmed = values.container.trim();

        if (!vinTrimmed && !containerTrimmed) {
            setError("შეიყვანე VIN კოდი ან კონტეინერის ნომერი.");
            return;
        }

        if (vinTrimmed && vinTrimmed.length !== 17) {
            setError("VIN კოდი უნდა იყოს 17 სიმბოლოიანი.");
            return;
        }

        if (!vinTrimmed && containerTrimmed.length < 11) {
            setError("კონტეინერის კოდი ძალიან მოკლეა.");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/vincheck`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    vin: vinTrimmed,
                    container: containerTrimmed
                })
            }).finally(()=>{
                setValues({
                    vin: "",
                    container: "",
                })
            })

            if (!res.ok) {
                throw new Error("სერვერის პასუხი არასწორია");
            }

            const data = await res.json();
            setResponse(data);
        } catch (err) {
            console.error(err);
            setError("დაფიქსირდა შეცდომა. გთხოვ სცადე ხელახლა.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/ip`)
            .then(res => res.json())
            .then(data => setIp(data.ip))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className={`${styles['vin']}`}>
            {/* <p>{ip && ip}</p> */}
            <Form
                smallImage1={containers}
                smallImage2={calcimg2}
                bigImage={calcbigimg}
                title={t("vin.company")}
                onSubmit={handleSubmit}
            >
                <div>
                    <p className={styles.vin__firstp}>{t("vin.info")}</p>
                    <p className={styles.vin__secondp}>{t("vin.code")}</p>

                    <CustomInput
                        type="text"
                        title={t("vin.title1")}
                        name="vin"
                        value={values.vin}
                        placeholder={t("vin.plholder1")}
                        onChange={handleChange}
                    />

                    <CustomInput
                        type="text"
                        title={t("vin.title2")}
                        name="container"
                        value={values.container}
                        placeholder={t("vin.plholder2")}
                        onChange={handleChange}
                    />

                    {error && <p style={{ color: "red", marginTop: 10 }}>{error}</p>}

                    <CustomButton type="submit" disabled={loading}>
                        <p className={styles.vin__btn}>
                            {loading ? "..." : t("vin.search")}
                        </p>
                    </CustomButton>
                </div>
            </Form>
            {response && <Result item={response} setBigImage={setBigImage} />}
            {bigImage && (
                <div className={`${styles['vin__bigimage']}`} onClick={()=>setBigImage('')}>
                    <img src={bigImage} alt='img' />
                </div>
            )}
        </div>
    );
};
