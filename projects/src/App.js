import Square from "./Square";
import Input from "./Input";
import { useState } from "react";
function App() {
  const [colorValue, setColorValue] = useState('')
 const[hexValue, setHexValue] = useState('')
 const[hslValue, setHslValue] =useState('')
  return (
    <div className="App">
      <Square 
      colorValue={colorValue}
      hexValue={hexValue}
      hslValue={hslValue}
      />
     <Input
     colorValue={colorValue}
     setColorValue= {setColorValue}
     setHexValue ={setHexValue}
     setHslValue ={setHslValue}
     />
    </div>
  );
}

export default App;
