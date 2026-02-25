"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/button";
import { serviceOptions, successMessage } from "@/lib/constants/contact";

const inputClasses =
  "w-full rounded-sm border border-border bg-white px-4 py-3 text-sm text-text placeholder:text-text-muted/60 focus:border-teal-deep focus:ring-1 focus:ring-teal-deep focus:outline-none transition-colors min-h-[48px]";

export function BookingForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="rounded-md bg-teal-deep/10 border border-teal-deep/20 p-8 text-center">
        <p className="font-display text-xl font-bold text-dark mb-2">
          Booking Request Sent!
        </p>
        <p className="text-text-muted">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Your email"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-dark mb-1">
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone or WhatsApp number"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-dark mb-1">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Where are you from?"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-dark mb-1">
            Service *
          </label>
          <select
            id="service"
            name="service"
            required
            className={cn(inputClasses, "appearance-none")}
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-dark mb-1">
            Preferred Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="people" className="block text-sm font-medium text-dark mb-1">
          Number of People
        </label>
        <input
          type="number"
          id="people"
          name="people"
          min="1"
          placeholder="How many people?"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Anything else you'd like us to know?"
          className={cn(inputClasses, "min-h-[100px] resize-y")}
        />
      </div>

      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        Send Booking Request
      </Button>
    </form>
  );
}
