import React from "react";
import css from "../../styles/styles.css"

import Head from "../views/global/Head";
import InputComponent from "../comps/Input";
const { FormContainer, ButtonElement } = css

const params = {
    placeholderOne: "Введите сумму транзакции", 
    placeholderTwo: "Введите тип транзакции",
    placeholderThree: "Введите комментарий",
    maxLengthUniversal: 100
}


const Main = () => {

    const {placeholderOne, placeholderTwo, placeholderThree, maxLengthUniversal} = params

    return (
       <React.Fragment>
         <Head></Head>
        <FormContainer>
            <InputComponent placeholder={placeholderOne} maxLength={maxLengthUniversal} />
            <InputComponent placeholder={placeholderTwo} maxLength={maxLengthUniversal} />
            <InputComponent placeholder={placeholderThree} maxLength={maxLengthUniversal} />
            <ButtonElement backgroundColor={"#000"}>Отправить</ButtonElement>
        </FormContainer>
       </React.Fragment>
    )
}
export default Main