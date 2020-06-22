/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import styled from 'styled-components';

import Colors from '../../../util/colors'

export const Container = styled.header`
  background: linear-gradient(90deg, #444546 0%, #727376 100%);
  width: 100%;

  @media (min-width: 1128px) {
    background: ${Colors.corHeader};
  }
`;

export const Content = styled.div`
  max-width: 1128px;
  padding: 20px 20px 50px;
  margin: 0 auto;

  color: ${Colors.white};
  display: flex;
  justify-content: space-between;

  .logo {
    display: none;

    h4 {
      color: ${Colors.H4};
      margin-left: 23.71px;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
  }

  button.profile {
    height: 58px;
    width: 58px;
    border-radius: 50%;
    border: none;

    color: ${Colors.white};
    font-size: 24px;
  }

  .more {
    display: none;
  }

  @media (min-width: 1128px) {
    .logo {
      display: flex;
      align-items: center;
    }

    .menuButton {
      display: none;
    }

    button.profile {
      color: ${Colors.buttonHeader1};
    }

    .more {
      display: block;
      margin-left: 12px;
    }
  }
`;

export const SubHeader = styled.div`
  display: none;
  height: 64px;
  width: 100%;
  background: linear-gradient(90deg, #444546 0%, #727376 100%);

  @media (min-width: 1128px) {
    display: block;
  }
`;

export const SimulatorButton = styled.button`
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
  background: none;
  height: 40px;
  width: 173px;
  margin-right: 4%;

  @media (min-width: 768px) {
    margin-right: 24px;
  }

  @media (min-width: 1128px) {
    background: ${Colors.buttonHeader1};
    color: ${Colors.buttonHeader2};
    border-color: ${Colors.borderButtonHeader};
  }
`;
