import { Link } from "react-router-dom";
import css from "./style.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginCard = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className={css["section-login"]}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className={css["login-form"]}>
        <input type="text" />
        <input type="password" />
        <button>Login</button>
      </form>
      <p>
        Don't have Account yet? <Link to={"/register"}>Register</Link>
      </p>
    </div>
  );
};

export default LoginCard;
