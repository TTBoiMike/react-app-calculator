import React from 'react'

const Button = (props) => {
    return (
        <button className={props.classname} id={props.children} key={props.children} onClick={props.handleclick}>
            {props.children}
        </button>
    )
}

export default Button