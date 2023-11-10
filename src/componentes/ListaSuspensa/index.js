import "./ListaSuspensa.css"

const ListaSuspensa = (props) =>
{
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select 
                onChange={evento => props.textoAlterado(evento.target.value)} 
                required={props.obrigatorio} 
                value= { props.value=="Escolha uma opção" ? null : props.value}>
                {/* Atenção em usar index do map para valor na key pois quando deletado o item o react pode ter problema ao atualizar. */}
                <option value="">Escolha uma opção...</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
                
            </select>
        </div>
    )
}

export default ListaSuspensa