import { useState } from "react";
import css from "./style.module.css";
import { FaUserCircle } from "react-icons/fa";

type RegisterCardProps = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

const defaultUser = {
  name: "",
  email: "",
  surname: "",
  password: "",
};

export const RegisterCard = () => {
  const [user, setUser] = useState<RegisterCardProps>(defaultUser);
  // update later type later
  const [avatar, setAvatar] = useState<{ file: File | null; url: string }>({
    file: null,
    url: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar({
        file,
        url: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const updateUser = {
      email: formData.get("email") as string,
      name: formData.get("name") as string,
      surname: formData.get("surname") as string,
      password: formData.get("password") as string,
    };
    setUser(updateUser);
  };
  return (
    <div className={css["register-section"]}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className={css["register-form"]}>
        <label htmlFor="file" className={css["labal-file"]}>
          {avatar.url === "" ? (
            <FaUserCircle size={40} />
          ) : (
            <img src={avatar.url} alt="Avatar" width={100} />
          )}
        </label>

        <input
          type="file"
          name="avatar"
          accept="image/*"
          onChange={handleFileChange}
        />

        <input type="text" name="email" placeholder="email" />
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="surname" placeholder="surname" />
        <input type="password" name="password" placeholder="password" />
        <button>Register</button>
      </form>
    </div>
  );
};
