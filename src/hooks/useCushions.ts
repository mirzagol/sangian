import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Cushion {
  id: number;
  name: string;
  description: string;
  image_path: string;
}

interface FetchCushionResponse {
  cushion_models: Cushion[];
}

const useCushions = () => {
  const [cushions, setCushions] = useState<Cushion[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchCushionResponse>("/cushion/models", {
        signal: controller.signal,
      })
      .then((res) => {
        const models = res.data.cushion_models;

        // Preload images
        const imagePromises = models.map(
          (cushion) =>
            new Promise<void>((resolve) => {
              const img = new window.Image();
              img.src = cushion.image_path;
              img.onload = () => resolve();
              img.onerror = () => resolve();
            })
        );

        Promise.all(imagePromises).then(() => {
          setCushions(models);
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

  return { cushions, error, isLoading };
};

export default useCushions;
