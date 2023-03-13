import React from 'react'
import colorNames from 'colornames'
const Input = ( {colorValue, setColorValue , setHexValue}) => {
  return (
  <form onSubmit={(e) =>e.preventDefault()}>
<label>Add colour Name:</label>
<input
autoFocus
type={'text'}
placeholder= "Add colour name"
required
value={colorValue}
onChange={(e) =>{setColorValue(e.target.value);
setHexValue(colorNames(e.target.value));
}}
/>


  </form>
  )
}

export default Input
