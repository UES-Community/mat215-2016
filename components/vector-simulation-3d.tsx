"use client";

import React, { useEffect, useState, useRef } from "react";
import { Box, Layers } from "lucide-react";

export function VectorSimulation3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [wireframe, setWireframe] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Three.js interactive canvas simulation setup
  useEffect(() => {
    if (!isClient || !containerRef.current) return;

    let THREE: typeof import("three");
    let animationFrameId: number;

    import("three").then((threeModule) => {
      THREE = threeModule;
      const container = containerRef.current;
      if (!container) return;

      container.innerHTML = "";

      const width = container.clientWidth || 400;
      const height = container.clientHeight || 260;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color("#fafafb");

      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      camera.position.set(5, 5, 7);
      camera.lookAt(0, 0, 0);

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      // Grid helper
      const gridHelper = new THREE.GridHelper(8, 16, "#5d2a1a", "#e2e2e4");
      scene.add(gridHelper);

      // Axes helper
      const axesHelper = new THREE.AxesHelper(3);
      scene.add(axesHelper);

      // 3D Surface geometry: z = sin(sqrt(x^2 + y^2))
      const planeGeo = new THREE.PlaneGeometry(6, 6, 30, 30);
      const posAttr = planeGeo.attributes.position;
      for (let i = 0; i < posAttr.count; i++) {
        const x = posAttr.getX(i);
        const y = posAttr.getY(i);
        const z = Math.sin(Math.sqrt(x * x + y * y));
        posAttr.setZ(i, z * 0.8);
      }
      planeGeo.computeVertexNormals();

      const material = new THREE.MeshNormalMaterial({
        wireframe: wireframe,
        side: THREE.DoubleSide,
      });

      const mesh = new THREE.Mesh(planeGeo, material);
      mesh.rotation.x = -Math.PI / 2;
      scene.add(mesh);

      // Vector arrows (Gradient field / R3 vectors)
      const dirX = new THREE.Vector3(1, 1, 0.5).normalize();
      const originX = new THREE.Vector3(0, 0, 0);
      const arrowX = new THREE.ArrowHelper(dirX, originX, 2, 0x17191c, 0.4, 0.2);
      scene.add(arrowX);

      const dirY = new THREE.Vector3(-1, 0.8, 1).normalize();
      const arrowY = new THREE.ArrowHelper(dirY, originX, 2.2, 0x5d2a1a, 0.4, 0.2);
      scene.add(arrowY);

      // Ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

      // Render loop
      let angle = 0;
      const animate = () => {
        angle += 0.008;
        mesh.rotation.z = angle * 0.5;
        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();
    });

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isClient, wireframe]);

  return (
    <div className="artifact-card w-full max-w-xl">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#f2f2f3]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#fbe1d1] flex items-center justify-center text-[#5d2a1a]">
            <Box className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-sohne font-medium text-[16px] text-[#17191c]">
              Simulación Vectorial 3D (Three.js)
            </h3>
            <p className="text-[13px] text-[#777b86]">Superficie z = sin(√(x² + y²)) y vectores en R³</p>
          </div>
        </div>
        <button
          onClick={() => setWireframe(!wireframe)}
          className="flex items-center gap-1 text-[12px] font-sohne px-3 py-1.5 rounded-full bg-[#f2f2f3] hover:bg-[#ececec] text-[#17191c] transition-colors cursor-pointer"
        >
          <Layers className="w-3.5 h-3.5" />
          {wireframe ? "Sólido" : "Malla (Wireframe)"}
        </button>
      </div>

      {/* 3D Canvas container */}
      <div
        ref={containerRef}
        className="w-full h-64 bg-[#fafafb] rounded-2xl border border-[#f2f2f3] overflow-hidden flex items-center justify-center relative"
      >
        {!isClient && (
          <div className="text-[13px] text-[#777b86] font-sohne">Cargando motor 3D...</div>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between text-[12px] text-[#777b86] font-sohne">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[#17191c] inline-block"></span> Vector v₁
          <span className="w-2 h-2 rounded-full bg-[#5d2a1a] inline-block ml-2"></span> Gradient Vector ∇f
        </span>
        <span className="text-[11px] font-mono text-[#979799]">Rotación interactiva a 60 FPS</span>
      </div>
    </div>
  );
}
