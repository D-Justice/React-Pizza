import React, { useState } from "react"

const PizzaForm = (props) => {


  return (
    <div className="form-row">
      <div className="col-5">
        <input onChange={(e) => {props.pizzaConcat('topping',e.target.value)}}type="text" className="form-control" placeholder="Pizza Topping" value={props.addPizzaData.topping} />
      </div>
      <div className="col">
        <select onChange={(e) => {props.pizzaConcat('size',e.target.value)}} value={props.addPizzaData.size} className="form-control">
          
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input name='pizza' onChange={(e) => {props.pizzaConcat('vegetarian', true)}} className="form-check-input" type="radio" value="Vegetarian"  />
          <label className="form-check-label">
            Vegetarian
          </label>
        </div>
        <div className="form-check">
          <input name='pizza' onChange={(e) => {props.pizzaConcat('vegetarian', false)}} className="form-check-input" type="radio" value="Not Vegetarian" />
          <label className="form-check-label">
            Not Vegetarian
          </label>
        </div>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success" onClick={(e) => {
          e.preventDefault()
          
          
          props.pizzaPost(props.newPizza)}}>Submit</button>
      </div>
    </div>

  )
}

export default PizzaForm
