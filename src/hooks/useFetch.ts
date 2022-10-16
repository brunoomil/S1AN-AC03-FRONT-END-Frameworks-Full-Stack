import { useEffect, useState } from "react";
import { BASE_URL } from "../configs/baseUrl";

function useFetch<T>(url: string, hasChangeDataMutate?: boolean) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (hasChangeDataMutate) return
    setLoading(true);

    fetch(`${BASE_URL}${url}`)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const mutateDelete = async (deleteUrl: string) => {
    setLoading(true);

    const data = await fetch(`${BASE_URL}${deleteUrl}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
    setData(data)
    return data
  }

  const mutate = async (method: string, body?: any) => {
    setLoading(true);

    const data = await fetch(`${BASE_URL}${url}`, {
      body,
      method
    })
      .then((response) => response.json())
      .then((result) => result)
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
    setData(data)
    return data
  }

  const refetch = () => {
    setLoading(true);
    fetch(`${BASE_URL}${url}`)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { data, loading, error, refetch, mutate, mutateDelete };
}

export default useFetch;