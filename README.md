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
| myValue       | string        | The current value of the string     |
| isValid       | boolean       | Given the options, returns true if value is inline with the *options* given |

## Options

|               | DataType       |
| ------------- |:---------------:
| maxLength     | `Array<string>`|
| minLength     | `string`       |
| required      | `boolean`      |
| email         | `boolean`      |

## Contributing

If you need more types of form validation, please feel free to send a PR ❤️

## License

MIT Ⓒ [SeanningTatum](https://github.com/SeanningTatum)

