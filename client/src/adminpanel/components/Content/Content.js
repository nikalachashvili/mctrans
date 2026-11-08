import React, { useState } from 'react'

export default function Content({ title, children, language, setLanguage }) {

    function open(lang) {
        setLanguage(lang);
    }

    const selectedContent = children.filter((child) => {
        return child.props.lang === language || child.props.lang === undefined
    })

    return (
        <div>
            <h1>{title}</h1>
            <div>
                <div>
                    <button onClick={() => open('ka')}>geo</button>
                    <button onClick={() => open('en')}>eng</button>
                    <button onClick={() => open('ru')}>ru</button>
                </div>
                {selectedContent}
            </div>
        </div>
    )
}
