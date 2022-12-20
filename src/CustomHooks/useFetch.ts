import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data,setData]=useState<any>(null);
  const [loading,setLoading]=useState<boolean>(true);
  const [error,setError]=useState("");

   useEffect(()=>{
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Could not fetch data");
        return res.json();
      })
      .then((res) =>
        setTimeout(() => {
          //Spliced only for todo since the list is big
            setData(res.splice(0,10));
          setLoading(false);
        }, 1000)
      )
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
     },[url])

  return {data,setData,loading,error};
};
