import styled         from 'styled-components';
import { magentaPink } from '../../utils/basicColor';
import background     from '../../assets/image/background.png';

export const Container = styled.div`
    width: 60%;
    margin: auto;
    height: 100vh;
    display: flex;
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
    position: absolute;
    right: 10px;
    top: 10px;
`

