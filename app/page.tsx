"use client";

import { useMemo } from "react";

export default function Page() {
  const content = useMemo(() => {
    const quotes = [
      "Your voice is already strong enough to move a room—Broadway is just the next stage.",
      "Every rehearsal, every page, every breath on stage is building your future success.",
      "Talent brought you here. Discipline will take you to Broadway.",
      "You are not becoming someone great—you already are, and you're refining it.",
      "Your story deserves to be seen under the brightest lights in the world."
    ];

    const letters = [
`Dear Laylah,

There will be days when the stage feels far away. But every great performance begins long before the spotlight.

Keep going. Broadway is not a dream that chooses only a few—it is a destination reached by those who refuse to stop.

With belief in you,
Your future`,

`Dear Laylah,

If I could show you what I see in you, you would never doubt again. Every rehearsal is a step closer to the stage you dream of.

Stay consistent. Stay brave.

You are closer than you think.`,

`Dear Laylah,

Your journey is not about perfection—it is about persistence.

Even on quiet days, your passion is building something extraordinary.

Broadway will recognize what you are becoming.`
    ];

    const day = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    const isQuote = day % 2 === 0;

    return isQuote
      ? { type: "Daily Quote", text: quotes[day % quotes.length] }
      : { type: "Daily Letter", text: letters[day % letters.length] };
  }, []);

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(to bottom right, black, purple, black)",
      color: "white",
      padding: "30px",
      textAlign: "center",
      fontFamily: "Arial"
    }}>
      <div style={{ maxWidth: "600px" }}>
        <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
          For Laylah ✨
        </h1>

        <div style={{
          background: "rgba(255,255,255,0.1)",
          padding: "20px",
          borderRadius: "15px"
        }}>
          <h2>{content.type}</h2>
          <p style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
            {content.text}
          </p>
        </div>

        <p style={{ marginTop: "20px", opacity: 0.7 }}>
          A new message appears every day — until Broadway.
        </p>
      </div>
    </main>
  );
}