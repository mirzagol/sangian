import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface DiningTable {
  id: number;
  name: string;
  description: string;
  image_path: string;
}

interface FetchDiningTableResponse {
  dining_table_models: DiningTable[];
}

const useDiningTables = () => {
  const [diningTables, setDiningTables] = useState<DiningTable[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchDiningTableResponse>("/dining-table/models", {
        signal: controller.signal,
      })
      .then((res) => {
        const tables = res.data.dining_table_models;

        // Preload images
        const imagePromises = tables.map(
          (table) =>
            new Promise<void>((resolve) => {
              const img = new window.Image();
              img.src = table.image_path;
              img.onload = () => resolve();
              img.onerror = () => resolve();
            })
        );

        Promise.all(imagePromises).then(() => {
          setDiningTables(tables);
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

  return { diningTables, error, isLoading };
};

export default useDiningTables;
