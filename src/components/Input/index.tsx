import { InputHTMLAttributes, useCallback, useEffect, useRef, useState } from "react";
import { Container,Error } from "./styles";
import { IconBaseProps } from "react-icons";
import { useField } from "@unform/core";
import { FiAlertCircle } from "react-icons/fi";


interface InputProps extends InputHTMLAttributes<HTMLInputElement>
{
    name:string;
    icon?:React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({name, icon: Icon, ... rest}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused,setIsFocused] = useState(false);
    const [isFilled,setIsFilled] = useState(false);
   const {fieldName, defaultValue, error, registerField} = useField(name);

   useEffect(()=>{
    registerField({
        name:fieldName,
        ref:  inputRef.current,
        path: 'value'
    }); 
   },[fieldName,registerField]);


   const handleInputFocus = useCallback(() =>
    {
     setIsFocused(true);
    },[]);

   const handleInputBlur = useCallback(() =>
   {
    setIsFocused(false);
    if(inputRef.current?.value)
    {
        setIsFilled(true);
    }else{
        setIsFilled(false);
    }
   },[])
    return (
      <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
        {Icon && <Icon size={20} />}
        <input
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
        {error && 
        <Error title={error}>
           <FiAlertCircle color="#ff0000" size={20} />
        </Error>}
       
      </Container>
    );
}
export default Input;
