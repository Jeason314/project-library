import About from "@/components/About";
import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Reveal from "@/components/Reveal";
import { toolbelt } from "@/data/site";

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="marquee" aria-label="常用工具">
        <div className="marquee-track">
          {[0, 1].map((group) => (
            <div className="marquee-group" key={group} aria-hidden={group === 1}>
              {toolbelt.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section id="projects" className="section">
        <div className="container">
          <div className="section-head">
            <Reveal>
              <div className="eyebrow">Selected Work</div>
              <h2 className="section-title">项目资源库</h2>
            </Reveal>
            <Reveal delay={90}>
              <p>
                每个项目都尽量讲清楚三件事：为什么做、怎么做的、最后改变了什么。
                点开任意一张卡片，可以看到完整的复盘。
              </p>
            </Reveal>
          </div>
          <ProjectGrid />
        </div>
      </section>

      <About />
    </main>
  );
}
