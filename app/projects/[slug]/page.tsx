import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "项目未找到" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="case">
      <div className="container">
        <div className="case-top">
          <Link href="/#projects" className="case-back">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M13 8H3M7 4L3 8l4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            返回项目库
          </Link>

          <div className="eyebrow">
            {project.category}
            {project.year ? ` · ${project.year}` : ""}
          </div>
          <h1>{project.title}</h1>
          <p className="case-sub">{project.subtitle}</p>

          <div className="case-meta">
            <div>
              <span>角色</span>
              <b>{project.role}</b>
            </div>
            <div>
              <span>类型</span>
              <b>{project.category}</b>
            </div>
            <div>
              <span>状态</span>
              <b>{project.status}</b>
            </div>
            {project.year && (
              <div>
                <span>年份</span>
                <b>{project.year}</b>
              </div>
            )}
          </div>
        </div>

        <div className="case-cover">
          <img src={project.cover} alt={`${project.title} 项目视觉`} />
        </div>

        <div className="case-body">
          <p className="case-summary">{project.summary}</p>

          <div className="highlights">
            {project.highlights.map((h) => (
              <div className="highlight" key={h.label}>
                <b>{h.value}</b>
                <span>{h.label}</span>
              </div>
            ))}
          </div>

          {project.story.map((s) => (
            <section key={s.title}>
              <h2>{s.title}</h2>
              <p>{s.body}</p>
            </section>
          ))}

          <div className="case-stack">
            <h3>使用到的技术</h3>
            <div className="stack-list">
              {project.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>

          {project.links && project.links.length > 0 && (
            <div className="hero-actions" style={{ justifyContent: "flex-start" }}>
              {project.links.map((l) => (
                <a
                  key={l.href}
                  className="btn btn-ghost"
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <Link href={`/projects/${next.slug}`} className="next-project">
          <div>
            <span>下一个项目</span>
            <strong>{next.title}</strong>
          </div>
          <div className="next-arrow" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      </div>
    </article>
  );
}
