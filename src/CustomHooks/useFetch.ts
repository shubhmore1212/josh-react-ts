import { useEffect, useState } from "react";
import { TODO_URL } from "../utils/constant";

export const useFetch = (url?: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  let newUrl=url?TODO_URL+"/"+url:TODO_URL;
  
  useEffect(() => {
    fetch(newUrl)
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
