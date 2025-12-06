import { useState, useEffect } from "react";
export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};
