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

    // Initialize particles
    const particleCount = 45;
    for (let i = 0; i < particleCount; i++) {
      particles.push(createParticle(true));
    }

    function createParticle(randomY = false): Particle {
      const w = canvas?.width || window.innerWidth;
      const h = canvas?.height || window.innerHeight;
      const type = Math.random() > 0.4 ? "gold" : "petal";
      
      return {
        x: Math.random() * w,
        y: randomY ? Math.random() * h : -20,
        size: type === "petal" ? Math.random() * 8 + 6 : Math.random() * 2 + 1,
        speedY: type === "petal" ? Math.random() * 0.8 + 0.4 : Math.random() * 0.5 + 0.2,
        speedX: Math.random() * 0.4 - 0.2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() * 0.02 - 0.01) * 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        type,
        swing: Math.random() * Math.PI * 2,
        swingSpeed: Math.random() * 0.01 + 0.005,
      };
    }

    function drawPetal(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number, opacity: number) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      
      // Draw stylized lotus petal shape using bezier curves
      ctx.moveTo(0, -size);
      ctx.quadraticCurveTo(size * 0.7, -size * 0.2, 0, size);
      ctx.quadraticCurveTo(-size * 0.7, -size * 0.2, 0, -size);
      
      // Soft Rose color gradient
      const gradient = ctx.createLinearGradient(0, -size, 0, size);
      gradient.addColorStop(0, `rgba(240, 190, 185, ${opacity})`);
      gradient.addColorStop(1, `rgba(217, 168, 160, ${opacity * 0.8})`);
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Fine gold border outline for premium feel
      ctx.strokeStyle = `rgba(200, 164, 93, ${opacity * 0.3})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
      
      ctx.restore();
    }

    function drawGoldSpark(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      
      // Gold glowing aura
      const radialGrad = ctx.createRadialGradient(x, y, 0, x, y, size * 2.5);
      radialGrad.addColorStop(0, `rgba(232, 211, 167, ${opacity})`);
      radialGrad.addColorStop(0.3, `rgba(200, 164, 93, ${opacity * 0.8})`);
      radialGrad.addColorStop(1, `rgba(200, 164, 93, 0)`);
      
      ctx.fillStyle = radialGrad;
      ctx.fill();
      ctx.restore();
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, idx) => {
        // Move particle
        p.y += p.speedY;
        
        if (p.type === "petal") {
          p.swing += p.swingSpeed;
          p.x += p.speedX + Math.sin(p.swing) * 0.3;
          p.rotation += p.rotationSpeed;
          drawPetal(ctx, p.x, p.y, p.size, p.rotation, p.opacity);
        } else {
          p.x += p.speedX + Math.cos(p.y * 0.01) * 0.1;
          drawGoldSpark(ctx, p.x, p.y, p.size, p.opacity);
        }

        // Recycle particles when they go out of screen
        if (p.y > canvas.height + 20 || p.x < -20 || p.x > canvas.width + 20) {
          particles[idx] = createParticle(false);
        }
      });

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
