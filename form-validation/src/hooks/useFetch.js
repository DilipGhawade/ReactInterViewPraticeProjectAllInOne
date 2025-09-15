import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (!resp.ok) return new Error("Faild to get the data");
        setLoading(false);
        return resp.json();
      })
      .then((data) => {
        setLoading(false);
        if (Array.isArray(data)) {
          setData(data);
        } else {
          setData([data]);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [url]);

  return { data, loading, error };
};
