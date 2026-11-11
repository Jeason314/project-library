import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function About() {
  const fields = new Set(projects.map((p) => p.category)).size;

  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-left">
          <Reveal>
            <div className="eyebrow">About</div>
            <h2 className="section-title">
              喜欢把模糊的问题，
              <br />
              拆成清晰的结构。
            </h2>
            <div className="about-card">
              <b>{site.name}</b>
              <p>{site.tagline}</p>
              <span className="status">开放交流与合作</span>
            </div>
          </Reveal>
        </div>

        <div className="about-copy">
          <Reveal delay={80}>
            <p className="lead">
              我的工作常常横跨数据、运营与产品：定义问题、搭分析框架、
              把结论做成能用的看板，再推动它落到区域动作里。
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p>
              这个网站是我给自己留的存档。记录每个项目当时的判断，
              也记录后来发现「哪里其实想错了」。比结果更有意思的，是那些被推翻的假设。
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              如果要用一句话概括我做事的方式：
              <strong>先把问题看清楚，再用最小的成本验证，最后打磨到值得被展示。</strong>
              顺序很重要 —— 大多数失败的项目，都是因为把第三步放到了第一步前面。
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="stat-grid">
              <div className="stat">
                <b>{projects.length}</b>
                <span>项目收录</span>
              </div>
              <div className="stat">
                <b>{fields}</b>
                <span>覆盖领域</span>
              </div>
              <div className="stat">
                <b>0 → 1</b>
                <span>专项从 0 到 1</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
