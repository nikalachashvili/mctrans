import React, { useEffect, useState } from 'react';
import getApi from '../../../http/getApi';
import Item from './Item';
import styles from './styles.module.scss';
import { Link } from 'react-router';

export default function BlogList() {
    const [data, setData] = useState([]);
    const [params, setParams] = useState({
        page: 1,
        limit: 5
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

    const deleteBlog = async (id) => {
        const confirm = window.confirm("ნამდვილად გსურს ბლოგის წაშლა?");
        if (!confirm) return;

        try {
            await getApi.deleteData(`/blogs/${id}`);
            setData(prev => prev.filter(blog => blog._id !== id));
            alert('წაშლა წარმატებით დასრულდა');
        } catch (err) {
            console.error('Error deleting blog:', err);
            alert('შეცდომა წაშლის დროს');
        }
    };

    const handleNext = () => {
        if (params.page < totalPages) {
            setParams(prev => ({ ...prev, page: prev.page + 1 }));
        }
    };

    const handlePrev = () => {
        if (params.page > 1) {
            setParams(prev => ({ ...prev, page: prev.page - 1 }));
        }
    };

    return (
        <div className={styles.blog}>
            <Link to={'add'}>დამატება</Link>
            <div className='d-flex justify-content-between'>
                <Item
                    title={'სახელი'}
                    createDate={'თარიღი'}
                    body={''}
                    cover={''}
                />
                <div className={styles.blog__delete}>delete</div>
            </div>
            {data?.map((item) => (
                <div key={item._id} className='d-flex justify-content-between'>
                    <Link to={`${item._id}`} className={styles.blog__link}>
                        <Item
                            title={item.title}
                            cover={item.image}
                            createDate={item.createDate}
                        />
                    </Link>
                    <button
                        onClick={() => deleteBlog(item._id)}
                        className={styles.blog__delete}
                        title="წაშლა"
                    >
                        delete
                    </button>
                </div>
            ))}

            {/* გვერდების გადამრთველი */}
            <div className={styles.blog__pagination}>
                <button onClick={handlePrev} disabled={params.page === 1}>
                    წინ
                </button>
                <span>გვერდი: {params.page} / {totalPages}</span>
                <button onClick={handleNext} disabled={params.page === totalPages}>
                    შემდეგი
                </button>
            </div>
        </div>
    );
}
