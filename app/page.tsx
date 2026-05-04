"use client";

import { useState, useMemo, useEffect } from "react";

export default function Page() {
  const quotes = [
    "You were made to shine under lights the world cannot ignore.",
    "Every small step today builds your standing ovation tomorrow.",
    "You don’t chase dreams—you embody them.",
    "Broadway isn’t far. It’s forming with every effort you make.",
    "Your courage is louder than your doubts.",
    "The stage is waiting for your truth.",
    "You are not late—you are preparing for something extraordinary.",
    "One day, your name will be in lights—and it will feel natural.",
    "Keep showing up. Magic happens there.",
    "Your passion is already your ticket forward."
  ];

  const letters = [
`Dear Laylah,

Even on quiet days, something beautiful is growing in you.

Keep going. Always.`,

`Dear Laylah,

Your softness, your heart, your depth—this is your strength.

Never forget that.`,

`Dear Laylah,

You are becoming the person your dreams recognize.`
  ];

  const [index, setIndex] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);

  // 💾 LOAD
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  // 💾 SAVE
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const content = useMemo(() => {
    const isQuote = index % 2 === 0;
    const day = Math.floor(Date.now() / (1000 * 60 * 60 * 24));

    return isQuote
      ? {
          type: "Daily Quote",
          text: quotes[(day + index) % quotes.length]
        }
      : {
          type: "Daily Letter",
          text: letters[(day + index) % letters.length]
        };
  }, [index]);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
        color: "white",
        fontFamily: "Georgia, serif",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* 💜 BROADWAY VIOLET BACKGROUND */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -30,
          background:
            "radial-gradient(circle at top, #5a00a3 0%, #1a0033 45%, #070010 100%)"
        }}
      />

      {/* ✨ GLOW */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -20,
          background:
            "radial-gradient(circle at center, rgba(180,80,255,0.25), transparent 60%)"
        }}
      />

      {/* 🌟 PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              width: "4px",
              height: "4px",
              background: "rgba(255, 180, 255, 0.7)",
              borderRadius: "50%",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.6
            }}
          />
        ))}
      </div>

      {/* 🎬 TITLE */}
      <div>
        <p style={{ color: "#ffb3ff", fontStyle: "italic" }}>For</p>

        <h1
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            letterSpacing: "4px",
            color: "#ffd36b",
            textShadow:
              "0 0 10px #ffd36b, 0 0 20px #ffae00, 0 0 40px #ff7b00"
          }}
        >
          LAYLAH
        </h1>

        <p style={{ opacity: 0.8, fontSize: "14px" }}>
          Your dreams. Your stage. Your story.
        </p>
      </div>

      {/* 💎 CARD */}
      <div
        style={{
          marginTop: "30px",
          maxWidth: "600px",
          width: "100%",
          background: "rgba(0,0,0,0.6)",
          padding: "25px",
          borderRadius: "20px",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.1)"
        }}
      >
        <h2 style={{ color: "#ffb3ff", marginBottom: "10px" }}>
          {content.type}
        </h2>

        <p style={{ whiteSpace: "pre-line", fontSize: "18px" }}>
          {content.text}
        </p>

        <p style={{ marginTop: "15px", fontSize: "12px", opacity: 0.4 }}>
          always here for you ✨
        </p>
      </div>

      {/* 🔘 BUTTONS */}
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setIndex(index + 1)}
          style={{ marginRight: "10px" }}
        >
          Next Message
        </button>

        <button
          onClick={() =>
            setFavorites([...favorites, content.text])
          }
        >
          ♡ Save
        </button>
      </div>

      {/* ❤️ FAVORITES */}
      {favorites.length > 0 && (
        <div style={{ marginTop: "30px", maxWidth: "600px" }}>
          <h3>Favorites 💖</h3>
          {favorites.map((fav, i) => (
            <p key={i} style={{ opacity: 0.8, fontSize: "14px" }}>
              {fav}
            </p>
          ))}
        </div>
      )}

      {/* 🌙 FOOTER */}
      <p style={{ marginTop: "30px", fontSize: "12px", opacity: 0.4 }}>
        A new message appears every day ✨
      </p>
    </main>
  );
}