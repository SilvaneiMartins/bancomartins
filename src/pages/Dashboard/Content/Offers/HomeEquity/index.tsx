import React from 'react';

import { Container, Content } from './styles';

const HomeEquity: React.FC = () => {
    return (
        <Container>
            <Content>
                <h4>Banco Martins</h4>

                <div>
                    <ul>
                        <li>Taxa Pré-Fixada 1%</li>
                        <li>Até 72 meses para pagar</li>
                    </ul>
                    <button type="button">
                        <span>Solicitar agora</span>
                    </button>
                </div>
            </Content>
        </Container>
    );
};

export default HomeEquity;
