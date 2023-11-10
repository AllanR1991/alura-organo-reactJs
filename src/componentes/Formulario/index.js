import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";


const Formulario = (props) => {

    /*
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux & Deseign',
        'Mobile',
        'Inovação e Gestão'
    ]*/

    
    //  let valor = 'Allan';

    //  hook -> sempre que tiver "use" exemplo "useState" será um Hook

    //  Essa é uma forma de usar o hook useState do React, que permite adicionar um estado local em um componente funcional. O useState recebe um valor inicial como argumento e retorna um array com duas posições: a primeira é o valor atual do estado, e a segunda é uma função que permite atualizar esse valor. Nesse caso, o valor inicial é uma string vazia (‘’), e as variáveis nome e setNome são os nomes dados para o estado e a função de atualização, respectivamente. Você pode usar nome para acessar o valor do estado em seu componente, e setNome para alterá-lo quando quiser

    //  useState compara a variavel "nome" com o valor da função "setNome" se houver alteração, o react Renderiza e passa o valor se "setNome" para variavel "nome"
    //  Ex: const[valor, novoValor(função)] = useState('ValorPadrão');
    const [nome,setNome]= useState('');
    const [cargo,setCargo]= useState('');
    const [imagem,setImagem]= useState('');
    const [time, setTime] = useState('');    
    

    const aoSalvar = (evento) =>{
        evento.preventDefault() //   O evento.preventDefault() é um método que cancela o evento se ele for cancelável, ou seja, impede que a ação padrão que pertence ao evento ocorra.
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        });

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        //console.log("Form foi submetido => ",nome,cargo,imagem,time);
    } 

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o car do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome} // Valor do input
                    textoAlterado={valor => setNome(valor)} //  Função que pega o valor de valor e passa para o setNome
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    textoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    valor={imagem}
                    textoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    itens={props.times} 
                    label="Time" 
                    valor={time}
                    textoAlterado={valor => setTime(valor)}
                />
                {/* Tudo que estiver entre o componete sera passado pra props como filho dela, possibilitando assim inserção de texto mais imagens e tals */}
                <Botao>
                    Criar card
                </Botao>
                
            </form>
        </section>
    )
}

export default Formulario