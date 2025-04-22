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
        const models = res.data.dining_table_models;

        // Preload images
        const imagePromises = models.map(
          (bedSet) =>
            new Promise<void>((resolve) => {
              const img = new window.Image();
              img.src = bedSet.image_path;
              img.onload = () => resolve();
              img.onerror = () => resolve();
            })
        );

        Promise.all(imagePromises).then(() => {
          setBedSets(models);
          setLoading(false);
        });
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
