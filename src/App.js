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
        size: 'small',
        vegetarian: false
      }
    }
  }
  editPizza = (pizza) => {

    this.setState({

      addPizza: {
        index: pizza.id,
        topping: pizza.topping,
        size: pizza.size,
        vegetarian: pizza.vegetarian,
      }
    })
  }
  fetchData = () => {
    console.log('Fetched')
    fetch(`http://localhost:3001/pizzas`)
      .then(resp => resp.json())
      .then(data => this.setState({ data: data }))
  }
  componentDidMount() {
    this.fetchData()
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
    console.log(pizza)
    let id;
    let method;
    if (pizza.index) {
      id = `/${pizza.index}`
      method = 'PATCH'
    } else {
      method = 'POST'
      id = ''
    }
    
    fetch(`http://localhost:3001/pizzas${id}`, {
      method: `${method}`,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pizza)

    })
      .then(resp => resp.json())
      .then(data => { 
        this.setState({
          addPizza: {
            topping: '',
            size: 'small',
            vegetarian: false
          }
        }, () => console.log('addPizza', this.state.addPizza))
        this.fetchData() })
  }
  render() {
    return (
      <Fragment>
        <Header />
        <PizzaForm newPizza={this.state.addPizza} pizzaPost={this.pizzaPost} pizzaConcat={this.pizzaConcat} pizzaData={this.state.pizza} addPizzaData={this.state.addPizza} />
        <PizzaList pizza={this.editPizza} data={this.state.data} />
      </Fragment>
    );
  }
}

export default App;
