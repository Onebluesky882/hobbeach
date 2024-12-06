import { useEffect, useState } from "react";
import css from "./style.module.css";
import { LuMessageSquareHeart } from "react-icons/lu";
import { MdLibraryBooks } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { IoIosSend } from "react-icons/io";
import { ImAttachment } from "react-icons/im";
import { CiImageOn } from "react-icons/ci";
const Chat = () => {
  const [text, setText] = useState("");
  const [openEmoji, setOpenEmoji] = useState(false);

  const handleEmojiClick = (e: EmojiClickData) => {
    setText((prev) => prev + e.emoji); // Append emoji to input text
    setOpenEmoji((prev) => !prev);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setText(e.target.value);
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
        <div style={{ display: "flex", gap: "10px" }}>
          <MdOutlineMail />
          <LuMessageSquareHeart />
          <MdLibraryBooks />
        </div>
      </div>

      {/* bottom  */}
      <div className={css["typing-box-container"]}>
        <div className={css["section-message-box"]}>
          <div className={css["column-left"]}>
            <ImAttachment />
            <CiImageOn />
          </div>
          <div className={css["column-message-box"]}>
            {" "}
            <input
              type="text"
              className={css["input"]}
              value={text}
              onChange={handleInputChange}
            />
          </div>
          <div className={css["column-emoji"]}>
            <div id="emoji-popup" onClick={() => setOpenEmoji((prev) => !prev)}>
              😊
            </div>
            <div>
              <IoIosSend />
            </div>
            <div className={css["emoji-popup"]}>
              {openEmoji && (
                <EmojiPicker
                  onEmojiClick={handleEmojiClick}
                  className="picker"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat;
