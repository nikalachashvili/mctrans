import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import getApi from '../../http/getApi';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { CardItem } from '../CardItem';
import { Section } from '../Common/Section';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from 'react-i18next';

export const Cars = () => {
    const { t } = useTranslation();
    const [data, setData] = useState();
    const [params, setParams] = useState({
        page: 1,
        limit: 20
    });
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        async function fetchData() {
            try {
                const queryString = new URLSearchParams(params).toString();
                const blogs = await getApi.getData(`/cars?${queryString}`);
                setData(blogs.data); // თუ გაქვს pagination სტრუქტურა, დაარეგულირე
                setTotalPages(blogs.totalPages); // თუ გიგზავნის საერთო გვერდებს
            } catch (err) {
                console.error('Error fetching blogs:', err);
            }
        }

        fetchData();
    }, [params]);

    return (
        <Section smollTitle={t("cars.text")} background>
            <div className={`${styles['cars']}`}>
                {!data && <Loading />}
                <div className='row'>
                    {data?.map((item) => {
                        return (
                            <div className='col-12 col-md-6 col-lg-3' key={item._id} >
                                <CardItem item={item} name="cars" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </Section>
    )
}
