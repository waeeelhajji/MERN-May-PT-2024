import React from 'react'

const Ninja = (props) => {
    const { name, powerLevel } = props.ninja
    console.log(name)
    return (
        <fieldset>
            <legend>Ninja.jsx</legend>
            <h3>Name of our Ninja: {name}</h3>
            <h3>the Power of our Ninja: {powerLevel}</h3>
        </fieldset>
    )
}

export default Ninja