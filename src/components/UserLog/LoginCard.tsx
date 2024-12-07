import { Link } from "react-router-dom";
import css from "./style.module.css";
const LoginCard = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className={css["section-login"]}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className={css["login-form"]}>
        <input type="text" value="" />
        <input type="password" value="" />
      </form>
      <p>
        Don't have Account yet? <Link to={"/register"}>Register</Link>
      </p>
    </div>
  );
};

export default LoginCard;
