import React from 'react'

const AnotherComp = (props) => {
    console.log(props)
    const { bob, data, x } = props




    return (
        <fieldset>
            <legend> AnotherComp.jsx</legend>
            props:{JSON.stringify(props)}
            <p></p>
            {bob}
            <p></p>
            {
                data.map((eachAnimal) => {
                    return <li>{eachAnimal}</li>
                })
            }
            <p></p>

            {x}

        </fieldset>
    )
}

export default AnotherComp