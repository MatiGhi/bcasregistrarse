import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colors = {
    border: "#0075FF",
    error: "#bb2929",
    success: "#1ed12d"
} 

const Form = styled.form`
    margin-bottom: 20px;
    //padding: 50px;
    padding: 10px;
    /*background-color: #ccc;*/

    /*@media (max-width:800px){
        grid-template-columns: 1fr;
        background-color: #BD392F;
    }*/
`;

const InputGroup = styled.div`

    /*display: flex;
    flex-direction: row;
    height: 0.5rem !important;*/

    position: relative;
    z-index: 90;

`;


const InputStyled = styled.input`

/* .mb-4 
margin-bottom: 1.5rem!important;*/

margin-bottom: 5px;

/* .form-control-lg */
min-height: calc(1.5em + 1rem + 2px);
padding: .5rem 1rem;
font-size: 1.25rem;
border-radius: .3rem;

/* .form-control */
/*display: block;*/
/*width: 100%;*/
padding: .375rem .75rem;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #212529;
background-color: #fff;
background-clip: padding-box;
border: 1px solid #ced4da;
-webkit-appearance: none;
appearance: none;
border-radius: .25rem;
transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

/* .row>* */
flex-shrink: 0;
/*width: 100%;*/
max-width: 100%;
padding-right: calc(var(--bs-gutter-x)/ 2);
padding-left: calc(var(--bs-gutter-x)/ 2);
margin-top: var(--bs-gutter-y);

/*.form-control:focus */
&:focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
}

/* CUSTOM */
width: 100%;
background: #fff;
border-radius: 3px;
height: 45px;
line-height: 45px;
padding: 0 5px 0 5px;
transition .3s ease all;

${props => props.valido === 'true' && css`
    //border: 3px solid;
    border: 1px solid #ced4da;
`}

${props => props.valido === 'false' && css`
    border: 3px solid ${colors.error} !important;
`}

`;

const Message = styled.p`
font-size: 12px;
margin-bottom: 0;
color: ${colors.error};
display: none;

${props => props.valido === 'true' && css`
    display: none;
`}

${props => props.valido === 'false' && css`
    display: block;
`}

`;

const ValidateIcon = styled(FontAwesomeIcon)`
    position:absolute;
    //right: 10px;
    right: -20px;
    bottom: 14px;
    z-index: 100;
    font-size: 16px;
    opacity: 0;

    ${props => props.valido === 'true' && css`
        height: 25px;
        opacity: 1;
        color: ${colors.success};
    `}

    ${props => props.valido === 'false' && css`
        height: 25px;
        opacity: 1;
        color: ${colors.error};
    `}

`;

const TermsWrapper = styled.div`

/*form-check*/
display: block;
min-height: 1.5rem;
padding-left: 1.5em;
margin-bottom: .125rem;

`

const InputCheckStyled = styled.input`

/*.form-check-input[type=checkbox]{}*/

border-radius: .25em;

/*form-check-input{}*/
float: left;
margin-left: -1.5em;

/*.form-check-input {}*/
width: 1em;
height: 1em;
margin-top: .25em;
vertical-align: top;
background-color: #fff;
background-repeat: no-repeat;
background-position: center;
background-size: contain;
border: 1px solid rgba(0,0,0,.25);
-webkit-appearance: none;
appearance: none;
-webkit-print-color-adjust: exact;
color-adjust: exact;

/*.form-check-input:active {}*/
&:active {
    filter: brightness(90%);
}

/*.form-check-input:focus {}*/
&:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
}

/*.form-check-input:checked[type=checkbox] {}*/
&:checked[type=checkbox] {
    background-image: url(data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e);
}

/*.form-check-input:checked {}*/
&:checked {
    background-color: #0d6efd;
    border-color: #0d6efd;
}
`

const LabelInputCheckStyled = styled.label`
/*label {}*/
display: inline-block;
`

const SignUpButton = styled.button`

/*CUSTOM previous on Style.CSS*/
/*.btn-signup {}*/
    background-color: var(--bg_bcas) !important;
    color: whitesmoke !important;
    font-weight: bold !important;
    width: 30%;
    letter-spacing: 0.2px;
    font-size: 14px;

[type=button]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}

/*.rounded-pill {}*/
border-radius: 50rem!important;

/*.btn { */
display: inline-block;
font-weight: 400;
line-height: 1.5;
color: #212529;
text-align: center;
text-decoration: none;
vertical-align: middle;
cursor: pointer;
-webkit-user-select: none;
user-select: none;
background-color: transparent;
border: 1px solid transparent;
padding: .375rem .75rem;
font-size: 1rem;
border-radius: .25rem;
transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`

const SuccessMessage = styled.div`
height: 45px;
line-height: 45px;
color: #E6EBEB;
background: ${colors.success};
padding: 0px 15px;
border-radius: 3px;
p {
    margin: 0;
}
b {
    margin-left: 10px;
}
`;

const ErrorMessage = styled.div`
    height: 45px;
    line-height: 45px;
    background: #F66060;
    padding: 0px 15px;
    border-radius: 3px;
    p {
        margin: 0;
    }
    b {
        margin-left: 10px;
    }
`


export { Form, 
        InputGroup, 
        InputStyled, 
        TermsWrapper, 
        InputCheckStyled, 
        LabelInputCheckStyled, 
        SignUpButton, 
        SuccessMessage, 
        ErrorMessage, 
        Message, 
        ValidateIcon};
