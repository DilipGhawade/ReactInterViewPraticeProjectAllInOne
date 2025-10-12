import { useEffect, useState } from "react";


enum Status {
  SUCCESS,
  LOADING,
  ERROR,
}
function useFetch<T>(url: string): {
  data: T | null;
  loading: boolean;
  error: Error | null;
} {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (!resp.ok) throw new Error("Error while fetching data");
        return resp.json();
      })
      .then((data: T) => {
        setLoading(false);
        if (Array.isArray(data)) {
          setData(data);
        } else if (typeof data === "object") {
          setData([data] as T);
          setLoading(false);
        } else {
          setLoading(false);
          setData(null);
        }
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
