import * as React from "react";
import {useState} from "react";

export const useInput = (initialValue: any) => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        bind: {
            value,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                setValue(event.target.value)
            }
        }
    }
}