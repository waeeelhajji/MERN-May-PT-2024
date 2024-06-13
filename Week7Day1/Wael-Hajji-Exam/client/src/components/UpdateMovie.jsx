import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Axios from "axios"

const UpdateMovie = () => {
    const { movie_id } = useParams()
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [releaseYear, setReleaseYear] = useState(1800)
    const [seen, setSeen] = useState(false)
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:5000/api/movies/" + movie_id)
            .then((res) => {
                console.log(res.data)
                setTitle(res.data.title)
                setImage(res.data.image)
                setReleaseYear(res.data.releaseYear)
                setSeen(res.data.seen)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [movie_id])
    const SubmitHandler = (e) => {
        e.preventDefault()
        const tempOBjectToSend = {
            title,
            image,
            releaseYear,
            seen
        }
        Axios.patch('http://localhost:5000/api/movies/' + movie_id, tempOBjectToSend)
            .then(res => {
                console.log('✅✅✅✅', res.data)
                navigate('/')
            })
            .catch(err => {
                console.log('❌❌❌❌❌', err.response.data.errors)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }


    return (
        <div> <h3>Update Movie </h3>
            <div>
                {errors.map((err, index) => <p key={index} style={{ color: "red" }}>{err}</p>)}
            </div>
            <form onSubmit={SubmitHandler}>
                <div>
                    title:
                    <input value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div>
                    Movie Image:
                    <input value={image} onChange={e => setImage(e.target.value)} />
                </div>
                <div>
                    Release Year :
                    <input type='number' value={releaseYear} onChange={e => setReleaseYear(e.target.value)} />
                </div>
                <div>
                    Have you seen this ? :
                    <input type='checkbox' checked={seen} onChange={e => setSeen(e.target.checked)} />
                </div>
                <p></p>

                <button>Submit</button>


            </form>

        </div>
    )
}

export default UpdateMovie