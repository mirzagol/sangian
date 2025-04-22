import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Frame {
  id: number;
  name: string;
}
export interface Fabric {
  id: number;
  name: string;
  code: string;
  color: string;
}
export interface SofaOption {
  id: number;
  model_name: string;
  frame: Frame;
  fabric: Fabric;
}

const useSofaOptions = (modelId: string | undefined) => {
  const [options, setOptions] = useState<SofaOption[]>([]);
  const [frames, setFrames] = useState<Frame[]>([]);
  const [fabrics, setFabrics] = useState<Fabric[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!modelId) return;
    setIsLoading(true);
    setError(null);
    apiClient
      .get(`/sofa-info/${modelId}`)
      .then((res) => {
        const sofas = (res.data.sofas as SofaOption[]) || [];
        setOptions(sofas);
        // Unique frames
        const uniqueFrames: Frame[] = Array.from(
          new Map(sofas.map((s: SofaOption) => [s.frame.id, s.frame])).values()
        );
        setFrames(uniqueFrames);
        // Unique fabrics
        const uniqueFabrics = Array.from(
          new Map(
            (res.data.sofas || []).map((s: SofaOption) => [
              s.fabric.id,
              s.fabric,
            ])
          ).values()
        ) as Fabric[];
        setFabrics(uniqueFabrics);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [modelId]);

  return { options, frames, fabrics, isLoading, error };
};

export default useSofaOptions;
