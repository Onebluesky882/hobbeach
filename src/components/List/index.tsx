import css from "./style.module.css";

const List = ({ children }: React.PropsWithChildren) => {
  return <div className={css["container"]}>{children}</div>;
};
export default List;
