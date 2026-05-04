"use client";

import { useState, useMemo, useEffect } from "react";

export default function Page() {

  // 💬 QUOTES
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

  // 💌 LETTERS
  const letters = [
`Dear Laylah,

Even on quiet days, something beautiful is growing in you.

You don’t always see it, but it’s there—getting stronger, clearer, closer.

And one day, everything will make sense.

Keep going. Always.`,

`Dear Laylah,

I hope you never forget how special you are.

Not just your talent—but your heart, your softness, your way of feeling things deeply.

That’s what will touch people the most.

That’s what makes you unforgettable.`,

`Dear Laylah,

If today feels heavy, take it gently.

You don’t need to prove anything.

Just being you is already enough.

And you are doing better than you think.`,

`Dear Laylah,

There is a version of you in the future living your dream.

She is proud of you right now—for not giving up.

For continuing, even when it’s hard.

You are becoming her, step by step.`,

`Dear Laylah,

Some people are meant for ordinary paths.

You are not one of them.

Your story is bigger, brighter, and still unfolding.

Trust it.`
  ];

  // 📅 DAY SYSTEM
  const day = Math.floor(Date.now() / (1000 * 60 * 60 * 24));

  // 🔘 STATE
  const [index, setIndex] = useState(0);
  const [favorites, setFavorites] = useState<string[]>([]);

  // 💾 LOAD FAVORITES
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  // 💾 SAVE FAVORITES
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // 🎯 CONTENT
  const content = useMemo(() => {
    const isQuote = (day + index) % 2 === 0;

    return isQuote
      ? { type: "Daily Quote", text: quotes[(day + index) % quotes.length] }
      : { type: "Daily Letter", text: letters[(day + index) % letters.length] };
  }, [index, day]);

  return (
    <main className="min-h-screen text-white flex flex-col items-center justify-center relative overflow-hidden px-6">

      {/* 🎭 BACKGROUND SPLIT */}
      <div className="absolute inset-0 -z-30 flex">
        <div className="w-1/2 bg-[url('https://images.unsplash.com/photo-1549921296-3a6b68c63e3b')] bg-cover bg-center" />
        <div className="w-1/2 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')] bg-cover bg-center" />
      </div>

      {/* 🌑 OVERLAY */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black/10 via-black/60 to-black/95" />

      {/* ✨ GLOW */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,140,80,0.25),transparent_60%)]" />

      {/* 🌟 PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
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

      {/* 🎬 TITLE */}
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

      {/* 💎 CARD */}
      <div className="mt-10 w-full max-w-xl rounded-3xl p-[2px] bg-gradient-to-br from-pink-500/50 to-orange-400/50 shadow-[0_0_60px_rgba(255,120,80,0.3)]">
        <div className="rounded-3xl bg-black/60 backdrop-blur-xl p-8">
          <h2 className="text-pink-300 mb-4">{content.type}</h2>
          <p className="whitespace-pre-line leading-relaxed text-lg">
            {content.text}
          </p>

          <p className="mt-4 text-xs opacity-60 italic">
            Always in your corner ☕🌸
          </p>
        </div>
      </div>

      {/* 🔘 BUTTONS */}
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

      {/* ❤️ FAVORITES */}
      {favorites.length > 0 && (
        <div className="mt-10 max-w-xl w-full">
          <h3 className="text-pink-300 text-lg mb-3">Favorites 💖</h3>
          {favorites.map((fav, i) => (
            <p key={i} className="opacity-80 text-sm">
              {fav}
            </p>
          ))}
        </div>
      )}

      {/* 🌙 FOOTER */}
      <p className="mt-6 text-xs opacity-50">
        A new message appears every day ✨
      </p>

    </main>
  );
}