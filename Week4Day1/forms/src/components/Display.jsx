import React from 'react'

const Display = (props) => {
    const { AllAnimalsInTheZoo } = props
    return (
        <fieldset>
            <legend>Display.jsx</legend>

            {
                AllAnimalsInTheZoo.map((oneAnimal) => {
                    return <li>{oneAnimal}</li>
                })
            }
        </fieldset>
    )
}

export default Display