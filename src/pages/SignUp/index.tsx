import { Container ,Content,Background} from "./styles";
import logoimg from "../../assets/logo.svg"
import { FiLock, FiArrowLeft, FiMail, FiUser } from "react-icons/fi";
import { Form} from "@unform/web";
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignUp:React.FC = () =>{
    const handleSubmit = (data: object) => {
        console.log(data);
    };

    return (
        <Container>         
             <Background />
          <Content>
            <img src={logoimg} alt="GoBarber" />
            <Form initialData={{name:"angola"}} onSubmit={handleSubmit}>
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