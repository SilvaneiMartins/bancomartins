/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import React from 'react';

import statement from '../../../../assets/statement.svg';
import noView from '../../../../assets/no-view.svg';
import graphicStatement from '../../../../assets/graphic-statement.svg';

import { Container } from './styles';

const Statement: React.FC = () => {
    return (
        <Container>
            <div className="header">
                <div>
                    <img src={statement} alt="Extrato" />
                    <span>Extrato</span>
                </div>
                <button type="button">
                    <img src={noView} alt="Não visualizar" />
                </button>
            </div>

            <div className="main">
                <img src={graphicStatement} alt="Gráfico do Extrato" />
                <div>
                    <div className="income">
                        <p>Receita - Maio</p>
                        <span>R$ 10.000,00</span>
                    </div>
                    <div className="outcome">
                        <p>Despesas - Maio</p>
                        <span>R$ 3.245,85</span>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Statement;
