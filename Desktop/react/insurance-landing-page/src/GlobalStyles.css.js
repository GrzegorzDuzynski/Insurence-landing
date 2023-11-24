import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:none
    }

    body{
        font-family:Inter, sans-serif;
        background-color:gray
    }

    ul{
        list-style:none
    }

    img{
        width:100%;
        height:100%;
        object-fit:cover
    }

    a{
        text-decoration:none
        
    }

    button{
        cursor: pointer;
    }

`;
