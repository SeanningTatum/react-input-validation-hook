# React Input Validation

Simple Input Validation with React Hooks

Errors are only show once input is blurred, errors will update 
in real time once input has been blurred.

## Quickstart

`yarn add react-input-validation-hook`

or

`npm install react-input-validation-hook`


```js
// Import package
import useFormValidation from 'react-input-validation-hook'

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
```

## Usage

```js
const [errors, value, isValid] = useFormValidation(initialValue, [options])
```

## Return values

|               | DataType      | Description  |
| ------------- |:-------------:| :-----------------------------------|
| errors        |`Array<string>`| Given the options, returns an array of errors based on the options given |
| myValue       | `{value: string, onChange: (event) => void, onBlur: () => void}`       | values and helper methods to reduce writing onChange handlers all the time.     |
| isValid       | boolean       | Given the options, returns true if value is inline with the *options* given |

## Options

|               | DataType       |
| ------------- |:---------------:
| maxLength     | `number`       |
| minLength     | `number`       |
| required      | `boolean`      |
| email         | `boolean`      |

*example*

```js
const ... = useFormValidation('', {minLength: 3, maxLength: 8, required: true, email: true})
```

## Contributing

If you need more types of form validation, please feel free to send a PR ❤️

## License

MIT Ⓒ [SeanningTatum](https://github.com/SeanningTatum)

