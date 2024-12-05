import css from "./style.module.css";

type MessageListCardProps = {
  image: string;
  name: string;
  message: string;
};

const MessageListCard = ({ ...pros }: MessageListCardProps) => {
  return (
    <div className={css["item"]}>
      <img src={pros.image} width={60} alt="" />
      <div className={css["text"]}>
        <p>{pros.name}</p>
        <div className={css["message"]}>
          <p>{pros.message}</p>
        </div>
      </div>
    </div>
  );
};
export default MessageListCard;
