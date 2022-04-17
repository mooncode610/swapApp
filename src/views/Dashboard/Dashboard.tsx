import { FC, useState, useEffect } from 'react';

import {
  Container,
  Item,
  ItemTitle,
  ItemContent,
  ButtonWrapper
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
const Dashboard: FC = () => {

  const [harunoPrice, setHarunoPrice] = useState(0);
  const [marketCap, setMarketCap] = useState(0);
  const [circulatingSupply, setCirculatingSupply] = useState(0);
  const [backedLiquidity, setBackedLiquidity] = useState(0);
  const [nextRebase, setNextRebase] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [marketValue, setMarketValue] = useState(0);
  const [pooltValue, setPoolValue] = useState(0);
  const [harunoInsurance, setHarunoInsurance] = useState(0)
  const [blackHole, setBlackHole] = useState(94056.49823)
  const [blackHoleValue, setBlackHoleValue] = useState(0)
  const [blackHoleSupply, setBlackHoleSupply] = useState(0)

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
        <Grid item md={12}>
          <Panel>
            <Grid container spacing={2}>
              <Grid item md={4}>
                <Item>
                  <ItemTitle>
                  HARUNO Price
                  </ItemTitle>
                  <ItemContent>
                  {'$' + harunoPrice}
                  </ItemContent>
                </Item>
              </Grid>
              <Grid item md={4}>
                <Item>
                  <ItemTitle>
                  Marketcap
                  </ItemTitle>
                  <ItemContent>
                  {'$' + marketCap}
                  </ItemContent>
                </Item>
              </Grid>
              <Grid item md={4}>
                <Item>
                  <ItemTitle>
                  Circulating Supply
                  </ItemTitle>
                  <ItemContent>
                  {'$' + circulatingSupply}
                  </ItemContent>
                </Item>
              </Grid>
              <Grid item md={4}>
                <Item>
                  <ItemTitle>
                  Backed Liquidity
                  </ItemTitle>
                  <ItemContent>
                  {'$' + backedLiquidity}
                  </ItemContent>
                </Item>
              </Grid>
              <Grid item md={4}>
                <Item>
                  <ItemTitle>
                  Next Rebase
                  </ItemTitle>
                  <ItemContent>
                  {'$' + nextRebase}
                  </ItemContent>
                </Item>
              </Grid>
              <Grid item md={4}>
                <Item>
                  <ItemTitle>
                  Total Supply
                  </ItemTitle>
                  <ItemContent>
                  {'$' + totalSupply}
                  </ItemContent>
                </Item>
              </Grid>
            </Grid>
          </Panel>
        </Grid>
        <Grid item md={6}>
          <Panel>
            <Item>
              <ItemTitle>
              HARUNO Price
              </ItemTitle>
              <ItemContent>
              {'$' + harunoPrice.toLocaleString()}
              </ItemContent>
            </Item>
          </Panel>
        </Grid>
        <Grid item md={6}>
          <Panel>
            <Item>
              <ItemTitle>
              Market Value of Treasury Asset
              </ItemTitle>
              <ItemContent>
              {'$' + marketValue.toLocaleString()}
              </ItemContent>
            </Item>
          </Panel>
        </Grid>
        <Grid item md={6}>
          <Panel>
            <Item>
              <ItemTitle>
              Pool Value
              </ItemTitle>
              <ItemContent>
              {'$' + marketValue.toLocaleString()}
              </ItemContent>
            </Item>
          </Panel>
        </Grid>
        <Grid item md={6}>
          <Panel>
            <Item>
              <ItemTitle>
              HARUNO Insurance Fund Value
              </ItemTitle>
              <ItemContent>
              {'$' + harunoInsurance.toLocaleString()}
              </ItemContent>
            </Item>
          </Panel>
        </Grid>
        <Grid item md={4}>
          <Panel>
            <Item>
              <ItemTitle>
              # Black Hole
              </ItemTitle>
              <ItemContent>
              {blackHole.toLocaleString() + ' HARUNO'}
              </ItemContent>
            </Item>
          </Panel>
        </Grid>
        <Grid item md={4}>
          <Panel>
            <Item>
              <ItemTitle>
              $ Value of Black Hole
              </ItemTitle>
              <ItemContent>
              {'$' + blackHoleValue.toLocaleString()}
              </ItemContent>
            </Item>
          </Panel>
        </Grid>
        <Grid item md={4}>
          <Panel>
            <Item>
              <ItemTitle>
              % Black Hole : Supply
              </ItemTitle>
              <ItemContent>
              {blackHoleSupply.toLocaleString() + '%'}
              </ItemContent>
            </Item>
          </Panel>
        </Grid>
      </Grid>
      
    </Container>
  );
};
export default Dashboard;
