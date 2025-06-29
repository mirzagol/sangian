import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface CoffeeTableImageInfo {
  id: number;
  name: string;
  imagePath: string;
  frame: {
    id: number;
    name: string;
  };
}

const useCoffeeTableImages = (
  coffeeTableId: string | number | undefined,
  frameId: number | undefined
) => {
  const [images, setImages] = useState<string[]>([]);
  const [info, setInfo] = useState<CoffeeTableImageInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!coffeeTableId || !frameId) return;
    setIsLoading(true);
    setError(null);
    apiClient
      .get(`/coffee-table?coffeeTableId=${coffeeTableId}&frameId=${frameId}`)
      .then((res) => {
        const table = res.data.dining_table?.[0];
        if (table) {
          // imagePath is a string of comma-separated URLs
          const imageArr: string[] = (table.imagePath || "")
            .split(",")
            .map((s: string) => s.trim().replace(/^"|"$/g, ""))
            .filter(Boolean);
          setImages(imageArr);
          setInfo(table);
        } else {
          setImages([]);
          setInfo(null);
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [coffeeTableId, frameId]);

  return { images, info, isLoading, error };
};

export default useCoffeeTableImages;
