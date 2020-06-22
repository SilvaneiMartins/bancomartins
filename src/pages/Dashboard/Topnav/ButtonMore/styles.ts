/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import styled from 'styled-components';

export const Container = styled.button`
  border: 0;
  background: none;

  img {
    height: 36px;
    width: 36px;
    filter: invert(48%) sepia(25%) saturate(5515%) hue-rotate(354deg)
      brightness(101%) contrast(97%);
  }

  @media (min-width: 600px) {
    display: none;
  }
`;
