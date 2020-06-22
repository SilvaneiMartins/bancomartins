/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import React from 'react';

import { Container, Circle } from './styles';

interface CardProps {
    icon: string;
    alt: string;
}

const Card: React.FC<CardProps> = ({ children, icon, alt }) => {
    return (
        <Container>
            <Circle>
                <img src={icon} alt={alt} />
            </Circle>
            <span>{children}</span>
        </Container>
    );
};

export default Card;
