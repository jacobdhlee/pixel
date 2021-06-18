import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import styled from 'styled-components';
import { DEVICE_SIZE } from '../../constants';

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 30vh;
    background-image: url(${props => props.url});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    h2 {
        color: #ffffff;
    }
    h5 {
        max-width: 800px;
        width: 45%;
        color: #ffffff;
        margin-top: 5px;
    }
    background-color: #a6a6a6;
    @media(max-width: ${DEVICE_SIZE.largeMobile}) {
        h2 {
            font-size: 14px;
            width: 70%;
            text-align: center;
        }
        h5 {
            display: none;
        }
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    max-width: 800px;
    width: 50%;
    height: 50px;
`

export const Input = styled.input`
    width: 70%;;
    height: 70%;
    padding: 5px 10px;
    border: 0;
    outline: none;
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    width: 20%;
    height: 90%;
    &:hover{
        cursor: pointer;
    }
`