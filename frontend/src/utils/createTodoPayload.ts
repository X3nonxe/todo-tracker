import { FormData } from "../types/form";
import { CreateTodoRequest } from "../types/todo";

export const createTodoPayload = (formData: FormData): CreateTodoRequest => ({
  title: formData.title.trim(),
  description: formData.description.trim() || null,
  completed: false,
});