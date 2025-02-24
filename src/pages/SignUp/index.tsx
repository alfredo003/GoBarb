import { Container ,Content,Background} from "./styles";
import logoimg from "../../assets/logo.svg"
import { FiLock, FiArrowLeft, FiMail, FiUser } from "react-icons/fi";
import { FormHandles} from "@unform/core";
import { Form} from "@unform/web";
import getValidationErros from "../../utils/getValidationErros";

import * as Yup from 'yup'
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useCallback, useRef } from "react";

const SignUp:React.FC = () =>{
  const formRef = useRef<FormHandles>(null); 

console.log(formRef);

    const handleSubmit = useCallback(async (data: object) => {
        try{
           formRef.current?.setErrors({});
          const schema = Yup.object().shape({
            name: Yup.string().required("Nome é Obrigatório"),
            email: Yup.string()
              .required("E-mail é Obrigatório")
              .email("Digite um e-mail válido"),
            password: Yup.string().min(6, "No minimo 6 digito"),
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
             <Background />
          <Content>
            <img src={logoimg} alt="GoBarber" />
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Faça seu Cadastro</h1>
              <Input type="text" icon={FiUser} name="name" placeholder="Nome" />
              <Input type="text" icon={FiMail} name="email" placeholder="Email" />
              <Input type="password"icon={FiLock} name="password" placeholder="Senha" />
              <Button type="submit">Cadastrar</Button>
            </Form>
            <a href="">
              <FiArrowLeft/>
              Voltar para o login</a>
          </Content>

        </Container>
      );
}

export default SignUp;