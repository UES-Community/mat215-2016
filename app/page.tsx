import React from "react";
import { Navbar } from "@/components/navbar";
import { MathEvaluator } from "@/components/math-evaluator";
import { FunctionPlotter } from "@/components/function-plotter";
import { VectorSimulation3D } from "@/components/vector-simulation-3d";
import { RadixUnits } from "@/components/radix-units";
import { AIComposer } from "@/components/ai-composer";

// Steep Editorial Floating Cards
function RegionTableCard() {
  return (
    <div className="artifact-card w-[290px] text-[13px] font-sohne">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#f2f2f3]">
        <span className="font-medium text-[#17191c]">Regiones Activas</span>
        <span className="text-[11px] text-[#979799] font-normal uppercase tracking-wider">En vivo</span>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-[11px] text-[#979799] border-b border-[#f2f2f3]">
            <th className="pb-1.5 font-normal">Sede / Región</th>
            <th className="pb-1.5 font-normal text-right">Usuarios</th>
            <th className="pb-1.5 font-normal text-right">Latencia</th>
          </tr>
        </thead>
        <tbody className="text-[#17191c]">
          <tr className="border-b border-[#fafafb]">
            <td className="py-1.5 font-medium">San Salvador</td>
            <td className="py-1.5 text-right">1.2k</td>
            <td className="py-1.5 text-right font-medium text-[#5d2a1a]">12ms</td>
          </tr>
          <tr className="border-b border-[#fafafb]">
            <td className="py-1.5">Santa Ana</td>
            <td className="py-1.5 text-right">840</td>
            <td className="py-1.5 text-right font-medium text-[#5d2a1a]">18ms</td>
          </tr>
          <tr className="border-b border-[#fafafb]">
            <td className="py-1.5">San Miguel</td>
            <td className="py-1.5 text-right">620</td>
            <td className="py-1.5 text-right font-medium text-[#5d2a1a]">22ms</td>
          </tr>
          <tr className="border-b border-[#fafafb]">
            <td className="py-1.5">La Libertad</td>
            <td className="py-1.5 text-right">410</td>
            <td className="py-1.5 text-right font-medium text-[#5d2a1a]">15ms</td>
          </tr>
          <tr>
            <td className="py-1.5">Sonsonate</td>
            <td className="py-1.5 text-right">290</td>
            <td className="py-1.5 text-right font-medium text-[#5d2a1a]">24ms</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function RegistrationsCard() {
  return (
    <div className="artifact-card w-[260px] font-sohne space-y-3 relative">
      {/* Monogram Avatars floating in the card */}
      <div className="absolute -top-3 -right-3 flex -space-x-2">
        <div className="w-8 h-8 rounded-full bg-[#d1fae5] border-2 border-white flex items-center justify-center text-[11px] font-bold text-[#065f46] relative">
          JB
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#17191c] rounded-full border border-white flex items-center justify-center">
            <span className="text-[6px] text-white">↗</span>
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#dbeafe] border-2 border-white flex items-center justify-center text-[11px] font-bold text-[#1e40af] relative">
          AF
        </div>
      </div>

      <div>
        <span className="text-[14px] text-[#777b86] block">Registros del Curso</span>
        <span className="text-[26px] font-medium text-[#17191c] leading-tight block">2.4k</span>
        <span className="text-[13px] text-[#777b86] flex items-center gap-1">
          <span className="text-[#5d2a1a] font-semibold">↑ 5.5x</span> vs la semana anterior
        </span>
      </div>

      {/* Gestural line chart */}
      <div className="h-12 w-full pt-2">
        <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
          <path
            d="M0,25 Q15,5 30,20 T60,8 T90,2 M100,5"
            fill="none"
            stroke="#5d2a1a"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

function ActivationCard() {
  return (
    <div className="artifact-card w-[250px] font-sohne flex items-center justify-between gap-4">
      <div className="space-y-1">
        <span className="text-[14px] text-[#777b86] block">Tasa de Activación</span>
        <span className="text-[26px] font-medium text-[#17191c] leading-none block">46.2%</span>
        <span className="text-[12px] text-[#777b86] block">↑ 2.1% este mes</span>
      </div>
      {/* Radial progress ring */}
      <div className="w-12 h-12 relative shrink-0">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
          <path
            className="text-[#f2f2f3]"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="text-[#5d2a1a]"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeDasharray="46.2, 100"
            strokeLinecap="round"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#17191c]">
          46%
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#17191c] font-sohne">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="inicio" className="relative pt-12 pb-32 px-6 max-w-[1200px] mx-auto min-h-[720px] flex flex-col justify-center">
        <div className="text-center max-w-3xl mx-auto z-10">
          {/* Ghost tag label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="tag-label text-[14px] uppercase tracking-widest">
              Universidad de El Salvador · MAT215
            </span>
          </div>

          {/* 90px Signifier Display headline with mid-sentence italic */}
          <h1 className="font-signifier text-[44px] sm:text-[64px] lg:text-[90px] text-[#17191c] leading-[1.1] tracking-[-0.025em] mb-8">
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
        </div>

        {/* Floating Artifacts Collage for Desktop (hidden on mobile) */}
        <div className="hidden lg:block">
          {/* Region Table top-left */}
          <div className="absolute top-12 left-0 animate-in fade-in slide-in-from-left-8 duration-700">
            <RegionTableCard />
          </div>

          {/* Registration Card right */}
          <div className="absolute top-24 right-0 animate-in fade-in slide-in-from-right-8 duration-700">
            <RegistrationsCard />
          </div>

          {/* Activation Chart bottom-left */}
          <div className="absolute bottom-16 left-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <ActivationCard />
          </div>

          {/* AI Composer bottom-center (overlaps) */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-lg z-20 animate-in fade-in slide-in-from-bottom-12 duration-700">
            <AIComposer />
          </div>
        </div>

        {/* Fallback Collage for Mobile (shown under hero text on sm/md) */}
        <div className="lg:hidden flex flex-col gap-6 items-center mt-8 w-full max-w-xl mx-auto">
          <div className="w-full flex justify-center"><AIComposer /></div>
          <div className="grid sm:grid-cols-2 gap-6 w-full">
            <div className="flex justify-center"><RegionTableCard /></div>
            <div className="flex justify-center"><RegistrationsCard /></div>
          </div>
          <div className="w-full flex justify-center"><ActivationCard /></div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculadora" className="py-24 bg-[#fafafb] border-t border-[#f2f2f3] px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="tag-label text-[14px] uppercase tracking-wider block">
              Herramienta 01 · Álgebra y Derivadas
            </span>
            <h2 className="font-signifier text-[44px] text-[#17191c] leading-[1.3] tracking-[-0.015em]">
              Evaluación simbólica con MathJS
            </h2>
            <p className="text-[17px] text-[#777b86] leading-relaxed">
              Calcula derivadas, determinantes y evalúa expresiones complejas. Los resultados se renderizan tipográficamente en formato LaTeX mediante KaTeX.
            </p>
            <div className="pt-2">
              <a href="#unidades" className="text-link-arrow">
                Revisar fórmulas del curso →
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 flex justify-center w-full">
            <MathEvaluator />
          </div>
        </div>
      </section>

      {/* 2D Plotter Section */}
      <section id="graficador" className="py-24 bg-[#ffffff] px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex justify-center order-2 lg:order-1">
            <FunctionPlotter />
          </div>
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <span className="tag-label text-[14px] uppercase tracking-wider block">
              Herramienta 02 · Visualización 2D
            </span>
            <h2 className="font-signifier text-[44px] text-[#17191c] leading-[1.3] tracking-[-0.015em]">
              Gráficas dinámicas de funciones escalares
            </h2>
            <p className="text-[17px] text-[#777b86] leading-relaxed">
              Analiza el comportamiento de senoides, polígonos cuadráticos y funciones exponenciales con ajuste de amplitud y frecuencia en tiempo real.
            </p>
            <div className="pt-2">
              <a href="#unidades" className="text-link-arrow">
                Revisar continuidad de funciones →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Simulation Section */}
      <section id="simulador" className="py-24 bg-[#fafafb] border-y border-[#f2f2f3] px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="tag-label text-[14px] uppercase tracking-wider block">
              Herramienta 03 · Simulación 3D
            </span>
            <h2 className="font-signifier text-[44px] text-[#17191c] leading-[1.3] tracking-[-0.015em]">
              Campos vectoriales en tres dimensiones
            </h2>
            <p className="text-[17px] text-[#777b86] leading-relaxed">
              Explora superficies espaciales en 3D {"\\(z = \\sin(\\sqrt{x^2+y^2})\\)"} e interactúa con campos de gradientes y vectores en R³ renderizados en tiempo real mediante WebGL.
            </p>
            <div className="pt-2">
              <a href="#unidades" className="text-link-arrow">
                Ver integrales de línea →
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 flex justify-center w-full">
            <VectorSimulation3D />
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
