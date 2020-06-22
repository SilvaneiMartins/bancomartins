/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import styled from 'styled-components';

import Colors from '../../../../util/colors'

interface Props {
  open: boolean;
}

export const Container = styled.button<Props>`
  position: absolute;
  top: 32px;
  left: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  padding: 0;
  z-index: 10;

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${Colors.buttonHeader1};
    background: ${({ open }) => (open ? `${Colors.buttonHeader1}` : `${Colors.buttonHeader2}`)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) =>
        open ? 'rotate(45deg); width: 1rem;' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) =>
        open
          ? 'rotate(-45deg); width: 1rem; margin-bottom: 16px'
          : 'rotate(0)'};
    }
  }
`;
