"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";

const links = [
  { label: "项目", href: "/#projects", hint: "Projects" },
  { label: "关于", href: "/#about", hint: "About" },
  { label: "联系", href: "/#contact", hint: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="nav-bg" />
        <div className="nav-inner container">
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">{site.mark}</span>
            <span>
              {site.name}
              <small>{site.label}</small>
            </span>
          </Link>

          <nav className="nav-links" aria-label="主导航">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="btn btn-primary btn-sm" href={`mailto:${site.email}`}>
              取得联系
            </a>
            <button
              type="button"
              className={`nav-toggle${open ? " open" : ""}`}
              aria-label={open ? "关闭菜单" : "打开菜单"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${open ? " open" : ""}`}>
        {links.map((l, i) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: `${120 + i * 70}ms` }}
          >
            {l.label}
            <small>{l.hint}</small>
          </Link>
        ))}
        <a href={`mailto:${site.email}`} onClick={() => setOpen(false)}>
          写封邮件
          <small>{site.email}</small>
        </a>
      </div>
    </>
  );
}
