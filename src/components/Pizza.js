import React from "react"

const Pizza = (props) => {
  return(
    
    <tr>
      <td>{props.data.topping}</td>
      <td>{props.data.size}</td>
      <td>{(props.data.vegetarian) ? 'Yes' : 'No'}</td>
      <td><button onClick={(e) => props.pizza(props.data)}type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
