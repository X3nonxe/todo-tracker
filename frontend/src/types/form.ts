import { CreateTodoRequest } from "./todo";

export interface TodoFormProps {
  onAdd: (todo: CreateTodoRequest) => void;
}

export interface FormData {
  title: string;
  description: string;
}