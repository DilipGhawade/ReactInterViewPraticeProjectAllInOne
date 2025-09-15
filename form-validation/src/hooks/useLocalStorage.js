import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const savedValue = localStorage.getItem(key);
      return savedValue ? JSON.parse(savedValue) : initialValue;
    } catch (error) {
      console.error(`failed to get the item`);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error(`faild to save item in local storage`);
    }
  }, [key, value]);

  return [value, setValue];
};
