import React, { useMemo, useState, type ChangeEvent, type FormEvent } from "react";

/* ---------- Data ---------- */

interface Contact {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href: string;
}

const contacts: Contact[] = [
  {
    icon: MailIcon,
    label: "Email",
    value: "azeezakerede41@gmail.com",
    href: "mailto:azeezakerede41@gmail.com",
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    value: "+234 816 380 3886",
    href: "tel:+2348163803886",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://linkedin.com/in/your-profile",
  },
];

const expertise = [
  "Enterprise Infrastructure",
  "Data Center Projects",
  "Cloud Transformation",
  "Banking Technology",
  "Telecom Solutions",
  "Project Management",
  "Stakeholder Management",
  "Risk Management",
];

/* ---------- Icons (inline SVG) ---------- */
function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      {...props}
    >
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      {...props}
    >
      <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.42 19.42 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.2 2 2 0 0 1 4.06 2h2a2 2 0 0 1 2 1.72c.12.9.32 1.78.59 2.63a2 2 0 0 1-.45 2.11L7.1 9.91a16 16 0 0 0 6 6l1.45-1.1a2 2 0 0 1 2.11-.45c.85.27 1.73.47 2.63.59A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4V23h-4V8.5ZM8.5 8.5h3.84v1.98h.05c.54-1.02 1.84-2.1 3.78-2.1 4.04 0 4.78 2.66 4.78 6.12V23h-4v-5.99c0-1.43-.03-3.26-1.99-3.26-1.99 0-2.3 1.56-2.3 3.16V23h-4V8.5Z" />
    </svg>
  );
}

function SendIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      {...props}
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="m22 2-11 9" />
    </svg>
  );
}

/* ---------- UI helpers ---------- */
interface LabelProps {
  children: React.ReactNode;
  htmlFor: string;
  required?: boolean;
}
function Label({ children, htmlFor, required }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-slate-700 dark:text-slate-300"
    >
      {children} {required && <span className="text-red-600">*</span>}
    </label>
  );
}

interface InputProps {
  id: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}
function Input({
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  autoComplete,
}: InputProps) {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-blue-400"
    />
  );
}

interface TextAreaProps {
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
}
function TextArea({
  id,
  value,
  onChange,
  placeholder,
  required,
  maxLength = 500,
}: TextAreaProps) {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      maxLength={maxLength}
      rows={5}
      className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-blue-400"
    />
  );
}

/* ---------- Components ---------- */


function ContactLeft() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
          Get in Touch
        </h3>
      </div>

      <ul className="space-y-4">
        {contacts.map((c, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:ring-blue-900/60">
              <c.icon className="h-4 w-4" />
            </div>
            <div className="pt-0.5">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {c.label}
              </p>
              <a
                href={c.href}
                target={c.label === "LinkedIn" ? "_blank" : undefined}
                rel={c.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                className="text-sm text-slate-600 underline decoration-slate-300/70 underline-offset-2 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white"
              >
                {c.value}
              </a>
            </div>
          </li>
        ))}
      </ul>

      <div>
        <h4 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
          Areas of Expertise
        </h4>
        <div className="flex flex-wrap gap-2">
          {expertise.map((tag, i) => (
            <span
              key={i}
              className="inline-flex items-center rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

type FormStatus = "idle" | "sending" | "success" | "error";

interface FormState {
  name: string;
  email: string;
  company: string;
  details: string;
}

function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    details: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState<string>("");

  const charCount = form.details.length;
  const maxChars = 500;

  const isEmailValid = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
    [form.email]
  );

  const isValid =
    form.name.trim() !== "" && isEmailValid && form.details.trim().length >= 10;

  const update =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) return;

    setStatus("sending");
    setError("");

    try {
      // Simulate network request
      await new Promise((r) => setTimeout(r, 1000));
      setStatus("success");
      setForm({ name: "", email: "", company: "", details: "" });
    } catch (err: any) {
      setStatus("error");
      setError(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name" required>
          Full Name
        </Label>
        <Input
          id="name"
          value={form.name}
          onChange={update("name")}
          placeholder="Your full name"
          required
          autoComplete="name"
        />
      </div>

      <div>
        <Label htmlFor="email" required>
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          value={form.email}
          onChange={update("email")}
          placeholder="your.email@company.com"
          required
          autoComplete="email"
        />
        {!isEmailValid && form.email.length > 0 && (
          <p className="mt-1 text-xs text-red-600">Please enter a valid email.</p>
        )}
      </div>

      <div>
        <Label htmlFor="company">Company/Organization</Label>
        <Input
          id="company"
          value={form.company}
          onChange={update("company")}
          placeholder="Your company name"
        />
      </div>

      <div>
        <Label htmlFor="details" required>
          Project Details
        </Label>
        <TextArea
          id="details"
          value={form.details}
          onChange={update("details")}
          placeholder="Tell me about your project requirements, timeline, and objectives..."
          required
          maxLength={maxChars}
        />
        <div className="mt-1 flex justify-end text-xs text-slate-500 dark:text-slate-400">
          {charCount}/{maxChars} characters
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      {status === "success" && (
        <p
          className="rounded-md bg-green-50 px-3 py-2 text-sm text-green-700 ring-1 ring-inset ring-green-200 dark:bg-green-900/20 dark:text-green-300 dark:ring-green-900/40"
          role="status"
        >
          Thanks! Your message was sent. I’ll get back to you shortly.
        </p>
      )}

      <button
        type="submit"
        disabled={!isValid || status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        <SendIcon className="h-4 w-4" />
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default function ContactAndSummary() {
  return (
    <main className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
     

      <section className="py-8">
        <div className="mx-auto max-w-5xl px-4">
          <header className="mb-8 text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">Let's Connect</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
              Ready to discuss your next enterprise technology project? Let's explore how my
              expertise can drive your business objectives forward.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <ContactLeft />
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
