import React from 'react'
import './Gif.css'

export default function Gif({ id, title, url }) {
    return (
        <a href={`#${id}`} className='gif'>
            <h4>{title}</h4>
            <img
                src={url}
                key={id}
                alt={title}
            />
        </a>
    )
}