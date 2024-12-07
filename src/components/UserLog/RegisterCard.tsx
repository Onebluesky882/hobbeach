import { useState } from "react";
import css from "./style.module.css";
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
    <div className={css[""]}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" />
        <input type="text" value="" />
        <input type="password" value="" />
      </form>
    </div>
  );
};
