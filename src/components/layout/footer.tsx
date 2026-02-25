import Link from "next/link";
import Image from "next/image";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { business } from "@/lib/constants/business";
import { footerLinks } from "@/lib/constants/navigation";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Gradient strip */}
      <div className="h-1 bg-gradient-to-r from-teal-deep via-green-fresh via-lime-bright to-yellow-glow" />

      <Container>
        <div className="grid grid-cols-1 gap-10 py-12 md:py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Jumani Surf School"
              width={140}
              height={47}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="font-handwritten text-lg text-teal-mid mb-3">
              {business.tagline}
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              {business.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-base font-bold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-teal-deep transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-base font-bold mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-text-muted">
                <MapPin size={16} className="mt-0.5 shrink-0 text-teal-deep" />
                {business.address}
              </li>
              <li>
                <a
                  href={`tel:${business.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-text-muted hover:text-teal-deep transition-colors"
                >
                  <Phone size={16} className="shrink-0 text-teal-deep" />
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="flex items-center gap-2 text-sm text-text-muted hover:text-teal-deep transition-colors"
                >
                  <Mail size={16} className="shrink-0 text-teal-deep" />
                  {business.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Hours */}
          <div>
            <h3 className="font-display text-base font-bold mb-4">
              Follow & Hours
            </h3>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-teal-deep transition-colors mb-4"
            >
              <Instagram size={16} className="text-teal-deep" />
              {business.instagram}
            </a>
            <div className="space-y-1 text-sm text-text-muted">
              <p>{business.hours.surf}</p>
              <p>{business.hours.bar}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-dark-soft py-6 text-center text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Jumani Surf School. All rights
          reserved.
        </div>
      </Container>
    </footer>
  );
}
