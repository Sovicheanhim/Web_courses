import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom"
import Header from './components/layout/Header'
import Todos from './components/Todos'
import AddTodo from "./components/AddTodo"
import About from "./components/pages/About"
import './App.css';
// import uuid from 'uuid'
import axios from 'axios';

class App extends React.Component{
state = {
  todos:[
    // {
    //   id: uuid.v4(),
    //   title: "Take out the trash",
    //   completed: false,

    // },
    // {
    //   id: uuid.v4(),
    //   title: "Dinner with wife",
    //   completed: false,

    // },
    // {
    //   id: uuid.v4(),
    //   title: "Meeting with boss",
    //   completed: false,

    // }
  ]
}
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => {
      this.setState({todos: res.data})
      console.log(res.data);
    })
  }
  // Toggle the task 
  markComplete = (id) =>{
    this.setState({todos: this.state.todos.map(todo =>{
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })})
  }

  delTodo = (id) =>{
    axios.delete("https://jsonplaceholder.typicode.com/todos/${id}")
    .then(res => this.setState({todos: this.state.todos.filter(todo => todo.id !== id)}))
    // this.setState({todos: this.state.todos.filter(todo => todo.id !== id)})
  }

  addTodo = (title) =>{
    if (title === ""){
      alert("You're entering an empty string. Try again")
    }
    else{
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        title: title,
        completed: false
      }).then(res => this.setState({ todos: [...this.state.todos, res.data]}))
    }
    // const newTodo = {
    //   id: uuid.v4(),
    // // id: this.state.todos.length + 1,
    //   title : title,
    //   completed: false
    // }
    // this.setState({ todos: [...this.state.todos, newTodo]})
    
  }

  render(){
    return (
      <Router>
      <div className="App">
        <div className = "container">
        <Header />
        <Route exact path = "/" render = {props => (
          <React.Fragment>
            <AddTodo addTodo = {this.addTodo}/>
            <Todos todos = {this.state.todos} markComplete = {this.markComplete}
                    delTodo = {this.delTodo}
            />
          </React.Fragment>
        )}/>
        <Route path = "/about" component = {About}/>
        </div>
      </div>  
      </Router>
    );
  }
}

export default App;