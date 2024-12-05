import { useState } from "react";
import css from "./style.module.css";
import { LuMessageSquareHeart } from "react-icons/lu";
import { MdLibraryBooks } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
const Chat = () => {
  const [emoji, setEmoji] = useState("");
  const [openEmoji, setOpenEmoji] = useState(false);

  const handleEmojiClick = (emojiObject: any) => {
    setEmoji((prev) => prev + emojiObject.emoji); // Append emoji to input text
  };
  return (
    <div className={css["container"]}>
      <div className={css["section"]}>
        <div className={css["profile-bar"]}>
          <img
            src="https://placehold.co/100"
            alt=""
            width={65}
            style={{ padding: "10px", borderRadius: "50px" }}
          />{" "}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "0px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p className={css["text-name"]}>John knownThen</p>
              <p className={css["text-profile"]}>Neque porro quisquam est,</p>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <MdOutlineMail />
          <LuMessageSquareHeart />
          <MdLibraryBooks />
        </div>
      </div>
      <div className={css["typing-box-container"]}>
        <div className={css["section"]}>
          <div className={css["column"]}>// icon</div>
          <div className={css["column"]}>
            {" "}
            <input type="text" className={css["input"]} />
          </div>
          <div className={css["column"]}>
            <p onClick={() => console.log("click")}>😊</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat;
