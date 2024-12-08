import css from "./style.module.css";

const List = ({
  children,
  style,
}: React.PropsWithChildren & { style?: React.CSSProperties }) => {
  return (
    <div style={style} className={css["container"]}>
      {children}
    </div>
  );
};
export default List;
