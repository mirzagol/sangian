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
  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchSofaResponse>("/sofa-models", { signal: controller.signal })
      .then((res) => {
        setSofas(res.data.sofas);
      })
      .catch((err) => {
        if (err.name === "CanceledError") return; // Ignore abort errors
        setError(err.message);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return { sofas, error };
};

export default useSofas;
