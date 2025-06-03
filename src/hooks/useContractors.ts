import { useEffect, useState } from "react";

export const useContractors = () => {
  const [contractors, setContractors] = useState<
    { id: number; name: string }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.sangiansofa.com/api/contractors/list")
      .then((res) => res.json())
      .then((data) => setContractors(data))
      .finally(() => setLoading(false));
  }, []);

  return { contractors, loading };
};
