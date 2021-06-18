import styled from 'styled-components';


export const ImagesContainer = styled.div`
    width: 100vw;
    height: 70%;
    display: flex;
    margin: 20px 20px;
    flex-wrap: wrap;
    justify-content: center;

`

export const Picture = styled.div`
    background-color: lightgreen;
    height: 500px;
    width: 300px;
    border-radius: 10px;
    margin: 0 10px 10px 0;
    position: relative;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const PicutreFooter = styled.div`
    visibility: ${props => props.hover ? 'visible' : 'hidden'};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    flex-direction: column;
    background-color: rgba(0,0,0,0.5);
    padding: 5px 10px;
    justify-content: center;
    div {
        display: flex;
        flex-direction: row;
        color: #ffffff;
        font-size: 13px;
    }
`;

export const CopyButton = styled.div`
    background-color: transparent;
    margin-left: 10px;
    height: 18px;
    width: 20px;
    &:hover {
        cursor: pointer;
    }
`

export const UrlContainer = styled.span`
    width: 80%;
    overflow-y: scroll;
    height: 18px;
`;
