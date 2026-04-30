"use client";

import { useState, useMemo } from "react";

export default function Page() {
  const quotes = [
    "Your voice is already strong enough to move a room—Broadway is just the next stage.",
    "Every rehearsal builds your future success.",
    "Discipline will take you to Broadway.",
    "You are already becoming greatness.",
    "Your story deserves the brightest lights."
  ];

  const letters = [
`Dear Laylah,

Keep going. Broadway is not a dream—it is a destination.

With belief in you.`,

`Dear Laylah,

You are closer than you think.

Stay brave.`,

`Dear Laylah,

Your persistence is your power.

Broadway will see you.`
  ];

  const [index, setIndex] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);

  const content = useMemo(() => {
    const isQuote = index % 2 === 0;
    return isQuote
      ? { type: "Daily Quote", text: quotes[index % quotes.length] }
      : { type: "Daily Letter", text: letters[index % letters.length] };
  }, [index]);

  const nextMessage = () => {
    setIndex(index + 1);
  };

  const saveFavorite = () => {
    setFavorites([...favorites, content.text]);
  };

  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    
      color: "white",
      padding: "20px",
      textAlign: "center",
      fontFamily: "Georgia, serif"
    }}>
   <div style={{
  position: "absolute",
  inset: 0,
  zIndex: -3,
  background: `
    url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30') left center / cover no-repeat,
    url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee') right center / cover no-repeat
  `,
  filter: "brightness(0.4) contrast(1.2) saturate(1.2)"
  mixBlendMode: "screen",
}} />
<div style={{
  position: "absolute",
  inset: 0,
  zIndex: -2,
  background: "radial-gradient(circle at center, rgba(0,0,0,0.2), rgba(0,0,0,0.92))"
}} />
      
      <h1 style={{
        fontSize: "42px",
        textShadow: "0 0 20px pink"
      }}>
        For Laylah ✨
      </h1>

      <div style={{
        maxWidth: "600px",
        background: "rgba(255,255,255,0.05)",
        padding: "25px",
        borderRadius: "20px",
        marginTop: "20px"
      }}>
        <h2>{content.type}</h2>
        <p style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
          {content.text}
        </p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={nextMessage} style={{ marginRight: "10px" }}>
          Next Message
        </button>

        <button onClick={saveFavorite}>
          ❤️ Save
        </button>
      </div>

      {favorites.length > 0 && (
        <div style={{ marginTop: "30px", maxWidth: "600px" }}>
          <h3>Favorites 💖</h3>
          {favorites.map((fav, i) => (
            <p key={i} style={{ opacity: 0.8 }}>
              {fav}
            </p>
          ))}
        </div>
      )}

    </main>
  );
}