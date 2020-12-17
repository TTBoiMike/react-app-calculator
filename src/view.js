import React from 'react'

const  View = (props) => {

    return (
        <div className="view">
            <div className="view-equation"><p>{props.equation}</p></div>
            <div className="view-answer"><h1>{props.answer}</h1></div>
        </div>
    )
}

export default View