import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import styles from './mystyle.module.css'
import './mysass.scss'

// class MyForm extends React.Component{
// 	constructor(props){
// 		super(props)
// 		this.state = {username: "",
// 						age: null,
// 						errormessage: ""
// 					}
// 	}
// 	submitHeader = (event) =>{
// 		event.preventDefault()
// 		let age = this.state.age
// 		if(!Number(age))
// 			alert("You must enter a number")
// 	}
// 	changeHeader = (event) =>{
// 		let name = event.target.name
// 		let val = event.target.value
// 		let err = ""
// 		if (name == "age"){
// 			if(val != "" && !Number(val)){
// 				err = <strong>Your age must be a number</strong>
// 			}
// 		}
// 		this.setState({errormessage: err})
// 		this.setState({[name]: val})
// 	}
// 	render(){
// 		return(
// 			<form onSubmit = {this.submitHeader}>
// 				<h1>Hello {this.state.username} {this.state.age}</h1>
// 				<p>Enter your name:</p>
// 				<input type = "text" name = "username" onChange = {this.changeHeader}/>
// 				<p>Enter your age:</p>
// 				<input type = "text" name = "age" onChange = {this.changeHeader}/><br/>
// 				{this.state.errormessage}<br/>
// 				<input type = "submit"/>
// 			</form>
// 			)
// 	}
// }



// class TeaxtArea extends React.Component{
// 	constructor(props){
// 		super(props)
// 		this.state = {description: "The confasfkjsaf afdjlaksdjflkadsf asm asifjlksajfs fsopskjf;lasd;fm flkasf;lkf;las f asof;laskf;lasf;l olkf;lasf;laskf okf;laskf;lasmf lsfk;laskf;lasdf as;ldkf;lasdkf;lmsda faslkf;lasmfas df;laskf;lasmf "}
// 	}
// 	render(){
// 		return(
// 			<form>
// 				<textarea value = {this.state.description}></textarea>
// 			</form>)
// 	}
// }

// class FormSelect extends React.Component{
// 	constructor(props){
// 		super(props)
// 		this.state = {myCar : "Fiat"}
// 	}
// 	render(){
// 		return (
// 			<form>
// 			<select value = {this.state.myCar}>
// 				<option value = "Volvo">Volvo</option>
// 				<option value = "Ford">Ford</option>
// 				<option value = "Fiat">Fiat</option>
// 			</select>
// 			</form>
// 			)
// 	}
// }


class MyHeader extends React.Component{
	render(){
		const mystyle ={
			color: "white",
			backgroundColor : "DodgerBlue",
			padding : "10px",
			fonFamily: "Arial"
		}
		return(
			<div>
				<h1>Hello World</h1>
				<p>Welcome to my page</p>
			</div>
			)
	}
}

ReactDOM.render(<MyHeader />, document.getElementById("root"))