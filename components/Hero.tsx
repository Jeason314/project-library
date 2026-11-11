"use client";

import { useRef, type PointerEvent } from "react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const fields = new Set(projects.map((p) => p.category)).size;

  return (
    <section className="hero" ref={ref} onPointerMove={onMove}>
      <div className="hero-bg" aria-hidden="true">
        <div className="blob blob-a" />
        <div className="blob blob-b" />
        <div className="blob blob-c" />
      </div>
      <div className="spotlight" aria-hidden="true" />

      <div className="hero-content">
        <span className="hero-badge">
          <i className="dot" />
          持续更新中 · {projects.length} 个项目
        </span>

        <h1>
          <span className="line">把做过的事，</span>
          <span className="line gradient-text">做成作品。</span>
        </h1>

        <p className="hero-sub">
          {site.name} 的项目资源库 —— 数据、运营、AI 与一些不务正业的实验。
          每一个都尽量把想法推到「能用、能看、能讲清楚」的程度。
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            浏览项目
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#about" className="btn btn-ghost">
            关于我
          </a>
        </div>

        <div className="hero-meta">
          <div>
            <b>{projects.length}</b>
            <span>项目收录</span>
          </div>
          <div>
            <b>{fields}</b>
            <span>覆盖领域</span>
          </div>
          <div>
            <b>端到端</b>
            <span>数据 → 决策</span>
          </div>
          <div>
            <b>{site.location.split(" · ")[0]}</b>
            <span>常驻城市</span>
          </div>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <i />
      </div>
    </section>
  );
}
