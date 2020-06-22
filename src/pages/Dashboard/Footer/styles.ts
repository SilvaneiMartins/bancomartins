/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import styled from 'styled-components';

import Colors from '../../../util/colors'

export const Container = styled.footer`
  width: 100%;

  @media (min-height: 1170px) {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const ContactUs = styled.div`
  /* background: #edeef4; */
  background: ${Colors.corFooter1};
  padding: 16px 15px;

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;

    max-width: 1128px;

    span {
      font-size: 12px;
      color: ${Colors.Span};
    }

    > div {
      margin-right: auto;

      h4 {
        color: ${Colors.H4};
        margin-bottom: 5px;
      }
    }
  }

  @media (max-width: 992px) {
    min-height: 119px;
  }
`;

export const Claims = styled.div`
  /* background: #fff; */
  background: ${Colors.corFooter2};
  padding: 16px 15px;

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;

    max-width: 1128px;

    > div:first-of-type {
      display: flex;
      flex-direction: column;
      margin-right: auto;

      h4 {
        font-size: 12px;
        color: ${Colors.H4};
        margin-bottom: 8px;
      }

      span {
        font-size: 12px;
        color: ${Colors.Span};
      }
    }

    > div + div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 600px) {
    min-height: 170px;
  }
`;
