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


    const deleteMovie = (oneMovieId) => {
        Axios.delete('http://localhost:5000/api/movies/' + oneMovieId)
            .then(res => {
                console.log("Movie Has been Deleted")
                const filteredMovies = movies.filter((eachMovie) => {
                    return eachMovie._id !== oneMovieId;
                });
                setMovies(filteredMovies)
            })
            .catch(err => console.log(err))
    }




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

                            <Link to={"/movies/update/" + oneMovie._id}>UPDATE MOVIE</Link>

                            <br />
                            <button onClick={() => deleteMovie(oneMovie._id)}>DELETE ❌</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main