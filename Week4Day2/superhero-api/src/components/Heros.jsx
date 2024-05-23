import React, { useEffect, useState } from 'react'

import Axios from "axios"

const Heros = () => {


    const [Heroes, setHeroes] = useState([])

    useEffect(() => {
        Axios.get("https://akabab.github.io/superhero-api/api/all.json")
            .then(res => {
                console.log(res)
                //! Axios wraps the res in it's own .data key
                console.log(res.data)
                setHeroes(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])
    // ! Vanilla JS fetch
    const fetchHeroes = () => {
        fetch("https://akabab.github.io/superhero-api/api/all.json")
            .then(response => {
                //do something
                return response.json()
            }).then(jsonData => {
                console.log(jsonData)

            })
            .catch(err => {
                console.log("error", err);
            })
    }
    // !  Get Data with Axios 
    const AxiosHeroes = () => {
        Axios.get("https://akabab.github.io/superhero-api/api/all.json")
            .then(res => {
                console.log(res)
                //! Axios wraps the res in it's own .data key
                console.log(res.data)
                setHeroes(res.data)
            }).catch(err => {
                console.log(err)
            })

    }
    // AxiosHeroes()



    return (
        <fieldset>

            <legend>Heros.jsx</legend>
            <button onClick={fetchHeroes} e>Fetch Heroes</button> <p></p> <button onClick={AxiosHeroes} e>Axios Heroes</button>

            <hr />
            {/* {JSON.stringify(Heroes)} */}



            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>name</th>
                        <th>full name</th>
                        <th>publisher</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Heroes.map((oneHero, idx) => {
                            return (
                                <tr key={idx}>
                                    <td><img src={oneHero.images.sm} alt={oneHero.name} width="80" /></td>
                                    <td>{oneHero.name}</td>
                                    <td>{oneHero.biography.fullName ? oneHero.biography.fullName : "UNKNOWN"}</td>
                                    <td>{oneHero.biography.publisher}</td>

                                </tr>
                            )
                        })
                    }




                </tbody>

            </table>

        </fieldset>
    )
}

export default Heros