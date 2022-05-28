import React, { useState, useEffect } from 'react'
import Gif from './Gif'
import getGifs from '../services/getGifs'

export default function ListOfGifs({ params }) {
    const { keyword } = params;
    // const [loading, setLoading] = useState(true);
    //const [gifs, setGifs] = useState([])
    const [gifs, setGifs] = useState({ loading: false, results: [] });

    /* useEffect(() => {
         getGifs({ keyword }).then((gifs) => {
             setGifs(gifs)
             setLoading(false);
         })
     }, [keyword])*/

    useEffect(function () {
        setGifs(
            actualGifs => ({ loading: true, results: actualGifs.results })
        )
        getGifs({ keyword })
            .then(gifs => {
                setGifs({ loading: false, results: gifs })
            })
    }, [keyword])

    if (gifs.loading) return <i className="loading">Cargando...</i>

    return <div>
        {
            gifs.results.map(({ id, title, url }) => (
                <Gif key={id} id={id} title={title} url={url} />
            ))
        }
    </div>
}