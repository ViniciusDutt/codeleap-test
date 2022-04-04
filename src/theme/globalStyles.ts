import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

        font-family: 'Roboto', sans-serif;
        background: var(--background);
        margin: 0;
    }

    html, border-style, #root {
        max-height: 100vh;
        max-width: 100vw;

        height: 100%;
        height: 100%;
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: 'Roboto', sans-serif;
        outline: 0;
    }

    :root {
        --primary: #000000;
        --secondary: #FFFFFF;
        --terciary: #777777;
        --muted: #CCCCCC;
        --outline: #999999;
        --background: #DDDDDD;
    }
`;