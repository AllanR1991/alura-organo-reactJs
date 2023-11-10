import React, { useState } from "react";

const Tested = () => { 
    // Cria um estado chamado contador, com valor inicial 0 
    // e uma função chamada setContador para atualizá-lo 
    const [contador, setContador] = useState(0);

    // Cria uma função que incrementa o contador em 1 
    const aumentar = () => { setContador(contador + 1); };

    // Cria uma função que decrementa o contador em 1 
    const diminuir = () => { setContador(contador - 1); };

// Retorna um elemento JSX que mostra o contador e dois botões 
    return ( 
        <div> 
            <p>O valor do contador é: {contador}</p>
            <button onClick={aumentar}>Aumentar</button> 
            <button onClick={diminuir}>Diminuir</button> 
        </div> 
            ); 
};

export default Tested