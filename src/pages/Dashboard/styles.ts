/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .content {
    display: flex;

    .side {
      display: none;
    }

    /* .main {
      display: flex;
      flex-direction: column;
      align-content: center;
    } */
  }

  @media (min-width: 1128px) {
    .content {
      .side {
        display: flex;
        flex-direction: column;
      }

      .main {
        margin-left: 24px;
      }

      .canIhelpYou {
        display: none;
      }
    }
  }
`;
