"use client";

import { useEffect } from "react";
import { useLoader } from "../context/loaderContext";

export default function Page() {
  const { loading, setLoading } = useLoader();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 2000));
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div>
      {loading && <p>Global Loading...</p>}
      <h1>Page Content</h1>
    </div>
  );
}
