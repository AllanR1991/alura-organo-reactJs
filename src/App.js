import { useState } from 'react';
import Banner from './componentes/Banner'; //Necessario fazer o importe do componente, ./ siginifica apartir de onde estamos acesse .
// Para evitar duplicação de nomes "import Banner from './componentes/Banner/Banner'" como no caso do import do banner na pasta do componente utilizamos idex.js para criarmos o componente e chamamos apenas a pasta do componente que ele por si só encontrara o .js

import Formulario from './componentes/Formulario';
//import Tested from './componentes/Tested';
import Time from './componentes/Time';
import RodaPe from './componentes/RodaPe';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Ux & Deseign',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ];

  const [colaboradores , setColoaboradores] = useState ([])

  const aoNovoColocaboradorAdicionado = (colaborador) => {
    debugger
    //console.log(colaborador)
    //  O array abaixo coloca os colaradores antigos e depois adiciona o novo colaborador.
    setColoaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner /> {/*Como utilizar um componente*/}         
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColocaboradorAdicionado(colaborador)}/>
      
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

      <RodaPe/>

    </div>
  );
}

export default App;
