import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Other {
  id: number;
  name: string;
  description: string;
  image_path: string;
}

const useOthers = () => {
  const [others, setOthers] = useState<Other[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<Other[]>("/others", { signal: controller.signal })
      .then((res) => {
        const othersData = res.data;

        // Preload images
        const imagePromises = othersData.map(
          (other) =>
            new Promise<void>((resolve) => {
              const img = new window.Image();
              img.src = other.image_path;
              img.onload = () => resolve();
              img.onerror = () => resolve(); // Resolve even if image fails to load
            })
        );

        Promise.all(imagePromises).then(() => {
          setOthers(othersData);
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

  return { others, error, isLoading };
};

export default useOthers;
