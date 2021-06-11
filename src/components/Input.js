import React from 'react';

//Styled Components
import {InputGroup, InputStyled, ValidateIcon, Message} from './../styledElements/formElements';

//Icons
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Input = ({estado, cambiarEstado, type, name, placeholder, message, regex, repeat}) => {

    const onChange = (e) => {
        cambiarEstado({...estado, campo: e.target.value})
    }

    const validacion = (e) => {
        if (regex) {   
            if (regex.test(estado.campo)){
                cambiarEstado({...estado, valido: 'true'}) 
            } else {
                cambiarEstado({...estado, valido: 'false'})
            }
        }

        if(repeat){
            repeat()
        }

    }

    return (
        <div className="col-12 col-md-3">
            <InputGroup>
                <InputStyled 
                    type={type} 
                    placeholder= {placeholder} 
                    id= {name} 
                    value={estado.campo}
                    onChange={onChange}
                    onKeyUp={validacion}
                    onBlur={validacion}
                    valido={estado.valido}
                    />
                    <ValidateIcon 
                        icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle} 
                        valido={estado.valido}
                    />     
            </InputGroup>
            <Message valido={estado.valido}>{message}</Message>
        </div>   
    );
}

export default Input;