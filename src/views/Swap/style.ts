import styled         from 'styled-components';
import { magentaPink } from '../../utils/basicColor';
import background     from '../../assets/image/background.png';

export const Container = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ItemTitle = styled.div`
    font-weight: 600;
    line-height: 24px;
    font-size: 16px;
    color: rgba(244,215,225, 1);
    text-align: center
`

export const ItemContent = styled.div`
    line-height: 32px;
    font-weight: 600;
    font-size: 24px;
    text-align: center;
    color: white;
`

export const ButtonWrapper = styled.div`
    display: flex;
    right: 10px;
    top: 10px;
    display: flex;
    background-color:black;
    border-radius: 100px;
    margin: auto;
    margin-top: 10vh;
    margin-bottom : 7vh;
    width: fit-content;
`

export const BlackPanel = styled.div`
    background-color: black;
    color: white;
    display: block;
    justify-self: start;
    align-items: start;
    text-align: left;
    border-radius: 20px;
    padding: 20px;
    margin: 20px;
`
export const FormElement = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(16,17,17);
    padding: 15px;
    border-radius: 16px;
    width: 100%;
    margin: 5px;
`;
export const FormElementTitle = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    line-height: 1.5;
    font-size: 21px;
    // float: left;
`;
export const FormElementContent = styled.div`
    // float: right;
`;
export const FormElementInput = styled.input`
    background-color: transparent;
    border-color: rgb(16,17,17);
    height: 100%;
    padding: 0px;
    font-size: 22px;
    font-weight: 500;
    text-align: right;
    line-height: 60px;
    color: inherit;
    border: 0px;
    outline:none;
    width: 100%
`;
export const NetworkImg = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 10px;
`;
