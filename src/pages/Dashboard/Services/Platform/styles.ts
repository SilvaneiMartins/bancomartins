/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import styled from 'styled-components';

import Colors from '../../../../util/colors'

export const Container = styled.div`
  height: 176px;
  min-width: 264px;
  background-color: ${Colors.Content};
  border-radius: 8px;
  padding: 20px 15px;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.08);

  .header {
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;
    }

    > div span {
      margin-left: 10px;
      color: ${Colors.Span};
      font-size: 12px;
    }

    button {
      border: 0;
      background: none;
    }

    button img {
      height: 11px;
      width: 11px;
    }
  }

  .main {
    display: flex;
    align-items: center;

    > div {
      margin-left: 5px;
      font-weight: 300;
    }

    .income {
      margin-bottom: 15px;
    }

    p {
      font-size: 12px;
      color: ${Colors.H4};
    }

    span {
      color: ${Colors.Span};
      font-size: 14px;
      font-weight: normal;
    }
  }
`;
