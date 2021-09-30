import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --white: #ffffff;
    --black: #000000;
    --lightBlue: #7DADE9;
    --lightGrey: #666360;
    --blue: #347EDA;
}

#root{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

button{
    cursor: pointer;
}
`;
