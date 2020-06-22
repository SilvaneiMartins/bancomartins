/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import React from 'react';

import card from '../../../../assets/card.svg';
import noView from '../../../../assets/no-view.svg';
import creditcardblack from '../../../../assets/creditcardblack.png';

import { Container } from './styles';

const Mastercard: React.FC = () => {
    return (
        <Container>
            <div className="header">
                <div>
                    <img src={card} alt="Cartão" />
                    <span>Mastercard 8430</span>
                </div>
                <button type="button">
                    <img src={noView} alt="Não visualizar" />
                </button>
            </div>

            <div className="main">
                <img src={creditcardblack} alt="Mastercard" />
                <span>Seu cartão é Mastercard e sem anuidade!</span>
            </div>
        </Container>
    );
};

export default Mastercard;
