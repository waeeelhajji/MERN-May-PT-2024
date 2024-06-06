import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from "axios"


const OneMovie = () => {
    const { movie_id } = useParams()
    // console.log(movie_id)
    const [oneMovie, setOneMovie] = useState({})
    useEffect(() => {
        Axios.get("http://localhost:5000/api/movies/" + movie_id)
            .then((res) => {
                console.log(res.data)
                setOneMovie(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <div key={oneMovie._id}>
                <h3>{oneMovie.title}</h3>
                <img src={oneMovie.image} alt={oneMovie.title} width="200px" />
                <p>released : {oneMovie.releaseYear}</p>
                <p>have you seen this ? {oneMovie.seen ? "✅" : "❌"}</p>
            </div></div>
    )
}

export default OneMovie