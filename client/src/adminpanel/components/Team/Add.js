import React, { useEffect, useState } from 'react';
import Content from '../Content/Content';
import CustomInput from '../CustomInput/CustomInput';
import UploadWidget from '../UploadWidget/UploadWidget';
import getApi from '../../../http/getApi';
import { useParams } from 'react-router';

export default function AddTeam() {
  const { id } = useParams();
  const [language, setLanguage] = useState('ka'); // გამოიყენება თუ ოდესმე გექნება მრავალენოვანი ველები

  const [data, setData] = useState({
    name: '',
    location: '',
    cover: '',
  });

  useEffect(() => {
    async function fetchTeam() {
      if (!id) return;
      try {
        const team = await getApi.getData(`/teams/${id}`);
        setData({
          name: team.name || '',
          location: team.location || '',
          cover: team.cover || '',
        });
      } catch (err) {
        console.error('Failed to load team member', err);
      }
    }

    fetchTeam();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submit = async () => {
    try {
      if (id) {
        await getApi.putData(`/teams/${id}`, data);
        alert('წევრი წარმატებით განახლდა');
      } else {
        await getApi.postData('/teams', data);
        alert('წევრი წარმატებით დაემატა');
      }
    } catch (error) {
      alert('დაფიქსირდა შეცდომა');
      console.error(error);
    }
  };

  return (
    <Content title="გუნდის წევრი" language={language} setLanguage={setLanguage}>
      <UploadWidget
        title="ფოტო"
        setData={setData}
        value={data.cover}
        name="cover"
      />
      <CustomInput
        title="სახელი"
        type="text"
        value={data.name}
        name="name"
        placeholder="შეიყვანე სახელი"
        onChange={handleInputChange}
      />
      <CustomInput
        title="ლოკაცია"
        type="text"
        value={data.location}
        name="location"
        placeholder="შეიყვანე ლოკაცია"
        onChange={handleInputChange}
      />
      <button onClick={submit}>შენახვა</button>
    </Content>
  );
}
