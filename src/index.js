import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//  Aqui é onde começa a execução do nosso React.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // O ReactStrictMode é para nos ajudar enquanto Front-End. Ele em produção não fará nada, mas em ambiente de desenvolvimento, o fato dele estar aqui vai nos ajudar a prevenir erros e ter mensagens de erros mais amigáveis.
  
  // Devido p strictMode a props é duplicada quando ele faz a renderização, se comentar ele fica apenas um, mas isso é apenas durante o desenvolvimento em produção fica tudo normal
  
  <React.StrictMode>
    {/* O App abaixo referencia ao nosso App.js */}
    <App />
  </React.StrictMode>
);
