import { LuMessageSquareHeart } from "react-icons/lu";
import { MdLibraryBooks, MdOutlineMail } from "react-icons/md";
import css from "./style.module.css";
import { ChatBody } from "./ChatBody";
import { ButtonSection } from "./ButtonSection";
export const TopBar = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className={css["section-profile"]}>
        <div className={css["profile-bar"]}>
          <img
            src="https://placehold.co/100"
            alt=""
            width={65}
            style={{ padding: "10px", borderRadius: "50px" }}
          />{" "}
          <div className={css["column-top-bar"]}>
            <div className={css["text-name-box"]}>
              <p className={css["text-name"]}>John knownThen</p>
              <p className={css["text-profile"]}>Neque porro quisquam est,</p>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <MdOutlineMail />
          <LuMessageSquareHeart />
          <MdLibraryBooks />
        </div>
      </div>

      <ChatBody />

      <ButtonSection />
    </div>
  );
};
