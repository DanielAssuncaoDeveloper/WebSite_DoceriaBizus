import React from 'react';

import { Button } from '../../ui/styles/styledInputs';

export default function TestComponents(){
    return (
        <div style={{padding: "100px"}}>
         <Button onClick={() => alert()} width="200px" height="40px">
            Adicionar ao Carrinho
         </Button>
        </div>
    )
}