"use client";

import { useState, useMemo, useEffect } from "react";

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

Every step you take today is a step closer to the stage you dream about.

The lights of Broadway are waiting for your name.

Keep going. Your future self is so proud of you already.`,

`Dear Laylah,

You are closer than you think.

Stay brave.`,

`Dear Laylah,

Your persistence is your power.

Broadway will see you.`
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
    return isQuote
      ? { type: "Daily Quote", text: quotes[index % quotes.length] }
      : { type: "Daily Letter", text: letters[index % letters.length] };
  }, [index]);

  return (
    <main className="min-h-screen text-white flex flex-col items-center justify-center relative overflow-hidden px-6">

      {/* SPLIT BACKGROUND */}
      <div className="absolute inset-0 -z-30 flex">
        <div className="w-1/2 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')] bg-cover bg-center" />
        <div className="w-1/2 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')] bg-cover bg-center" />
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black/20 via-black/70 to-black/95" />

      {/* WARM LIGHT GLOW */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,140,80,0.25),transparent_60%)]" />

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-pink-300 rounded-full opacity-70 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* TITLE */}
      <div className="text-center">
        <p className="text-pink-300 italic text-lg mb-2">For</p>

        <h1
          className="text-6xl md:text-7xl font-bold tracking-widest text-yellow-300"
          style={{
            textShadow:
              "0 0 10px #ffd36b, 0 0 20px #ffae00, 0 0 40px #ff7b00"
          }}
        >
          LAYLAH
        </h1>

        <p className="mt-3 text-sm opacity-80 italic">
          Your dreams. Your stage. Your story.
        </p>
      </div>

      {/* CARD */}
      <div className="mt-10 w-full max-w-xl rounded-3xl p-[2px] bg-gradient-to-br from-pink-500/50 to-orange-400/50 animate-[pulse_4s_infinite] shadow-[0_0_60px_rgba(255,120,80,0.3)]">
        <div className="rounded-3xl bg-black/60 backdrop-blur-xl p-8">
          <h2 className="text-pink-300 mb-4">{content.type}</h2>
          <p className="whitespace-pre-line leading-relaxed text-lg">
            {content.text}
          </p>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={() => setIndex(index + 1)}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 shadow-lg hover:scale-105 transition"
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

      {/* SIDEBAR */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 space-y-4">
        {["⭐", "📖", "🌿", "☕", "👑"].map((icon, i) => (
          <div
            key={i}
            className="w-14 h-14 rounded-2xl bg-black/50 backdrop-blur flex items-center justify-center text-xl hover:scale-110 hover:bg-pink-500/30 transition shadow-lg"
          >
            {icon}
          </div>
        ))}
      </div>

      {/* MOOD SELECTOR */}
      <div className="mt-12 bg-black/40 backdrop-blur-xl px-6 py-4 rounded-2xl flex gap-6 text-sm shadow-lg">
        {["❤️ Happy", "⭐ Motivated", "☁️ Calm", "💜 Grateful"].map((mood, i) => (
          <span
            key={i}
            className="opacity-80 hover:opacity-100 cursor-pointer transition"
          >
            {mood}
          </span>
        ))}
      </div>

      {/* FAVORITES */}
      {favorites.length > 0 && (
        <div className="mt-10 max-w-xl w-full">
          <h3 className="text-pink-300 text-lg mb-3">Favorites</h3>
          {favorites.map((fav, i) => (
            <p key={i} className="opacity-80 text-sm">
              {fav}
            </p>
          ))}
        </div>
      )}

      {/* FOOTER */}
      <p className="mt-6 text-xs opacity-50">
        A new message appears every day ✨
      </p>
    </main>
  );
}