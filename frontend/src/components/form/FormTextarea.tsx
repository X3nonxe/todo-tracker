export const FormTextarea = ({ id, label, value, onChange, placeholder, disabled, rows = 3 }: { id: string; label: string; value: string; onChange: (value: string) => void; placeholder: string; disabled: boolean; rows?: number }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-2">
      {label}
    </label>
    <textarea
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      className="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 bg-white text-gray-900 text-sm transition-all duration-200"
      placeholder={placeholder}
      disabled={disabled}
    />
  </div>
);
