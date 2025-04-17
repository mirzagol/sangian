import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface BedSet {
  id: number;
  name: string;
  description: string;
  image_path: string;
}

interface FetchBedSetResponse {
  dining_table_models: BedSet[];
}

const useBedSets = () => {
  const [bedSets, setBedSets] = useState<BedSet[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchBedSetResponse>("/bed-set/models", {
        signal: controller.signal,
      })
      .then((res) => {
        setBedSets(res.data.dining_table_models);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "CanceledError") return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { bedSets, error, isLoading };
};

export default useBedSets;
