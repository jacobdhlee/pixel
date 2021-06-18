import React from 'react'

import Image from './Image';
import { ImagesContainer } from './styles';

const Images = ({pictures}) => {
    return (
        <ImagesContainer>
            {pictures && pictures.map(picture => <Image key={picture.id} picture={picture} />)}
        </ImagesContainer>
    )
}

export default Images;