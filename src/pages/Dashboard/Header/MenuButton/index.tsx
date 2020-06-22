/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import React from 'react';

import { Container } from './styles';

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuButton: React.FC<Props> = ({ open, setOpen }) => {
    return (
        <Container type="button" open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </Container>
    );
};

export default MenuButton;
