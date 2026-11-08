import React, { useEffect, useState } from 'react';
import CustomEditor from '../CustomEditor/CustomEditor';
import Content from '../Content/Content';
import Language from '../Content/Language';
import CustomInput from '../CustomInput/CustomInput';
import UploadWidget from '../UploadWidget/UploadWidget';
import getApi from '../../../http/getApi';
import { useParams } from 'react-router';

export default function AddBlog() {
  const [language, setLanguage] = useState('ka');
  const { id } = useParams();

  const [data, setData] = useState({
    title: {
      en: '',
      ka: '',
      ru: '',
    },
    desc: {
      en: '',
      ka: '',
      ru: '',
    },
    cover: '',
  });

  useEffect(() => {
    async function fetchBlog() {
      if (!id) return;
      try {
        const blog = await getApi.getData(`/blogs/${id}`);
        setData({
          title: {
            en: blog?.title?.en || '',
            ka: blog?.title?.ka || '',
            ru: blog?.title?.ru || '',
          },
          desc: {
            en: blog?.desc?.en || '',
            ka: blog?.desc?.ka || '',
            ru: blog?.desc?.ru || '',
          },
          cover: blog?.cover || '',
        });
      } catch (err) {
        console.error('ბლოგის ჩატვირთვა ვერ მოხერხდა', err);
      }
    }

    fetchBlog();
  }, [id]);

  const handleTitleChange = (e) => {
    const { value } = e.target;
    setData((prev) => ({
      ...prev,
      title: {
        ...prev.title,
        [language]: value,
      },
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
        await getApi.putData(`/blogs/${id}`, data);
        alert('ბლოგი წარმატებით განახლდა');
      } else {
        await getApi.postData('/blogs', data);
        alert('ბლოგი წარმატებით დაემატა');
      }
    } catch (error) {
      alert('დაფიქსირდა შეცდომა');
      console.error(error);
    }
  };

  return (
    <Content title="ბლოგის დამატება" language={language} setLanguage={setLanguage}>
      <UploadWidget
        title="მთავარი ფოტო"
        setData={setData}
        value={data.cover}
        name="cover"
      />

      <Language lang={language}>
        <CustomInput
          title="სათაური"
          type="text"
          value={data.title[language]}
          name="title"
          placeholder="შეიყვანე სათაური"
          onChange={handleTitleChange}
        />

        <CustomEditor
          section="desc"
          name={language}
          value={data.desc[language]}
          onChange={handleEditorChange}
          title="აღწერა"
        />
      </Language>

      <button onClick={submit}>შენახვა</button>
    </Content>
  );
}
