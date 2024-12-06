import { useEffect, useState } from "react";
import css from "./style.module.css";
import { LuMessageSquareHeart } from "react-icons/lu";
import { MdLibraryBooks } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import EmojiPicker from "emoji-picker-react";
const Chat = () => {
  const [emoji, setEmoji] = useState("");
  const [openEmoji, setOpenEmoji] = useState(false);

  const handleEmojiClick = (e: any) => {
    setEmoji((prev) => prev + e.emoji); // Append emoji to input text
    setOpenEmoji((prev) => !prev);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmoji(e.target.value);
  };

  const hadleClickOutside = (event: MouseEvent) => {
    const emojiPopup = document.getElementById("emoji-popup");
    if (emojiPopup && !emojiPopup.contains(event.target as Node)) {
      setOpenEmoji(false);
    }
  };

  useEffect(() => {
    if (openEmoji) {
      document.addEventListener("click", hadleClickOutside);
    }
    return () => {
      document.removeEventListener("click", hadleClickOutside);
    };
  }, [openEmoji]);

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
            <input
              type="text"
              className={css["input"]}
              value={emoji}
              onChange={handleInputChange}
            />
          </div>
          <div className={css["column"]}>
            <div id="emoji-popup" onClick={() => setOpenEmoji((prev) => !prev)}>
              😊
            </div>
            {openEmoji && <EmojiPicker onEmojiClick={handleEmojiClick} />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat;
