import React, { useState } from 'react'
import styles from './styles.module.scss'
import downarrow from "../../assets/icons/downarrow.svg"
import { useTranslation } from 'react-i18next';

const AskedQuestions = () => {

    const { t } = useTranslation();

    const items = [
        {
            question: t("askque.text1"),
            answer: t("askque.answer1"),
        },
        {
            question: t("askque.text2"),
            answer: t("askque.answer2"),
        },
        {
            question: t("askque.text3"),
            answer: t("askque.answer3"),
        },
        {
            question: t("askque.text4"),
            answer: t("askque.answer4"),
        },
        {
            question: t("askque.text5"),
            answer: t("askque.answer5"),
        },
        {
            question: t("askque.text6"),
            answer: t("askque.answer6"),
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="container py-5">
            <h3 className={styles.mainitem__title}>{t("askque.title")}</h3>
            <div className="row gy-4">
                {items.map((item, index) => (
                    <div className="col-lg-6" key={index}>
                        <div className={styles.mainitem}>
                            <button
                                className={`${styles.ourbtn}`}
                                onClick={() => toggle(index)}
                            >
                                <p className={styles.forquestion}>{item.question}</p>
                                <p className={styles.mainitem__arrow}><img className={styles.forimg} src={downarrow}/></p>
                            </button>
                            {openIndex === index && (
                                <div className={styles.content}>
                                    <p className={styles.foranswer}>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AskedQuestions 
