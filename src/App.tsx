import GlobalStyleComponent from "./styles/global"
import SignIn from "./pages/SignIn";
//import SignUp from "./pages/SignUp";
const App:React.FC  = () =>{
  return (
    <>
      <SignIn />
      <GlobalStyleComponent />
    </>
  );
}
export default App
