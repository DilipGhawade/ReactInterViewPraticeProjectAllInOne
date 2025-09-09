import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((resp) => {
        if (!resp.ok)
          throw new Error(
            "Faild to fetch data with response code ",
            resp.status
          );
        return resp.json();
      })
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [url]);
  return { data, loading, error };
};
