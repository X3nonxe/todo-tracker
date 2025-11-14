import { BUTTON_TEXT } from "@/src/constants/form";
import { LoadingSpinner } from "../LoadingSpinner";

export const SubmitButton = ({ disabled, submitting }: { disabled: boolean; submitting: boolean }) => (
  <button
    type="submit"
    disabled={disabled}
    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-semibold text-white bg-linear-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02]"
  >
    {submitting ? (
      <>
        <LoadingSpinner />
        {BUTTON_TEXT.submitting}
      </>
    ) : (
      BUTTON_TEXT.submit
    )}
  </button>
);
