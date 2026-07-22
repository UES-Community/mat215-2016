import React from "react";
import { Navbar } from "@/components/navbar";
import { MathEvaluator } from "@/components/math-evaluator";
import { FunctionPlotter } from "@/components/function-plotter";
import { VectorSimulation3D } from "@/components/vector-simulation-3d";
import { RadixUnits } from "@/components/radix-units";
import { AIComposer } from "@/components/ai-composer";
import { Sparkles, ArrowRight, BookOpen, Layers, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#17191c] font-sohne">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="inicio" className="relative pt-16 pb-24 px-6 max-w-[1200px] mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Ghost tag label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-[14px] font-sohne text-[#979799] uppercase tracking-widest">
              Universidad de El Salvador · MAT215
            </span>
          </div>

          {/* 90px Signifier Display headline with mid-sentence italic */}
          <h1 className="font-signifier text-[56px] sm:text-[76px] lg:text-[90px] text-[#17191c] leading-[1.05] tracking-[-2.25px] mb-8">
            El rigor del <span className="italic font-normal">Cálculo Multivariable</span> interactivo.
          </h1>

          {/* Subhead */}
          <p className="text-[18px] sm:text-[20px] text-[#777b86] leading-[1.35] max-w-2xl mx-auto mb-10 font-sohne">
            Plataforma educativa para Matemática II: visualización 3D de vectores, evaluación simbólica de integrales y demostración rigurosa de teoremas.
          </p>

          {/* Pill Button Pair */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a href="#simulador" className="btn-pill-filled text-[16px]">
              Explorar Simulación 3D
            </a>
            <a href="#unidades" className="btn-pill-ghost text-[16px]">
              Ver Unidades del Curso
            </a>
          </div>

          {/* AI Composer Widget */}
          <div className="my-10">
            <AIComposer />
          </div>
        </div>

        {/* Hero Product Artifacts Collage */}
        <div className="grid lg:grid-cols-2 gap-8 items-start my-12">
          <div className="flex justify-center" id="calculadora">
            <MathEvaluator />
          </div>
          <div className="flex justify-center" id="simulador">
            <VectorSimulation3D />
          </div>
        </div>
      </section>

      {/* 2D Plotter Section */}
      <section id="graficador" className="py-20 bg-[#fafafb] border-y border-[#f2f2f3] px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[14px] font-sohne text-[#979799] uppercase tracking-wider block">
              Herramienta 02 · Visualización
            </span>
            <h2 className="font-signifier text-[44px] text-[#17191c] leading-[1.1] tracking-[-0.66px]">
              Gráficas dinámicas de funciones escalares
            </h2>
            <p className="text-[17px] text-[#777b86] leading-relaxed">
              Analiza el comportamiento de senoides, polígonos cuadráticos y funciones exponenciales con ajuste de amplitud y frecuencia en tiempo real.
            </p>
            <div className="pt-2">
              <a href="#unidades" className="inline-flex items-center gap-2 text-[#17191c] font-sohne font-medium hover:underline">
                Revisar continuidad de funciones →
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 flex justify-center">
            <FunctionPlotter />
          </div>
        </div>
      </section>

      {/* Unidades & Radix Section */}
      <section id="unidades" className="py-24 px-6 bg-[#ffffff]">
        <RadixUnits />
      </section>

      {/* Editorial Accent Peach Card Section */}
      <section className="py-16 px-6 max-w-[1200px] mx-auto">
        <div className="peach-accent-card">
          <div className="max-w-3xl">
            <span className="text-[14px] font-sohne text-[#5d2a1a]/80 uppercase tracking-widest block mb-3">
              Nota Editorial del Departamento de Matemática
            </span>
            <blockquote className="font-signifier text-[28px] sm:text-[36px] text-[#5d2a1a] leading-[1.2] mb-6">
              «El cálculo multivariable es el lenguaje fundamental con el que describimos las leyes de la física, la optimización económica y la geometría del espacio-tiempo.»
            </blockquote>
            <div className="text-[15px] font-sohne text-[#5d2a1a]/90 font-medium">
              — Cátedra de Matemática II (MAT215), Universidad de El Salvador
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="recursos" className="py-16 px-6 border-t border-[#f2f2f3] bg-[#ffffff] text-[15px] font-sohne text-[#777b86]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#17191c] text-[#ffffff] flex items-center justify-center font-bold text-xs">
              M2
            </div>
            <span className="font-signifier text-lg text-[#17191c]">Matemática II</span>
          </div>

          <div className="flex gap-8 text-[14px]">
            <a href="#inicio" className="hover:text-[#17191c] transition-colors">Inicio</a>
            <a href="#unidades" className="hover:text-[#17191c] transition-colors">Unidades</a>
            <a href="#calculadora" className="hover:text-[#17191c] transition-colors">Calculadora Simbólica</a>
            <a href="#simulador" className="hover:text-[#17191c] transition-colors">Simulación 3D</a>
          </div>

          <div className="text-[13px] text-[#979799]">
            MAT215 · Next.js & Radix UI App
          </div>
        </div>
      </footer>
    </div>
  );
}
