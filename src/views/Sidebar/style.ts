import styled         from 'styled-components';
import { magentaPink } from '../../utils/basicColor';
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 240px;
    height: 100vh;
    background-color: ${magentaPink}
`;

export const LogoImg = styled.img`
    padding-top: 1.75rem;
    padding-bottom: 3.5rem;
`

export const MenuItemContainer = styled.div`
    display: flex;
    padding-left: 1.5rem;
    padding-top: 10px;
    padding-bottom: 5px;
    cursor: pointer;
`

export const MenuImg = styled.img`
    padding-right: 10px;

`

export const MenuText = styled.div`
    color: white;
    font-size: 16px;
    font-weight: 600;
`
