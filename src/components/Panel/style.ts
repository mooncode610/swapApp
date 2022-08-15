import styled         from 'styled-components';
import { magentaPink, cylindrical } from '../../utils/basicColor';
export const Container = styled.div<{
    borderColor: string;
  }>`
    border: 2px solid ${props => (props.borderColor)};
    box-sizing: border-box;
    border-radius: 16px;
    background-color: ${magentaPink};
    padding-top: 25px;
    padding-bottom: 25px;
`;
