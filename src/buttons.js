import React from 'react'
import Button from './button'

const Buttons = (props) => {
    
    const buttons = [0, 1, "+", 2, 3, "-", 4, 5, "÷", 6, 7, "x", 8, 9, ".", "DEL", "CLEAR", "="]
    
    let displayButtons = [];
    let equals = [];

    buttons.forEach((button) => {
        if(isNaN(button)) {
            displayButtons.push(
            <Button classname="operator" id={toString(button)} handleclick={props.handleclick}>{button}</Button>
            )

        } else {
            displayButtons.push(
                <Button classname="number" id={toString(button)} handleclick={props.handleclick}>{button}</Button> 
            )
        }
    })

    return (
        <div className="buttons">
            {displayButtons}
        </div>
    )
}

export default Buttons