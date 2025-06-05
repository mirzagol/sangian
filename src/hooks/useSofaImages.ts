import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface SofaImageInfo {
  id: number;
  model_name: string;
  description: string;
  frame: {
    id: number;
    name: string;
  };
  fabric: {
    id: number;
    name: string;
    code: string;
    color: string;
  };
}

const useSofaImages = (
  sofaModel: string | number | undefined,
  frameId: number | undefined,
  fabricId: number | undefined
) => {
  const [images, setImages] = useState<string[]>([]);
  const [info, setInfo] = useState<SofaImageInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!sofaModel || !frameId || !fabricId) return;
    setIsLoading(true);
    setError(null);
    apiClient
      .get(
        `/sofa-info?sofaModel=${sofaModel}&frame=${frameId}&fabric=${fabricId}`
      )
      .then((res) => {
        // image_path is a stringified array
        // The API returns image_path as a string of comma-separated URLs, not a JSON array.
        // We need to split and trim the string to get an array of URLs.
        const raw = res.data.image_path || "";
        const imageArr: string[] = raw
          .split(",")
          .map((s: string) => s.trim().replace(/^"|"$/g, ""))
          .filter(Boolean);
        setImages(imageArr);
        setInfo(res.data.sofa_info || null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [sofaModel, frameId, fabricId]);

  return { images, info, isLoading, error };
};

export default useSofaImages;
