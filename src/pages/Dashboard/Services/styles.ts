/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import styled from 'styled-components';

interface ContainerProps {
  dimensions: { height: number; width: number };
}

export const Container = styled.div<ContainerProps>`
  height: 185px;
  margin: 30px 10px 22px;
  width: ${({ dimensions }) => `${dimensions.width - 22}px`};

  @media (min-width: 840px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  height: 100%;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  > div {
    margin-right: 15px;
  }
`;
