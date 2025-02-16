import { Container ,Content,Background} from "./styles";
import logoimg from "../../assets/logo.svg"
import { FiLock, FiLogIn, FiMail } from "react-icons/fi";
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignIn: React.FC = () => {
    return (
      <Container>
        <Content>
          <img src={logoimg} alt="GoBarber" />
          <form action="" method="post">
            <h1>Faça seu login</h1>
            <Input type="text" icon={FiMail} name="" placeholder="Email" />
            <Input type="password"icon={FiLock} name="" placeholder="Senha" />
            <Button>Entrar</Button>
            <a href="forgot">Esqueci minha senha </a>
          </form>
          <a href="">
            <FiLogIn/>
            Criar Conta</a>
        </Content>
        <Background />
      </Container>
    );
}

export default SignIn;