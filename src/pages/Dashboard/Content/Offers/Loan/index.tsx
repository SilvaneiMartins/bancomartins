/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import React from 'react';

import { Container, Content } from './styles';

const Loan: React.FC = () => {
    return (
        <Container>
            <Content>
                <span>Quer ficar livre dos juros altos?</span>

                <h4>Empréstimo Consignado, o crédito para o seu momento</h4>

                <div>
                    <ul>
                        <li>Taxas a partir de 1,30% ao mês</li>
                    </ul>
                    <button type="button">
                        <span>Solicitar agora</span>
                    </button>
                </div>
            </Content>
        </Container>
    );
};

export default Loan;
