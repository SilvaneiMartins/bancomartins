/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import React from 'react';

import next from '../../../assets/next.svg';
import canihelpyouAvatar from '../../../assets/canihelpyou-avatar.png';
import SilvaneiMartins from '../../../assets/Silvanei.jpg';

import { Container, Content } from './styles';

const CanIHelpYou: React.FC = () => {
    return (
        <Container>
            <Content>
                <div>
                    <div className="canihelpyou">
                        <img
                            className="circle"
                            src={SilvaneiMartins}
                            alt="Shopping Cart"
                        />
                    </div>
                    <span>Oi, Silvanei. Posso te ajudar em algo?</span>
                </div>
                <div className="circle next">
                    <img src={next} alt="Next" />
                </div>
            </Content>
        </Container>
    );
};

export default CanIHelpYou;
