"use client";

import { useState } from "react";
import { ContactForm } from "../ui/ContactForm";
import { SocialLinks } from "../ui/SocialLinks";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (data: FormData) => {
    setSubmitStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  return (
    <section id="contact">
      <div className="flex flex-col py-section border-b border-border gap-12">
        <h2 className="text-3xl font-heading font-bold text-title">
          Let's Connect
        </h2>

        <div className="flex flex-col bg-surface p-6 gap-8 rounded-md">
          <p>
            Ready to build something incredible together? I'd love to hear about your project!
          </p>

          <ContactForm onSubmit={handleSubmit} submitStatus={submitStatus} />

        </div>
          <SocialLinks />
      </div>
    </section>
  );
};