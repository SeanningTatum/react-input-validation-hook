# React Input Validation

Simple Input Validation with React Hooks

## Quickstart

`yarn add react-input-validation-hook`

or

`npm install react-input-validation-hook`

```js
// Import package
import useFormValidation from 'react-input-validation-hook'

function App() {
    // Any of these can be renamed ex: [fnErrors, firstName, isFnValid] = ...
    const [errors, myValue, isValid] = useFormValidation('init val', {maxLength: 8, minLength: 6, required: true})

    return (
        <div>
            <label htmlFor="">Try typing here</label>
            <input type="text" {...myValue}/>
            <p>{isValid ? 'Value is Valid' : 'Value is Invalid'}</p>
            {errors.map(e => <p key={e} style={{color: 'red'}}>{e}</p>)}
      </div>
    )
}
```

## Return values

|               | DataType      | Description  |
| ------------- |:-------------:| :-----------------------------------:|
| errors        |`Array<string>`| Given the options, returns an array of errors based on the options given |
| myValue       | string        | The current value of the string     |
| isValid       | boolean       | Given the options, returns true if value is inline with the *options* given |



