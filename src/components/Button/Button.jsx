import React from "react";
import './style.css'

const Button = (props) => {
    return(
        <div>
            <button className="btn" >{props.nome}</button>
        </div>
    )
}

export default Button