'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Brain, BriefcaseBusiness, Check, Code2, Database, Download, ExternalLink, Github, GraduationCap, Mail, Menu, Monitor, Radio, Sparkles, Trophy, Wrench, X, Linkedin, MapPin, FileText, Award } from 'lucide-react';
import { achievements, certifications, education, experience, leadership, profile, projects, research, skillGroups, stats } from '@/data/portfolio';
const Scene = dynamic(() => import('@/components/Scene'), { ssr: false });

const iconMap: Record<string, React.ElementType> = { brain: Brain, monitor: Monitor, database: Database, wrench: Wrench, radio: Radio };
const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' as const } } };

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="section-heading">
    <span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span>
    <h2>{title}</h2>{text && <p>{text}</p>}
  </motion.div>;
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'AI / ML', 'Full-Stack', 'Other'];
  const filteredProjects = projects.filter((p) => activeFilter === 'All' || (activeFilter === 'AI / ML' && p.type.includes('AI')) || (activeFilter === 'Full-Stack' && p.type.includes('Full-Stack')) || (activeFilter === 'Other' && !p.type.includes('AI') && !p.type.includes('Full-Stack')));
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Research', '#research'], ['Contact', '#contact']];

  return <>
    <Scene />
    <header className="site-header">
      <a className="brand" href="#home"><span className="brand-mark">A<span>.</span></span><span>ANAS<span className="brand-muted"> / PORTFOLIO</span></span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <a className="header-cta" href={`mailto:${profile.email}`}>Let's talk <ArrowUpRight size={15}/></a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main id="home">
      <section className="hero section-wrap">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="availability"><span className="pulse"/>{profile.availability}</motion.div>
          <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>HELLO, WORLD. I'M</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>Mohammad Anas<br/><span>Aarif Baig Mirza</span></motion.h1>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>{profile.role}</motion.h2>
          <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>{profile.headline}</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
            <a className="button button-ghost" href={`mailto:${profile.email}`}><Mail size={16}/> Get in touch</a>
          </motion.div>
          <motion.div className="social-row" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>
            <a href={profile.links.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2/></a>
            <span className="social-caption">CONNECT WITH ME</span>
          </motion.div>
        </div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.45, duration: 1 }}>
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
          <div className="core-glow"><div className="core-initials">A<span>.</span></div><div className="core-ring"/></div>
          <div className="float-tag tag-ai"><Brain size={16}/> AI / ML</div>
          <div className="float-tag tag-code"><Code2 size={16}/> BUILD · LEARN · CREATE</div>
          <div className="float-tag tag-award"><Trophy size={16}/> BEST PAPER</div>
          <div className="visual-caption">CURIOUS MIND. BUILDER'S SPIRIT.</div>
        </motion.div>
        <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
      </section>

      <section className="stats-strip section-wrap" aria-label="Highlights">{stats.map((s) => <div className="stat" key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>)}</section>

      <section id="about" className="section-wrap section-block">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curiosity turns into creation." text="I like understanding how things work — then building something useful with what I learn."/>
        <div className="about-grid">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass-card about-card"><span className="card-index">01 / ABOUT</span><h3>Turning complex ideas into practical technology.</h3><p>{profile.intro}</p><p>My journey combines hands-on AI/ML development, full-stack application building, research and student-community leadership. I value curiosity, continuous learning and clear technical communication.</p><div className="about-meta"><span><MapPin size={15}/> {profile.location}</span><span><GraduationCap size={15}/> B.Tech · Computer Engineering</span></div></motion.div>
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="about-side"><div className="mini-card"><Sparkles/><div><strong>What drives me</strong><p>Learning deeply, solving problems and making technology accessible.</p></div></div><div className="mini-card"><Brain/><div><strong>What I explore</strong><p>AI, computer vision, deep learning and modern web technologies.</p></div></div><div className="mini-card"><FileText/><div><strong>How I contribute</strong><p>Research, development, documentation and collaboration.</p></div></div></motion.div>
        </div>
      </section>

      <section id="skills" className="section-wrap section-block">
        <SectionHeading eyebrow="MY TOOLKIT" title="Skills & technologies." text="A growing toolkit across intelligent systems, web engineering and developer workflows."/>
        <div className="skills-grid">{skillGroups.map((group, i) => { const Icon = iconMap[group.icon] || Code2; return <motion.div key={group.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="glass-card skill-card"><div className="skill-title"><span className="icon-box"><Icon size={19}/></span><h3>{group.title}</h3></div><div className="chip-list">{group.skills.map((skill) => <span className="chip" key={skill}>{skill}</span>)}</div></motion.div>; })}</div>
      </section>

      <section id="projects" className="section-wrap section-block">
        <SectionHeading eyebrow="SELECTED WORK" title="Things I've built." text="A selection of projects where I turn ideas into working experiences."/>
        <div className="filter-row">{filters.map((f) => <button key={f} onClick={() => setActiveFilter(f)} className={activeFilter === f ? 'filter active' : 'filter'}>{f}</button>)}</div>
        <div className="projects-grid">{filteredProjects.map((project, i) => <motion.article layout key={project.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className={project.featured ? 'project-card glass-card featured-project' : 'project-card glass-card'}>
          <div className="project-top"><span className="project-number">{project.number} / PROJECT</span><span className="project-type">{project.type}</span></div>
          <div className="project-art"><div className="art-grid"/><div className="art-orb"/><span className="art-label">{project.name === 'SignWave' ? 'GESTURE INTELLIGENCE' : project.name === 'StackSurge' ? 'CONNECT · INVEST · GROW' : 'IDEA → IMPLEMENTATION'}</span><span className="art-code">{project.number}</span></div>
          <h3>{project.name}</h3><p>{project.description}</p>
          <div className="project-highlights">{project.highlights.map((h) => <span key={h}><Check size={13}/>{h}</span>)}</div>
          <div className="chip-list project-chips">{project.stack.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
          {project.note && <p className="project-note">Portfolio note: {project.note}</p>}
          <div className="project-links">{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live project <ExternalLink size={14}/></a>}<a href={project.github} target="_blank" rel="noreferrer">GitHub <Github size={14}/></a></div>
        </motion.article>)}</div>
      </section>

      <section id="experience" className="section-wrap section-block">
        <SectionHeading eyebrow="WHERE I'VE GROWN" title="Experience & education." text="The roles, teams and learning experiences that have shaped my journey."/>
        <div className="two-column">
          <div><h3 className="subsection-title"><BriefcaseBusiness size={18}/> Experience</h3><div className="timeline">{experience.map((job) => <div className="timeline-item" key={job.company}><span className="timeline-dot"/><div className="timeline-date">{job.date}</div><h3>{job.role}</h3><div className="timeline-company">{job.company} · {job.place}</div><ul>{job.bullets.map((b) => <li key={b}>{b}</li>)}</ul>{job.link && <a className="inline-link" href={job.link} target="_blank" rel="noreferrer">Visit chapter website <ArrowUpRight size={13}/></a>}{job.verify && <p className="verify-note">{job.verify}</p>}</div>)}</div></div>
          <div><h3 className="subsection-title"><GraduationCap size={18}/> Education</h3><div className="education-list">{education.map((e) => <div className="glass-card education-card" key={e.degree}><span className="timeline-date">{e.date}</span><h3>{e.degree}</h3><strong>{e.field}</strong><p>{e.school}</p><span className="muted-line">{e.place}</span><span className="score-pill">{e.score}</span></div>)}</div></div>
        </div>
      </section>

      <section id="research" className="section-wrap section-block">
        <SectionHeading eyebrow="RESEARCH & RECOGNITION" title="Curiosity, tested and presented." text="Research that connects computer vision, machine learning and real-world accessibility."/>
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="research-card glass-card"><div className="research-badge"><Award size={19}/> {research.award}</div><div className="research-content"><span className="card-index">RESEARCH PUBLICATION · {research.date}</span><h3>{research.title}</h3><p>{research.summary}</p><div className="research-meta"><span>{research.conference}</span><span>MediaPipe · Dense Neural Networks · Computer Vision</span></div></div><div className="award-mark"><Trophy size={54}/><span>S4SD<br/>2025</span></div></motion.div>
        <div className="achievement-grid">{achievements.map((a) => <div className="achievement-card" key={a.title}><span className="achievement-star">✳</span><strong>{a.title}</strong><p>{a.detail}</p></div>)}</div>
      </section>

      <section id="more" className="section-wrap section-block compact-block">
        <SectionHeading eyebrow="BEYOND THE CODE" title="Certifications & community."/>
        <div className="more-grid"><div className="glass-card more-card"><h3><Award size={18}/> Certifications & courses</h3>{certifications.map((c) => <div className="list-line" key={c}><Check size={14}/><span>{c}</span></div>)}</div><div className="glass-card more-card"><h3><Trophy size={18}/> Leadership & participation</h3>{leadership.map((l) => <div className="list-line" key={l}><span className="tiny-dot"/><span>{l}</span></div>)}</div></div>
      </section>

      <section id="contact" className="section-wrap section-block contact-section">
        <div className="contact-glow"/><SectionHeading eyebrow="HAVE A PROJECT IN MIND?" title="Let's build something meaningful." text="I'm always interested in connecting with people working on thoughtful technology, AI/ML and useful products."/>
        <a className="button button-primary contact-button" href={`mailto:${profile.email}?subject=Hello%20Anas`}>Say hello <ArrowUpRight size={17}/></a>
        <div className="contact-links"><a href={`mailto:${profile.email}`}><Mail size={16}/>{profile.email}</a><a href={profile.links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/>LinkedIn</a><a href={profile.links.github} target="_blank" rel="noreferrer"><Github size={16}/>GitHub</a></div>
      </section>
    </main>
    <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">A<span>.</span></span><span>ANAS<span className="brand-muted"> / PORTFOLIO</span></span></a><span>Designed with curiosity. Built with code.</span><a href="#home">Back to top ↑</a></footer>
  </>;
}
