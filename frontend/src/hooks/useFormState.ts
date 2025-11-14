import { useState } from "react";
import { INITIAL_FORM_STATE } from "../constants/form";
import { FormData } from "../types/form";

export const useFormState = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_STATE);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_STATE);
  };

  return {
    formData,
    submitting,
    setSubmitting,
    updateField,
    resetForm,
  };
};