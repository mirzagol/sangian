import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface CoffeeTable {
  id: number;
  name: string;
  description: string;
  image_path: string;
}

interface FetchCoffeeTableResponse {
  coffee_table_models: CoffeeTable[];
}

const useCoffeeTables = () => {
  const [coffeeTables, setCoffeeTables] = useState<CoffeeTable[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchCoffeeTableResponse>("/coffee-table/models", {
        signal: controller.signal,
      })
      .then((res) => {
        const models = res.data.coffee_table_models;

        // Preload images
        const imagePromises = models.map(
          (table) =>
            new Promise<void>((resolve) => {
              const img = new window.Image();
              img.src = table.image_path;
              img.onload = () => resolve();
              img.onerror = () => resolve();
            })
        );

        Promise.all(imagePromises).then(() => {
          setCoffeeTables(models);
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

  return { coffeeTables, error, isLoading };
};

export default useCoffeeTables;
