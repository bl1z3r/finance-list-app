import styled from "styled-components";

const css = {
    DatalistContainer: styled.div `
        display: block;
        align-items: center;
        justify-content: center;
        max-width: 800px;
        margin: 0 auto;
        margin-top: 40px;
    `,
    DatalistLine: styled.div `
        display: flex;
        align-items: center;
        justify-content: space-between;
    `,
    DatalistCell: styled.span `
        width: ${props => props.width || 'auto'};
        font-family: sans-serif;
        font-size: 22px;
        text-transform: uppercase;
    `,
    FilterInput: styled.input `
        all: unset;
        box-sizing: border-box;
        display: block;
        padding: 10px;
        font-family: sans-serif;
        font-size: 18px;
        border-radius: 10px;
        border: 1px solid #000;
    `,
    FilterContainer: styled.div `
        display: flex;
        margin: 0 auto;
        justify-content: center;
        flex-direction: column;
        width: fit-content;
        gap: 10px;
        margin-bottom: 20px;
        label {
            font-family: sans-serif;
        }
    `,
}

export default css;