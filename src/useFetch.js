import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      // .then((res) => res.json())
      // adding error boundary
      .then((res) => {
        console.log("res", res);
        if (!res.ok) {
          throw Error(`Coudln't fetch data from the resource`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setIsLoading(false);
        setError(null);
      })

      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [url]);

  return { data, error, isLoading };
};
export default useFetch;
