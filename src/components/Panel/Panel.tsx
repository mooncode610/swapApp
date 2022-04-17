import { FC, ReactChildren, ReactChild }       from 'react';
import { Container } from './style'
import { magentaPink, cylindrical } from '../../utils/basicColor';

type PanelProps = {
    width?: number;
    height?: number;
    borderColor?: string;
    children: ReactChild | ReactChildren;
};

const Panel: FC<PanelProps> = ({
    width=100,
    height=100,
    borderColor=cylindrical,
    children=(<></>),
}) => {

    return (
        <Container borderColor={borderColor}>
        <>
        {
            children
        }
        </>
        </Container>
        
    );
};
export default Panel

