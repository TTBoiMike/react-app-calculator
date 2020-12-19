import React from 'react'

const  View = (props) => {

    return (
        <div className="view">
            <h1>{props.answer}</h1>
            <p>{props.equation}</p>
        </div>
    )
}

export default View