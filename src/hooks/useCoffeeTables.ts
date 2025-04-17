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
        setCoffeeTables(res.data.coffee_table_models);
        setLoading(false);
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
