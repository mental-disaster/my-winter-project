"use client";
import { CHARACTERS } from "@/constants/characters";
import { useState } from "react";


export default function CharacterSelect() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold base-content mb-4">Character Select</h1>
      <div className="grid grid-cols-11 gap-2 p-4 rounded-lg">
        {Object.entries(CHARACTERS).map(([key, char]) => (
          <button
            key={key}
            onClick={() => setSelected(selected !== key ? key : null)}
            className={`
                w-20 h-20 flex items-center justify-center border-2 rounded-lg base-content font-bold transition-all
                hover:border-primary
                ${selected === key ? "border-accent bg-accent bg-opacity-50" : "border-transparent"}
                `}
            >
            {char.name}
          </button>
        ))}
      </div>
    </div>
  );
}
