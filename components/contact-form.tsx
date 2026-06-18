"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, MessageCircle } from "lucide-react";

const PHONE = "256751621506";

const inquiryOptions = [
  "Web Design & Development",
  "Brand Identity",
  "Graphic Design",
  "Site Migration & Performance",
  "Windows Software",
  "macOS Software",
  "Android Apps",
  "Other Inquiries",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [values, setValues] = useState({
    name: "",
    email: "",
    inquiry: "",
    message: "",
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const text = [
      `👋 Hello RaymonJohns!`,
      ``,
      `*Name:* ${values.name}`,
      `*Email:* ${values.email}`,
      `*Inquiry:* ${values.inquiry}`,
      ``,
      `*Message:*`,
      values.message,
    ].join("\n");

    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="neu-inset flex flex-col items-center gap-3 p-10 text-center">
        <CheckCircle2 size={32} className="text-accent-green" />
        <p className="font-display text-lg font-bold text-ink">
          Opening WhatsApp…
        </p>
        <p className="max-w-xs text-sm text-ink-muted">
          Your message was pre-filled in WhatsApp, {values.name || "there"} —
          just hit send to reach me directly.
        </p>
        <button
          type="button"
          onClick={() => {
            setValues({ name: "", email: "", inquiry: "", message: "" });
            setStatus("idle");
          }}
          className="neu-focus mt-2 font-mono text-xs uppercase tracking-wider text-accent-blue"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name + Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
            Name
          </span>
          <input
            required
            type="text"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            className="neu-inset neu-focus border-none bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-faint"
            placeholder="Jane Doe"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
            Email
          </span>
          <input
            required
            type="email"
            value={values.email}
            onChange={(e) =>
              setValues((v) => ({ ...v, email: e.target.value }))
            }
            className="neu-inset neu-focus border-none bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-faint"
            placeholder="jane@email.com"
          />
        </label>
      </div>

      {/* Inquiry type — pill toggle grid */}
      <div className="flex flex-col gap-2">
        <span className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
          What can I help with?
        </span>
        <div className="flex flex-wrap gap-2 pt-1">
          {inquiryOptions.map((option) => {
            const active = values.inquiry === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() =>
                  setValues((v) => ({
                    ...v,
                    inquiry: active ? "" : option,
                  }))
                }
                className={`neu-focus rounded-neu-pill px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition-all ${
                  active
                    ? "neu-inset-sm text-accent-blue"
                    : "neu-raised-sm text-ink-muted hover:text-ink"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
        {/* hidden required field to enforce a selection */}
        <input
          tabIndex={-1}
          required
          readOnly
          value={values.inquiry}
          className="h-0 w-0 opacity-0"
          aria-hidden="true"
        />
      </div>

      {/* Message */}
      <label className="flex flex-col gap-2">
        <span className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
          Message
        </span>
        <textarea
          required
          rows={5}
          value={values.message}
          onChange={(e) =>
            setValues((v) => ({ ...v, message: e.target.value }))
          }
          className="neu-inset neu-focus resize-none border-none bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-faint"
          placeholder="Tell me about your project…"
        />
      </label>

      {/* Submit */}
      <button
        type="submit"
        className="neu-raised neu-pressable neu-focus self-start inline-flex items-center gap-2 rounded-neu-pill px-6 py-3 font-mono text-xs uppercase tracking-wider text-ink hover:text-accent-green transition-colors"
      >
        <MessageCircle size={14} />
        Send via WhatsApp
        <Send size={13} />
      </button>
    </form>
  );
}
