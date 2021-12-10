import React from "react";
import './style.css'

const Button = (props) => {
    return(
        <div>
            <button className="btn" onClick={() => props.quandoClicar()}>{props.nome}</button>
        </div>
    )
}

export default Button