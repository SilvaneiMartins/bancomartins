/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import React from 'react';

import pai from '../../../../assets/pai.png';
import noView from '../../../../assets/no-view.svg';
import graphicPai from '../../../../assets/graphic-pai.png';

import { Container } from './styles';

const Platform: React.FC = () => {
    return (
        <Container>
            <div className="header">
                <div>
                    <img src={pai} alt="Extrato" />
                    <span>Plataforma Aberta Martins</span>
                </div>
                <button type="button">
                    <img src={noView} alt="Não visualizar" />
                </button>
            </div>

            <div className="main">
                <img src={graphicPai} alt="Gráfico da Plataforma Aberta Inter" />
                <div>
                    <div className="income">
                        <p>Total investido</p>
                        <span>R$ 480,00</span>
                    </div>
                    <div className="outcome">
                        <p>Evolução no mês</p>
                        <span>R$ 2,30</span>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Platform;
