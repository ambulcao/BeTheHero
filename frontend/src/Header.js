import React from 'react'; //sempre importar o Reacj para funcionar o JSX, onde for usar o JSX, deve-se importar o JSX

export default function Header({children}) {  //recebe o parametro props da funcao
    return (
        <header>
            <h1>{children}</h1>     
        </header>
    );
}

//quando quisermos injetar alguma funcao para aparecer no Html, temos que colocar as { } Exem. { props.title }