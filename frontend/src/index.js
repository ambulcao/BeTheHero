import React from 'react';
import ReactDOM from 'react-dom';  //integracao do React com a DOM (arvore de elementos)
import App from './App';   //importando o App dentro de uma variavel App

ReactDOM.render(      //renderizando ou seja, colocando em tela um componente (tag Html) que retorna em Html
  <React.StrictMode>
    <App />             
  </React.StrictMode>,
  document.getElementById('root')
);

