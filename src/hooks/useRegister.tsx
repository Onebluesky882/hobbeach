import { useState } from "react";
import supabase from "../utils/supabase";
import { transformKeysToSnakeCase } from "../utils/string";

export type User = {
  email: string;
  name: string;
  surname: string;
  password: string;
};

const defaultUser = {
  name: "",
  email: "",
  surname: "",
  password: "",
};
const useRegister = () => {
  const [newUser, setNewUser] = useState(defaultUser);
  const [imageProfile, setImageProfile] = useState<{
    file: File | null;
    url: string;
  }>({ file: null, url: "" });

  // register
  const createUser = async () => {
    const { data, error } = await supabase.from("users").insert(newUser);
    if (data) {
      console.log("done :", data);
    } else {
      console.log(error);
    }
  };

  return { setNewUser, newUser, createUser };
};
export const useRegisterDefaultProvider = {
  setNewUser: () => null,
  newUser: defaultUser,
  createUser: () => Promise.resolve(),
};
export default useRegister;
