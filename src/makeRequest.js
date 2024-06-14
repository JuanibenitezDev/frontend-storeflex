import axios from "axios";
const URL = "https://storeflexplswork-yvakl.ondigitalocean.app/api";
const KEY_API =
  "6fa3e29fa4d83092230205fd972e688ea877c874eb36e46e6ec742b9d74d442199eca0e3c82348fec7f19b1d2be4d0654f0f8868285a5d0a94e2edd5595668ecde430b1bd6e07b510371ef786be11bd9570cad64c08bfeda196ee36c0509c4dfcb139742ac63b7715e15335ae1adc64521aafd77074f9431872004485f352587";
export const makeRequest = axios.create({
  baseURL: URL,
  headers: {
    Authorization: "bearer " + KEY_API,
  },
});
