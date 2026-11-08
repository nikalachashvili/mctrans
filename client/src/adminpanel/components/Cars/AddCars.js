import React, { useEffect, useState } from 'react';
import CustomEditor from '../CustomEditor/CustomEditor';
import Content from '../Content/Content';
import Language from '../Content/Language';
import CustomInput from '../CustomInput/CustomInput';
import UploadWidget from '../UploadWidget/UploadWidget';
import getApi from '../../../http/getApi';
import { useParams } from 'react-router';

export default function AddCars() {
  const [language, setLanguage] = useState('ka');
  const { id } = useParams();

  const [data, setData] = useState({
    title: '',
    body: {
      en: '',
      ka: '',
      ru: '',
    },
    price: '100 $',
    cover: '',
    fwd: '',
    kolofi: '',
    dzravi: ''
  });

  useEffect(() => {
    async function fetchBlog() {
      if (!id) return;
      try {
        const blog = await getApi.getData(`/cars/${id}`);
        const blogData = blog

        console.log(blog)

        setData((prev) => ({
          ...prev,
          ...blogData,
          body: {
            en: blogData?.body?.en || '',
            ka: blogData?.body?.ka || '',
            ru: blogData?.body?.ru || '',
          },
        }));
      } catch (err) {
        console.error('Failed to load blog', err);
      }
    }

    fetchBlog();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditorChange = (section, name, value) => {
    setData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value,
      },
    }));
  };

  const submit = async () => {
    try {
      if (id) {
        // ედიტირება
        console.log(data)
        await getApi.putData(`/cars/${id}`, data);
        alert('ბლოგი წარმატებით განახლდა');
      } else {
        // დამატება
        await getApi.postData('/cars', data);
        alert('ბლოგი წარმატებით დაემატა');
      }
    } catch (error) {
      alert('დაფიქსირდა შეცდომა');
      console.error(error);
    }
  };

  return (
    <Content title="ბლოგის დამატება" language={language} setLanguage={setLanguage}>
      {/* მთავარი ფოტო */}
      <UploadWidget
        title="მთავარი ფოტო"
        setData={setData}
        value={data.cover || ''}
      />
      {/* სათაური */}
      <CustomInput
        title="სათაური"
        type="text"
        value={data?.title}
        name="title"
        placeholder="enter text"
        onChange={handleInputChange}
      />

      <CustomInput
        title="ფასი"
        type="text"
        value={data?.price}
        name="price"
        placeholder="enter text"
        onChange={handleInputChange}
      />

      {/* წამყვანი */}
      <CustomInput
        title="წამყვანი"
        type="text"
        value={data.fwd || ''}
        name="fwd"
        placeholder="წამყვანი"
        onChange={handleInputChange}
      />

      {/* კოლოფი */}
      <CustomInput
        title="კოლოფი"
        type="text"
        value={data.kolofi || ''}
        name="kolofi"
        placeholder="კოლოფი"
        onChange={handleInputChange}
      />

      {/* ძრავი */}
      <CustomInput
        title="ძრავი"
        type="text"
        value={data.dzravi || ''}
        name="dzravi"
        placeholder="ძრავი"
        onChange={handleInputChange}
      />

      {/* აღწერა */}
      <Language lang={language}>
        <CustomEditor
          section="body"
          name={language}
          value={data.body?.[language] || ''}
          onChange={handleEditorChange}
          title="აღწერა"
        />
      </Language>

      {/* გამგზავნობა */}
      <button onClick={submit}>დამატება</button>
    </Content>
  );
}
