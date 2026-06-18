import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact — RaymonJohns",
  description: "Get in touch about a project.",
};

const details = [
  {
    icon: Mail,
    label: "raymonjohns@gmail.com",
    href: "mailto:raymonjohns@gmail.com",
  },

  { icon: Phone, label: "+256 751 621 505", href: "tel:+256751621505" },
  {
    icon: MessageCircle,
    label: "Chat on WhatsApp",
    href: "https://wa.me/256751621505",
  },
  { icon: MapPin, label: "Entebbe, Uganda", href: undefined },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-14 py-12 sm:py-16">
      <SectionHeading
        eyebrow="Get in touch"
        title="Let's talk about your project"
        description="Whether it's a new build, a brand refresh, or migrating something old onto a modern stack — send the details and I'll reply within a couple of days."
      />

      <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <div className="neu-raised h-fit space-y-5 p-6 sm:p-8">
          <p className="eyebrow">Reach me directly</p>
          {details.map(({ icon: Icon, label, href }) => {
            const content = (
              <span className="flex items-center gap-3 text-sm text-ink-muted">
                <span className="neu-inset-sm flex h-9 w-9 shrink-0 items-center justify-center">
                  <Icon size={15} className="text-accent-blue" />
                </span>
                {label}
              </span>
            );
            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="neu-focus block rounded-neu-sm hover:text-accent-blue"
              >
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </div>

        <div className="neu-raised p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
