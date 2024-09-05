import styled from "styled-components";

const css = {
    Container: styled.div `
        max-width: 90%;
        margin: 0 auto;
    `,
    HeaderWrapper: styled.div `
            display: flex;
            justify-content: space-between;
            align-items: center;
    `,
    Header: {
        Container: styled.header`
            background-color: #0909;
            padding: 30px 10px;
        `,
        Logo: styled.a `
            display: flex;
            align-items: center;
            font-size: 30px;
            color: #fff;
            font-family: "Roboto", sans-serif;
        `,
        NavBtns: styled.div `
            display: flex;
            align-items: center;
            gap: 15px;
        `,
        NavBtn: styled.button `
            background: #910dd4;
            border-radius: 10px;
            border: 1px solid #fff;
            padding: 15px;
            transition: all .3s ease;
            color: #fff;
            font-size: 20px;
            cursor: pointer;
            transition: all .3s ease;
            &:hover {
                transform: scale(0.9);
            }
        `
    },
    FormContainer: styled.div `
        display: block;
        margin: 0 auto;
        margin-top: 20px;
        max-width: 400px;
        width: 100%;
    `,
    Input: styled.input `
        all: unset;
        box-sizing: border-box;
        width: 100%;
        padding: 10px;
        display: block;
        margin: 10px auto 0 auto;
        border: 1px solid #66c66c;
        border-radius: 10px;
        font-family: "Roboto", sans-serif;
        text-align: center;
        
    `,
    
}

export default css