import React, { useState, useEffect } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import { DEFAULT_PER_PAGE } from '../../constants';

import { PaginationContainer, PageButton, PageInput } from './styles';

function Pagination({total_result, callPage, handlePages}) {
    const [ current, changePage ] = useState(1);
    const total = total_result ? Math.ceil(total_result / DEFAULT_PER_PAGE) : 1;

    useEffect(() => {
        if(handlePages !== current) {
            changePage(1)
        }
    }, [handlePages])

    const handleChangePage = () => {
        if(handlePages === current) return;
        if(current < 1) {
            changePage(1)
            callPage(1)
        } else if(current > total) {
            changePage(total)
            callPage(total)
        } else {
            callPage(current)
        }
    }

    const handleButtonClick = (str) => {
        let changedNum = str === 'forward' ? current + 1 : current - 1;
        if(changedNum < 1) {
            changePage(1)
            callPage(1)
        } else if(changedNum > total) {
            changePage(total)
            callPage(total)
        } else {
            changePage(changedNum)
            callPage(changedNum)
        }
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleChangePage();
        }
    }

    return (
        <PaginationContainer>
            <PageButton disabled={current === 1} onClick={() => handleButtonClick('back')}>
                <FaAngleLeft />
            </PageButton>
            <PageInput 
                type={'number'} 
                min={1} max={total} 
                onChange={(e) => changePage(e.target.value)} value={current}
                onBlur={handleChangePage}
                onKeyPress={handleKeyPress}
            />
            <span>of {total}</span>
            <PageButton disabled={current === total} onClick={() => handleButtonClick('forward')}>
                <FaAngleRight />
            </PageButton>
        </PaginationContainer>
    )
}

export default Pagination

