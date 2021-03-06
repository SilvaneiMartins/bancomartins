/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import styled from 'styled-components';

import Colors from '../../../../util/colors'

export const Container = styled.ul`
  list-style: none;
  margin: 20px 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media (min-width: 840px) {
    width: 437px;
    margin: 0 0 0 24px;
  }

  li {
    margin: 0 7px 20px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    span {
      color: ${Colors.Span};
      margin-top: 7px;
      text-align: center;
      font-size: 12px;
    }
  }

  .circle {
    background-color: ${Colors.contentCard};
    height: 64px;
    width: 64px;
    border-radius: 50%;
    margin: 0 auto;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .circle img {
    height: 24px;
    width: 24px;
  }
`;
