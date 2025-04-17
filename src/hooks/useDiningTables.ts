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
        setDiningTables(res.data.dining_table_models);
        setLoading(false);
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
