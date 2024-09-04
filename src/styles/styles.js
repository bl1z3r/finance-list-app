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
            background: #000;
            border-radius: 10px;
            padding: 15px;
            transition: all .3s ease;
            color: #fff;
            font-size: 20px;
            cursor: pointer;
            transition: all .3s ease;
        `
    },
    
    
}

export default css