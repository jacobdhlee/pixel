import styled from 'styled-components';

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
`;

export const PageInput = styled.input`
    width: 100px;
    height: 50px;
    padding: 5px 10px;
    outline: none;
    margin-right: 10px;
    -webkit-appearance: none;
    font-size: 20px;
`