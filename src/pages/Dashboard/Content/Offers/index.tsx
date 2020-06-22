/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import React from 'react';

import HomeEquity from './HomeEquity';
import Loan from './Loan';

import { Container } from './styles';

const Offers: React.FC = () => {
    return (
        <Container>
            <HomeEquity />

            <Loan />
        </Container>
    );
};

export default Offers;
