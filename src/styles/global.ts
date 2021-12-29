import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --green: #33cc95;
        --pink: #f55376;
        --blue: #008F17;

        --blue-light:#27C044;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --background: #f0f2f5;
        --shape: #fff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        user-select: none;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720){
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`