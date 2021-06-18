import styled from 'styled-components';

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 30vh;
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