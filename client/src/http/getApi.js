import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

const axiosInstance = axios.create({
    baseURL: API,
    withCredentials: true, // თუ გჭირდება cookie-ს გაგზავნა (აუცილებელია ზოგ სერვერზე)
});

// GET
async function getData(url, config = {}) {
    try {
        const res = await axiosInstance.get(url, config);
        return res.data;
    } catch (err) {
        console.error('GET error:', err?.response || err);
        throw err;
    }
}

// POST
async function postData(url, data) {
    try {
        const isFormData = data instanceof FormData;

        const res = await axiosInstance.post(url, data, {
            headers: {
                'Content-Type': isFormData
                    ? 'multipart/form-data'
                    : 'application/json',
            },
        });

        return res.data;
    } catch (error) {
        console.error('POST error:', error?.response || error);
        throw error;
    }
}

// PUT
async function putData(url, data, config = {}) {
    try {
        const res = await axiosInstance.put(url, data, config);
        return res.data;
    } catch (err) {
        console.error('PUT error:', err?.response || err);
        throw err;
    }
}

// DELETE
async function deleteData(url, config = {}) {
    try {
        const res = await axiosInstance.delete(url, config);
        return res.data;
    } catch (err) {
        console.error('DELETE error:', err?.response || err);
        throw err;
    }
}

export default {
    getData,
    postData,
    putData,
    deleteData,
};
