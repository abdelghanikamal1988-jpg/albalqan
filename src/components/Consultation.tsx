"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { consultationSteps, countries, serviceTypes, topicPrefill } from "@/data/site";

const FORMS_ENDPOINT = "https://albalqan-test.netlify.app/__forms.html";

const labelCls =
  "block text-[10px] font-medium uppercase tracking-[0.22em] text-ash";
const inputBase =
  "mt-2.5 w-full border-b bg-transparent py-2.5 text-[16px] text-ink outline-none transition-colors placeholder:text-black/25 focus:border-ink";

function validate(data: FormData): Record<string, string> {
  const errs: Record<string, string> = {};
  const str = (k: string) => String(data.get(k) ?? "").trim();

  if (!str("fullName")) errs.fullName = "Please enter your full name.";

  const email = str("email");
  if (!email) errs.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    errs.email = "Please enter a valid email address.";

  const phone = str("phone");
  if (!phone) errs.phone = "Phone number is required.";
  else if (!/^\+?[\d\s()-]{7,}$/.test(phone))
    errs.phone = "Enter a valid number with country code, e.g +971 50 000 0000.";

  if (!str("nationality"))
    errs.nationality = "Nationality is required for eligibility review.";
  if (!str("country")) errs.country = "Please select a destination country.";
  if (!str("service")) errs.service = "Please select a service type.";

  const details = str("details");
  if (!details) errs.details = "Please briefly describe your case.";
  else if (details.length < 10)
    errs.details = "A few more details will help us assess your case.";

  if (!data.get("consent"))
    errs.consent = "Consent is required to process your request.";

  return errs;
}

type CustomSelectProps = {
  id: string;
  name: string;
  placeholder: string;
  options: string[];
  value: string;
  error?: string;
  onChange: (value: string) => void;
};

function CustomSelect({
  id,
  name,
  placeholder,
  options,
  value,
  error,
  onChange,
}: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node))
        setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const pick = (option: string) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        id={id}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${id}-listbox`}
        onClick={() => setOpen((o) => !o)}
        className={`mt-2.5 flex w-full items-center justify-between gap-3 border-b bg-transparent py-2.5 text-left text-[14px] outline-none transition-colors focus:border-ink ${
          error
            ? "border-[#b3261e]"
            : open
              ? "border-ink"
              : "border-black/15 hover:border-black/50"
        }`}
      >
        <span className={value ? "text-ink" : "text-black/35"}>
          {value || placeholder}
        </span>
        <svg
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden
          className={`h-3 w-3 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            d="M2 4.5L6 8.5L10 4.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <ul
        id={`${id}-listbox`}
        role="listbox"
        className={`absolute left-0 right-0 top-full z-30 mt-2 max-h-72 origin-top overflow-y-auto border border-black/10 bg-white py-1.5 shadow-[0_24px_48px_-24px_rgba(20,20,20,0.25)] transition-all ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
          open
            ? "visible pointer-events-auto -translate-y-0 scale-100 opacity-100 duration-300"
            : "invisible pointer-events-none -translate-y-1.5 scale-[0.985] opacity-0 duration-200"
        }`}
      >
        {options.map((option, i) => {
          const active = option === value;
          return (
            <li key={option} role="option" aria-selected={active}>
              <button
                type="button"
                tabIndex={open ? 0 : -1}
                onClick={() => pick(option)}
                style={{ transitionDelay: open ? `${70 + i * 35}ms` : "0ms" }}
                className={`flex w-full items-center gap-3.5 px-4 py-2.5 text-left text-[13px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
                  open ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
                } ${
                  active
                    ? "text-ink"
                    : "text-ash hover:bg-mist hover:text-ink"
                }`}
              >
                <span
                  className={`text-[10px] tracking-[0.2em] ${
                    active ? "text-ink" : "text-black/30"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-light">{option}</span>
                {active && (
                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden
                    className="ml-auto h-3 w-3"
                  >
                    <path
                      d="M2 6.5L4.7 9L10 3.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Consultation({
  initialCountry = "",
  initialService = "",
}: {
  initialCountry?: string;
  initialService?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [country, setCountry] = useState(initialCountry);
  const [service, setService] = useState(initialService);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  // ?topic= prefill (client-side so it works on static hosting)
  useEffect(() => {
    const topic = new URLSearchParams(window.location.search).get("topic");
    const pf = topic ? topicPrefill[topic] : undefined;
    /* eslint-disable react-hooks/set-state-in-effect */
    if (pf?.country && !initialCountry) setCountry(pf.country);
    if (pf?.service && !initialService) setService(pf.service);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, [initialCountry, initialService]);

  const fieldCls = (name: string) =>
    `${inputBase} ${errors[name] ? "border-[#b3261e]" : "border-black/15"}`;

  const clearError = (name: string) =>
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });

  const errorFor = (name: string) =>
    errors[name] ? (
      <p className="mt-1.5 text-[11px] text-[#b3261e]">{errors[name]}</p>
    ) : null;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSendError(false);
    setSending(true);
    try {
      if (
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1"
      ) {
        console.info(
          "[dev] consultation submission — Netlify Forms only work on the deployed site",
          Object.fromEntries(data.entries())
        );
        setSubmitted(true);
        return;
      }
      const body = new URLSearchParams();
      data.forEach((value, key) => body.append(key, String(value)));
      body.set("form-name", "consultation");
      try {
        const res = await fetch(FORMS_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: body.toString(),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      } catch {
        // Cross-origin (GitHub Pages -> Netlify): submit through a hidden
        // iframe so it is a real navigation — recorded by Netlify Forms.
        const iframe = document.createElement("iframe");
        iframe.name = "netlify-form-frame";
        iframe.style.display = "none";
        document.body.appendChild(iframe);
        const fallback = document.createElement("form");
        fallback.method = "POST";
        fallback.action = FORMS_ENDPOINT;
        fallback.target = "netlify-form-frame";
        fallback.style.display = "none";
        for (const [key, value] of body.entries()) {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = value;
          fallback.appendChild(input);
        }
        document.body.appendChild(fallback);
        fallback.submit();
      }
      setSubmitted(true);
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="consultation"
      className="bg-white px-5 py-24 md:px-10 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1376px]">
        <SectionHeading
          label="Request a Consultation"
          title="Start Your Sovereign Mobility Assessment."
        />

        <p className="mx-auto mt-6 max-w-xl text-center text-[14px] font-light leading-relaxed text-ash">
          Submit your profile for review. Our executive advisors verify Balkan
          eligibility parameters prior to formal consultation scheduling.
        </p>

        <Reveal className="mx-auto mt-16 grid max-w-4xl gap-10 sm:grid-cols-3 md:gap-12">
          {consultationSteps.map((stepItem) => (
            <div key={stepItem.n} className="border-t border-black/10 pt-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-ash">
                {`0${stepItem.n}`}
              </p>
              <p className="mt-3 text-[13px] font-semibold text-ink">
                {stepItem.title}
              </p>
              <p className="mt-1.5 text-[12.5px] font-light leading-relaxed text-ash">
                {stepItem.text}
              </p>
            </div>
          ))}
        </Reveal>

        <p className="mx-auto mt-6 max-w-xl text-center text-[12.5px] font-light leading-relaxed text-ash">
          Response time: within 24 business hours.
        </p>

        {submitted ? (
          <div className="mx-auto mt-24 max-w-3xl border-t border-black/10 pt-16 text-center">
            <p className="font-display text-3xl tracking-tight text-ink">
              Thank you.
            </p>
            <p className="mt-4 text-[14px] font-light leading-relaxed text-ash">
              Your request has been received and a member of our team will
              contact you shortly.
            </p>
            <p className="mt-2 text-[12.5px] font-light text-black/45">
              Response time: within 24 business hours.
            </p>
          </div>
        ) : (
          <Reveal delay={120}>
            <p className="mx-auto mt-20 max-w-xl text-center text-[13px] font-light leading-relaxed text-ash">
              Please complete the fields below. Nationality is required so we
              can assess eligibility correctly.
            </p>

            <form
              noValidate
              name="consultation"
              method="POST"
              action={FORMS_ENDPOINT}
              onSubmit={onSubmit}
              className="mx-auto mt-10 grid max-w-3xl gap-x-12 gap-y-9 sm:grid-cols-2"
            >
              <input type="hidden" name="form-name" value="consultation" />
              <p className="hidden">
                <label>
                  Do not fill out:
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>
              <div>
                  <label className={labelCls} htmlFor="full-name">
                    Full Name *
                  </label>
                  <input
                    id="full-name"
                    name="fullName"
                    placeholder="e.g Tariq Al Mansoor"
                    onChange={() => clearError("fullName")}
                    className={fieldCls("fullName")}
                  />
                  {errorFor("fullName")}
                </div>

                <div>
                  <label className={labelCls} htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="e.g t.almansoor@domin.ae"
                    onChange={() => clearError("email")}
                    className={fieldCls("email")}
                  />
                  {errorFor("email")}
                </div>

                <div>
                  <label className={labelCls} htmlFor="phone">
                    Phone Number (With Country Code) *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    placeholder="+971 50 000 0000"
                    onChange={() => clearError("phone")}
                    className={fieldCls("phone")}
                  />
                  {errorFor("phone")}
                </div>

                <div>
                  <label className={labelCls} htmlFor="nationality">
                    Nationality (Mandatory for Eligibility)&nbsp;*
                  </label>
                  <input
                    id="nationality"
                    name="nationality"
                    placeholder="e.g Emirati, Saudi, British, Egyptian"
                    onChange={() => clearError("nationality")}
                    className={fieldCls("nationality")}
                  />
                  {errorFor("nationality")}
                </div>

                <div>
                  <label className={labelCls} htmlFor="country">
                    Preferred Country *
                  </label>
                  <CustomSelect
                    id="country"
                    name="country"
                    placeholder="Select Destination"
                    options={[...countries, "Not Sure"]}
                    value={country}
                    error={errors.country}
                    onChange={(v) => {
                      setCountry(v);
                      clearError("country");
                    }}
                  />
                  {errorFor("country")}
                </div>

                <div>
                  <label className={labelCls} htmlFor="residence">
                    Country of Residence
                  </label>
                  <input
                    id="residence"
                    name="residence"
                    placeholder="e.g United Arab Emirates"
                    onChange={() => clearError("residence")}
                    className={fieldCls("residence")}
                  />
                  {errorFor("residence")}
                </div>

                <div>
                  <label className={labelCls} htmlFor="service">
                    Service Type *
                  </label>
                  <CustomSelect
                    id="service"
                    name="service"
                    placeholder="Select Pathway"
                    options={serviceTypes}
                    value={service}
                    error={errors.service}
                    onChange={(v) => {
                      setService(v);
                      clearError("service");
                    }}
                  />
                  {errorFor("service")}
                </div>

                <div className="sm:col-span-2">
                  <label className={labelCls} htmlFor="details">
                    Case Details or Specific Objectives *
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={2}
                    placeholder="Briefly detail your timeline, family members involved, or business activity..."
                    onChange={() => clearError("details")}
                    className={`${fieldCls("details")} resize-none`}
                  />
                  {errorFor("details")}
                </div>

                <div className="sm:col-span-2">
                  <label className="flex items-start gap-3 text-[12px] font-light leading-relaxed text-ash">
                    <input
                      type="checkbox"
                      name="consent"
                      onChange={() => clearError("consent")}
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-black"
                    />
                    <span>
                      I agree to AL BALQAN processing my details to respond to
                      my request, in line with the{" "}
                      <a
                        href="/privacy-policy"
                        className="underline underline-offset-2 transition-colors hover:text-ink"
                      >
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>
                  {errorFor("consent")}
                </div>

              <div className="flex flex-col items-center gap-4 sm:col-span-2">
                {sendError && (
                  <p
                    role="alert"
                    className="max-w-md text-center text-[12.5px] font-light leading-relaxed text-[#b3261e]"
                  >
                    Something went wrong while sending your request. Please try
                    again, or{" "}
                    <a
                      href="https://wa.me/97167494905"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2"
                    >
                      WhatsApp us directly
                    </a>
                    .
                  </p>
                )}
                <button
                  type="submit"
                  disabled={sending}
                  className="border border-ink px-12 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] text-ink transition-colors duration-300 hover:bg-ink hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {sending ? "Sending…" : "Send Request"}
                </button>
              </div>
            </form>
          </Reveal>
        )}

        <p className="mx-auto mt-14 max-w-xl text-center text-[12px] font-light leading-relaxed text-black/45">
          Your information is used only to respond to your request and is never
          shared with third parties for marketing.
        </p>
      </div>
    </section>
  );
}
