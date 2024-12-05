import ChatList from "./ChatList";
import css from "./style.module.css";
import Userinfo from "./Userinfo";

const List = ({ children }: React.PropsWithChildren) => {
  return <div className={css["container"]}>{children}</div>;
};
export default List;
