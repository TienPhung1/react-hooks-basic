import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url, isCovidData) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    async function fetchData() {
      try {
        const res = await axios.get(url, {
          cancelToken: source.token,
        });
        const data = res && res.data ? res.data : [];

        if (data && data.length > 0 && isCovidData === true) {
          data.map((item) => {
            item.Date = moment(item.Date).format("DD/MM/YY");
            return item;
          });
        }
        setData(data.reverse());
        setLoading(false);
        setIsError(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled", error.message);
        } else {
          // handle error
          setIsError(true);
          setLoading(false);
        }
      }
    }
    setTimeout(() => {
      fetchData();
    }, 2000);

    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, [url, isCovidData]);

  return {
    data,
    loading,
    isError,
  };
};

export default useFetch;
