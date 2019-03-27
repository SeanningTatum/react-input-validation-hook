// @flow

import {useState} from "react";

import {type Options} from './interfaces'

type returnValue = [Array<string>, {value: string, onBlur: () => void, onChange: (event: any) => void}, boolean];

export default function useFormValidation(initialValue: string = '', options: Options): returnValue {
  const [value, setValue] = useState(initialValue);
  const [errors, setErrors] = useState([]);
  const [dirty, setDirty] = useState(false);
  const [isValid, setIsValid] = useState(false); 

  function validateEmail(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function checkForErrors(value: string) {
    const newErrors = [];

    if (options.minLength && value.length < options.minLength) {
      newErrors.push(`You need a minimum of ${options.minLength} characters`);
    }

    if (options.maxLength && value.length > options.maxLength) {
      newErrors.push(
        `You have exceeded the max characters of ${options.maxLength}`
      );
    }

    if (options.required && value.length === 0) {
      newErrors.push("This field is required");
    }

    if (options.email && !validateEmail(value)) {
      newErrors.push("Please enter a valid email");
    }

    setErrors(newErrors);
    setIsValid(newErrors.length === 0 ? true : false);
  }

  function onChangeHandler(event: any) {
    const { value } = event.target;
    setValue(value);

    if (dirty) {
      checkForErrors(value);
    }
  }

  function onBlurHandler() {
    setDirty(true);
    checkForErrors(value);
  }

  return [
    errors, 
    {
      value,
      onBlur: onBlurHandler,
      onChange: onChangeHandler
    },
    isValid
  ]
}