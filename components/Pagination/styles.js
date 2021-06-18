import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';

export const PaginationContainer = styled.div`
    width: 100vw;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    span {
        font-size: 20px;
    }
    @media(max-width: ${DEVICE_SIZE.largeMobile}) {
        width: 90vw;
        span {
            font-size: 15px;
    }   
    }
`;

export const PageButton = styled.button`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 15px;
    &:hover {
        cursor: pointer;
    }
    @media(max-width: ${DEVICE_SIZE.largeMobile}) {
        width: 30px;
        height: 30px;
    }
`;

export const PageInput = styled.input`
    width: 100px;
    height: 50px;
    padding: 5px 10px;
    outline: none;
    margin-right: 10px;
    -webkit-appearance: none;
    font-size: 20px;
    @media(max-width: ${DEVICE_SIZE.largeMobile}) {
        width: 70px;
        height: 30px;
        font-size: 15px;
    }
`