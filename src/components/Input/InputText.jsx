import React from "react";

const InputText = (props) => {

    const estilo = {
        
        backgroundColor: '#D4DDD6',
        border: 'none',
        outline: 'none',
        borderShadow: 'none',
        width: 300,
        height: 30,

      /*   '&:focus': {
            outline: 'none',
            border: 'none',
            borderShadow: 'none',
            backgroundColor: 'red',
        }, */

        '&:hover': {
            backgroundColor: 'blue',

        }
    }

    return(
        <div>
            <input 
                style={estilo}
                type="text" 
                placeholder={props.placeholder}
    
            />
        </div>
    )
}

export default InputText