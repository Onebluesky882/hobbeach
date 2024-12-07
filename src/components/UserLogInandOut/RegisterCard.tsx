import { useState } from "react";
import css from "./style.module.css";
import { FaUserCircle } from "react-icons/fa";
export const RegisterCard = () => {
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

        <input type="file" accept="image/*" onChange={handleFileChange} />

        <input type="text" value="" placeholder="email" />

        <input type="password" value="" placeholder="password" />
      </form>
    </div>
  );
};
