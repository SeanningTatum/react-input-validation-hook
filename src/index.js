// Import package
import React from 'react'
import {render} from 'react-dom'
import useFormValidation from './lib'

function App() {
    // Any of these can be renamed ex: [fnErrors, firstName, isFnValid] = ...
    const [errors, myValue, isValid] = useFormValidation('init val', {minLength: 6, maxLength: 8, required: true})

    return (
        <div>
            <label htmlFor="">Try typing here</label>
            {/* Use spread operator here, because onChange, onBlur and value is handled for you. */}
            <input type="text" {...myValue}/>
            <p>{isValid ? 'Value is Valid' : 'Value is Invalid'}</p>
            {/* Print out errors */}
            {errors.map(e => <p key={e} style={{color: 'red'}}>{e}</p>)}
      </div>
    )
}

render(<App />, document.getElementById("root"));