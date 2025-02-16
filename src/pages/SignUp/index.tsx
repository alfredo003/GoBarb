import { Container ,Content,Background} from "./styles";
import logoimg from "../../assets/logo.svg"
import { FiLock, FiArrowLeft, FiMail, FiUser } from "react-icons/fi";
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignUp:React.FC = () =>{
    return (
        <Container>         
             <Background />
          <Content>
            <img src={logoimg} alt="GoBarber" />
            <form action="" method="post">
              <h1>Faça seu Cadastro</h1>
              <Input type="text" icon={FiUser} name="" placeholder="Nome" />
              <Input type="text" icon={FiMail} name="" placeholder="Email" />
              <Input type="password"icon={FiLock} name="" placeholder="Senha" />
              <Button>Cadastrar</Button>
            </form>
            <a href="">
              <FiArrowLeft/>
              Voltar para o login</a>
          </Content>

        </Container>
      );
}

export default SignUp;