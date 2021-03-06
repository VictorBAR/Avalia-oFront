import React from "react";
import './style.css'

const InputText = (props) => {

    const tipo = props.senha? 'password': 'text'

    const cadastroTipo = props.tipoInput==="cadastro"? 'inputCadastro' : 'inputLogin';

    return(
        <div>
            <input 
                className={cadastroTipo}
                type="text" 
                value={props.value}
                onChange={props.setValue}
                placeholder={props.placeholder}
                type={tipo}
            />
        </div>
    )
}

export default InputText