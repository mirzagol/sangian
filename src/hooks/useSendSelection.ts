import { useState } from "react";
import apiClient from "../services/api-client";

interface SendSelectionResponse {
  success: boolean;
  message: string;
  user_id: number;
  selection_id: number;
}

export const useSendSelection = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<SendSelectionResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sendSelection = async (data: {
    name: string;
    cellphone: string;
    furniture_type: string;
    furniture_id: number;
  }) => {
    setLoading(true);
    setError(null);
    setResponse(null);
    try {
      const res = await apiClient.post<SendSelectionResponse>(
        "/user/selection",
        data
      );
      setResponse(res.data);
    } catch (err: any) {
      setError(err?.response?.data?.message || "خطا در ارسال اطلاعات");
    } finally {
      setLoading(false);
    }
  };

  return { sendSelection, loading, response, error, setResponse };
};
