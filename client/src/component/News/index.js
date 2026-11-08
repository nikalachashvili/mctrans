import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import getApi from '../../http/getApi';
import Loading from '../Loading/Loading';
import { CardItem } from '../CardItem';
import { Section } from '../Common/Section';
import { useTranslation } from 'react-i18next';

export const News = () => {
    
    const [data, setData] = useState();
    const { t } = useTranslation();
    const [params, setParams] = useState({
        page: 1,
        limit: 20
    });
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        async function fetchData() {
            try {
                const queryString = new URLSearchParams(params).toString();
                const blogs = await getApi.getData(`/blogs?${queryString}`);
                setData(blogs.data); // თუ გაქვს pagination სტრუქტურა, დაარეგულირე
                setTotalPages(blogs.totalPages); // თუ გიგზავნის საერთო გვერდებს
            } catch (err) {
                console.error('Error fetching blogs:', err);
            }
        }

        fetchData();
    }, [params]);

    return (
        <Section smollTitle={t("news.blog")}>
            <div className={`${styles['lastblog']}`}>
                    {!data && <Loading />}
                    <div className='row'>
                        {data?.map((item) => {
                            return (
                                <div className='col-12 col-md-6 col-lg-4 d-flex' key={item._id}>
                                    <CardItem item={item} name="blogs"/>
                                </div>
                            )
                        })}
                    </div>
            </div>
        </Section>
    )
}
