import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, ArrowUp, ArrowUpRight, Download, Mail, Linkedin, Menu, X, MapPin, BriefcaseBusiness, ShieldCheck, Layers3, UsersRound, ScanLine, GraduationCap, FileBadge, Award, Plus, Minus } from 'lucide-react';
import { profile, experience, skills, certifications, projects, achievements, leadership } from './data';
import './styles.css';

const navigation = [{ id: 'home', label: 'Home' }, { id: 'about', label: 'About' }, { id: 'experience', label: 'Experience' }, { id: 'skills', label: 'Skills' }, { id: 'credentials', label: 'Credentials' }, { id: 'projects', label: 'Projects' }, { id: 'contact', label: 'Contact' }];

function ResumeLink({ className = '', compact = false }: { className?: string; compact?: boolean }) {
  return <a className={`button ${className}`} href={profile.resume} download="Nor-Izna-Mohd-Isa-Resume.pdf">{compact ? 'Resume' : 'Download Resume'}<Download size={16} aria-hidden="true" /></a>;
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{number}</span><span className="label-rule" /><span>{children}</span></div>;
}

function Tags({ items }: { items: string[] }) { return <div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div>; }

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => { for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id); }, { rootMargin: '-18% 0px -62% 0px', threshold: 0 });
    document.querySelectorAll('main > section[id]').forEach(el => observer.observe(el));
    const revealObserver = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } }); }, { threshold: 0.06 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    return () => { observer.disconnect(); revealObserver.disconnect(); };
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) { if (event.key === 'Escape' && menuOpen) { setMenuOpen(false); menuButton.current?.focus(); } }
    function onResize() { if (window.innerWidth > 900) setMenuOpen(false); }
    window.addEventListener('keydown', onKey); window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); };
  }, [menuOpen]);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <div className="header-inner">
        <a className="monogram" href="#home" aria-label="Nor Izna, home">ni<span>.</span></a>
        <nav id="main-navigation" aria-label="Main navigation" className={menuOpen ? 'navigation is-open' : 'navigation'}>
          {navigation.map(link => <a key={link.id} href={`#${link.id}`} className={active === link.id ? 'active' : ''} aria-current={active === link.id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
        </nav>
        <div className="header-actions"><ResumeLink className="button-primary header-resume" compact /><button ref={menuButton} type="button" className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={23} /> : <Menu size={23} />}</button></div>
      </div>
    </header>

    <main id="main">
      <section id="home" className="hero container">
        <div className="hero-copy">
          <p className="eyebrow"><span className="small-line" /> IT AUDIT · CYBERSECURITY · RISK & COMPLIANCE</p>
          <h1>Nor Izna<br /><span>Mohd Isa</span><span className="sage-dot">.</span></h1>
          <p className="hero-role">IT risk. Clear insights. Stronger assurance.</p>
          <p className="hero-description">{profile.summary}</p>
          <div className="hero-buttons"><a className="button button-primary" href="#experience">Explore My Experience<ArrowRight size={17} /></a><ResumeLink className="button-outline" /></div>
          <div className="hero-social"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Connect with Nor Izna on LinkedIn"><Linkedin size={19} /></a><a href={`mailto:${profile.email}`} aria-label="Email Nor Izna"><Mail size={20} /></a><span className="social-divider" /><span><MapPin size={13} /> Selangor, Malaysia</span></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-frame"><svg className="landscape" viewBox="0 0 270 330" fill="none"><defs><linearGradient id="sky" x2="270" y2="330" gradientUnits="userSpaceOnUse"><stop stopColor="#e8e5da"/><stop offset="1" stopColor="#d4d6c8"/></linearGradient><filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".65" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="linear" slope=".055"/></feComponentTransfer><feBlend in="SourceGraphic" mode="multiply"/></filter></defs><g filter="url(#grain)"><path fill="url(#sky)" d="M0 0h270v330H0z"/><circle cx="161" cy="100" r="28" fill="#bdc2ac"/><path d="M0 182C89 172 155 266 270 258v72H0Z" fill="#b7bda7"/><path d="M0 268c79-8 168-67 270-79v141H0Z" fill="#9fa68d" fillOpacity=".75"/><path d="M0 292c111-64 175 3 270-22v60H0Z" fill="#8e987d" fillOpacity=".4"/></g></svg></div>
          <div className="art-caption"><span className="small-line" /><p>THOUGHTFUL ASSURANCE.<br />PRACTICAL PERSPECTIVE.<br />A MORE RESILIENT TOMORROW.</p><span className="caption-edition">A PROFESSIONAL PORTFOLIO — 2026</span></div>
        </div>
        <a href="#about" className="hero-scroll"><span>GET TO KNOW MY WORK</span><ArrowRight size={14} /></a>
      </section>

      <section id="about" className="section container reveal">
        <SectionLabel number="01">ABOUT ME</SectionLabel>
        <div className="about-grid">
          <div className="about-copy"><h2>A Little About<br />My Work</h2>{profile.about.map(p => <p key={p}>{p}</p>)}<a className="text-link" href="#contact">Let’s start a conversation<ArrowUpRight size={16} /></a></div>
          <figure className="portrait"><img src="/images/nor-izna.webp" width="520" height="720" alt="Nor Izna Mohd Isa standing beneath a stone archway" loading="lazy" /><figcaption>NOR IZNA BINTI MOHD ISA</figcaption></figure>
          <aside className="about-facts" aria-label="Professional overview">
            <div><BriefcaseBusiness /><p><strong>Current Role</strong><span>Associate Risk Consultant<br />Crowe Malaysia Plt</span></p></div>
            <div><ScanLine /><p><strong>Focus Areas</strong><span>IT Audit, Cybersecurity,<br />Risk & Compliance</span></p></div>
            <div><Layers3 /><p><strong>Industry Exposure</strong><span>Financial Services, Technology,<br />Retail, Investment & more</span></p></div>
            <div><UsersRound /><p><strong>Approach</strong><span>Analytical. Practical.<br />Collaborative.</span></p></div>
            <div className="fact-footnote"><span className="small-line" /><span>Clarity in complexity.</span></div>
          </aside>
        </div>
      </section>

      <section id="experience" className="section container reveal">
        <SectionLabel number="02">PROFESSIONAL EXPERIENCE</SectionLabel>
        <div className="section-heading"><h2>My Career Journey</h2><p>Building a considered perspective on technology risk,<br className="desktop-break" /> from hands-on security to independent assurance.</p></div>
        <div className="timeline">{experience.map(job => <article className={`timeline-row ${job.current ? 'current' : ''}`} key={job.title}><div className="timeline-date"><span className="timeline-dot" /><span>{job.date}</span>{job.current && <span className="current-label">CURRENT ROLE</span>}</div><div className="timeline-content"><h3>{job.title}</h3><p className="company">{job.company}<span> / </span>{job.location}</p><p className="role-intro">{job.intro}</p><ul>{job.points.map(p => <li key={p}>{p}</li>)}</ul><Tags items={job.tags} /></div></article>)}</div>
      </section>

      <section id="skills" className="section container reveal">
        <SectionLabel number="03">SKILLS & EXPERTISE</SectionLabel>
        <div className="section-heading"><h2>Areas of Expertise</h2><p>Technical knowledge, analytical thinking and practical<br className="desktop-break" /> experience — brought together with purpose.</p></div>
        <div className="skills-grid">{skills.map(skill => { const Icon = ({ audit: ScanLine, governance: Layers3, security: ShieldCheck, people: UsersRound })[skill.icon] || ShieldCheck; return <article className="skill-group" key={skill.title}><Icon size={27} strokeWidth={1.5} /><div><h3>{skill.title}</h3><Tags items={skill.tags} />{skill.note && <p className="skill-note">{skill.note}</p>}</div></article>; })}</div>
      </section>

      <section id="credentials" className="section container reveal">
        <SectionLabel number="04">CERTIFICATIONS & EDUCATION</SectionLabel>
        <div className="section-heading"><h2>Credentials & Education</h2><p>A foundation in information security,<br className="desktop-break" /> strengthened through continuous learning.</p></div>
        <div className="credentials-grid"><div><h3 className="subheading"><FileBadge size={23} />Professional Certifications</h3><div className="credential-list">{certifications.map(cert => <article className="credential" key={cert.name}><FileBadge size={23} strokeWidth={1.4} /><div><h4>{cert.name}</h4><p>{cert.issuer}</p></div><time>{cert.date}</time></article>)}</div></div><div><h3 className="subheading"><GraduationCap size={25} />Education</h3><article className="education-card"><GraduationCap size={26} strokeWidth={1.4} /><div><h4>Bachelor of Computer Science with Hons</h4><p className="specialisation">Information Security and Assurance</p><p>Universiti Sains Islam Malaysia (USIM), Nilai</p><div className="education-bottom"><time>Sept 2021 — Sept 2025</time><span>CGPA 3.86</span></div></div></article></div></div>
      </section>

      <section id="projects" className="section container reveal">
        <SectionLabel number="05">SELECTED WORK</SectionLabel>
        <div className="section-heading"><h2>Professional Highlights</h2><p>A closer look at projects connecting assurance,<br className="desktop-break" /> security monitoring and applied technology.</p></div>
        <div className="projects-grid">{projects.map(project => <article className={`project-card ${expandedProject === project.id ? 'expanded' : ''}`} key={project.id}><div className="project-image"><img src={project.image} alt={project.alt} width="720" height="420" loading="lazy" /><span>{project.date}</span></div><div className="project-copy"><p className="project-category">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><Tags items={project.tags} /><button type="button" className="project-toggle" aria-expanded={expandedProject === project.id} aria-controls={`detail-${project.id}`} onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}>{expandedProject === project.id ? 'Less detail' : 'Explore the project'}{expandedProject === project.id ? <Minus size={15} /> : <Plus size={15} />}</button><div id={`detail-${project.id}`} className="project-detail" hidden={expandedProject !== project.id}><p>{project.detail}</p></div></div></article>)}</div>
        <div className="beyond-work"><div><p className="eyebrow">BEYOND THE EVERYDAY</p><h3>Recognition & Involvement</h3><p>Learning through challenges.<br />Contributing through collaboration.</p></div><div className="recognition-list">{achievements.map(a => <div className="recognition" key={a.event}><Award size={20} strokeWidth={1.5} /><div><strong>{a.title}</strong><p>{a.event}</p></div><time>{a.date}</time></div>)}</div></div>
        <details className="leadership-details"><summary><span>Leadership & community involvement</span><Plus size={18} /></summary><div className="leadership-grid">{leadership.map(role => <article key={role.organisation}><p className="leadership-date">{role.date}</p><h4>{role.title}</h4><p className="leadership-org">{role.organisation}</p><p>{role.description}</p></article>)}</div></details>
      </section>

      <section id="contact" className="contact-section reveal"><div className="container contact-inner"><div className="contact-copy"><SectionLabel number="06">GET IN TOUCH</SectionLabel><h2>Let’s Connect<span className="sage-dot">.</span></h2><p>I welcome conversations about technology risk, cybersecurity,<br className="desktop-break" /> professional opportunities and meaningful collaboration.</p><div className="contact-buttons"><a className="button button-primary" href={`mailto:${profile.email}`}><Mail size={17} />Send an Email</a><a className="button button-outline" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} />Connect on LinkedIn<ArrowUpRight size={14} /></a><ResumeLink className="button-outline" /></div><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={14} /></a></div><div className="contact-note"><span className="small-line" /><p>Clearer risks.<br />Stronger controls.<br /><em>Better decisions.</em></p><span>NOR IZNA MOHD ISA</span></div></div></section>
    </main>

    <footer className="container footer"><div className="footer-brand"><a className="monogram" href="#home" aria-label="Back to home">ni<span>.</span></a><div><strong>{profile.displayName}</strong><span>IT Risk & Cybersecurity Professional</span></div></div><p>© {new Date().getFullYear()} {profile.displayName}. All rights reserved.</p><a className="back-top" href="#home">Back to top<ArrowUp size={16} /></a></footer>
  </>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
