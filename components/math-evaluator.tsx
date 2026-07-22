"use client";

import React, { useState } from "react";
import * as math from "mathjs";
import katex from "katex";
import { Calculator, CheckCircle2, AlertCircle } from "lucide-react";

export function MathEvaluator() {
  const [expression, setExpression] = useState<string>("derivative('x^3 + 2*x^2 - 5*x + 1', 'x')");
  const [resultText, setResultText] = useState<string>("");
  const [latexInput, setLatexInput] = useState<string>("");
  const [latexOutput, setLatexOutput] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const presets = [
    { label: "Derivada d/dx(x³+2x²)", expr: "derivative('x^3 + 2*x^2 - 5*x', 'x')" },
    { label: "Matriz Det([[3,2],[1,4]])", expr: "det([[3, 2], [1, 4]])" },
    { label: "Evaluación f(3)=x²+2x", expr: "evaluate('x^2 + 2*x', {x: 3})" },
    { label: "Integral Aritmética", expr: "2 * pi * 5" }
  ];

  const handleEvaluate = (exprToRun?: string) => {
    const expr = exprToRun || expression;
    try {
      setError(null);
      const evaluated = math.evaluate(expr);
      const strRes = typeof evaluated === "object" ? JSON.stringify(evaluated) : String(evaluated);
      setResultText(strRes);

      // Convert to KaTeX rendered strings
      try {
        const node = math.parse(expr);
        const texInput = node.toTex({ parenthesis: "keep" });
        setLatexInput(katex.renderToString(texInput, { throwOnError: false }));
      } catch {
        setLatexInput(katex.renderToString(expr, { throwOnError: false }));
      }

      try {
        const resNode = math.parse(strRes);
        setLatexOutput(katex.renderToString(resNode.toTex(), { throwOnError: false }));
      } catch {
        setLatexOutput(katex.renderToString(strRes, { throwOnError: false }));
      }
    } catch (err: any) {
      setError(err?.message || "Error al evaluar la expresión matemática");
    }
  };

  // Initial evaluation on mount
  React.useEffect(() => {
    handleEvaluate();
  }, []);

  return (
    <div className="artifact-card w-full max-w-xl">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#f2f2f3]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#fbe1d1] flex items-center justify-center text-[#5d2a1a]">
            <Calculator className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-sohne font-medium text-[16px] text-[#17191c]">
              Evaluador Simbólico (MathJS + KaTeX)
            </h3>
            <p className="text-[13px] text-[#777b86]">Álgebra lineal, derivadas y expresiones</p>
          </div>
        </div>
        <span className="text-[12px] font-mono px-2 py-1 rounded-full bg-[#f2f2f3] text-[#777b86]">
          MAT215 Engine
        </span>
      </div>

      {/* Preset pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {presets.map((preset, idx) => (
          <button
            key={idx}
            onClick={() => {
              setExpression(preset.expr);
              handleEvaluate(preset.expr);
            }}
            className="text-[12px] font-sohne px-3 py-1.5 rounded-full bg-[#fafafb] hover:bg-[#f2f2f3] text-[#17191c] border border-[#f2f2f3] transition-colors cursor-pointer"
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Input box */}
      <div className="space-y-3">
        <div>
          <label className="text-[13px] text-[#777b86] mb-1 block font-sohne">
            Expresión Matemática en MathJS:
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={expression}
              onChange={(e) => setExpression(e.target.value)}
              placeholder="e.g. derivative('x^3 + 2*x', 'x')"
              className="flex-1 bg-[#ffffff] border border-[#ececec] rounded-[16px] px-4 py-2.5 text-[15px] font-mono text-[#17191c] outline-none focus:border-[#17191c] transition-colors"
            />
            <button
              onClick={() => handleEvaluate()}
              className="btn-pill-filled text-[14px] px-5 py-2"
            >
              Calcular
            </button>
          </div>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-red-50 text-red-700 text-[13px] flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* KaTeX Display output */}
        {!error && (
          <div className="mt-4 p-4 rounded-2xl bg-[#fafafb] border border-[#f2f2f3] space-y-3">
            <div>
              <span className="text-[11px] font-mono uppercase text-[#979799] tracking-wider block mb-1">
                Expresión Formulada:
              </span>
              <div
                className="text-[18px] text-[#17191c] overflow-x-auto py-1"
                dangerouslySetInnerHTML={{ __html: latexInput || expression }}
              />
            </div>
            <div className="pt-2 border-t border-[#ececec]">
              <span className="text-[11px] font-mono uppercase text-[#5d2a1a] tracking-wider flex items-center gap-1 mb-1 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#5d2a1a]" /> Resultado KaTeX:
              </span>
              <div
                className="text-[22px] font-serif text-[#17191c] overflow-x-auto py-1"
                dangerouslySetInnerHTML={{ __html: latexOutput || resultText }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
