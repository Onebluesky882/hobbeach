import { FaUserCircle } from "react-icons/fa";
import css from "./style.module.css";
export const ChatBody = () => {
  return (
    <div style={{ display: "flex", overflow: "scroll" }}>
      <div className={css["center"]}>
        {/* ---------------  friend  ------------------ */}
        <div className={css["message"]}>
          <FaUserCircle size={100} />
          <div className={css["texts"]}>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <span> 1 min ago</span>
          </div>
        </div>
        {/* ---------------  own  ------------------ */}
        <div className={css["message-own"]}>
          <div className={css["texts"]}>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <span> 1 min ago</span>
          </div>
        </div>
        {/*  */}
        {/* ---------------  friend  ------------------ */}
        <div className={css["message"]}>
          <FaUserCircle size={100} />
          <div className={css["texts"]}>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <span> 1 min ago</span>
          </div>
        </div>
        {/*  */}
        {/* ---------------  own  ------------------ */}
        <div className={css["message-own"]}>
          <div className={css["texts"]}>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <span> 1 min ago</span>
          </div>
        </div>
        {/*  */}
        {/* ---------------  friend  ------------------ */}
        <div className={css["message"]}>
          <FaUserCircle size={100} />
          <div className={css["texts"]}>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <span> 1 min ago</span>
          </div>
        </div>
        {/*  */}
        {/* ---------------  own  ------------------ */}
        <div className={css["message-own"]}>
          <div className={css["texts"]}>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <span> 1 min ago</span>
          </div>
        </div>
        {/*  */}
        {/* ---------------  friend  ------------------ */}
        <div className={css["message"]}>
          <FaUserCircle size={100} />
          <div className={css["texts"]}>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <span> 1 min ago</span>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};
