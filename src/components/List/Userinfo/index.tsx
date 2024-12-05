import css from "./style.module.css";
import { FaCircleUser } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { PiVideoCameraFill } from "react-icons/pi";
type UserInfoProps = {
  name: string;
  lastName: string;
};

const UserInfo = ({ name, lastName }: UserInfoProps) => {
  return (
    <div className={css["container"]}>
      <div className={css["detail-name"]}>
        <FaCircleUser size={25} />
        <p>{name}</p>
        <p>{lastName}</p>
      </div>

      <div className={css["profile-icon"]}>
        <BsThreeDots />
        <PiVideoCameraFill />
        <FaEdit />
      </div>
    </div>
  );
};
export default UserInfo;
