/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Layout responsivo do Banco Martins usando Styled-Components(React) e Flexbox(css).;
*/
import React from 'react';
import {
    FiEyeOff,
    FiBriefcase,
    FiPieChart,
    FiShield,
    FiSmartphone,
    FiUmbrella,
    FiDollarSign,
    FiTablet
} from 'react-icons/fi'

import noView from '../../../assets/no-view.svg';
import investiment from '../../../assets/investiment-white.svg';
import digitalAccount from '../../../assets/digital-account.svg';
import insurances from '../../../assets/insurances.svg';
import credit from '../../../assets/credit.svg';
import idvtm from '../../../assets/idvtm.svg';
import recharge from '../../../assets/recharge.svg';
import safety from '../../../assets/safety.svg';
import more from '../../../assets/more.svg';

import Colors from '../../../util/colors'

import {
    Container,
    Content,
    Balance,
    Investment,
    List,
    Circle,
} from './styles';

interface Props {
    open?: boolean;
}

const Menu: React.FC<Props> = ({ open = true }) => {
    return (
        <Container open={open}>
            <Content>
                <Balance>
                    <div>
                        <span>Saldo em conta</span>
                        <h4>
                            <span>R$</span> 6.754,15
                        </h4>
                    </div>
                    <button type="button">
                        {/* <img src={noView} alt="Não Visualizar" /> */}
                        <FiEyeOff
                            size={16}
                            color={Colors.Span}
                        />
                    </button>
                </Balance>

                <Investment>
                    <span>Ver total investido</span>
                    <img src={investiment} alt="Gráfico" />
                </Investment>

                <List>
                    <li>
                        <div>
                            <div>
                                <Circle className="circle">
                                    {/* <img src={digitalAccount} alt="Conta digital" /> */}
                                    <FiSmartphone
                                        size={20}
                                        color={Colors.Span}
                                    />
                                </Circle>
                                <span>Conta digital</span>
                            </div>
                            <img src={more} alt="Mais" />
                        </div>
                    </li>

                    <li>
                        <div>
                            <div>
                                <Circle className="circle">
                                    {/* <img src={credit} alt="Crédito" /> */}
                                    <FiDollarSign
                                        size={20}
                                        color={Colors.Span}
                                    />
                                </Circle>
                                <span>Crédito</span>
                            </div>
                            <img src={more} alt="Mais" />
                        </div>
                    </li>

                    <li>
                        <div>
                            <div>
                                <Circle className="circle">
                                    {/* <img src={investiment} alt="Investimentos" /> */}
                                    <FiBriefcase
                                        size={20}
                                        color={Colors.Span}
                                    />
                                </Circle>
                                <span>Investimentos</span>
                            </div>
                            <img src={more} alt="Mais" />
                        </div>
                    </li>

                    <li>
                        <div>
                            <div>
                                <Circle className="circle">
                                    {/* <img src={idvtm} alt="IDTVM" /> */}
                                    <FiPieChart
                                        size={20}
                                        color={Colors.Span}
                                    />
                                </Circle>
                                <span>Fundos Imobiliários</span>
                            </div>
                            <img src={more} alt="Mais" />
                        </div>
                    </li>

                    <li>
                        <div>
                            <div>
                                <Circle className="circle">
                                    {/* <img src={insurances} alt="Seguros" /> */}
                                    <FiUmbrella
                                        size={20}
                                        color={Colors.Span}
                                    />
                                </Circle>
                                <span>Seguros</span>
                            </div>
                            <img src={more} alt="Mais" />
                        </div>
                    </li>

                    <li>
                        <div>
                            <div>
                                <Circle className="circle">
                                    {/* <img src={recharge} alt="Recarga de celular" /> */}
                                    <FiTablet
                                        size={20}
                                        color={Colors.Span}
                                    />
                                </Circle>
                                <span>Recarga de celular</span>
                            </div>
                            <img src={more} alt="Mais" />
                        </div>
                    </li>

                    <li>
                        <div>
                            <div>
                                <Circle className="circle">
                                    {/* <img src={safety} alt="Segurança" /> */}
                                    <FiShield
                                        size={20}
                                        color={Colors.Span}
                                    />
                                </Circle>
                                <span>Sua segurança</span>
                            </div>
                            <img src={more} alt="Mais" />
                        </div>
                    </li>
                </List>
            </Content>
        </Container>
    );
};
export default Menu;
