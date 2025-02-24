import {ValidationError} from 'yup'

interface IErros{
    [key:string] : string;

}
export default function getValidationErros(err:ValidationError):IErros
{
    const validationErros: IErros = {};
    
    err.inner.forEach((error)=>{
        validationErros[error.path] = error.message;
    });

    return validationErros;
}