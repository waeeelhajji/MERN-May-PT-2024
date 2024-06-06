import React, { useEffect, useState } from 'react'
import Axios from "axios"
import { Link } from "react-router-dom"

const Main = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:5000/api/movies/")
            .then((res) => {
                console.log(res.data)
                setMovies(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])




    return (
        <div>
            {/* {JSON.stringify(movies)} */}
            {
                movies.map((oneMovie) => {
                    return (
                        <div key={oneMovie._id}>
                            <Link to={"/movies/" + oneMovie._id}>
                                <h3>{oneMovie.title}</h3>
                            </Link>
                            <img src={oneMovie.image} alt={oneMovie.title} width="200px" />
                            <p>released : {oneMovie.releaseYear}</p>
                            <p>have you seen this ? {oneMovie.seen ? "✅" : "❌"}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main