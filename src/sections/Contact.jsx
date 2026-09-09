import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (error) setError("");
    if (sent) setSent(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setError("Please complete all fields before sending your message.");
      return;
    }

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError("The contact service is not configured yet. Please try again later.");
      console.error("Missing EmailJS environment variables.");
      return;
    }

    setLoading(true);
    setSent(false);
    setError("");

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setForm({ name: "", email: "", message: "" });
      setSent(true);
    } catch (submissionError) {
      console.error("EmailJS Error:", submissionError);
      setError("Your message could not be sent. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full">
        <TitleHeader
          title="Let’s Build Something Useful"
          sub="💬 Open to software engineering, full-stack and AI-focused opportunities"
        />

        <div className="grid-12-cols mt-12 md:mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-5 sm:p-7 md:p-10">
              <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-6 md:gap-7">
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    maxLength={80}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    maxLength={120}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the role, project or problem you’re working on."
                    rows="6"
                    maxLength={3000}
                    required
                  />
                </div>

                <button type="submit" disabled={loading} className="w-full" aria-busy={loading}>
                  <div className="cta-button group w-full min-h-14">
                    <div className="bg-circle" />
                    <p className="text">{loading ? "Sending..." : sent ? "Message Sent" : "Send Message"}</p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>

                <p
                  aria-live="polite"
                  className={`text-sm leading-6 ${error ? "text-rose-300" : sent ? "text-emerald-300" : "text-white/50"}`}
                >
                  {error || (sent ? "Thanks for reaching out. Your message has been sent successfully." : "")}
                </p>
              </form>
            </div>
          </div>

          <div className="xl:col-span-7 min-h-80 md:min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full min-h-80 md:min-h-96 hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
