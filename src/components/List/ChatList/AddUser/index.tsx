import { FaUserCircle } from "react-icons/fa";
import css from "./style.module.css";

const AddUser = () => {
  return (
    <div className={css["box"]}>
      <div className={css["div-search-user"]}>
        <form onSubmit={() => {}} className={css["form"]}>
          <input
            placeholder="Username"
            type="text"
            className={css["input-search"]}
          />
          <button className={css["button-search"]}>Search</button>
        </form>
      </div>
      <div className={css["div-user-add"]}>
        <FaUserCircle size={40} />
        <p>John</p>
        <p>John</p>
        <button className={css["button-user"]}>Add User</button>
      </div>
    </div>
  );
};
export default AddUser;
