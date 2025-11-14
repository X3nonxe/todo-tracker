import { FormData } from "../types/form";

export const INITIAL_FORM_STATE: FormData = {
  title: '',
  description: '',
};

export const FORM_LABELS = {
  title: 'Nama tugas *',
  description: 'Deskripsi tugas (Optional)',
}

export const PLACEHOLDERS = {
  title: 'seperti: Beli bahan makanan',
  description: 'seperti: Beli sayur, buah, dan daging untuk minggu ini',
}

export const BUTTON_TEXT = {
  submit: 'Tambah Tugas',
  submitting: 'Menambahkan...',
}