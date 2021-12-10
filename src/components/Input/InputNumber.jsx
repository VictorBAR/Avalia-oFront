import React from "react";
import './style.css'

const InputNumber = (props) => {

    return(
        <div>
            <input 
                className="inputCadastro"
                type="number" 
                value={props.value}
                onChange={props.setValue}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default InputNumber