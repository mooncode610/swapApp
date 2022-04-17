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
const Account: FC = () => {

  const [balance, setBalance] = useState(0)
  const [haruno, setHaruno] = useState(0)
  const [apy, setApy] = useState(0)
  const [dailyROI, setDailyROI] = useState(0)
  const [rebase, setRebase] = useState('00:00:00')
  const [currentHarunoPrice, setCurrentHarunoPrice] = useState(0)
  const [nextRewardAmount, setNextRewardAmount] = useState(0)
  const [nextRewardAmountUsd, setNextRewardAmountUsd] = useState(0)
  const [nextRewardYield, setNextRewardYield] = useState(0)
  const [roiOneDayUsd, setRoiOneDayUsd] = useState(0)
  const [roiFiveDay, setRoiFiveDay] = useState(0)
  const [roiFiveDayUsd, setRoiFiveDayUsd] = useState(0)



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
                Your Balance
                </ItemContent>
                <ItemExtra>
                {'$' + balance}
                </ItemExtra>
                <ItemTitle>
                {haruno + 'HARUNO'}
                </ItemTitle>
            </Item>
          </Panel>
        </Grid>  
        <Grid item md={4}>
          <Panel>
            <Item>
                <ItemContent>
                APY
                </ItemContent>
                <ItemExtra>
                {apy + '%'}
                </ItemExtra>
                <ItemTitle>
                { 'DAILY ROI' + dailyROI + '%' }
                </ItemTitle>
            </Item>
          </Panel>
        </Grid>
        <Grid item md={4}>
          <Panel>
            <Item>
                <ItemContent>
                Next Rebase
                </ItemContent>
                <ItemExtra>
                {rebase}
                </ItemExtra>
                <ItemTitle>
                {'You will earn money soon'}
                </ItemTitle>
            </Item>
          </Panel>
        </Grid>
        <Grid item md={12}>
          <Panel borderColor="white">
            <VerticalItems>
                
                <VerticalItem>
                    <VerticalItemTitle>Current HARUNO Price</VerticalItemTitle>
                    <VerticalItemContent>{'$' + currentHarunoPrice}</VerticalItemContent>
                </VerticalItem>
                <VerticalItem>
                    <VerticalItemTitle>Next Reward Amount</VerticalItemTitle>
                    <VerticalItemContent>{nextRewardAmount + ' HARUNO'}</VerticalItemContent>
                </VerticalItem>
                <VerticalItem>
                    <VerticalItemTitle>Next Reward Amount USD</VerticalItemTitle>
                    <VerticalItemContent>{nextRewardAmountUsd + ' HARUNO'}</VerticalItemContent>
                </VerticalItem>
                <VerticalItem>
                    <VerticalItemTitle>Next Reward Yield</VerticalItemTitle>
                    <VerticalItemContent>{nextRewardYield + ' %'}</VerticalItemContent>
                </VerticalItem>
                <VerticalItem>
                    <VerticalItemTitle>ROI(1-Day Rate) USD</VerticalItemTitle>
                    <VerticalItemContent>{'$' + roiOneDayUsd}</VerticalItemContent>
                </VerticalItem>
                <VerticalItem>
                    <VerticalItemTitle>ROI(5-Day Rate)</VerticalItemTitle>
                    <VerticalItemContent>{roiFiveDay + ' %'}</VerticalItemContent>
                </VerticalItem>
                <VerticalItem>
                    <VerticalItemTitle>ROI(5-Day Rate) USD</VerticalItemTitle>
                    <VerticalItemContent>{'$' + roiFiveDayUsd}</VerticalItemContent>
                </VerticalItem>
            </VerticalItems>
          </Panel>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Account;
