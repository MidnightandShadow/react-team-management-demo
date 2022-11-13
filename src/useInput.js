import {useState} from "react";

/**
 * A custom React hook for dealing with changing text <Input>s, like in a form.
 *
 * @param initValue the initial value the text in the input is set to
 * @returns {[{onChange: (function(*): void), value: unknown},(function(): void)]} the value
 *          after onChange and the function for setting the value to the new target
 */
export function useInput(initValue) {
    const [value, setValue] = useState(initValue);
    return [
        {
            value,
            onChange: e => setValue(e.target.value)
        }, () => setValue(initValue)
    ];
}