import React, { useState } from 'react'
import { FaRegCopy } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

import { Picture, PicutreFooter, UrlContainer, CopyButton } from './styles'
import 'react-toastify/dist/ReactToastify.css';

const Image = ({picture}) => {
    const [ hover, changeHover ] = useState(false)
    const copyPhotoUrl = () => {
        navigator.clipboard.writeText(picture.url)
        toast.success("Successfully copied url", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        })
    }
    return (
        <Picture 
            onMouseOver={() => changeHover(true)}
            onMouseLeave={() => changeHover(false)}
        >
            <img src={picture.src.original} alt={`${picture.photographer} photo`}/>
            <PicutreFooter hover={hover}>
                <div>{picture.photographer}</div>
                <div>
                    <UrlContainer>{picture.url}</UrlContainer>
                    <CopyButton onClick={copyPhotoUrl}>
                        <FaRegCopy />
                    </CopyButton>
                </div>
            </PicutreFooter>
            <ToastContainer />
        </Picture>
    )
}

export default Image
