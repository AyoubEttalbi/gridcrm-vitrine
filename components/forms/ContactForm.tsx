"use client";

import { useState } from "react";
import { CheckCircle } from "@phosphor-icons/react";
import { contactFields, consentText, submitLabel } from "@/content/contact";

const inputCls =
  "mt-1.5 w-full rounded-[4px] border border-line bg-raised px-3 py-2.5 text-sm text-ink placeholder:text-faint focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-accent";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) {
      setError("Veuillez accepter le traitement de vos données pour continuer.");
      return;
    }
    if (!e.currentTarget.checkValidity()) {
      setError("Merci de renseigner les champs obligatoires.");
      return;
    }
    setError(null);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-[8px] border border-accent-line bg-accent-wash p-8 text-center">
        <CheckCircle size={32} weight="fill" className="text-accent" aria-hidden />
        <h2 className="mt-4 font-display text-xl text-ink">Demande envoyée</h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-2">
          Merci. Notre équipe vous recontacte sous 24 h ouvrées pour organiser votre
          démonstration personnalisée.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-[8px] border border-line bg-raised p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {contactFields.map((f) => (
          <div key={f.name} className={f.type === "textarea" ? "sm:col-span-2" : ""}>
            <label htmlFor={f.name} className="block text-sm text-ink-2">
              {f.label}
              {f.required && <span className="text-accent"> *</span>}
            </label>
            {f.type === "textarea" ? (
              <textarea id={f.name} name={f.name} required={f.required} rows={4} className={inputCls} />
            ) : (
              <input id={f.name} name={f.name} type={f.type} required={f.required} className={inputCls} />
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <input
          id="consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          required
          className="mt-1 h-4 w-4 shrink-0 accent-[var(--accent)]"
        />
        <label htmlFor="consent" className="text-xs leading-relaxed text-muted">
          {consentText}
          <span className="text-accent"> *</span>
        </label>
      </div>

      {error && (
        <p role="alert" className="mt-4 text-sm text-accent">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-[4px] bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition-[background-color,transform] duration-150 hover:bg-accent-shade active:translate-y-px sm:w-auto"
      >
        {submitLabel}
      </button>
    </form>
  );
}
