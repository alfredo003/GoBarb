import { Container ,Content,Background} from "./styles";
import logoimg from "../../assets/logo.svg"
import  {Form} from '@unform/web'
import { FiLock, FiLogIn, FiMail } from "react-icons/fi";
import { FormHandles} from "@unform/core";
import getValidationErros from "../../utils/getValidationErros";

import * as Yup from 'yup'
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useCallback, useRef } from "react";
const SignIn: React.FC = () => {

    const formRef = useRef<FormHandles>(null); 
  
      const handleSubmit = useCallback(async (data: object) => {
          try{
             formRef.current?.setErrors({});
            const schema = Yup.object().shape({
              email: Yup.string()
                .required("E-mail é Obrigatório")
                .email("Digite um e-mail válido"),
              password: Yup.string().min(6, "Senha é Obrigatório"),
            });
            await schema.validate(data,{
              abortEarly:false
            });
  
          }catch(err)
          {
            const erros = getValidationErros(err);
  
                formRef.current?.setErrors(erros);
          }
      },[]);
  
    return (
      <Container>
        <Content>
          <img src={logoimg} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>
            <Input type="text" icon={FiMail} name="email" placeholder="Email" />
            <Input type="password" icon={FiLock} name="password" placeholder="Senha" />
            <Button type="submit">Entrar</Button>
            <a href="forgot">Esqueci minha senha </a>
          </Form>
          <a href="">
            <FiLogIn />
            Criar Conta
          </a>
        </Content>
        <Background />
      </Container>
    );
}

export default SignIn;