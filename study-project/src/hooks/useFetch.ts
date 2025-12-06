import { useState, useEffect, useCallback } from "react";

interface UseFetchOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: HeadersInit;
  body?: BodyInit;
  skip?: boolean;
}

interface UseFetchReturn<T> {
  data: T | null;
  loading: boolean;
  error: string;
  refetch: () => void;
}

export const useFetch = <T = any>(
  url: string,
  options: UseFetchOptions = {}
): UseFetchReturn<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(!options.skip);

  const fetchData = useCallback(async () => {
    if (options.skip) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(url, {
        method: options.method || "GET",
        headers: options.headers,
        body: options.body,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result: T = await response.json();
      setData(result);
    } catch (err: unknown) {
      let errorMessage = "An unknown error occurred";

      if (err instanceof Error) {
        errorMessage = err.message;
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [url, options.skip, options.method, options.headers, options.body]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const refetch = () => {
    fetchData();
  };

  return { data, loading, error, refetch };
};
