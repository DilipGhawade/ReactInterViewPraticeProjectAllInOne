import { UserData } from "../types/UserData";
export const validateEmail = (email: string, userData: UserData[]) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Email is required!";
  if (!emailRegex.test(email)) return "Please Enter valid email address!";
  const userExits = userData.some((user: UserData) => user.email === email);
  if (!userExits) return "User Not found!";

  return "";
};

export const validateEmailId = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "Email is required";
  if (!emailRegex.test(email)) return "Please enter valid email address";
  return "";
};
