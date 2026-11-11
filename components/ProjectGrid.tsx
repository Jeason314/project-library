"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { categories, projects, type Category } from "@/data/projects";

type Filter = "全部" | Category;

export default function ProjectGrid() {
  const [active, setActive] = useState<Filter>("全部");

  const counts = useMemo(() => {
    const map: Record<string, number> = { 全部: projects.length };
    for (const p of projects) map[p.category] = (map[p.category] ?? 0) + 1;
    return map;
  }, []);

  const list = useMemo(
    () => (active === "全部" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <>
      <div className="filters" role="tablist" aria-label="项目分类">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={active === c}
            className={`chip${active === c ? " active" : ""}`}
            onClick={() => setActive(c)}
          >
            {c}
            <em>{counts[c] ?? 0}</em>
          </button>
        ))}
      </div>

      <div className="project-grid">
        {list.map((p, i) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className={`project-card${active === "全部" && i === 0 ? " featured" : ""}`}
            style={{ animationDelay: `${i * 55}ms` }}
          >
            <div className="card-media">
              <span className="card-cat">{p.category}</span>
              <img src={p.cover} alt={`${p.title} 项目视觉`} loading="lazy" />
            </div>
            <div className="card-body">
              <div className="card-topline">
                <h3>
                  {p.title}
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M4 12L12 4M12 4H5.5M12 4v6.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </h3>
                {p.year ? <span className="card-year">{p.year}</span> : null}
              </div>
              <p className="card-sub">{p.subtitle}</p>
              <div className="card-tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
