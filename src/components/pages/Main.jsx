import React from "react";
import css from "../../styles/styles.css"

import Head from "../views/global/Head";
import InputComponent from "../comps/Input";

const { FormContainer } = css

const Main = () => {
    return (
       <React.Fragment>
         <Head></Head>
        <FormContainer>
            <InputComponent/>
            <InputComponent/>
            <InputComponent/>
        </FormContainer>
       </React.Fragment>
    )
}
export default Main