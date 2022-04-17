import { FC, useState, useEffect } from 'react';

import {
  Container,
  Item,
  ItemContent,
  ItemTitle,
  BlackPanel,
  FormElement,
  FormElementContent,
  FormElementTitle,
  NetworkImg,
  FormElementInput,
} from './style';
import logoImg        from '../../assets/image/logo_sty.png'
import swapImg        from '../../assets/image/swap.svg'
import accountImg     from '../../assets/image/account.svg'
import dashboardImg   from '../../assets/image/dashboard.svg'
import calculatorImg  from '../../assets/image/calculator.svg'
import { useHistory } from 'react-router-dom';
import Button         from '../../components/Button';
import Panel          from '../../components/Panel'
import { ButtonWrapper } from '../Dashboard/style';
import Modal from '../../components/Modal';
const Swap: FC = () => {

  const history                       = useHistory();
  const [currentForm, setCurrentForm] = useState('Swap')
  const [fromBalance, setFromBalance] = useState(0);
  const [toBalance, setToBalance] = useState(0)
  const [fromTokenCount, setFromTokenCount] = useState(0);
  const [toTokenCount, setToTokenCount] = useState(0);
  const [slippage, setSlippage] = useState(1)
  const [openSetting, setOpenSetting] = useState(false)
  const onMax = () => {

  }

  const onExchange = () => {

  }
  return (
    <Container>
        <Modal open={openSetting} close={() =>setOpenSetting(false)} title={'Transaction Setting'} content={
            <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
            <Button 
                value={'0.1%'}
                onClick={() => {}}
                width="50px"
                height="30px"
                style={{alignSelf: "self-end"}}
            ></Button>
            <Button 
                value={'0.5%'}
                onClick={() => {}}
                width="50px"
                height="30px"
                blackBg={true}
                style={{alignSelf: "self-end"}}
            ></Button>
            <Button 
                value={'1.0%'}
                onClick={() => {}}
                width="50px"
                height="30px"
                blackBg={true}
                style={{alignSelf: "self-end"}}
            ></Button>
            <Button 
                value={'1.00 %'}
                onClick={() => {}}
                width="50px"
                height="30px"
                blackBg={true}
                style={{alignSelf: "self-end"}}
            ></Button>
            </div>} 
        />
        <Button 
            value={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024"  height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M512.5 390.6c-29.9 0-57.9 11.6-79.1 32.8-21.1 21.2-32.8 49.2-32.8 79.1 0 29.9 11.7 57.9 32.8 79.1 21.2 21.1 49.2 32.8 79.1 32.8 29.9 0 57.9-11.7 79.1-32.8 21.1-21.2 32.8-49.2 32.8-79.1 0-29.9-11.7-57.9-32.8-79.1a110.96 110.96 0 0 0-79.1-32.8zm412.3 235.5l-65.4-55.9c3.1-19 4.7-38.4 4.7-57.7s-1.6-38.8-4.7-57.7l65.4-55.9a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a442.5 442.5 0 0 0-79.6-137.7l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.2 28.9c-30-24.6-63.4-44-99.6-57.5l-15.7-84.9a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52-9.4-106.8-9.4-158.8 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.3a353.44 353.44 0 0 0-98.9 57.3l-81.8-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a445.93 445.93 0 0 0-79.6 137.7l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.2 56.5c-3.1 18.8-4.6 38-4.6 57 0 19.2 1.5 38.4 4.6 57l-66 56.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.3 44.8 96.8 79.6 137.7l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.8-29.1c29.8 24.5 63 43.9 98.9 57.3l15.8 85.3a32.05 32.05 0 0 0 25.8 25.7l2.7.5a448.27 448.27 0 0 0 158.8 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l.9-2.6c4.3-12.4.6-26.3-9.5-35zm-412.3 52.2c-97.1 0-175.8-78.7-175.8-175.8s78.7-175.8 175.8-175.8 175.8 78.7 175.8 175.8-78.7 175.8-175.8 175.8z"></path></svg>}
            onClick={() => {setOpenSetting(true)}}
            width="50px"
            height="50px"
            style={{alignSelf: "self-end"}}
        ></Button>
     <BlackPanel>
        <div>From: </div>
        <div style={{display: 'flex'}}>
            <FormElement>
                <FormElementTitle>
                    <NetworkImg src="https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_1.png" />BNB
                </FormElementTitle>
                <FormElementContent>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
                </FormElementContent>
            </FormElement>
            <FormElement>
                <FormElementTitle>
                    <Button value="MAX" onClick={onMax} width={'50px'} height={'36px'} style={{borderRadius: '10px'}}></Button>
                </FormElementTitle>
                <FormElementInput value={fromTokenCount} onChange={(e:any) => setFromTokenCount(e.target.value)}/>
            </FormElement>
        </div>
        <div>Balance: {fromBalance}</div>
     </BlackPanel>
     <div style={{display: 'flex', justifyContent:'center', margin:"-35px"}}>
        <Button 
            value={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></svg>}
            onClick={onExchange}
            width="50px"
            height="50px"
        ></Button>
     </div>
     <BlackPanel>
        <div>To: </div>
        <div style={{display: 'flex'}}>
            <FormElement>
                <FormElementTitle>
                    <NetworkImg src="https://harunoinu.com/images/haruno-logo.png" />HARUNO
                </FormElementTitle>
                <FormElementContent>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
                </FormElementContent>
            </FormElement>
            <FormElement>
                <FormElementInput value={toTokenCount} onChange={(e:any) => setToTokenCount(e.target.value)}/>
            </FormElement>
        </div>
        <div>Balance: {toBalance}</div>
     </BlackPanel>
     <div style={{display: 'flex', justifyContent:'space-between', color: 'white', margin: '20px'}}>
     <div>Slippage Tolerance</div>
     <div>{slippage}%</div>
     </div>
     <Button value="NOT ENOUGH BALANCE" onClick={() => {}} style={{width: '100%'}}></Button>

    </Container>
  );
};
export default Swap;
