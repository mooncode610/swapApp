import { useEffect }             from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { Route, Switch }         from 'react-router-loading';
import { fadeIn }                from 'react-animations';
import { useSelector }           from 'react-redux';
import styled, { keyframes }     from 'styled-components';
import Dashoboard                from './Dashboard'
import Account                   from './Account'
import Calculator                from './Calculator';
import Sidebar                   from './Sidebar'
import Swap                      from './Swap';
import background                from '../assets/image/background.png';

export function Routes() {
  const location = useLocation();
  const FadeIn = styled.div`
  animation: 1.5s ${keyframes`${fadeIn}`} ;
  width: 100%;
  `;

  useEffect(() => {
  }, [location])
  
  return (
    <Switch location={location}>
      <div style={{
        display: 'flex',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        }} >
        <Sidebar />
        <FadeIn>
        <Route path="/dashboard" >
          <Dashoboard />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/swap">
          <Swap />
        </Route>
        </FadeIn>
      </div>
    </Switch>

  );
}
