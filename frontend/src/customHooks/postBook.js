import { useState, useEffect } from "react";
import axios from "axios";

function postBook(url,formData) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);
    axios
      .post(url, formData)
      .then((res) => {
        setLoading(false);
        res.data && setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError("error posting book");
      });
  }, [url]);

  return [data, loading, error];
}

export default postBook;
