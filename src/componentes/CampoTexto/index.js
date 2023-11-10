import { useState } from "react";
import "./CampoTexto.css";

/*Problema que arrow function resolve ? */
const CampoTexto = (props) => {
    //  Declaração de uma placeholder modificada acresentando as reticências
    const placeholderModificada = `${props.placeholder}...`

    //  Uma arrow function que ao perceber mudança no input, 
    //const [valor,setValor]= useState('');

    const aoDigitado = (evento) =>{
        props.textoAlterado(evento.target.value);
        //console.log(valor)
        //console.log(evento.target.value)
    };
    
    return (
        <div className="campo-texto" >
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    );
    
}

export default CampoTexto