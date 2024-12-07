import { ToastContainer } from "react-toastify";
import LoginCard from "../components/UserLogInandOut/LoginCard";

const Login = () => {
  return (
    <div className="container">
      <LoginCard />
      <ToastContainer position="bottom-right" />
    </div>
  );
};
export default Login;
