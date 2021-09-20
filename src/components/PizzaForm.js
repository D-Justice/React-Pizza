import React, { useState } from "react"

const PizzaForm = (props) => {


  return (
    <div className="form-row">
      <div className="col-5">
        <input onChange={(e) => {props.pizzaPost('topping',e.target.value)}}type="text" className="form-control" placeholder="Pizza Topping" value={props.pizzaData.topping} />
      </div>
      <div className="col">
        <select onChange={(e) => {props.pizzaPost('size',e.target.value)}} value={props.pizzaData.size} className="form-control">
          
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input name='pizza' onChange={(e) => {props.pizzaPost('vegetarian',e.target.value)}} className="form-check-input" type="radio" value="Vegetarian" checked={null} />
          <label className="form-check-label">
            Vegetarian
          </label>
        </div>
        <div className="form-check">
          <input name='pizza' onChange={(e) => {props.pizzaPost('vegetarian',e.target.value)}} className="form-check-input" type="radio" value="Not Vegetarian" checked={null} />
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
