import { useState, useEffect, useRef } from 'react';
import { Sparkles, ChevronDown, Calendar, Pause, Play } from 'lucide-react';
import type { Language } from './i18n';
import {
  SEASON_THEMES,
  SEASON_PICKER_UI,
  getSeasonTheme,
  type ParticleEffectKind,
  type SeasonSelection,
  type SeasonThemeDefinition,
  type SeasonThemeId
} from './seasonalTheme';
import { BURST_EVENT } from './useSeasonalTheme';
import './SeasonalExperience.css';

/* ============================================================================
 * Canvas 2D Ambient & Interactive Seasonal Sky Renderer
 * ========================================================================== */

interface SkyParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  vRot: number;
  flip: number;
  vFlip: number;
  phase: number;
  color: string;
  alpha: number;
  variant: number;
  burst: boolean;
  life: number;
  maxLife: number;
}

function createAmbientParticle(
  width: number,
  height: number,
  effect: ParticleEffectKind,
  colors: readonly string[],
  randomY = false
): SkyParticle {
  const color = colors[Math.floor(Math.random() * colors.length)] ?? '#f59e0b';
  const rising = effect === 'lanterns' || effect === 'diyas' || effect === 'fireflies' || effect === 'hearts';
  const isFirework = effect === 'fireworks';

  let size = 9 + Math.random() * 8;
  let vy = 0.55 + Math.random() * 0.85;
  let vx = (Math.random() - 0.5) * 0.6;

  if (effect === 'lanterns') {
    size = 11 + Math.random() * 9;
    vy = -(0.4 + Math.random() * 0.55);
    vx = (Math.random() - 0.5) * 0.35;
  } else if (effect === 'diyas') {
    size = 10 + Math.random() * 7;
    vy = -(0.3 + Math.random() * 0.45);
    vx = (Math.random() - 0.5) * 0.3;
  } else if (effect === 'fireflies') {
    size = 4 + Math.random() * 5;
    vy = -(0.18 + Math.random() * 0.35);
    vx = (Math.random() - 0.5) * 0.45;
  } else if (effect === 'hearts') {
    size = 8 + Math.random() * 7;
    vy = -(0.45 + Math.random() * 0.55);
    vx = (Math.random() - 0.5) * 0.4;
  } else if (effect === 'holi-colors') {
    size = 12 + Math.random() * 16;
    vy = 0.3 + Math.random() * 0.55;
    vx = (Math.random() - 0.5) * 0.7;
  } else if (effect === 'snow' || effect === 'christmas-snow') {
    size = 5 + Math.random() * 7;
    vy = 0.45 + Math.random() * 0.75;
    vx = (Math.random() - 0.5) * 0.45;
  } else if (effect === 'leaves') {
    size = 9 + Math.random() * 8;
    vy = 0.65 + Math.random() * 0.9;
    vx = 0.25 + Math.random() * 0.65;
  } else if (effect === 'sakura' || effect === 'blossoms') {
    size = 7 + Math.random() * 6;
    vy = 0.5 + Math.random() * 0.7;
    vx = 0.2 + Math.random() * 0.55;
  } else if (isFirework) {
    size = 4 + Math.random() * 4;
    vy = -(0.35 + Math.random() * 0.6);
    vx = (Math.random() - 0.5) * 0.5;
  }

  const startY = randomY
    ? Math.random() * height
    : rising || isFirework
      ? height + 24 + Math.random() * 40
      : -24 - Math.random() * 40;

  return {
    x: Math.random() * width,
    y: startY,
    vx,
    vy,
    size,
    rotation: Math.random() * Math.PI * 2,
    vRot: (Math.random() - 0.5) * 0.028,
    flip: Math.random() * Math.PI * 2,
    vFlip: 0.02 + Math.random() * 0.03,
    phase: Math.random() * Math.PI * 2,
    color,
    alpha: effect === 'holi-colors' ? 0.26 + Math.random() * 0.24 : 0.48 + Math.random() * 0.36,
    variant: Math.floor(Math.random() * 3),
    burst: false,
    life: 0,
    maxLife: 0
  };
}

function createBurstParticle(
  x: number,
  y: number,
  effect: ParticleEffectKind,
  colors: readonly string[]
): SkyParticle {
  const angle = Math.random() * Math.PI * 2;
  const speed = 1.8 + Math.random() * 4.8;
  const color = colors[Math.floor(Math.random() * colors.length)] ?? '#fbbf24';
  return {
    x,
    y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed - 1.4,
    size: effect === 'holi-colors' ? 14 + Math.random() * 18 : 8 + Math.random() * 8,
    rotation: Math.random() * Math.PI * 2,
    vRot: (Math.random() - 0.5) * 0.09,
    flip: Math.random() * Math.PI * 2,
    vFlip: 0.05 + Math.random() * 0.06,
    phase: Math.random() * Math.PI * 2,
    color,
    alpha: 0.92,
    variant: Math.floor(Math.random() * 3),
    burst: true,
    life: 0,
    maxLife: 65 + Math.floor(Math.random() * 45)
  };
}

function drawMapleOrOakLeaf(ctx: CanvasRenderingContext2D, s: number, color: string, variant: number) {
  ctx.fillStyle = color;
  ctx.beginPath();
  if (variant === 0) {
    // Stylized maple leaf silhouette
    ctx.moveTo(0, -s);
    ctx.lineTo(s * 0.28, -s * 0.42);
    ctx.lineTo(s * 0.88, -s * 0.52);
    ctx.lineTo(s * 0.48, -s * 0.05);
    ctx.lineTo(s * 0.78, s * 0.36);
    ctx.lineTo(s * 0.2, s * 0.32);
    ctx.lineTo(0, s * 0.72);
    ctx.lineTo(-s * 0.2, s * 0.32);
    ctx.lineTo(-s * 0.78, s * 0.36);
    ctx.lineTo(-s * 0.48, -s * 0.05);
    ctx.lineTo(-s * 0.88, -s * 0.52);
    ctx.lineTo(-s * 0.28, -s * 0.42);
    ctx.closePath();
  } else {
    // Warm autumn birch/oak leaf
    ctx.moveTo(0, -s);
    ctx.bezierCurveTo(s * 0.75, -s * 0.55, s * 0.75, s * 0.45, 0, s * 0.85);
    ctx.bezierCurveTo(-s * 0.75, s * 0.45, -s * 0.75, -s * 0.55, 0, -s);
  }
  ctx.fill();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
  ctx.lineWidth = 0.8;
  ctx.beginPath();
  ctx.moveTo(0, -s * 0.75);
  ctx.lineTo(0, s * 0.95);
  ctx.stroke();
}

function drawSakuraPetal(ctx: CanvasRenderingContext2D, s: number, color: string) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, s * 0.8);
  ctx.bezierCurveTo(-s * 0.85, s * 0.25, -s * 0.75, -s * 0.75, -s * 0.18, -s * 0.85);
  ctx.lineTo(0, -s * 0.52);
  ctx.lineTo(s * 0.18, -s * 0.85);
  ctx.bezierCurveTo(s * 0.75, -s * 0.75, s * 0.85, s * 0.25, 0, s * 0.8);
  ctx.fill();
}

function drawBlossom(ctx: CanvasRenderingContext2D, s: number, color: string) {
  ctx.fillStyle = color;
  for (let i = 0; i < 5; i++) {
    ctx.save();
    ctx.rotate((i * Math.PI * 2) / 5);
    ctx.beginPath();
    ctx.ellipse(0, -s * 0.48, s * 0.3, s * 0.46, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  ctx.fillStyle = '#fef08a';
  ctx.beginPath();
  ctx.arc(0, 0, s * 0.22, 0, Math.PI * 2);
  ctx.fill();
}

function drawSnowflake(ctx: CanvasRenderingContext2D, s: number, color: string) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.35;
  ctx.lineCap = 'round';
  for (let i = 0; i < 6; i++) {
    ctx.save();
    ctx.rotate((i * Math.PI) / 3);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -s);
    ctx.moveTo(0, -s * 0.55);
    ctx.lineTo(s * 0.26, -s * 0.78);
    ctx.moveTo(0, -s * 0.55);
    ctx.lineTo(-s * 0.26, -s * 0.78);
    ctx.stroke();
    ctx.restore();
  }
}

function drawSkyLantern(ctx: CanvasRenderingContext2D, s: number, color: string, phase: number) {
  const glow = ctx.createRadialGradient(0, 0, s * 0.1, 0, 0, s * 1.5);
  glow.addColorStop(0, 'rgba(254, 240, 138, 0.55)');
  glow.addColorStop(1, 'rgba(254, 240, 138, 0)');
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(0, 0, s * 1.5, 0, Math.PI * 2);
  ctx.fill();

  // Lantern body
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.roundRect(-s * 0.58, -s * 0.72, s * 1.16, s * 1.32, s * 0.36);
  ctx.fill();

  // Inner warm core
  ctx.fillStyle = 'rgba(254, 240, 138, 0.75)';
  ctx.beginPath();
  ctx.ellipse(0, 0, s * 0.28, s * 0.42, 0, 0, Math.PI * 2);
  ctx.fill();

  // Gold caps & swaying tassel
  ctx.fillStyle = '#fbbf24';
  ctx.fillRect(-s * 0.36, -s * 0.82, s * 0.72, s * 0.14);
  ctx.fillRect(-s * 0.32, s * 0.58, s * 0.64, s * 0.14);

  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(0, s * 0.72);
  ctx.quadraticCurveTo(Math.sin(phase * 2) * s * 0.28, s * 1.05, Math.sin(phase * 2) * s * 0.38, s * 1.32);
  ctx.stroke();
}

function drawDiya(ctx: CanvasRenderingContext2D, s: number, phase: number) {
  const flicker = 0.88 + Math.sin(phase * 5) * 0.12;
  // Warm halo
  const halo = ctx.createRadialGradient(0, -s * 0.35, s * 0.08, 0, -s * 0.35, s * 1.45);
  halo.addColorStop(0, 'rgba(253, 224, 71, 0.65)');
  halo.addColorStop(0.5, 'rgba(249, 115, 22, 0.22)');
  halo.addColorStop(1, 'rgba(249, 115, 22, 0)');
  ctx.fillStyle = halo;
  ctx.beginPath();
  ctx.arc(0, -s * 0.35, s * 1.45, 0, Math.PI * 2);
  ctx.fill();

  // Flame
  ctx.fillStyle = '#f97316';
  ctx.beginPath();
  ctx.moveTo(0, -s * 0.95 * flicker);
  ctx.quadraticCurveTo(s * 0.34, -s * 0.38, 0, -s * 0.08);
  ctx.quadraticCurveTo(-s * 0.34, -s * 0.38, 0, -s * 0.95 * flicker);
  ctx.fill();

  ctx.fillStyle = '#fef08a';
  ctx.beginPath();
  ctx.moveTo(0, -s * 0.72 * flicker);
  ctx.quadraticCurveTo(s * 0.18, -s * 0.36, 0, -s * 0.12);
  ctx.quadraticCurveTo(-s * 0.18, -s * 0.36, 0, -s * 0.72 * flicker);
  ctx.fill();

  // Terracotta clay bowl with gold rim
  ctx.fillStyle = '#b45309';
  ctx.beginPath();
  ctx.arc(0, -s * 0.05, s * 0.68, 0, Math.PI);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = '#fbbf24';
  ctx.lineWidth = 1.3;
  ctx.beginPath();
  ctx.moveTo(-s * 0.68, -s * 0.05);
  ctx.lineTo(s * 0.68, -s * 0.05);
  ctx.stroke();
}

function drawHalloweenMotif(ctx: CanvasRenderingContext2D, s: number, color: string, variant: number, phase: number) {
  if (variant === 0) {
    // Flapping bat silhouette
    const wing = Math.sin(phase * 4.2) * s * 0.35;
    ctx.fillStyle = '#a855f7';
    ctx.beginPath();
    ctx.moveTo(0, -s * 0.18);
    ctx.quadraticCurveTo(s * 0.55, -s * 0.65 + wing, s * 1.05, -s * 0.05 + wing);
    ctx.quadraticCurveTo(s * 0.55, s * 0.12, 0, s * 0.25);
    ctx.quadraticCurveTo(-s * 0.55, s * 0.12, -s * 1.05, -s * 0.05 + wing);
    ctx.quadraticCurveTo(-s * 0.55, -s * 0.65 + wing, 0, -s * 0.18);
    ctx.fill();
  } else if (variant === 1) {
    // Mini glowing pumpkin
    ctx.fillStyle = '#f97316';
    ctx.beginPath();
    ctx.ellipse(0, 0, s * 0.72, s * 0.56, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#15803d';
    ctx.fillRect(-s * 0.1, -s * 0.76, s * 0.2, s * 0.24);
    ctx.fillStyle = '#fef08a';
    ctx.beginPath();
    ctx.arc(-s * 0.24, -s * 0.08, s * 0.11, 0, Math.PI * 2);
    ctx.arc(s * 0.24, -s * 0.08, s * 0.11, 0, Math.PI * 2);
    ctx.fill();
  } else {
    // Spooky glowing ember
    const g = ctx.createRadialGradient(0, 0, 0, 0, 0, s * 0.8);
    g.addColorStop(0, color);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(0, 0, s * 0.8, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawHeart(ctx: CanvasRenderingContext2D, s: number, color: string) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, s * 0.65);
  ctx.bezierCurveTo(-s * 0.95, s * 0.05, -s * 0.85, -s * 0.75, 0, -s * 0.28);
  ctx.bezierCurveTo(s * 0.85, -s * 0.75, s * 0.95, s * 0.05, 0, s * 0.65);
  ctx.fill();
}

function drawClover(ctx: CanvasRenderingContext2D, s: number, color: string) {
  ctx.fillStyle = color;
  for (let i = 0; i < 4; i++) {
    ctx.save();
    ctx.rotate((i * Math.PI) / 2);
    ctx.beginPath();
    ctx.arc(0, -s * 0.44, s * 0.34, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(s * 0.22, s * 0.65, s * 0.38, s * 0.9);
  ctx.stroke();
}

function drawPoppy(ctx: CanvasRenderingContext2D, s: number, color: string) {
  ctx.fillStyle = color;
  for (let i = 0; i < 4; i++) {
    ctx.save();
    ctx.rotate((i * Math.PI) / 2 + 0.35);
    ctx.beginPath();
    ctx.ellipse(0, -s * 0.36, s * 0.42, s * 0.36, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  ctx.fillStyle = '#1e1b4b';
  ctx.beginPath();
  ctx.arc(0, 0, s * 0.22, 0, Math.PI * 2);
  ctx.fill();
}

function drawStarSparkle(ctx: CanvasRenderingContext2D, s: number, color: string) {
  ctx.fillStyle = color;
  ctx.beginPath();
  for (let i = 0; i < 8; i++) {
    const r = i % 2 === 0 ? s : s * 0.32;
    const a = (i * Math.PI) / 4;
    if (i === 0) ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r);
    else ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  ctx.closePath();
  ctx.fill();
}

function drawParticle(ctx: CanvasRenderingContext2D, p: SkyParticle, effect: ParticleEffectKind) {
  ctx.save();
  ctx.translate(p.x, p.y);
  ctx.globalAlpha = Math.max(0, Math.min(1, p.alpha));

  switch (effect) {
    case 'leaves':
      ctx.rotate(p.rotation);
      ctx.scale(Math.max(0.25, Math.abs(Math.cos(p.flip))), 1);
      drawMapleOrOakLeaf(ctx, p.size, p.color, p.variant);
      break;
    case 'sakura':
      ctx.rotate(p.rotation);
      ctx.scale(Math.max(0.35, Math.abs(Math.cos(p.flip))), 1);
      drawSakuraPetal(ctx, p.size, p.color);
      break;
    case 'blossoms':
      ctx.rotate(p.rotation);
      drawBlossom(ctx, p.size, p.color);
      break;
    case 'snow':
      ctx.rotate(p.rotation);
      drawSnowflake(ctx, p.size, p.color);
      break;
    case 'christmas-snow':
      if (p.variant === 0) {
        const twinkle = 0.65 + Math.sin(p.phase * 3) * 0.35;
        ctx.globalAlpha *= twinkle;
        drawStarSparkle(ctx, p.size * 0.9, p.color);
      } else {
        ctx.rotate(p.rotation);
        drawSnowflake(ctx, p.size, '#f8fafc');
      }
      break;
    case 'lanterns':
      ctx.rotate(Math.sin(p.phase) * 0.08);
      drawSkyLantern(ctx, p.size, p.color, p.phase);
      break;
    case 'diyas':
      drawDiya(ctx, p.size, p.phase);
      break;
    case 'holi-colors': {
      const grad = ctx.createRadialGradient(0, 0, p.size * 0.08, 0, 0, p.size);
      grad.addColorStop(0, p.color);
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, p.size, 0, Math.PI * 2);
      ctx.fill();
      break;
    }
    case 'fireflies': {
      const pulse = 0.45 + 0.55 * Math.abs(Math.sin(p.phase * 1.8));
      ctx.globalAlpha *= pulse;
      const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 2.2);
      glow.addColorStop(0, p.color);
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(0, 0, p.size * 2.2, 0, Math.PI * 2);
      ctx.fill();
      break;
    }
    case 'halloween':
      drawHalloweenMotif(ctx, p.size, p.color, p.variant, p.phase);
      break;
    case 'hearts':
      ctx.rotate(Math.sin(p.phase) * 0.2);
      drawHeart(ctx, p.size, p.color);
      break;
    case 'clovers':
      ctx.rotate(p.rotation);
      drawClover(ctx, p.size, p.color);
      break;
    case 'poppies':
      ctx.rotate(p.rotation);
      drawPoppy(ctx, p.size, p.color);
      break;
    case 'fireworks':
    case 'stars':
    default: {
      const twinkle = 0.55 + 0.45 * Math.abs(Math.sin(p.phase * 2.4));
      ctx.globalAlpha *= twinkle;
      ctx.rotate(p.rotation * 0.4);
      drawStarSparkle(ctx, p.size * 1.1, p.color);
      break;
    }
  }

  ctx.restore();
}

export function SeasonalSkyCanvas({
  theme,
  motionEnabled
}: {
  theme: SeasonThemeDefinition;
  motionEnabled: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !motionEnabled) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const ambientCount = width < 768 ? 16 : 26;
    const particles: SkyParticle[] = Array.from({ length: ambientCount }, () =>
      createAmbientParticle(width, height, theme.effect, theme.particleColors, true)
    );

    const onBurst = (event: Event) => {
      const detail = (event as CustomEvent<{ x?: number; y?: number }>).detail;
      const bx = detail?.x ?? width * 0.5;
      const by = detail?.y ?? height * 0.35;
      for (let i = 0; i < 28; i++) {
        particles.push(createBurstParticle(bx, by, theme.effect, theme.particleColors));
      }
    };

    // Clicking empty background space gives readers a gentle interactive splash of the active theme!
    const onWindowClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      if (target.closest('a, button, input, textarea, select, [role="dialog"], .season-popover')) return;
      for (let i = 0; i < 10; i++) {
        particles.push(createBurstParticle(event.clientX, event.clientY, theme.effect, theme.particleColors));
      }
    };

    window.addEventListener('resize', resize);
    window.addEventListener(BURST_EVENT, onBurst);
    window.addEventListener('click', onWindowClick);

    let rafId = 0;
    let fireworkTick = 0;

    const tick = () => {
      if (document.visibilityState === 'hidden') {
        rafId = window.requestAnimationFrame(tick);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Periodic soft firework bloom during firework holidays
      if (theme.effect === 'fireworks') {
        fireworkTick += 1;
        if (fireworkTick % 150 === 40 && particles.length < 90) {
          const fx = width * (0.18 + Math.random() * 0.64);
          const fy = height * (0.14 + Math.random() * 0.36);
          for (let i = 0; i < 16; i++) {
            particles.push(createBurstParticle(fx, fy, theme.effect, theme.particleColors));
          }
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.phase += 0.025;
        p.rotation += p.vRot;
        p.flip += p.vFlip;

        if (p.burst) {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.055; // gentle gravity
          p.vx *= 0.985;
          p.life += 1;
          p.alpha = Math.max(0, 1 - p.life / p.maxLife);
          if (p.life >= p.maxLife) {
            particles.splice(i, 1);
            continue;
          }
        } else {
          p.x += p.vx + Math.sin(p.phase) * 0.35;
          p.y += p.vy;

          const margin = 48;
          const rising =
            theme.effect === 'lanterns' ||
            theme.effect === 'diyas' ||
            theme.effect === 'fireflies' ||
            theme.effect === 'hearts' ||
            theme.effect === 'fireworks';

          if (!rising && p.y > height + margin) {
            Object.assign(p, createAmbientParticle(width, height, theme.effect, theme.particleColors, false));
          } else if (rising && p.y < -margin) {
            Object.assign(p, createAmbientParticle(width, height, theme.effect, theme.particleColors, false));
          }
          if (p.x > width + margin) p.x = -margin;
          if (p.x < -margin) p.x = width + margin;
        }

        drawParticle(ctx, p, theme.effect);
      }

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener(BURST_EVENT, onBurst);
      window.removeEventListener('click', onWindowClick);
    };
  }, [theme, motionEnabled]);

  if (!motionEnabled) return null;
  return <canvas ref={canvasRef} className="seasonal-sky-canvas no-print" aria-hidden="true" />;
}

/* ============================================================================
 * Interactive Season & Holiday Switcher Popover (Navbar)
 * ========================================================================== */

export function SeasonalThemePicker({
  lang = 'en',
  selection,
  activeTheme,
  calendarThemeId,
  motionEnabled,
  onSelect,
  onToggleMotion,
  onCelebrate
}: {
  lang?: Language;
  selection: SeasonSelection;
  activeTheme: SeasonThemeDefinition;
  calendarThemeId: SeasonThemeId;
  motionEnabled: boolean;
  onSelect: (next: SeasonSelection, source?: string) => void;
  onToggleMotion: (enabled: boolean) => void;
  onCelebrate: (x?: number, y?: number) => void;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const ui = SEASON_PICKER_UI[lang];
  const activeCopy = activeTheme.copy[lang];
  const calendarTheme = getSeasonTheme(calendarThemeId);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const seasons = SEASON_THEMES.filter((item) => item.category === 'season');
  const holidays = SEASON_THEMES.filter((item) => item.category === 'holiday');

  return (
    <div className="season-picker-wrap no-print" ref={wrapRef}>
      <button
        type="button"
        className={`season-trigger-btn ${open ? 'open' : ''}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={ui.buttonAria}
        title={`${activeCopy.name} (${ui.buttonAria})`}
      >
        <span className="season-trigger-emoji" aria-hidden="true">
          {activeTheme.emoji}
        </span>
        <span className="season-trigger-label">{activeCopy.shortLabel}</span>
        <ChevronDown size={13} className={`season-trigger-caret ${open ? 'rotated' : ''}`} />
      </button>

      {open && (
        <div className="season-popover" role="dialog" aria-label={ui.buttonAria}>
          <button
            type="button"
            className={`season-auto-card ${selection === 'auto' ? 'active' : ''}`}
            onClick={() => {
              onSelect('auto', 'navbar_popover');
              setOpen(false);
            }}
          >
            <div className="season-auto-left">
              <Calendar size={16} className="season-auto-icon" />
              <div>
                <div className="season-auto-title">
                  {ui.autoLabel}{' '}
                  <span className="season-auto-now">
                    {calendarTheme.emoji} {calendarTheme.copy[lang].shortLabel}
                  </span>
                </div>
                <div className="season-auto-sub">{ui.autoSub}</div>
              </div>
            </div>
          </button>

          <div className="season-group-heading">{ui.seasonsGroup}</div>
          <div className="season-grid-four">
            {seasons.map((item) => {
              const isSelected = selection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`season-option-chip ${isSelected ? 'active' : ''}`}
                  onClick={() => {
                    onSelect(item.id, 'navbar_popover');
                  }}
                >
                  <span className="season-chip-emoji" aria-hidden="true">
                    {item.emoji}
                  </span>
                  <span className="season-chip-text">{item.copy[lang].shortLabel}</span>
                </button>
              );
            })}
          </div>

          <div className="season-group-heading">{ui.holidaysGroup}</div>
          <div className="season-holidays-scroll">
            {holidays.map((item) => {
              const isSelected = selection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`season-holiday-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => {
                    onSelect(item.id, 'navbar_popover');
                  }}
                >
                  <span className="season-holiday-emoji" aria-hidden="true">
                    {item.emoji}
                  </span>
                  <span className="season-holiday-meta">
                    <span className="season-holiday-name">{item.copy[lang].shortLabel}</span>
                    <span className="season-holiday-date">{item.copy[lang].dateHint}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="season-popover-footer">
            <button
              type="button"
              className="season-motion-btn"
              onClick={() => onToggleMotion(!motionEnabled)}
              aria-pressed={motionEnabled}
            >
              {motionEnabled ? <Pause size={13} /> : <Play size={13} />}
              <span>
                {ui.effectsLabel}: <strong>{motionEnabled ? ui.effectsOn : ui.effectsOff}</strong>
              </span>
            </button>
            <button
              type="button"
              className="season-celebrate-btn"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                onCelebrate(rect.left + rect.width / 2, rect.top);
              }}
            >
              <Sparkles size={13} /> {ui.celebrateBtn}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ============================================================================
 * Interactive Hero Festive Greeting Ribbon
 * ========================================================================== */

export function SeasonalGreetingRibbon({
  lang = 'en',
  selection,
  activeTheme,
  onCelebrate,
  onCycleNext
}: {
  lang?: Language;
  selection: SeasonSelection;
  activeTheme: SeasonThemeDefinition;
  onCelebrate: (x?: number, y?: number) => void;
  onCycleNext: () => void;
}) {
  const ui = SEASON_PICKER_UI[lang];
  const copy = activeTheme.copy[lang];

  return (
    <div className="seasonal-greeting-ribbon no-print">
      <span className="seasonal-ribbon-badge">
        <span aria-hidden="true">{activeTheme.emoji}</span>
        {selection === 'auto' ? ui.liveTodayBadge : ui.previewingBadge}
      </span>
      <span className="seasonal-ribbon-message">{copy.greeting}</span>
      <div className="seasonal-ribbon-actions">
        <button
          type="button"
          className="seasonal-ribbon-celebrate"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            onCelebrate(rect.left + rect.width / 2, rect.top + rect.height / 2);
          }}
        >
          <Sparkles size={13} /> {ui.celebrateBtn}
        </button>
        <button
          type="button"
          className="seasonal-ribbon-next"
          onClick={onCycleNext}
          title={ui.buttonAria}
        >
          ↻
        </button>
      </div>
    </div>
  );
}
