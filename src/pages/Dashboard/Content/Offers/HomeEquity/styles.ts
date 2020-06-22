/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import styled from 'styled-components';

import Colors from '../../../../../util/colors'
import bgHomeEquityImg from '../../../../../assets/bg-home-equity.svg';
import arrowRightImg from '../../../../../assets/arrow-right.svg';

export const Container = styled.div`
  background: ${Colors.contentCard} url(${bgHomeEquityImg}) no-repeat center;
  border-radius: 8px;
  padding: 24px;

  height: 170px;
  width: 100%;
  max-height: 184px;
  max-width: 355px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  height: 100%;

  h4 {
    color: ${Colors.H4};
    font-weight: 900;
  }

  > div {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    ul {
      list-style-image: url(${arrowRightImg});
      list-style-position: inside;
      margin-right: 8px;
      max-width: 197px;
    }

    ul li {
      color: ${Colors.Span};
    }

    button {
      border: 0;
      border-radius: 4px;
      background: ${Colors.buttonLoan};
      min-width: 108px;
      min-height: 32px;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    button span {
      color: ${Colors.H4};
      font-size: 12px;
      font-weight: bold;
    }
  }
`;
