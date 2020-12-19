import React from 'react'
import View from './view'
import Buttons from './buttons'
import * as Math from 'mathjs'
import './App.css'

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equation: "",
        evaluation: "",
        answer: ""
    }
    this.reset = this.reset.bind(this)
    this.calculateAnswer = this.calculateAnswer.bind(this)
    this.handleNumber = this.handleNumber.bind(this)
    this.handleOperator = this.handleOperator.bind(this)
    this.handleOperation = this.handleOperation.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  reset() {
      this.setState({
        equation: "",
        evaluation: "",
        answer: ""
      })
  }

  calculateAnswer() {
    try {
      let answer = Math.evaluate(this.state.evaluation)
      this.setState({
        answer: answer
      })
    } catch (e) {
      if (e instanceof SyntaxError) {
        this.setState({
          answer: "Error"
        })
      }
    }
  }

  handleNumber(element) {
      this.setState((state) => ({
      equation: state.equation + element,
      evaluation: state.evaluation + element
    }))
  }

  handleOperator(element) {
    if(element === "CLEAR") {
      this.reset();
    } else if (element === "DEL") {
      this.setState((state) => ({
        equation: state.equation.slice(0, state.equation.length-1),
        evaluation: state.evaluation.slice(0, state.evaluation.length-1),
        answer: ""
      }))
    } else if (element === "=") {
      this.calculateAnswer()
    } else {
      this.handleOperation(element)
    }
  }

  handleOperation(element) {
    if (element === "x") {
      this.setState((state) => ({
          equation: state.equation + element,
          evaluation: state.evaluation + "*"
      }))
    } else if (element === "÷") {
      this.setState((state) => ({
        equation: state.equation + element,
        evaluation: state.evaluation + "/"
      }))
    } else {
      this.setState((state) => ({
      equation: state.equation + element,
      evaluation: state.evaluation + element
      }))
    }
  }

  handleClick(element) {
    let buttonClicked = element.currentTarget;
    
    if(buttonClicked.className === "number") {
      console.log("number clicked")
      this.handleNumber(buttonClicked.id)
    } else {
      console.log("operator clicked")
      this.handleOperator(buttonClicked.id)
    }    
  }

  
  render() {
    return (
        <>
      <div className="calculator">
        <View equation={this.state.equation} answer={this.state.answer}/>
        <Buttons handleclick={this.handleClick} />
      </div>
      </> 
    )
  }
}

export default Calculator;