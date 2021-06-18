import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

import { SearchContainer, Input, InputWrapper, Button } from './styles';

const Search = ({onClick}) => {
    const [ inputVal, changeInput ] = useState('')
    return (
        <SearchContainer>
            <h2>Please search or browse all stock photos</h2>
            <InputWrapper>
                <Input type={'text'} value={inputVal} onChange={(e) => changeInput(e.target.value)}/>
                <Button onClick={() => onClick(inputVal)}><FaSearch /></Button>
            </InputWrapper>
            <h5><strong>Suggested:</strong> coffee, cafe, more</h5>
        </SearchContainer>
    )
}

export default Search;