import React, { useState } from 'react'
import Display from "./Display"

const Form = () => {

    const [animal, setAnimal] = useState("")

    const [zoo, setZoo] = useState(["🦛", "🐄", "🦆"]);


    const SubmitHandler = (e) => {
        e.preventDefault()
        console.log("Hello From From Submit Handler")
        if (zoo.length < 5) {

            setZoo([...zoo, animal])
        }
        setAnimal("")
    }


    return (
        <fieldset>
            <legend>Form.jsx</legend>
            Animal State : {JSON.stringify(animal)}
            <p></p>
            {/* Zoo  State : {JSON.stringify(zoo)} */}


            <form onSubmit={SubmitHandler}>
                <p>Enter animal emoji</p>
                <input onChange={(e) => setAnimal(e.target.value)} value={animal} />
                {zoo.length >= 5 ? <p style={{ backgroundColor: "red" }}>No adding more Animal </p> : <p style={{ backgroundColor: "green" }}>this Animal it Can be added </p>}
                <button>New Animal</button>
            </form>
            <Display AllAnimalsInTheZoo={zoo} />
        </fieldset>
    )
}

export default Form