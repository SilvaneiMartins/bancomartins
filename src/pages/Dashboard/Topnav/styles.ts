/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import styled from 'styled-components';

import Colors from '../../../util/colors'

interface Props {
  active: boolean;
}

export const Container = styled.div``;

export const Content = styled.div<Props>`
  background: ${Colors.contentCard};
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 1px 19px rgba(0, 0, 0, 0.02);

  .buttonMore {
    display: flex;
    justify-content: center;

    transition: all 0.3s linear;
    transform: ${({ active }) => (active ? 'rotate(180deg)' : 'rotate(0)')};
  }

  @media (min-width: 600px) {
    background: none;
    box-shadow: none;

    flex-direction: row;
    align-items: center;
  }
`;

export const List = styled.div<Props>`
  margin-top: -40px;
  padding: 0;
  height: 101px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  ${({ active }) => (active ? 'height: 209px' : 'height:101px')};

  > div {
    margin: 10px 5px 5px;
  }

  @media (min-width: 840px) {
    height: 134px;
  }
`;

export const ButtonNext = styled.button`
  border: none;
  background-color: ${Colors.Content};
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-left: 23px;

  .next img {
    height: 21px;
    width: 21px;
    margin: 10px;
  }

  @media (max-width: 840px) {
    display: none;
  }
`;
