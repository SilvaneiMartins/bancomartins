/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import styled from 'styled-components';

import Colors from '../../../util/colors'

export const Container = styled.main`
  margin-bottom: 30px;
  width: 100%;
  max-width: 840px;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.Content};
  padding: 20px 14px;

  .first {
    display: flex;
    flex-direction: column;

    @media (min-width: 840px) {
      flex-direction: row;
    }
  }

  .divider {
    margin: 10px -10px 10px 10px;
    border-bottom: 1px solid ${Colors.corHeader};
  }
`;
