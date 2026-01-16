type FormInputProps = {
  label?: string;
  error?: string;
  type?: "text" | "email" | "textarea";
  rows?: number;
  register: any;
  placeholder: string;
  required?: boolean;
};

/**
 * Reusable form input component with validation support
 * 
 * Supports both regular inputs (text, email) and textarea with consistent styling.
 * Integrates with react-hook-form for validation and error handling.
 * 
 * @param label - Optional label text displayed above the input
 * @param error - Error message to display below the input
 * @param type - Input type: "text", "email", or "textarea"
 * @param rows - Number of rows for textarea (default: 6)
 * @param register - React Hook Form register function
 * @param placeholder - Placeholder text
 * @param required - Whether the field is required (unused, handled by register)
 */
export const FormInput = ({
  label,
  error,
  type = "text",
  rows,
  register,
  placeholder,
}: FormInputProps) => {
  const baseClasses = "w-full px-4 py-2 bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-accent";

  // Render textarea for multi-line input
  if (type === "textarea") {
    return (
      <div>
        {label && <label className="block mb-2 text-sm font-medium">{label}</label>}
        <textarea
          {...register}
          placeholder={placeholder}
          rows={rows || 6}
          className={`${baseClasses} resize-none`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  }

  // Render standard input for text/email
  return (
    <div>
      {label && <label className="block mb-2 text-sm font-medium">{label}</label>}
      <input
        type={type}
        {...register}
        placeholder={placeholder}
        className={baseClasses}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};