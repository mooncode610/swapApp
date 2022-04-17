import { FC, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  LogoImg,
  MenuImg,
  MenuText,
  MenuItemContainer,
} from './style';
import logoImg        from '../../assets/image/logo_sty.png'
import swapImg        from '../../assets/image/swap.svg'
import accountImg     from '../../assets/image/account.svg'
import dashboardImg   from '../../assets/image/dashboard.svg'
import calculatorImg  from '../../assets/image/calculator.svg'

const Sidebar: FC = () => {

  const history       = useHistory();

  return (
    <Container>
        <LogoImg src={logoImg} />
        <MenuItemContainer onClick={() => history.push('/dashboard')}>
            <MenuImg src={dashboardImg} />
            <MenuText >Dashboard</MenuText>
        </MenuItemContainer>
        <MenuItemContainer onClick={() => history.push('/account')}>
            <MenuImg src={accountImg} />
            <MenuText >Account</MenuText>
        </MenuItemContainer>
        <MenuItemContainer onClick={() => history.push('/calculator')}>
            <MenuImg src={calculatorImg} />
            <MenuText >Calculator</MenuText>
        </MenuItemContainer>
        <MenuItemContainer onClick={() => history.push('/swap')}>
            <MenuImg src={swapImg} />
            <MenuText >Swap</MenuText>
        </MenuItemContainer>
    </Container>
  );
};
export default Sidebar;
