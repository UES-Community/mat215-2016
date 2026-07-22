"use client";

import React, { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  ChevronDown,
  Maximize2,
  X,
  Sigma,
} from "lucide-react";

export function RadixUnits() {
  const [selectedFormula, setSelectedFormula] = useState<{
    title: string;
    latex: string;
    desc: string;
  } | null>(null);

  return (
    <Tooltip.Provider delayDuration={200}>
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <span className="text-[13px] font-sohne font-medium uppercase tracking-wider text-[#979799] block mb-2">
            Programa Académico MAT215
          </span>
          <h2 className="font-signifier text-[44px] text-[#17191c] tracking-[-0.66px] leading-[1.2]">
            Unidades de Estudio & Módulos Interactivos
          </h2>
          <p className="text-[#777b86] text-[17px] mt-3 font-sohne">
            Explora la teoría, teoremas y herramientas prácticas de cada unidad curricular.
          </p>
        </div>

        {/* Radix Tabs */}
        <Tabs.Root defaultValue="u1" className="w-full">
          <Tabs.List className="flex flex-wrap justify-center gap-2 mb-8 bg-[#f2f2f3] p-1.5 rounded-full max-w-3xl mx-auto border border-[#ececec]">
            <Tabs.Trigger
              value="u1"
              className="px-5 py-2.5 rounded-full text-[15px] font-sohne font-medium transition-all data-[state=active]:bg-[#ffffff] data-[state=active]:text-[#17191c] data-[state=active]:shadow-sm text-[#777b86] hover:text-[#17191c] cursor-pointer"
            >
              Unidad I: Funciones & Límites
            </Tabs.Trigger>
            <Tabs.Trigger
              value="u2"
              className="px-5 py-2.5 rounded-full text-[15px] font-sohne font-medium transition-all data-[state=active]:bg-[#ffffff] data-[state=active]:text-[#17191c] data-[state=active]:shadow-sm text-[#777b86] hover:text-[#17191c] cursor-pointer"
            >
              Unidad II: Derivadas Parciales
            </Tabs.Trigger>
            <Tabs.Trigger
              value="u3"
              className="px-5 py-2.5 rounded-full text-[15px] font-sohne font-medium transition-all data-[state=active]:bg-[#ffffff] data-[state=active]:text-[#17191c] data-[state=active]:shadow-sm text-[#777b86] hover:text-[#17191c] cursor-pointer"
            >
              Unidad III: Integrales Múltiples
            </Tabs.Trigger>
            <Tabs.Trigger
              value="u4"
              className="px-5 py-2.5 rounded-full text-[15px] font-sohne font-medium transition-all data-[state=active]:bg-[#ffffff] data-[state=active]:text-[#17191c] data-[state=active]:shadow-sm text-[#777b86] hover:text-[#17191c] cursor-pointer"
            >
              Unidad IV: Campos Vectoriales
            </Tabs.Trigger>
          </Tabs.List>

          {/* Tab 1 */}
          <Tabs.Content value="u1" className="outline-none focus:outline-none">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="neutral-card">
                <span className="text-[#979799] text-[14px] font-sohne block mb-2">
                  Unidad I · Fundamentos
                </span>
                <h3 className="text-[26px] font-sohne font-normal text-[#17191c] tracking-[-0.23px] mb-3">
                  Funciones de Varias Variables y Continuidad
                </h3>
                <p className="text-[16px] text-[#17191c] leading-relaxed mb-6 font-sohne">
                  Dominio, rango, curvas de nivel y límites en R² y R³. Definición formal ε-δ y aproximación por trayectorias.
                </p>

                {/* Radix Accordion */}
                <Accordion.Root type="single" collapsible className="space-y-2">
                  <Accordion.Item value="item-1" className="bg-[#ffffff] rounded-2xl border border-[#ececec] overflow-hidden">
                    <Accordion.Trigger className="flex items-center justify-between w-full p-4 text-[15px] font-medium text-[#17191c] text-left hover:bg-[#fafafb] cursor-pointer">
                      <span>1.1 Dominio y Grafos de z = f(x,y)</span>
                      <ChevronDown className="w-4 h-4 text-[#777b86] transition-transform duration-200" />
                    </Accordion.Trigger>
                    <Accordion.Content className="px-4 pb-4 text-[14px] text-[#777b86] leading-relaxed border-t border-[#f2f2f3] pt-3">
                      Estudio analítico de regiones admisibles en el plano xy y proyecciones de superficies cilíndricas y cónicas.
                    </Accordion.Content>
                  </Accordion.Item>

                  <Accordion.Item value="item-2" className="bg-[#ffffff] rounded-2xl border border-[#ececec] overflow-hidden">
                    <Accordion.Trigger className="flex items-center justify-between w-full p-4 text-[15px] font-medium text-[#17191c] text-left hover:bg-[#fafafb] cursor-pointer">
                      <span>1.2 Límites Dobles y No Existencia</span>
                      <ChevronDown className="w-4 h-4 text-[#777b86] transition-transform duration-200" />
                    </Accordion.Trigger>
                    <Accordion.Content className="px-4 pb-4 text-[14px] text-[#777b86] leading-relaxed border-t border-[#f2f2f3] pt-3">
                      Prueba de no existencia mediante trayectorias rectilíneas y parabólicas. Cambio a coordenadas polares.
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion.Root>
              </div>

              {/* Formula & Modal Card */}
              <div className="artifact-card space-y-4">
                <div className="flex items-center justify-between border-b border-[#f2f2f3] pb-3">
                  <h4 className="font-sohne font-medium text-[16px] text-[#17191c] flex items-center gap-2">
                    <Sigma className="w-4 h-4 text-[#5d2a1a]" /> Fórmulas Clave (Radix Tooltip & Dialog)
                  </h4>
                  <span className="text-[12px] text-[#777b86]">Haz clic para expandir</span>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-[#fafafb] border border-[#f2f2f3] flex items-center justify-between">
                    <div>
                      <span className="text-[13px] text-[#777b86] block font-sohne">Límite Doble en Polares</span>
                      <code className="text-[14px] font-mono text-[#17191c]">lim_(r-&gt;0) f(r cos θ, r sin θ)</code>
                    </div>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <button
                          onClick={() =>
                            setSelectedFormula({
                              title: "Límite Doble mediante Coordenadas Polares",
                              latex: "\\lim_{(x,y) \\to (0,0)} f(x,y) = \\lim_{r \\to 0^+} f(r\\cos\\theta, r\\sin\\theta) = L",
                              desc: "Si el resultado L es independiente del ángulo θ, el límite existe y es igual a L.",
                            })
                          }
                          className="w-8 h-8 rounded-full bg-[#17191c] text-[#ffffff] flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content
                          className="bg-[#17191c] text-[#ffffff] text-[12px] px-3 py-1.5 rounded-lg shadow-md font-sohne z-50"
                          sideOffset={5}
                        >
                          Ver detalle en Modal Radix
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#fafafb] border border-[#f2f2f3] flex items-center justify-between">
                    <div>
                      <span className="text-[13px] text-[#777b86] block font-sohne">Regla de las Trayectorias</span>
                      <code className="text-[14px] font-mono text-[#17191c]">f(x, mx) != f(x, kx²)</code>
                    </div>
                    <button
                      onClick={() =>
                        setSelectedFormula({
                          title: "Criterio de No Existencia de Límites",
                          latex: "\\lim_{x \\to 0} f(x, mx) = L_1 \\neq L_2 = \\lim_{x \\to 0} f(x, kx^2)",
                          desc: "Si el límite toma valores distintos a lo largo de dos curvas que pasan por el punto, el límite no existe.",
                        })
                      }
                      className="w-8 h-8 rounded-full bg-[#17191c] text-[#ffffff] flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Content>

          {/* Tab 2 */}
          <Tabs.Content value="u2" className="outline-none focus:outline-none">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="neutral-card">
                <span className="text-[#979799] text-[14px] font-sohne block mb-2">
                  Unidad II · Cálculo Diferencial
                </span>
                <h3 className="text-[26px] font-sohne font-normal text-[#17191c] tracking-[-0.23px] mb-3">
                  Derivadas Parciales, Gradiente y Plano Tangente
                </h3>
                <p className="text-[16px] text-[#17191c] leading-relaxed mb-6 font-sohne">
                  Vector gradiente ∇f, derivadas direccionales, regla de la cadena multivariable y optimización con multiplicadores de Lagrange.
                </p>
                <div className="p-4 bg-[#ffffff] rounded-2xl border border-[#ececec]">
                  <h4 className="font-sohne font-medium text-[15px] text-[#17191c] mb-1">Vector Gradiente</h4>
                  <p className="text-[14px] text-[#777b86]">
                    ∇f(x,y) = (∂f/∂x, ∂f/∂y) indica la dirección de máximo crecimiento.
                  </p>
                </div>
              </div>

              <div className="artifact-card space-y-4">
                <div className="flex items-center justify-between border-b border-[#f2f2f3] pb-3">
                  <h4 className="font-sohne font-medium text-[16px] text-[#17191c]">
                    Plano Tangente & Diferencial
                  </h4>
                  <span className="text-[12px] text-[#777b86]">Ecuación en (x₀, y₀)</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#fafafb] border border-[#f2f2f3]">
                  <p className="font-mono text-[15px] text-[#17191c] mb-2">
                    z - z₀ = f_x(x₀,y₀)(x - x₀) + f_y(x₀,y₀)(y - y₀)
                  </p>
                  <p className="text-[13px] text-[#777b86] font-sohne">
                    Aproximación lineal de primer orden para pequeñas variaciones Δx, Δy.
                  </p>
                </div>
              </div>
            </div>
          </Tabs.Content>

          {/* Tab 3 */}
          <Tabs.Content value="u3" className="outline-none focus:outline-none">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="neutral-card">
                <span className="text-[#979799] text-[14px] font-sohne block mb-2">
                  Unidad III · Integración
                </span>
                <h3 className="text-[26px] font-sohne font-normal text-[#17191c] tracking-[-0.23px] mb-3">
                  Integrales Dobles, Triples y Teorema de Fubini
                </h3>
                <p className="text-[16px] text-[#17191c] leading-relaxed mb-6 font-sohne">
                  Cálculo de volúmenes, áreas de superficies, centroides y momentos de inercia mediante cambio de variables (Jacobiano).
                </p>
              </div>

              <div className="artifact-card space-y-4">
                <div className="flex items-center justify-between border-b border-[#f2f2f3] pb-3">
                  <h4 className="font-sohne font-medium text-[16px] text-[#17191c]">
                    Transformación Jacobiana
                  </h4>
                </div>
                <div className="p-4 rounded-2xl bg-[#fafafb] border border-[#f2f2f3]">
                  <p className="font-mono text-[15px] text-[#17191c] mb-2">
                    ∬_R f(x,y) dx dy = ∬_S f(x(u,v), y(u,v)) |J(u,v)| du dv
                  </p>
                  <p className="text-[13px] text-[#777b86] font-sohne">
                    Escalar de cambio de área para polares (r), cilíndricas (r) y esféricas (ρ² sin φ).
                  </p>
                </div>
              </div>
            </div>
          </Tabs.Content>

          {/* Tab 4 */}
          <Tabs.Content value="u4" className="outline-none focus:outline-none">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="neutral-card">
                <span className="text-[#979799] text-[14px] font-sohne block mb-2">
                  Unidad IV · Análisis Vectorial
                </span>
                <h3 className="text-[26px] font-sohne font-normal text-[#17191c] tracking-[-0.23px] mb-3">
                  Campos Vectoriales, Divergencia y Rotores
                </h3>
                <p className="text-[16px] text-[#17191c] leading-relaxed mb-6 font-sohne">
                  Teorema de Green en el plano, Teorema de la Divergencia de Gauss y Teorema de Stokes para el cálculo de flujo y circulación.
                </p>
              </div>

              <div className="artifact-card space-y-4">
                <div className="flex items-center justify-between border-b border-[#f2f2f3] pb-3">
                  <h4 className="font-sohne font-medium text-[16px] text-[#17191c]">
                    Teorema Fundamental de Stokes
                  </h4>
                </div>
                <div className="p-4 rounded-2xl bg-[#fafafb] border border-[#f2f2f3]">
                  <p className="font-mono text-[15px] text-[#17191c] mb-2">
                    ∮_C F · dr = ∬_S (∇ × F) · n dS
                  </p>
                  <p className="text-[13px] text-[#777b86] font-sohne">
                    Relaciona la circulación sobre una curva cerrada C con el flujo del rotor sobre la superficie S.
                  </p>
                </div>
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>

        {/* Radix Dialog Modal */}
        {selectedFormula && (
          <Dialog.Root open={!!selectedFormula} onOpenChange={(open) => !open && setSelectedFormula(null)}>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-[#17191c]/40 backdrop-blur-sm z-50 animate-in fade-in-50" />
              <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ffffff] rounded-3xl p-8 max-w-lg w-[90%] shadow-[0_20px_40px_rgba(0,0,0,0.15)] z-50 border border-[#f2f2f3] outline-none">
                <div className="flex items-center justify-between mb-4">
                  <Dialog.Title className="font-sohne font-semibold text-[20px] text-[#17191c]">
                    {selectedFormula.title}
                  </Dialog.Title>
                  <Dialog.Close asChild>
                    <button className="w-8 h-8 rounded-full bg-[#f2f2f3] hover:bg-[#ececec] flex items-center justify-center text-[#17191c] cursor-pointer">
                      <X className="w-4 h-4" />
                    </button>
                  </Dialog.Close>
                </div>

                <div className="p-6 rounded-2xl bg-[#fbe1d1]/40 border border-[#fbe1d1] my-4">
                  <p className="text-[18px] font-mono text-[#5d2a1a] text-center font-normal">
                    {selectedFormula.latex}
                  </p>
                </div>

                <Dialog.Description className="text-[15px] text-[#777b86] font-sohne leading-relaxed mb-6">
                  {selectedFormula.desc}
                </Dialog.Description>

                <div className="flex justify-end">
                  <Dialog.Close asChild>
                    <button className="btn-pill-filled text-[14px]">Entendido</button>
                  </Dialog.Close>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        )}
      </div>
    </Tooltip.Provider>
  );
}
