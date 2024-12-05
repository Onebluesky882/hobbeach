import { IoSearchCircleSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import css from "./style.module.css";
import { useState } from "react";
import { FaMinus } from "react-icons/fa6";
const ChatList = () => {
  const [icon, setIcon] = useState(false);

  console.log(icon);
  return (
    <div className={css["search"]}>
      <div className={css["search-bar"]}>
        <IoSearchCircleSharp size={25} />
        <input
          className={css["input-search"]}
          type="text"
          placeholder="search"
        />
      </div>
      {icon ? (
        <FaMinus
          size={18}
          className={css["add-icon"]}
          onClick={() => setIcon(false)}
        />
      ) : (
        <FaPlus
          size={18}
          className={css["add-icon"]}
          onClick={() => setIcon(true)}
        />
      )}
    </div>
  );
};
export default ChatList;
