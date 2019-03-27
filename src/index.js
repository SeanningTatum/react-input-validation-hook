import React from 'react';
import { render } from "react-dom";
import useFormValidation from "./lib/useFormValidation";

const App = () => {
  const [errors, name, isValid] = useFormValidation('', {maxLength: 8, minLength: 6, required: true})

  return (
    <div style={{ 
        width: '100vw', 
        height: '100vh', 
        display: 'flex', justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'column'
      }}>
      <p style={{color: 'blue'}}>This input is <span color={isValid ? 'green' : 'red'}>
        {isValid ? 'valid' : 'not valid'}</span> 
      </p>
      
      <div>
        <label htmlFor="">Try typing here</label>
        <input type="text" {...name}/>
        {errors.map(e => {
          return <p key={e} style={{color: 'red'}}>{e}</p>
        })}
      </div>
    </div>
  )
};

render(<App />, document.getElementById("root"));
