import React from 'react';

import './global.css';

import Routes from './routes';

function App() {  
  return (                  
    <Routes />
  );                        
}

export default App;


//componente no React, nada mais eh que uma funcao que retorna Html, pode ter funcionalidades Js ou Css.
//JSX (JavaScript XML ) quando Html esta dentro do arquivo Js, chamamos de JSX.
//quando fazemos qualquer modificacao no codigo o React ja modifica na pagina e chamamos isso de LiveReload.
//propriedade eh quase igual ao conceito no Html como atributo tipo.. <h1 id (atributo)>, id eh um atributo de h1
//Estado, no React, toda vez que o componente e montado ele renderiza automaticamente. Toda vez que meu componente precisar armazenar uma informacao dentro dele, nao vou criar uma variavel comum, vou criar um Estado  
//conceito de imutabilidade, no REact nao podemos manipular o valor do Estado de uma forma direta, precisamos sobrepor com o valor que quisermos e nos retorna com uma Array [ valor, funcaoDeAtualizacao(do primeiro valor dessa array) ]
//const [counter, setCounter] = useState(0); //Imutabilidade [counter(vaiavel com valor 0), setCounter(responsavel em alterar a variaval counter, criar uma funcao para isso)] 
//function increment() {
//  setCounter(counter + 1); //Imutabilidade (setCounter)
//}