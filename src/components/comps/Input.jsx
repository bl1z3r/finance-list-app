import React, {useState} from 'react'
import css from '../../styles/styles.css'

const {Input} = css


const InputComponent = (params) => {

    const { placeholder, maxLength, action, inputValue } = params;

    return (
        <React.Fragment>
            <Input
                value={inputValue}
                type={"text"}
                placeholder={placeholder}
                maxLength={maxLength}
                onChange={event => {
                    const newValue = event.target.value;
                    action(newValue);
                }}
            />
           
        </React.Fragment>
        
    )
}

export default InputComponent;