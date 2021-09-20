import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      pizza: [],
      addPizza: {
        topping: '',
        size: '',
        vegetarian: false
      }
    }
  }
  editPizza = (pizza) => {
    
    this.setState({
      pizza: pizza
    })
  }
  componentDidMount() {
    fetch(`http://localhost:3000/pizzas`)
    .then(resp => resp.json())
    .then(data => this.setState({data: data}))
  }
  pizzaConcat = (name, pizza) => {
    
    this.setState({
      addPizza: {
        ...this.state.addPizza,
        [name]: pizza
      }
    })

  }
  pizzaPost = (pizza) => {
    console.log(this.state.addPizza)
    fetch(`http://localhost:3000/pizzas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.addPizza)

    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm newPizza={this.state.addPizza} pizzaPost={this.pizzaConcat} pizzaData={this.state.pizza}/>
        <PizzaList pizza={this.editPizza} data={this.state.data}/>
      </Fragment>
    );
  }
}

export default App;
