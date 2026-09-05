import type { ReactNode } from "react";

import ContactForm from "@/components/sections/ContactForm";
import { LocationIcon, MailIcon, PhoneIcon } from "@/components/ui/icons";

type ContactItem = {
  icon: ReactNode;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
};

const items: ContactItem[] = [
  {
    icon: <MailIcon />,
    title: "Email",
    description: "Reach out to us",
    linkLabel: "sales@tesla.com",
    href: "mailto:sales@tesla.com",
  },
  {
    icon: <PhoneIcon />,
    title: "Phone",
    description: "We answer every message",
    linkLabel: "+1 (888) 518-3752",
    href: "tel:+18885183752",
  },
  {
    icon: <LocationIcon />,
    title: "Office",
    description: "3500 Deer Creek Road, Palo Alto, CA 94304",
    linkLabel: "3500 Deer Creek Road, Palo Alto, CA 94304",
    href: "https://maps.google.com/?q=3500+Deer+Creek+Road,+Palo+Alto,+CA+94304",
  },
];

export default function Contact() {
  return (
    <section className="page-x section-y flex justify-center bg-white">
      <div className="flex w-full max-w-7xl flex-col gap-12 md:gap-20">
        <div className="flex max-w-3xl flex-col gap-3 md:gap-4">
          <p className="text-base font-semibold">Connect</p>
          <h2 className="mt-2 text-display-sm font-medium md:text-display">Talk to us</h2>
          <p className="mt-6 text-xs md:text-lg">
            Ask about the machines. We answer every message.
          </p>
        </div>

        <div className="flex flex-col gap-12 md:flex-row">
          {items.map((item) => (
            <div key={item.title} className="flex min-w-0 flex-col gap-5 md:flex-1 md:gap-6">
              <div className="flex size-12 shrink-0 items-center justify-center text-ink">
                {item.icon}
              </div>
              <div>
                <h3 className="text-heading-sm font-medium md:text-heading">{item.title}</h3>
                <p className="mt-3 text-xs md:mt-4 md:text-base">{item.description}</p>
                <a href={item.href} className="mt-5 inline-block text-xs underline md:mt-6 md:text-base">
                  {item.linkLabel}
                </a>
              </div>
            </div>
          ))}
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
