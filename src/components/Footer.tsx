"use client";

import { Phone, Mail, Globe, MapPin } from "lucide-react";
import { eventData } from "@/config/eventData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-6 bg-cream border-t border-gold/25 paper-texture overflow-hidden">
      {/* Decorative Gold Border Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left items-start">
          
          {/* Column 1: Organizer Info */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-abhaya text-2xl font-bold text-brown">
              {eventData.eventTitle}
            </h4>
            <p className="font-noto-serif text-xs sm:text-sm text-gray-warm leading-relaxed max-w-xs">
              {eventData.organizerName}
            </p>
            <div className="w-12 h-[1px] bg-gold mt-2" />
          </div>

          {/* Column 2: Venue Detail */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-noto-serif text-sm text-gold font-bold uppercase tracking-wider">
              ප්‍රසංග භූමිය
            </h4>
            <div className="flex flex-col items-center md:items-start gap-3 text-left">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <p className="font-noto-serif text-sm text-gray-warm leading-relaxed">
                  {eventData.eventVenue}
                </p>
              </div>
              <a
                href={eventData.eventVenueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-xs text-gold font-semibold hover:underline"
              >
                දිශාවන් ලබාගන්න →
              </a>
            </div>
          </div>

          {/* Column 3: Contacts */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-noto-serif text-sm text-gold font-bold uppercase tracking-wider">
              සන්නිවේදනය
            </h4>
            
            <div className="flex flex-col gap-3 font-noto-serif text-sm text-gray-warm">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-gold" />
                <span>{eventData.contactDetails.phone}</span>
              </div>
              
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-gold" />
                <span>{eventData.contactDetails.email}</span>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Globe className="w-4 h-4 text-gold" />
                <span>{eventData.contactDetails.website}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="font-noto-serif text-xs text-gray-warm">
            © {currentYear} සියලුම හිමිකම් ඇවිරිණි. හෙළ කලා සංස්කෘතික පදනම.
          </p>
          <p className="font-noto-serif text-xs text-bronze/70">
            ප්‍රෞඪ ඉතිහාසයක උරුමය සමරමු
          </p>
        </div>

      </div>
    </footer>
  );
}
