import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './components/Todo'
import Header from './components/layout/Headers'
import Addtodo from './components/layout/AddTodo'
import About from './components/pages/About'
import './App.css';
import {v4 as uuid} from 'uuid'
import axios from 'axios';


class App extends Component {
  state = {
    todos:[{
      id: uuid(),
      title: 'take out the trash',
      completed: false
    },
    {
      id: uuid(),
      title: 'Walk the dog',
      completed: false
    },
    {
      id: uuid(),
      title: 'code',
      completed: false
    }
  ]
  }
//toggle todos
 markComlete = (id) => {
  this.setState({todos:this.state.todos.map(todo => {
    if (todo.id === id){
      todo.completed = !todo.completed
    }
    return todo;
  })})
 }

 //delete todos

 delTodo = (id) =>{
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
 }

 

 addTodo = ( title ) =>{

   if (title === ''){
     return
   }

   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(resp => {
      console.log(resp.data)
    });

   const newTodo = {
   id: uuid(),
   title ,
   completed: false
 }
   this.setState({todos:[...this.state.todos, newTodo]})
 }
  render(){
    
  return (
    <Router>
      <div className="App">
      <div className="container">
      <Header />
      <Route exact path="/" render={props =>(
        <React.Fragment>
           <Addtodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markComplete={this.markComlete} delTodo={this.delTodo}/>
        </React.Fragment>
      )}/>
      <Route path="/about" component={About}/>
      
      </div>
    </div>
    </Router>
    
  );
}
}

export default App;
