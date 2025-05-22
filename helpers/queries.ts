import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  subject: string;
}

interface ContactFormResponse {
  success: boolean;
  message: string;
  data: ContactFormData;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// API function
const submitContactForm = async (
  data: ContactFormData
): Promise<ContactFormResponse> => {
  const response = await axios.post<ContactFormResponse>(
    `${apiUrl}/forms/contact`,
    data
  );
  return response.data;
};

// Custom hook for mutation
export const useSubmitContactForm = () => {
  return useMutation<ContactFormResponse, Error, ContactFormData>({
    mutationFn: submitContactForm,
  });
};
