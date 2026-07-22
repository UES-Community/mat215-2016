import React from "react";
import { Navbar } from "@/components/navbar";
import { MathEvaluator } from "@/components/math-evaluator";
import { FunctionPlotter } from "@/components/function-plotter";
import { VectorSimulation3D } from "@/components/vector-simulation-3d";
import { RadixUnits } from "@/components/radix-units";
import { AIComposer } from "@/components/ai-composer";

// 1. Floating Product Artifact: Region Table (Top-Left)
function RegionTableArtifact() {
  return (
    <div className="artifact-card w-[300px] text-[13px] font-sohne select-none pointer-events-none sm:pointer-events-auto">
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#f2f2f3]">
        <span className="font-medium text-[#17191c]">Regiones de Consulta</span>
        <span className="text-[11px] text-[#979799]">En vivo</span>
      </div>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-[11px] text-[#979799] border-b border-[#f2f2f3]">
            <th className="pb-1.5 font-normal">Sede</th>
            <th className="pb-1.5 font-normal text-right">Sesiones</th>
            <th className="pb-1.5 font-normal text-right">Latencia</th>
          </tr>
        </thead>
        <tbody className="text-[#17191c]">
          <tr className="border-b border-[#fafafb]">
            <td className="py-1 font-medium">San Salvador</td>
            <td className="py-1 text-right">1.2k</td>
            <td className="py-1 text-right text-[#5d2a1a] font-medium">12ms</td>
          </tr>
          <tr className="border-b border-[#fafafb]">
            <td className="py-1">Santa Ana</td>
            <td className="py-1 text-right">840</td>
            <td className="py-1 text-right text-[#5d2a1a] font-medium">18ms</td>
          </tr>
          <tr className="border-b border-[#fafafb]">
            <td className="py-1">San Miguel</td>
            <td className="py-1 text-right">620</td>
            <td className="py-1 text-right text-[#5d2a1a] font-medium">22ms</td>
          </tr>
          <tr className="border-b border-[#fafafb]">
            <td className="py-1">La Libertad</td>
            <td className="py-1 text-right">410</td>
            <td className="py-1 text-right text-[#5d2a1a] font-medium">15ms</td>
          </tr>
          <tr>
            <td className="py-1">Sonsonate</td>
            <td className="py-1 text-right">290</td>
            <td className="py-1 text-right text-[#5d2a1a] font-medium">24ms</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// 2. Floating Product Artifact: Registrations Stat Card (Right)
function RegistrationsArtifact() {
  return (
    <div className="artifact-card w-[270px] font-sohne space-y-3 relative select-none pointer-events-none sm:pointer-events-auto">
      {/* Avatar Bubbles motif with cursor pointer */}
      <div className="absolute -top-3 -right-3 flex -space-x-2">
        <div className="w-9 h-9 rounded-full bg-[#d1fae5] border-2 border-white flex items-center justify-center text-[12px] font-medium text-[#065f46] relative">
          JB
          <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#17191c] rounded-full border border-white flex items-center justify-center">
            <span className="text-[7px] text-white">↗</span>
          </div>
        </div>
        <div className="w-9 h-9 rounded-full bg-[#dbeafe] border-2 border-white flex items-center justify-center text-[12px] font-medium text-[#1e40af] relative">
          AF
          <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#17191c] rounded-full border border-white flex items-center justify-center">
            <span className="text-[7px] text-white">↖</span>
          </div>
        </div>
      </div>

      <div>
        <span className="text-[14px] text-[#777b86] block">Inscritos MAT215</span>
        <span className="text-[20px] font-medium text-[#17191c] leading-tight block mt-0.5">2.4k alumnos</span>
        <span className="text-[14px] text-[#777b86] flex items-center gap-1 mt-1">
          <span className="text-[#5d2a1a] font-medium">↑ 5.5x</span> vs la semana anterior
        </span>
      </div>

      {/* Gestural line chart in Sienna Brown */}
      <div className="h-10 w-full pt-1">
        <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
          <path
            d="M0,25 Q15,5 30,20 T60,8 T90,2 M100,6"
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

// 3. Floating Product Artifact: Activation Stat Card (Bottom-Left)
function ActivationArtifact() {
  return (
    <div className="artifact-card w-[250px] font-sohne flex items-center justify-between gap-3 select-none pointer-events-none sm:pointer-events-auto">
      <div className="space-y-1">
        <span className="text-[14px] text-[#777b86] block">Tasa de Activación</span>
        <span className="text-[20px] font-medium text-[#17191c] leading-none block">46.2%</span>
        <span className="text-[14px] text-[#777b86] block mt-1">↑ 2.1% este mes</span>
      </div>
      {/* Minimal radial progress ring */}
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
        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-medium text-[#17191c]">
          46%
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#17191c] font-sohne selection:bg-[#fbe1d1] selection:text-[#5d2a1a]">
      {/* Navigation Top Bar */}
      <Navbar />

      {/* Hero Section — Product Magazine Spread Collage */}
      <section id="inicio" className="relative pt-16 pb-32 px-6 max-w-[1200px] mx-auto min-h-[760px] flex flex-col justify-center">
        {/* Centered Hero Typography & Actions */}
        <div className="text-center max-w-4xl mx-auto z-10 space-y-6">
          {/* Category tag */}
          <div>
            <span className="tag-label uppercase tracking-widest text-[14px]">
              Universidad de El Salvador · MAT215
            </span>
          </div>

          {/* 90px Signifier Display Headline with mid-sentence italic */}
          <h1 className="font-signifier text-[44px] sm:text-[64px] lg:text-[90px] leading-[1.3] tracking-[-2.25px] text-[#17191c] max-w-4xl mx-auto font-normal">
            El rigor del <span className="italic font-normal">Cálculo Multivariable</span> interactivo.
          </h1>

          {/* Subhead */}
          <p className="text-[17px] leading-[1.35] text-[#777b86] font-sohne font-normal max-w-[620px] mx-auto pt-2">
            Plataforma educativa para Matemática II: visualización 3D de vectores, evaluación simbólica de integrales y demostración de teoremas.
          </p>

          {/* Pill Button Pair (Filled + Ghost) */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <a href="#simulador" className="btn-pill-filled">
              Explorar Simulación 3D
            </a>
            <a href="#unidades" className="btn-pill-ghost">
              Ver Unidades del Curso
            </a>
          </div>
        </div>

        {/* Desktop Magazine Collage: Floating Product Artifacts overlapping hero text */}
        <div className="hidden xl:block">
          {/* Region Table — Top-Left */}
          <div className="absolute top-12 -left-12 z-20 transition-transform hover:-translate-y-1 duration-300">
            <RegionTableArtifact />
          </div>

          {/* Registrations Stat Card — Top-Right */}
          <div className="absolute top-20 -right-8 z-20 transition-transform hover:-translate-y-1 duration-300">
            <RegistrationsArtifact />
          </div>

          {/* Activation Stat Card — Bottom-Left */}
          <div className="absolute bottom-20 -left-6 z-20 transition-transform hover:-translate-y-1 duration-300">
            <ActivationArtifact />
          </div>

          {/* AI Composer Input — Bottom-Center floating artifact */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-[540px] z-30 transition-transform hover:-translate-y-1 duration-300">
            <AIComposer />
          </div>
        </div>

        {/* Mobile / Tablet Responsive Floating Artifacts Layout */}
        <div className="xl:hidden flex flex-col gap-6 items-center mt-12 w-full max-w-xl mx-auto z-20">
          <div className="w-full"><AIComposer /></div>
          <div className="grid sm:grid-cols-2 gap-4 w-full">
            <div className="flex justify-center"><RegionTableArtifact /></div>
            <div className="flex justify-center"><RegistrationsArtifact /></div>
          </div>
          <div className="w-full flex justify-center"><ActivationArtifact /></div>
        </div>
      </section>

      {/* Feature Section 1: Symbolic Math Evaluator */}
      <section id="calculadora" className="py-[80px] bg-[#fafafb] border-t border-[#f2f2f3] px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="tag-label">
              Marketing & Análisis · Herramienta 01
            </span>
            <h2 className="font-signifier text-[44px] leading-[1.3] tracking-[-0.66px] text-[#17191c]">
              Evaluación simbólica y derivadas con MathJS
            </h2>
            <p className="text-[17px] leading-[1.35] text-[#17191c] font-sohne font-normal">
              Calcula derivadas parciales, evaluadores simbólicos y determinantes matriciales. Los resultados se renderizan con precisión matemática KaTeX.
            </p>
            <div className="pt-4">
              <a href="#unidades" className="text-link-arrow">
                Revisar ecuaciones clave →
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 flex justify-center w-full">
            <MathEvaluator />
          </div>
        </div>
      </section>

      {/* Feature Section 2: 2D Function Plotter */}
      <section id="graficador" className="py-[80px] bg-[#ffffff] px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex justify-center order-2 lg:order-1">
            <FunctionPlotter />
          </div>
          <div className="lg:col-span-5 space-y-4 order-1 lg:order-2">
            <span className="tag-label">
              Visualización Escalar · Herramienta 02
            </span>
            <h2 className="font-signifier text-[44px] leading-[1.3] tracking-[-0.66px] text-[#17191c]">
              Gráficas dinámicas de funciones escalares
            </h2>
            <p className="text-[17px] leading-[1.35] text-[#17191c] font-sohne font-normal">
              Analiza el comportamiento de senoides, polígonos cuadráticos y funciones exponenciales con ajuste de amplitud y frecuencia mediante controles Radix Slider.
            </p>
            <div className="pt-4">
              <a href="#unidades" className="text-link-arrow">
                Ver análisis de continuidad →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 3: 3D Vector Simulation */}
      <section id="simulador" className="py-[80px] bg-[#fafafb] border-y border-[#f2f2f3] px-6">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="tag-label">
              Simulación Físico-Matemática · Herramienta 03
            </span>
            <h2 className="font-signifier text-[44px] leading-[1.3] tracking-[-0.66px] text-[#17191c]">
              Campos vectoriales en tres dimensiones
            </h2>
            <p className="text-[17px] leading-[1.35] text-[#17191c] font-sohne font-normal">
              Explora superficies espaciales en 3D {"\\(z = \\sin(\\sqrt{x^2+y^2})\\)"} e interactúa con campos de gradientes y vectores en R³ renderizados en tiempo real con WebGL.
            </p>
            <div className="pt-4">
              <a href="#unidades" className="text-link-arrow">
                Explorar integrales múltiples →
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 flex justify-center w-full">
            <VectorSimulation3D />
          </div>
        </div>
      </section>

      {/* Academic Units & Radix Primitives Section */}
      <section id="unidades" className="py-[80px] px-6 bg-[#ffffff]">
        <RadixUnits />
      </section>

      {/* Editorial Accent Blush Peach Card (Single per page max) */}
      <section className="py-[80px] px-6 max-w-[1200px] mx-auto bg-[#ffffff]">
        <div className="peach-accent-card">
          <div className="max-w-3xl space-y-4">
            <h3 className="text-[26px] font-sohne font-[450] tracking-[-0.23px] text-[#5d2a1a]">
              Nota Editorial del Departamento de Matemática
            </h3>
            <blockquote className="text-[18px] font-sohne font-[430] text-[#5d2a1a] leading-relaxed">
              «El cálculo multivariable es el lenguaje fundamental con el que describimos las leyes de la física, la optimización económica y la geometría del espacio-tiempo.»
            </blockquote>
            <div className="text-[14px] font-sohne font-normal text-[#5d2a1a] pt-2">
              — Cátedra de Matemática II (MAT215), Universidad de El Salvador
            </div>
          </div>
        </div>
      </section>

      {/* Quiet Editorial Footer */}
      <footer id="recursos" className="py-16 px-6 border-t border-[#f2f2f3] bg-[#ffffff] text-[15px] font-sohne text-[#777b86]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#17191c] text-[#ffffff] flex items-center justify-center font-bold text-xs">
              M2
            </div>
            <span className="font-signifier text-[18px] text-[#17191c]">Matemática II</span>
          </div>

          <div className="flex gap-8 text-[14px]">
            <a href="#inicio" className="hover:text-[#17191c] transition-colors">Inicio</a>
            <a href="#unidades" className="hover:text-[#17191c] transition-colors">Unidades</a>
            <a href="#calculadora" className="hover:text-[#17191c] transition-colors">Calculadora Simbólica</a>
            <a href="#simulador" className="hover:text-[#17191c] transition-colors">Simulación 3D</a>
          </div>

          <div className="text-[13px] text-[#979799]">
            MAT215 · Steep Editorial Next.js App
          </div>
        </div>
      </footer>
    </div>
  );
}
