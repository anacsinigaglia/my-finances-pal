import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --red: #E62E4D;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #F0F2F5;
    --shape: #FFF;
}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.50%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400; //default size for poppins
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay { //overlay = fundo por detrás do modal
        background: rgba(0, 0, 0, 0.5);

        position: fixed; //ocupa a tela toda e não recebe influência do scroll
        display: flex;
        align-items: center;
        justify-content: center;

        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }

    .react-modal-content {
        background: var(--background);

        width: 100%;
        max-width: 576px; //se mais de 576, para; se menos, deixará no tamanho da tela (width 100%)
        padding: 3rem; //48px for desktop
        position: relative; //so the close button won't be displayed outside the Modal
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0; //vem por padrão, removo
        background: transparent; //vem por padrão, removo

        transition: filter 0.2;
        &:hover {
            filter: brightness(0.8);
        }
    }
`;
