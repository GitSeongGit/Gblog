import { createGlobalStyle } from 'styled-components';

export const Globalstyle = createGlobalStyle`
    html{
        box-sizing: border-box;
        font-size: 62.5%;
        min-width: 320px;
        background-color: blanchedalmond;
    }
    body{
        margin:0;
        margin-top: 10rem;
        margin-right: 20rem;
        padding-top:1rem;
    }

    div{
        box-sizing: border-box;
        margin-right: 2rem;
        
    }
    h1{
        
    }
    h2{

    }
    section{
        box-sizing: border-box;
    }
    p{
        font-size:2rem;
        margin-top:2rem;
        border:0.1rem solid;
    }
    a{
        margin-right: 1rem;
    }

    ul ,ol {
        list-style: none;

    }
    *{
        margin: 0px;
        padding:0px;
    }

    *{font-family:'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif'}

    *{cursor:auto}
    /* *{opacity:0} */
`;

// text-align  텍스트의 수평 정렬
