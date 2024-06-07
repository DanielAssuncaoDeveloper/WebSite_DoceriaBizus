import React from "react"
import {useState} from 'react'

import { SpinnerContainer } from "./styled"

export default function InputSpinner(props) {   
    const [number, setNumber] = useState(props.number);

    const ChangeNumber = (numberSum) => {
        setNumber(number+numberSum)
    }
    
    return (
        <SpinnerContainer>
            <div class="num-block skin-2">
                <div class="num-in">
                    <span onClick={() => ChangeNumber(-1)} class="minus dis"></span>
                    <input type="text" class="in-num" value={number} /> 
                    <span onClick={() => ChangeNumber(1)} class="plus"></span>
                </div>
            </div>
        </SpinnerContainer>
    )
}