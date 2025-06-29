import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface CoffeeTableFrame {
  id: number;
  name: string;
}
export interface CoffeeTableOption {
  id: number;
  model_name: string;
  frame: CoffeeTableFrame;
}

const useCoffeeTableOptions = (modelId: string | undefined) => {
  const [options, setOptions] = useState<CoffeeTableOption[]>([]);
  const [frames, setFrames] = useState<CoffeeTableFrame[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!modelId) return;
    setIsLoading(true);
    setError(null);
    apiClient
      .get(`/coffee-table/${modelId}`)
      .then((res) => {
        const tables = (res.data["coffee-tables"] as CoffeeTableOption[]) || [];
        setOptions(tables);
        // Unique frames
        const uniqueFrames: CoffeeTableFrame[] = Array.from(
          new Map(tables.map((t) => [t.frame.id, t.frame])).values()
        );
        setFrames(uniqueFrames);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [modelId]);

  return { options, frames, isLoading, error };
};

export default useCoffeeTableOptions;
