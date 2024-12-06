import { FaUserCircle } from "react-icons/fa";
import css from "./style.module.css";
import { FaAngleDown } from "react-icons/fa";
const Detail = () => {
  return (
    <Container>
      <div className={css["detail-profile"]}>
        <div className={css[""]}>
          <FaUserCircle size={40} />
        </div>

        <p>Owen Hargreaves</p>
        <p className={css["description"]}>
          Owen Lee Hargreaves (born 20 January 1981) is a former professional
          footballer who played as a midfielder.
        </p>
      </div>

      {/* body */}

      <div className={css["info"]}>
        <div className={css["option"]}>
          <div className={css["title"]}>
            <span>Chat setting</span>
            <FaAngleDown />
          </div>
        </div>
      </div>

      <div className={css["option"]}>
        <div className={css["title"]}>
          <span>Photos</span>
          <FaAngleDown />
        </div>
      </div>

      {/*  */}
      <div className={css["buttom-bar"]}>
        <button className={css["button-block"]}>Block User</button>
        <button className={css["button-logout"]}>Logout</button>
      </div>
    </Container>
  );
};

const Container = ({ children }: React.PropsWithChildren) => {
  return <div className={css["container"]}> {children}</div>;
};
export default Detail;
