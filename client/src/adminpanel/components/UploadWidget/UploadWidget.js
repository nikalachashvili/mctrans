import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './UploadWidget.module.scss';
import Loading from '../Loading/Loading';

export default function UploadWidget({ setData, title, value, name = 'cover' }) {
    const [imageUrl, setImageUrl] = useState('');
    const [load, setLoad] = useState(false);

    // თუ არსებობს value, მაშინ თავიდანვე შევინახოთ არსებული გამოსახულება
    useEffect(() => {
        if (value) {
            setImageUrl(value); // წინასწარ გამოჩნდება ბლოგის არსებული ფოტო
        }
    }, [value]);

    const handleChange = async (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        setLoad(true);
        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/upload/image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setImageUrl(res.data.url); // განახლებული გამოსახულება

            setData((prev) => ({
                ...prev,
                [name]: res.data.url, // ახალ URL-ის შენახვა `cover`-ში
            }));
            setLoad(false);
        } catch (err) {
            console.error('Upload error:', err);
            alert('Upload failed');
            setLoad(false);
        }
    };
    return (
        <div className={styles.uploadwidget}>
            <p>{title}</p>
            <input type="file" onChange={handleChange} className={styles.uploadwidget__input} />
            {load && <Loading />}
            <div className={styles.uploadwidget__cover}>
                {imageUrl && <img src={imageUrl} alt="Uploaded" />}
            </div>
        </div>
    );
}
