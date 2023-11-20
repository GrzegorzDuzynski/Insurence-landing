import { createGlobalStyle } from "styled-components";
// import "https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700;800&family=Lobster&family=Montserrat:ital,wght@0,300;0,400;1,200&display=swap";

export const GlobalStyles = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        outline:none
    }

    body{
        font-family:Arial, Helvetica, sans-serif;
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
