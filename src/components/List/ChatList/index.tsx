import { IoSearchCircleSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import css from "./style.module.css";
import { useEffect, useRef, useState } from "react";
import { FaMinus } from "react-icons/fa6";
import AddUser from "./AddUser";

export const ChatList = () => {
  const [icon, setIcon] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClickOutSide = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIcon(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);
  return (
    <div className={css["search"]} ref={containerRef}>
      <div className={css["search-bar"]}>
        <IoSearchCircleSharp size={25} />
        <input
          className={css["input-search"]}
          type="text"
          placeholder="search"
        />
      </div>
      {icon ? (
        <>
          <AddUser />
          <FaMinus
            size={18}
            className={css["add-icon"]}
            onClick={() => setIcon(false)}
          />
        </>
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

export const ChatListContainer = ({ children }: React.PropsWithChildren) => {
  return <div className={css["container"]}>{children}</div>;
};
