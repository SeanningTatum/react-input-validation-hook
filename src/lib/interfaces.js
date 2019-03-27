// @flow

export interface Options {
    required?: boolean;
    email?: boolean;
    minLength?: number;
    maxLength?: number;
}

export type returnValue = [Array<string>, {value: string, onBlur: () => void, onChange: (event: any) => void}, boolean];
