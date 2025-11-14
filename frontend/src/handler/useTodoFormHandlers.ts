"use client";

import { FormEvent } from "react";
import { useFormState } from "@/src/hooks/useFormState";
import { validateTitle } from "@/src/utils/validateTitle";
import { createTodoPayload } from "@/src/utils/createTodoPayload";
import { TodoFormProps } from "@/src/types/form";

export const useTodoFormHandlers = ({ onAdd }: TodoFormProps) => {
	const { formData, submitting, setSubmitting, updateField, resetForm } = useFormState();

	const handleSubmit = async (e: FormEvent): Promise<void> => {
		e.preventDefault();

		if (!validateTitle(formData.title)) {
			alert("Please enter a title for your todo");
			return;
		}

		setSubmitting(true);

		try {
			const payload = createTodoPayload(formData);
			await onAdd(payload);
			resetForm();
		} catch (error) {
			console.error("Failed to add todo:", error);
		} finally {
			setSubmitting(false);
		}
	};

	const isSubmitDisabled = submitting || !validateTitle(formData.title);

	return {
		formData,
		submitting,
		updateField,
		isSubmitDisabled,
		handleSubmit,
	};
};
