import { useEffect, useState } from "react";

import axios from "axios";
const baseURL = "https://storeflexplswork-yvakl.ondigitalocean.app/api";
const KEY_API =
  "6fa3e29fa4d83092230205fd972e688ea877c874eb36e46e6ec742b9d74d442199eca0e3c82348fec7f19b1d2be4d0654f0f8868285a5d0a94e2edd5595668ecde430b1bd6e07b510371ef786be11bd9570cad64c08bfeda196ee36c0509c4dfcb139742ac63b7715e15335ae1adc64521aafd77074f9431872004485f352587";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(baseURL + url, {
          headers: {
            Authorization: "bearer " + KEY_API,
          },
        });
        setData(res.data.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
