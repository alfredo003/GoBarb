import { Container ,Content,Background} from "./styles";
import logoimg from "../../assets/logo.svg"
import { FiLogIn } from "react-icons/fi";
const SignIn: React.FC = () => {
    return (
      <Container>
        <Content>
          <img src={logoimg} alt="GoBarber" />
          <form action="" method="post">
            <h1>Faça seu login</h1>
            <input type="text" name="" placeholder="Email" />
            <input type="password" name="" placeholder="Senha" />
            <button type="submit">Entrar</button>
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