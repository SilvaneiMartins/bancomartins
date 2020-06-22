/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import { createGlobalStyle } from 'styled-components';

import Colors from '../util/colors'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html {
    height: 100%;
  }

  body {
    /* background-color: #f5f6fa; */
    background-color: ${Colors.background};
    color: #6C757D;
    -webkit-font-smoothing: antialiased;

    height: 100%;
    position: relative;
  }

  body, button {
    font-family: 'Roboto Slab', sans-serif;
    font-size: 14px
  }

  button {
    cursor: pointer;
  }

  :root {
        --primary: #36393f;
        --secondary: #2f3136;
        --tertiary: rgb(32,34,37);
        --quaternary: #292b2f;
        --quinary: #393d42;
        --senary: #828386;

        --white: #fff;
        --gray: #8a8c90;
        --chat-input: rgb(64,68,75);
        --symbol: #74777a;

        --notification: #f84a4b;
        --discord: #6e86d6;
        --mention-detail: #f9a839;
        --mention-message: #413f3f;

        --link: #5d80d6;

        --rocketseat: #6633cc;
    }
`;
