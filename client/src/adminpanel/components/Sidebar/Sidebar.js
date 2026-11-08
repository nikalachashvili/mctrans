import React, { useState } from 'react'
import { Link } from 'react-router'
import styles from './Sidebar.module.scss'

export default function Sidebar() {
    const [openSection, setOpenSection] = useState('')
    const data = [
        {
            _id: '542gda3',
            title: 'მთავარი',
            url: '/adminpanel'
        },
        {
            _id: 'gs344ds',
            title: 'მანქანები',
            url: '/adminpanel/cars'
        },
        {
            _id: 'dsgdfsg3vc',
            title: 'თანამშრომლები',
            url: '/adminpanel/teams'
        },
        {
            _id: 'bfdbfee5',
            title: 'ბლოგი',
            url: '/adminpanel/blogs'
        },
    ]

    function open(_id) {
        if (openSection === _id) {
            setOpenSection('');
        } else {
            setOpenSection(_id);
        }
    }

    return (
        <div className={`${styles['sidebar']}`}>
            <ul className={`${styles['sidebar__menu']}`}>
                <Link className={`${styles['sidebar__menu--link']}`} to={'/'} target='_blank'>
                    <p className={`${styles['sidebar__menu--title']}`}>საიტზე გადასვლა</p>
                </Link>
                {data?.map((item) => {
                    return (
                        <li className={`${styles['sidebar__menu--item']}`} key={item._id} onClick={() => open(item._id)}>
                            {item.url && (
                                <Link className={`${styles['sidebar__menu--link']}`} to={item.url}>
                                    <p className={`${styles['sidebar__menu--title']}`}>{item.title}</p>
                                </Link>
                            )}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
