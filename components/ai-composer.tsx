"use client";

import React, { useState } from "react";
import { ArrowUp, AtSign, Info, Sparkles } from "lucide-react";

export function AIComposer() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState<string | null>(null);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setResponse(
      `Consulta sobre "${query}": Para hallar la derivada o integral requerida, aplicamos la regla de la cadena multivariable o el teorema de Fubini.`
    );
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <form
        onSubmit={handleSend}
        className="bg-[#ffffff] border border-[#ececec] rounded-[16px] p-3 flex items-center gap-3 shadow-[0_4px_24px_rgba(0,0,0,0.04)] focus-within:border-[#17191c] transition-all"
      >
        <div className="flex items-center gap-1.5 pl-2 text-[#a3a6af]">
          <button
            type="button"
            className="w-8 h-8 rounded-full hover:bg-[#f2f2f3] flex items-center justify-center transition-colors cursor-pointer"
            title="Mencionar función"
          >
            <AtSign className="w-4 h-4" />
          </button>
          <button
            type="button"
            className="w-8 h-8 rounded-full hover:bg-[#f2f2f3] flex items-center justify-center transition-colors cursor-pointer"
            title="Información de Sintaxis"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pregunta lo que quieras sobre MAT215..."
          className="flex-1 bg-transparent text-[16px] font-sohne text-[#17191c] placeholder:text-[#a3a6af] outline-none"
        />

        <button
          type="submit"
          disabled={!query.trim()}
          className="w-10 h-10 rounded-full bg-[#17191c] disabled:opacity-40 text-[#ffffff] flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer shrink-0"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </form>

      {response && (
        <div className="mt-4 p-4 rounded-2xl bg-[#fafafb] border border-[#f2f2f3] text-[14px] text-[#17191c] font-sohne flex items-start gap-3 animate-in fade-in-50">
          <Sparkles className="w-4 h-4 text-[#5d2a1a] shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-[#5d2a1a] block mb-1">Asistente Matemática II:</span>
            {response}
          </div>
        </div>
      )}
    </div>
  );
}
