"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: "petal" | "gold";
  swing: number;
  swingSpeed: number;
}

export default function LotusParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Device performance adaptability: reduce count on mobile
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 18 : 45;

    // Create Offscreen Canvases to cache graphics and prevent recalculating gradients and bezier paths on every frame
    const petalCache = document.createElement("canvas");
    petalCache.width = 40;
    petalCache.height = 40;
    const pCtx = petalCache.getContext("2d");
    if (pCtx) {
      pCtx.translate(20, 20);
      pCtx.beginPath();
      pCtx.moveTo(0, -16);
      pCtx.quadraticCurveTo(12, -3, 0, 16);
      pCtx.quadraticCurveTo(-12, -3, 0, -16);
      
      const grad = pCtx.createLinearGradient(0, -16, 0, 16);
      grad.addColorStop(0, "rgba(240, 190, 185, 1)");
      grad.addColorStop(1, "rgba(217, 168, 160, 0.85)");
      pCtx.fillStyle = grad;
      pCtx.fill();
      
      pCtx.strokeStyle = "rgba(200, 164, 93, 0.4)";
      pCtx.lineWidth = 0.75;
      pCtx.stroke();
    }

    const goldCache = document.createElement("canvas");
    goldCache.width = 20;
    goldCache.height = 20;
    const gCtx = goldCache.getContext("2d");
    if (gCtx) {
      const grad = gCtx.createRadialGradient(10, 10, 0, 10, 10, 10);
      grad.addColorStop(0, "rgba(232, 211, 167, 1)");
      grad.addColorStop(0.3, "rgba(200, 164, 93, 0.8)");
      grad.addColorStop(1, "rgba(200, 164, 93, 0)");
      gCtx.fillStyle = grad;
      gCtx.beginPath();
      gCtx.arc(10, 10, 10, 0, Math.PI * 2);
      gCtx.fill();
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(true));
    }

    function createParticle(randomY = false): Particle {
      const w = canvas?.width || window.innerWidth;
      const h = canvas?.height || window.innerHeight;
      const type = Math.random() > 0.45 ? "gold" : "petal";
      
      return {
        x: Math.random() * w,
        y: randomY ? Math.random() * h : -25,
        size: type === "petal" ? Math.random() * 8 + 6 : Math.random() * 2 + 1,
        speedY: type === "petal" ? Math.random() * 0.7 + 0.4 : Math.random() * 0.4 + 0.2,
        speedX: Math.random() * 0.3 - 0.15,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() * 0.02 - 0.01) * 0.5,
        opacity: Math.random() * 0.5 + 0.35,
        type,
        swing: Math.random() * Math.PI * 2,
        swingSpeed: Math.random() * 0.008 + 0.004,
      };
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;

        ctx.save();
        ctx.globalAlpha = p.opacity;

        if (p.type === "petal") {
          p.swing += p.swingSpeed;
          p.x += p.speedX + Math.sin(p.swing) * 0.25;
          p.rotation += p.rotationSpeed;
          
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          // Draw pre-rendered cached petal
          ctx.drawImage(petalCache, -p.size, -p.size, p.size * 2, p.size * 2);
        } else {
          p.x += p.speedX + Math.cos(p.y * 0.008) * 0.08;
          // Draw pre-rendered cached spark (which is 20x20 in size, so size controls scaling)
          const renderSize = p.size * 2.5;
          ctx.drawImage(goldCache, p.x - renderSize, p.y - renderSize, renderSize * 2, renderSize * 2);
        }
        
        ctx.restore();

        // Recycle out of screen particles
        if (p.y > canvas.height + 25 || p.x < -25 || p.x > canvas.width + 25) {
          particles[i] = createParticle(false);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: "multiply" }}
    />
  );
}
