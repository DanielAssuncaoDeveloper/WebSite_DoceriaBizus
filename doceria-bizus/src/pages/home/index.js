import React from 'react';
import Header from '../../ui/components/header';

import { Main } from './styled';
import { Tittle } from '../../ui/styles/styledTexts';

export default function Home(){
    return (
        <Main>
            <Header />
            <Tittle color='#000000' size="100">
                Hello World!
            </Tittle>
        </Main>
    )
}