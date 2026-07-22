"use client";

import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { BookOpen, Calculator, Sparkles, ChevronDown, Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#ffffff]/90 backdrop-blur-md transition-all border-b border-[#f2f2f3]">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#17191c] text-[#ffffff] flex items-center justify-center font-bold text-sm">
            M2
          </div>
          <div>
            <span className="font-signifier text-xl text-[#17191c] tracking-tight block leading-none">
              Matemática II
            </span>
            <span className="text-[12px] text-[#777b86] font-sohne font-medium tracking-wider uppercase">
              MAT215 · UES
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-sohne text-[#17191c]">
          <a href="#inicio" className="hover:text-[#777b86] transition-colors">
            Inicio
          </a>
          <a href="#unidades" className="hover:text-[#777b86] transition-colors">
            Unidades
          </a>

          {/* Radix UI Dropdown Menu */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="flex items-center gap-1 hover:text-[#777b86] transition-colors outline-none cursor-pointer">
              <span>Herramientas</span>
              <ChevronDown className="w-4 h-4 text-[#777b86]" />
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="min-w-[200px] bg-[#ffffff] rounded-2xl p-2 shadow-[0_4px_24px_rgba(0,0,0,0.08)] border border-[#f2f2f3] z-50 text-[14px] font-sohne animate-in fade-in-80"
                sideOffset={8}
              >
                <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 rounded-xl text-[#17191c] hover:bg-[#f2f2f3] outline-none cursor-pointer">
                  <Calculator className="w-4 h-4 text-[#5d2a1a]" />
                  <a href="#calculadora" className="w-full">Calculadora Simbólica</a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 rounded-xl text-[#17191c] hover:bg-[#f2f2f3] outline-none cursor-pointer">
                  <BookOpen className="w-4 h-4 text-[#5d2a1a]" />
                  <a href="#graficador" className="w-full">Graficador 2D</a>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 rounded-xl text-[#17191c] hover:bg-[#f2f2f3] outline-none cursor-pointer">
                  <Sparkles className="w-4 h-4 text-[#5d2a1a]" />
                  <a href="#simulador" className="w-full">Simulador Vectorial 3D</a>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          <a href="#recursos" className="hover:text-[#777b86] transition-colors">
            Recursos
          </a>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="#calculadora"
            className="hidden sm:inline-flex text-[#17191c] hover:underline text-[15px] font-sohne px-2 py-1"
          >
            Explorar Fórmulas →
          </a>
          <a href="#simulador" className="btn-pill-filled text-[15px]">
            Iniciar Simulación
          </a>
        </div>
      </div>
    </header>
  );
}
