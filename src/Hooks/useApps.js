import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios("../appsData.json")
      .then(data => {
        setLoading(false)
        setApps(data.data)
      })
  }, []);

  return{apps, loading}
};

export default useApps;
