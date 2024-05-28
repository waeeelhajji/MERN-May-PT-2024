import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { json, useNavigate, useParams } from 'react-router-dom'

const Hero = () => {

    const [oneHero, setOneHero] = useState(null)

    const { num } = useParams()
    console.log(num)
    const nav = useNavigate()

    useEffect(() => {
        getHero()
    }, [num])

    const getHero = () => {
        axios.get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${num}.json`)
            .then(res => {
                console.log(res.data)
                setOneHero(res.data)
            }).catch(err => {
                nav("/error")
                console.log("this is Catch ", err)
            })
    }
    return (
        <div>
            <h1>One Hero</h1>
            {/* {JSON.stringify(oneHero)} */}
            {
                oneHero ? (
                    <>
                        <h3>{oneHero.name}</h3>
                        <img src={oneHero.images.sm} alt="" />
                    </>
                ) : <h2>loading ...</h2>
            }





        </div>
    )
}

export default Hero