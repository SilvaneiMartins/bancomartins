/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import React from 'react';

import shopping from '../../../../assets/shopping.svg';
import next from '../../../../assets/next.svg';

import { Container } from './styles';

const Shopping: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={shopping} alt="Shopping Cart" />
        <div>
          <h4>Shopping</h4>
          <span>Aproveite os produtos com cashback!</span>
        </div>
      </div>
      <img src={next} alt="Next" />
    </Container>
  );
};

export default Shopping;
