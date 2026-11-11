import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer id="contact" className="contact">
      <div className="container">
        <Reveal>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Contact
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h2>
            有想法，
            <br />
            <span className="gradient-text">就一起做。</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p>
            无论是项目合作、产品讨论，还是单纯想聊聊某个奇怪的点子，
            都欢迎写信给我 —— 我通常会很快回复。
          </p>
        </Reveal>
        <Reveal delay={210}>
          <a className="contact-mail" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </Reveal>

        <div className="footer-bar">
          <span>
            © {new Date().getFullYear()} {site.name} · 用 Next.js 手写
          </span>
          <div className="footer-socials">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                {s.label}
              </a>
            ))}
            <a href="#">回到顶部 ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
