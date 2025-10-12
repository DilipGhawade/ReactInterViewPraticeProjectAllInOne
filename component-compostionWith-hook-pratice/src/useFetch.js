import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (!resp.ok) return new Error("Failed to get data");
        return resp.json();
      })
      .then((data) => {
        setLoading(false);
        if (Array.isArray(data)) {
          setData(data);
        } else if (typeof data === "object") {
          setData([data]);
        } else {
          setData();
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [url]);

  return { data, loading, error };
};
