import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Sofa {
  id: number;
  name: string;
  coverImage: string;
  types: string[];
}

interface FetchSofaResponse {
  count: number;
  sofas: Sofa[];
}

const useSofas = () => {
  const [sofas, setSofas] = useState<Sofa[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchSofaResponse>("/sofa-models", { signal: controller.signal })
      .then((res) => {
        const fetchedSofas = res.data.sofas;

        // Preload all images
        const imagePromises = fetchedSofas.map((sofa) => {
          return new Promise<void>((resolve) => {
            const img = new Image();
            img.src = sofa.coverImage;
            img.onload = () => resolve(); // Resolve when the image is loaded
            img.onerror = () => resolve(); // Resolve even if the image fails to load
          });
        });

        // Wait for all images to load
        Promise.all(imagePromises).then(() => {
          setSofas(fetchedSofas);
          setLoading(false); // Set loading to false after all images are loaded
        });
      })
      .catch((err) => {
        if (err.name === "CanceledError") return; // Ignore abort errors
        setError(err.message);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { sofas, error, isLoading };
};

export default useSofas;
