'use client';

import { useTodoFormHandlers } from '../../handler/useTodoFormHandlers';
import { SubmitButton } from '../button/SubmitButton';
import { FormInput } from '../form/FormInput';
import { FormTextarea } from '../form/FormTextarea';
import { FORM_LABELS, PLACEHOLDERS } from '@/src/constants/form';
import { TodoFormProps } from '@/src/types/form';

export default function TodoForm({ onAdd }: TodoFormProps) {
  const { formData, submitting, isSubmitDisabled, updateField, handleSubmit } = useTodoFormHandlers({ onAdd });

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Tambah tugas</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput id="title" label={FORM_LABELS.title} value={formData.title} onChange={(value) => updateField('title', value)} placeholder={PLACEHOLDERS.title} disabled={submitting} required />

        <FormTextarea id="description" label={FORM_LABELS.description} value={formData.description} onChange={(value) => updateField('description', value)} placeholder={PLACEHOLDERS.description} disabled={submitting} />

        <SubmitButton disabled={isSubmitDisabled} submitting={submitting} />
      </form>
    </div>
  );
}
