import { FC, useState, useEffect } from 'react';

import {
  Container,
  Item,
  ItemTitle,
  ItemExtra,
  ItemContent,
  ButtonWrapper,
  VerticalItems,
  VerticalItem,
  VerticalItemContent,
  VerticalItemTitle,
  InputWrapper,
  InputTitle,
  Input,
  Range,
} from './style';
import logoImg        from '../../assets/image/logo_sty.png'
import swapImg        from '../../assets/image/swap.svg'
import accountImg     from '../../assets/image/account.svg'
import dashboardImg   from '../../assets/image/dashboard.svg'
import calculatorImg  from '../../assets/image/calculator.svg'
import { useHistory } from 'react-router-dom';
import Panel          from '../../components/Panel'
import Grid           from '@mui/material/Grid';
import Button         from '../../components/Button';
const Calculator: FC = () => {

  const [harunoPrice, setHarunoPrice] = useState(0)
  const [currentApy, setCurrentApy] = useState(0)
  const [yourHarunoBalance, setYourHarunoBalance] = useState(0)
  const [harunoAmount, setHarunoAmount] = useState(0)
  const [apyRate, setApyRate] = useState(0)
  const [harunoPriceAtPurchase, setHarunoPriceAtPurchase] = useState(0)
  const [futureHarunoMarketPrice, setFutureHarunoMarketPrice] = useState(0)
  const [days, setDays] = useState(0)
  const [initInvestment, setinitInvestment] = useState(0)
  const [currentWealth, setCurrentWealth] = useState(0)
  const [harunoRewards, setHarunoRewards] = useState(0)
  const [potentialReturn, setPotentialReturn] = useState(0)



  const history       = useHistory();

  const buyHaruno = () => {

  }
  const connectWallet = () => {

  }

  return (
    <Container>
      <ButtonWrapper>
        <Button value="Buy HARUNO" onClick={buyHaruno}/>
        <Button value="Connect WALLET" onClick={connectWallet}/>
      </ButtonWrapper>


      <Grid container spacing={2}>
        <Grid item md={4}>
          <Panel>
            <Item>
                <ItemContent>
                HARUNO Price
                </ItemContent>
                <ItemExtra>
                {'$' + harunoPrice}
                </ItemExtra>
            </Item>
          </Panel>
        </Grid>  
        <Grid item md={4}>
          <Panel>
            <Item>
                <ItemContent>
                Current APY
                </ItemContent>
                <ItemExtra>
                {currentApy + '%'}
                </ItemExtra>
            </Item>
          </Panel>
        </Grid>
        <Grid item md={4}>
          <Panel>
            <Item>
                <ItemContent>
                Your HARUNO Balance
                </ItemContent>
                <ItemExtra>
                {yourHarunoBalance + 'HARUNO'}
                </ItemExtra>
            </Item>
          </Panel>
        </Grid>
        <Grid item md={12}>
          <Panel borderColor="white">
            <VerticalItems>
                <div style={{display: 'flex'}}>
                  <InputWrapper>
                    <InputTitle>HARUNO Amount</InputTitle>
                    <Input value={harunoAmount}></Input>
                  </InputWrapper>
                  <InputWrapper>
                    <InputTitle>APY(%)</InputTitle>
                    <Input value={apyRate}></Input>
                  </InputWrapper>
                </div>
                <div style={{display: 'flex'}}>
                  <InputWrapper>
                    <InputTitle>HARUNO price at purchase ($)</InputTitle>
                    <Input value={harunoPriceAtPurchase} onChange={(e: any) => setHarunoPriceAtPurchase(e.target.value)}></Input>
                  </InputWrapper>
                  <InputWrapper>
                    <InputTitle>Future HARUNO market price ($)</InputTitle>
                    <Input value={futureHarunoMarketPrice} onChange={(e: any) => setFutureHarunoMarketPrice(e.target.value)}></Input>
                  </InputWrapper>
                </div>
                <VerticalItem style={{display: 'flex', paddingBottom: '0px'}}>
                    <VerticalItemTitle style={{float: 'unset'}}>Days</VerticalItemTitle>
                    <VerticalItemContent style={{float: 'unset', marginLeft: '10px', backgroundColor:'#3D1430', width: '60px', borderRadius: '15px', color: '#D15480', fontSize: '1rem'}}>{days}</VerticalItemContent>
                </VerticalItem>
                <VerticalItem style={{padding: '0px'}}>
                    <VerticalItemContent style={{float: 'unset'}}>
                      <Range type="range" id="range" min="1" max="365" name="range" value={days} onChange={(e:any) => setDays(e.target.value)}/>
                    </VerticalItemContent>
                </VerticalItem>
                <VerticalItem>
                    <VerticalItemTitle>Your initial investment</VerticalItemTitle>
                    <VerticalItemContent onChange={(e: any) => setinitInvestment(e.target.value)}>{ '$' + initInvestment} </VerticalItemContent>
                </VerticalItem>
                <VerticalItem>
                    <VerticalItemTitle>Current wealth</VerticalItemTitle>
                    <VerticalItemContent onChange={(e: any) => setCurrentWealth(e.target.value)}>{'$' + currentWealth}</VerticalItemContent>
                </VerticalItem>
                <VerticalItem>
                    <VerticalItemTitle>HARUNO rewards estimation</VerticalItemTitle>
                    <VerticalItemContent  onChange={(e: any) => setHarunoRewards(e.target.value)}>{ harunoRewards + 'HARUNO' }</VerticalItemContent>
                </VerticalItem>
                <VerticalItem>
                    <VerticalItemTitle>Potential return</VerticalItemTitle>
                    <VerticalItemContent  onChange={(e: any) => setPotentialReturn(e.target.value)}>{'$' + potentialReturn}</VerticalItemContent>
                </VerticalItem>
            </VerticalItems>
          </Panel>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Calculator;
