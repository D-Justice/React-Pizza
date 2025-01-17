import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {
  constructor(props) {
    super(props)
    
  }
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.data.map((each, index) => {
              return <Pizza key={index} pizza={this.props.pizza} data={each}/>
              
            })
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
