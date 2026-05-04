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

You are becoming the person your dreams recognize.`,
  ];

  const [index, setIndex] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

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
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 text-white">

      {/* 💜 BACKGROUND VIOLET */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a003f] via-[#12001f] to-black -z-30" />

      {/* ✨ LIGHT GLOW */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,rgba(180,80,255,0.25),transparent_60%)]" />

      {/* 🌟 PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-pink-300 rounded-full opacity-60 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* 🎬 TITLE */}
      <div className="text-center mb-8">
        <p className="text-pink-300 italic text-lg mb-2">For</p>

        <h1 className="text-6xl md:text-7xl font-bold tracking-widest text-yellow-300"
          style={{
            textShadow: "0 0 10px #ffd36b, 0 0 20px #ffae00, 0 0 40px #ff7b00"
          }}
        >
          LAYLAH
        </h1>

        <p className="mt-3 text-sm opacity-80 italic">
          Your dreams. Your stage. Your story.
        </p>
      </div>

      {/* 💎 CARD */}
      <div className="w-full max-w-xl rounded-3xl p-[2px] bg-gradient-to-br from-pink-500/40 to-purple-500/40 shadow-[0_0_60px_rgba(180,100,255,0.25)]">
        <div className="rounded-3xl bg-black/60 backdrop-blur-xl p-8 text-center">

          <h2 className="text-pink-300 mb-4 text-center">
            {content.type}
          </h2>

          <p className="whitespace-pre-line leading-relaxed text-lg text-center">
            {content.text}
          </p>

          <p className="mt-5 text-xs opacity-40 italic text-center text-pink-200">
            always here for you ✨
          </p>
        </div>
      </div>

      {/* 🔘 BUTTONS */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={() => setIndex(index + 1)}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg hover:scale-105 transition"
        >
          Next Message →
        </button>

        <button
          onClick={() => setFavorites([...favorites, content.text])}
          className="px-6 py-3 rounded-full border border-pink-400 hover:bg-pink-500/20 transition"
        >
          ♡ Save
        </button>
      </div>

      {/* ❤️ FAVORITES (CENTRÉ) */}
      {favorites.length > 0 && (
        <div className="mt-10 max-w-xl w-full text-center">
          <h3 className="text-pink-300 text-lg mb-3">Favorites 💖</h3>

          {favorites.map((fav, i) => (
            <p key={i} className="opacity-80 text-sm mb-2 text-center">
              {fav}
            </p>
          ))}
        </div>
      )}

      {/* 🌙 FOOTER */}
      <p className="mt-8 text-xs opacity-40 text-center">
        A new message appears every day ✨
      </p>

    </main>
  );
}