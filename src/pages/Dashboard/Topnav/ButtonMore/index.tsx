/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';
import moreImg from '../../../../assets/more.svg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonMore: React.FC<ButtonProps> = ({ ...rest }) => (
    <Container type="button" {...rest}>
        <img src={moreImg} alt="Mais" />
    </Container>
);

export default ButtonMore;
