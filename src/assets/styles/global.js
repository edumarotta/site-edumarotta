import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #293137;
        --background-cards:#252A2E;
        --dark-grey: #252A2E;
        --white: #fff;
        --green: #1CB698;
    }


    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        
    }

    //font-size = 16px(DESKTOP)

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px

        }
        @media (max-width: 720px) {
            font-size: 83.5%; //14px

        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        
    }

    body, input, textarea, button {
        font-family: 'Work Sans', sans-serif;
        font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .linha-1{
        width: 8rem;
        border: 1px solid var(--green);
        margin: 0 auto;
        margin-top: 1rem;

    }

    .linha-2{
        width: 5rem;
        border: 1px solid var(--green);
        margin: 0 auto;
        margin-top: .6rem;

    }

    .destaque {
        color:var(--green);

    }
    .resume{
        margin-top: 3.4rem;
        color: var(--white);
        line-height:18.77px;
    }

    h2{
        color: var(--white);
        font-size: 2.25rem;
        margin-top: 1.5rem;
        text-align: center;
    }



`