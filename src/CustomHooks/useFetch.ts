import { useEffect, useState } from "react";

export const useFetch = (url: any) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Could not fetch data");
        return res.json();
      })
      .then((res) =>
        setTimeout(() => {
          setData(res);
          setLoading(false);
        }, 1000)
      )
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        console.log(err.message)
      });
  }, [url]);

  return { data, loading, error };
};
