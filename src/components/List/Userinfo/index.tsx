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
      <FaCircleUser size={20} style={{ marginRight: "14px" }} />
      <p>
        {name} <span style={{ marginLeft: "10px" }}></span>
      </p>
      <p>{lastName}</p>
      <div>
        <BsThreeDots />
        <PiVideoCameraFill />
        <FaEdit />
      </div>
    </div>
  );
};
export default UserInfo;
