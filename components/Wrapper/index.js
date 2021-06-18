import React from 'react';
import Head from 'next/head'
import { Container, Main } from './styles';

const Wrapper = ({children}) => {
    return (
        <Container>
            <Head>
                <title>Pexels Picture</title>
                <meta name="description" content="pixel photo" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main>
                {children}
            </Main>
        </Container>
    )
}

export default Wrapper