import React from 'react'

export default function Language({lang, children}) {
  return (
    <div data-lang={lang} key={lang}>
        {children}
    </div>
  )
}
