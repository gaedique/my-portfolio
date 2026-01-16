import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { FormInput } from "./FormInput";
import { contactData } from "@/data/contact";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type ContactFormProps = {
  onSubmit: (data: FormData) => Promise<void>;
  submitStatus: "idle" | "loading" | "success" | "error";
};

/**
 * Contact form component with validation and status feedback
 * 
 * Features:
 * - Client-side validation using react-hook-form
 * - Real-time error display
 * - Success/error status messages
 * - Auto-reset on successful submission
 * - Email link and submit button
 * 
 * @param onSubmit - Async callback to handle form submission
 * @param submitStatus - Current submission state for UI feedback
 */
export const ContactForm = ({ onSubmit, submitStatus }: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  /**
   * Handles form submission and resets form on success
   */
  const handleFormSubmit = async (data: FormData) => {
    await onSubmit(data);
    if (submitStatus === "success") {
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-4">
      {/* Name and email fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormInput
          register={register("name", { required: "Name is required" })}
          placeholder="Name*"
          error={errors.name?.message}
        />
        <FormInput
          type="email"
          register={register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          placeholder="Email*"
          error={errors.email?.message}
        />
      </div>

      {/* Message field */}
      <FormInput
        type="textarea"
        register={register("message")}
        placeholder="Project details (Optional)"
        rows={6}
      />

      {/* Success feedback */}
      {submitStatus === "success" && (
        <div className="flex items-center gap-2 text-green-500 bg-green-50 dark:bg-green-900/20 p-3 rounded-md">
          <CheckCircle className="w-5 h-5" />
          <p>Message sent successfully! I'll get back to you soon.</p>
        </div>
      )}

      {/* Error feedback */}
      {submitStatus === "error" && (
        <div className="flex items-center gap-2 text-red-500 bg-red-50 dark:bg-red-900/20 p-3 rounded-md">
          <AlertCircle className="w-5 h-5" />
          <p>Something went wrong. Please try again or email me directly.</p>
        </div>
      )}

      {/* Direct email link and submit button */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          href={`mailto:${contactData.email}`}
          className="px-4 py-2 bg-background rounded-md hover:text-accent transition flex items-center justify-center gap-2"
        >
          <Mail className="w-4 h-4" />
          {contactData.email}
        </a>
        <button
          type="submit"
          disabled={submitStatus === "loading"}
          className="px-4 py-2 border border-accent rounded-md text-accent hover:bg-accent hover:text-background transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {submitStatus === "loading" ? "Sending..." : "Submit"}
          <Send className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
};