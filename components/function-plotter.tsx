"use client";

import React, { useState, useMemo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import * as Slider from "@radix-ui/react-slider";
import { TrendingUp, Sliders } from "lucide-react";

export function FunctionPlotter() {
  const [amplitude, setAmplitude] = useState<number>(1);
  const [frequency, setFrequency] = useState<number>(2);
  const [funcType, setFuncType] = useState<"sin" | "poly" | "exp">("sin");

  const chartData = useMemo(() => {
    const points = [];
    for (let x = -3.14 * 2; x <= 3.14 * 2; x += 0.2) {
      let y = 0;
      if (funcType === "sin") {
        y = amplitude * Math.sin(frequency * x);
      } else if (funcType === "poly") {
        y = amplitude * (Math.pow(x, 2) / 4) - frequency;
      } else if (funcType === "exp") {
        y = amplitude * Math.exp(-Math.abs(x) / frequency);
      }
      points.push({
        x: parseFloat(x.toFixed(2)),
        y: parseFloat(y.toFixed(2)),
      });
    }
    return points;
  }, [amplitude, frequency, funcType]);

  return (
    <div className="artifact-card w-full max-w-xl">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#f2f2f3]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#f2f2f3] flex items-center justify-center text-[#17191c]">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-sohne font-medium text-[16px] text-[#17191c]">
              Graficador de Funciones 2D (Recharts)
            </h3>
            <p className="text-[13px] text-[#777b86]">Límites y comportamiento de funciones</p>
          </div>
        </div>
        <div className="flex gap-1 bg-[#f2f2f3] p-1 rounded-full text-[12px]">
          <button
            onClick={() => setFuncType("sin")}
            className={`px-3 py-1 rounded-full font-sohne transition-all cursor-pointer ${
              funcType === "sin" ? "bg-[#ffffff] text-[#17191c] shadow-sm" : "text-[#777b86]"
            }`}
          >
            A·sin(ωx)
          </button>
          <button
            onClick={() => setFuncType("poly")}
            className={`px-3 py-1 rounded-full font-sohne transition-all cursor-pointer ${
              funcType === "poly" ? "bg-[#ffffff] text-[#17191c] shadow-sm" : "text-[#777b86]"
            }`}
          >
            A·x²/4 - ω
          </button>
          <button
            onClick={() => setFuncType("exp")}
            className={`px-3 py-1 rounded-full font-sohne transition-all cursor-pointer ${
              funcType === "exp" ? "bg-[#ffffff] text-[#17191c] shadow-sm" : "text-[#777b86]"
            }`}
          >
            A·e^(-|x|/ω)
          </button>
        </div>
      </div>

      {/* Chart visualization */}
      <div className="h-48 w-full my-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f2f2f3" />
            <XAxis dataKey="x" stroke="#979799" fontSize={11} />
            <YAxis stroke="#979799" fontSize={11} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                borderRadius: "12px",
                border: "1px solid #f2f2f3",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                fontSize: "12px",
              }}
            />
            <Line
              type="monotone"
              dataKey="y"
              stroke="#5d2a1a"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5, fill: "#5d2a1a" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Radix Sliders for controls */}
      <div className="mt-4 pt-4 border-t border-[#f2f2f3] space-y-3">
        <div className="flex items-center justify-between text-[13px] font-sohne">
          <span className="text-[#777b86] flex items-center gap-1">
            <Sliders className="w-3.5 h-3.5 text-[#979799]" /> Amplitud (A):
          </span>
          <span className="font-semibold text-[#17191c]">{amplitude}</span>
        </div>
        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          value={[amplitude]}
          onValueChange={(val) => setAmplitude(val[0])}
          min={0.5}
          max={5}
          step={0.5}
        >
          <Slider.Track className="bg-[#f2f2f3] relative grow rounded-full h-2">
            <Slider.Range className="absolute bg-[#5d2a1a] rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb className="block w-4 h-4 bg-[#17191c] shadow-md rounded-full focus:outline-none cursor-pointer" />
        </Slider.Root>

        <div className="flex items-center justify-between text-[13px] font-sohne pt-2">
          <span className="text-[#777b86] flex items-center gap-1">
            <Sliders className="w-3.5 h-3.5 text-[#979799]" /> Frecuencia / Parámetro (ω):
          </span>
          <span className="font-semibold text-[#17191c]">{frequency}</span>
        </div>
        <Slider.Root
          className="relative flex items-center select-none touch-none w-full h-5"
          value={[frequency]}
          onValueChange={(val) => setFrequency(val[0])}
          min={1}
          max={5}
          step={0.5}
        >
          <Slider.Track className="bg-[#f2f2f3] relative grow rounded-full h-2">
            <Slider.Range className="absolute bg-[#5d2a1a] rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb className="block w-4 h-4 bg-[#17191c] shadow-md rounded-full focus:outline-none cursor-pointer" />
        </Slider.Root>
      </div>
    </div>
  );
}
