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
  const [toBalance, setToBalance]     = useState(0)
  const [fromTokenCount, setFromTokenCount] = useState(0);
  const [plusTokenCount, setPlusTokenCount]     = useState(0);
  const [slippage, setSlippage]             = useState(1);
  const [openSetting, setOpenSetting]       = useState(false);
  const [openLiquidity, setOpenLiquidity]   = useState(false);
  const onMax = () => {

  }

  const onExchange = () => {

  }
  return (
    <Container>
        <Modal open={openLiquidity} close={() =>setOpenLiquidity(false)} title={'Transaction Setting'} content={
            <div>
            <BlackPanel>
                <div>Input: </div>
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
            </BlackPanel>
            <div style={{display: 'flex', justifyContent:'center', margin:"-35px"}}>
                <Button 
                    value={"+"}
                    onClick={()=>{}}
                    width="50px"
                    height="50px"
                ></Button>
            </div>
            <BlackPanel>
                <div>Input: </div>
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
                        <FormElementInput value={plusTokenCount} onChange={(e:any) => setPlusTokenCount(e.target.value)}/>
                    </FormElement>
                </div>
            </BlackPanel>
            </div>} 
        />
     <BlackPanel>
        <div style={{padding: '10px', fontSize: '25px'}}>Add liquidity to receive LP tokens </div>
        <div style={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
            <Button value="+ Add Liquidity"  height="40px" onClick={() => {setOpenLiquidity(true)}} style={{margin: '0px'}}/>
        </div>
     </BlackPanel>
    </Container>
  );
};
export default Swap;
