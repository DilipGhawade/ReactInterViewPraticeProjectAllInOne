import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((resp) => {
        setLoading(false);
        if (!resp.ok)
          throw new Error(`Failed to get response. Status: ${resp.status}`);

        return resp.json();
      })
      .then((data) => {
        // console.log(`the resp : ${JSON.stringify(data)}`);

        setLoading(false);
        if (Array.isArray(data)) {
          setData(data);
        } else {
          setData([data]);
        }
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};
