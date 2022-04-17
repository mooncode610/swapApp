import { FC, useState, useEffect } from 'react';

import {
  Container,
  Item,
  ItemContent,
  ItemTitle

} from './style';
import logoImg        from '../../assets/image/logo_sty.png'
import swapImg        from '../../assets/image/swap.svg'
import accountImg     from '../../assets/image/account.svg'
import dashboardImg   from '../../assets/image/dashboard.svg'
import calculatorImg  from '../../assets/image/calculator.svg'
import { useHistory } from 'react-router-dom';
import Button         from '../../components/Button';
import Panel          from '../../components/Panel'
import { ButtonWrapper } from './style';
import SwapForm from './SwapForm'
import Liquidity from './LiquidityForm'
const Swap: FC = () => {

  const history                       = useHistory();
  const [currentForm, setCurrentForm] = useState('Swap')

  const onSwap = () => {
    setCurrentForm('Swap');
  }
  const onLiquidity = () => {
    setCurrentForm('Liquidity')
  }
  const onBridge = () => {
    setCurrentForm("Bridge")
  }
  return (
    <Container>
      <ButtonWrapper>
        <Button value="Swap" blackBg={currentForm === 'Swap' ? false :true} onClick={onSwap} style={{margin: '0px'}}/>
        <Button value="Liquidity" blackBg={currentForm === 'Liquidity' ? false :true} onClick={onLiquidity} style={{margin: '0px'}}/>
        <Button value="Bridge" blackBg={currentForm === 'Bridge' ? false :true} onClick={onBridge} style={{margin: '0px'}}/>
      </ButtonWrapper>
      <Panel>
        <>
        {currentForm === 'Swap' && <div><SwapForm /></div>}
        {currentForm === 'Liquidity' && <div><Liquidity/></div>}
        </>
        
      </Panel>
    </Container>
  );
};
export default Swap;
