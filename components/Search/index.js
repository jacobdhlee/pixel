import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

import { SearchContainer, Input, InputWrapper, Button } from './styles';

const Search = ({onClick, searchPic}) => {
    const [ inputVal, changeInput ] = useState('')
    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            onClick(inputVal);
        }
    }
    return (
        <SearchContainer url={searchPic?.src?.original}>
            <h2>Please search or browse all stock photos</h2>
            <InputWrapper>
                <Input type={'text'} value={inputVal} onChange={(e) => changeInput(e.target.value)} onKeyPress={handleKeyPress}/>
                <Button onClick={() => onClick(inputVal)}><FaSearch /></Button>
            </InputWrapper>
            <h5><strong>Suggested:</strong> coffee, cafe, more</h5>
        </SearchContainer>
    )
}

export default Search;
