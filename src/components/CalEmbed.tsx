"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

/**
 * Embed Cal.com officiel.
 * Reçoit l'URL complète d'un event Cal.com (ex: https://cal.com/flo-naturopathe/rdv-informatif)
 * et extrait le path "username/event-slug" pour la prop calLink.
 */
type Props = {
  bookingUrl: string;
  className?: string;
};

function extractCalLink(bookingUrl: string): string {
  // "https://cal.com/flo-naturopathe/rdv-informatif" → "flo-naturopathe/rdv-informatif"
  try {
    const u = new URL(bookingUrl);
    return u.pathname.replace(/^\//, "");
  } catch {
    return bookingUrl;
  }
}

export default function CalEmbed({ bookingUrl, className }: Props) {
  const calLink = extractCalLink(bookingUrl);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#5d6e54" }, // vert primary-dark
          dark: { "cal-brand": "#7a8b6f" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div
      className={`w-full bg-white border border-border rounded-xl overflow-hidden shadow-md ${className ?? ""}`}
    >
      {/* key={calLink} force le remount du widget quand on change de prestation */}
      <Cal
        key={calLink}
        calLink={calLink}
        style={{ width: "100%", height: "100%", minHeight: "640px" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
