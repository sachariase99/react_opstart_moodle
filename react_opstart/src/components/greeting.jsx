import React from 'react'

const Greeting = (props) => {
    return (
        <>
            <ul>
                <li>Hej, {props.name}!</li>
            </ul>
        </>
    )
}

export default Greeting
