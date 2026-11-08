import React, { useEffect, useState } from 'react'
import { siteTranslateAction } from '../../../store/translate'
import { useDispatch, useSelector } from "react-redux";

const SelectLanguage = () => {
    let { language } = useSelector(state => state.translate)
    const [select, setSelect] = useState(language)
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch()

    console.log(language)

    function openSelect() {
        setOpen(!open)
    }

    useEffect(() => {
        dispatch(siteTranslateAction.changeLanguage(select))
    }, [select])

    return (
        <div style={{ position: 'relative' }}>
            <div 
                onClick={() => openSelect()}
                style={{
                    marginLeft: '12px'
                }}>
                {select}
            </div>
            {open && (
                <div
                    onClick={()=>setOpen(!open)}
                    className='list'
                    style={{
                        position: 'absolute',
                        background: '#fff',
                        padding: '0 11px',
                        borderRadius: '5px',
                        fontSize: '14px',
                        cursor: 'pointer'
                    }}>
                    {language != 'ka' && <p onClick={() => setSelect('ka')}>ka</p>}
                    {language != 'en' && <p onClick={() => setSelect('en')}>en</p>}
                    {language != 'ru' && <p onClick={() => setSelect('ru')}>ru</p>}
                </div>
            )}
        </div>
    )
}

export default SelectLanguage