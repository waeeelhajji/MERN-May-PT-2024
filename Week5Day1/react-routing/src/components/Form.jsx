import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {


    const [heroNumber, setHeroNumber] = useState(1)

    const nav = useNavigate()



    const SubmitHandler = (e) => {
        e.preventDefault()
        nav(`/hero/${heroNumber}`)
    }


    return (
        <div>
            {JSON.stringify(heroNumber)}
            <form onSubmit={SubmitHandler}>
                <input type="number" onChange={e => { setHeroNumber(e.target.value) }} />
                <button>Get Hero</button>
            </form>
        </div>
    )
}

export default Form