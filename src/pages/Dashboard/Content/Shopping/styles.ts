/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import styled from 'styled-components';

import Colors from '../../../../util/colors'

export const Container = styled.div`
  border-radius: 5px;
  background-color: ${Colors.contentCard};
  margin-left: 5px;
  height: 88px;
  width: 100%;

  display: flex;
  justify-content: space-between;

  @media (min-width: 840px) {
    width: 352px;
  }

  > div {
    display: flex;

    img:first-of-type {
      margin: auto 30px;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  div > h4 {
    color: ${Colors.H4};
    margin-bottom: 4px;
  }

  span {
    font-size: 12px;
    color: ${Colors.Span};
    /* max-width: 117px; */
  }

  img:last-of-type {
    margin: auto 20px;
  }
`;
