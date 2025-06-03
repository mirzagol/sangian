import { useState } from "react";

interface InquiryResult {
  loading: boolean;
  response: { message: string } | null;
  error: string | null;
  sendInquiry: (
    contractorId: string | null,
    firstName: string,
    lastName: string,
    phone: string
  ) => Promise<void>;
  setResponse: React.Dispatch<React.SetStateAction<{ message: string } | null>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export function useContractorInquiry(): InquiryResult {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<{ message: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sendInquiry = async (
    contractorId: string | null,
    firstName: string,
    lastName: string,
    phone: string
  ) => {
    setError(null);

    if (!firstName || !lastName || !phone || !contractorId) {
      setError("لطفا همه فیلدها را پر کنید.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        "http://api.sangiansofa.com/api/contractor/inquiry",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: `${firstName} ${lastName}`,
            cellphone: phone,
            contractor_id: Number(contractorId),
          }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        setResponse({ message: data.message || "درخواست با موفقیت ارسال شد." });
      } else {
        setError(data.message || "خطا در ارسال اطلاعات.");
      }
    } catch {
      setError("خطا در ارتباط با سرور.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, response, error, sendInquiry, setResponse, setError };
}
