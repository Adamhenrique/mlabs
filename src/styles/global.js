import { createGlobalStyle } from 'styled-components';

export const colors = {
  gray: '#ccc',
};

export default createGlobalStyle`
    * {
        padding: 0px;
        margin: 0px;
        text-decoration: none;
        outline: none;
    }
    body {
        background-color: #f7f7f7;
        font-family: 'Exo 2', sans-serif;
    }

    h1, h2, h3, h4, h5, h6, ul {
        margin: 0;
    }
`;
