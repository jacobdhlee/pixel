import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Main = styled.div`
    flex: 1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`