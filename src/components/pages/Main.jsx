import React, { useState } from "react";
import css from "../../styles/styles.css"

import InputComponent from "../comps/Input";
const { FormContainer, ButtonElement } = css

const paramsInput = {
    placeholderOne: "Введите сумму транзакции", 
    placeholderTwo: "Введите тип транзакции",
    placeholderThree: "Введите комментарий",
    maxLengthUniversal: 100
}




const Main = () => {

    const [ summa, setSumma ] = useState("");
    const [ typeValue, setTypeValue ] = useState("");
    const [ comment, setComment ] = useState("");

    const {placeholderOne, placeholderTwo, placeholderThree, maxLengthUniversal } = paramsInput

    const buttonValueChecker = summa.length < 4 || typeValue.length < 4;

    function inputCleaner() {
        setSumma('')
        setTypeValue('');
        setComment('');
    }

    return (
       <React.Fragment>
        <FormContainer>
            <InputComponent inputValue={summa} action={setSumma} placeholder={placeholderOne} maxLength={maxLengthUniversal} />
            <InputComponent inputValue={typeValue} action={setTypeValue} placeholder={placeholderTwo} maxLength={maxLengthUniversal} />
            <InputComponent inputValue={comment} action={setComment} placeholder={placeholderThree} maxLength={maxLengthUniversal} />
            <ButtonElement
                disabled={buttonValueChecker}
                backgroundcolor={
                    buttonValueChecker ?
                    "#a09c9c" :
                    "#41ba23"
                }
                onClick={inputCleaner}
                >
                    
                Сохранить транзацию
            </ButtonElement>
        </FormContainer>
       </React.Fragment>
    )
}
export default Main