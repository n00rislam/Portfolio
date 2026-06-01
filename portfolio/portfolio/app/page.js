'use client';
import { useEffect, useRef } from 'react';

// ─── SVG ICONS ────────────────────────────────────────────────────────────────
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);
const DriveIcon = () => (
  <svg width="20" height="20" viewBox="0 0 87.3 78" fill="currentColor">
    <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
    <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/>
    <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
    <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
    <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
    <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 27h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
  </svg>
);

// ─── TACK COMPONENT ───────────────────────────────────────────────────────────
const Tack = ({ color = 'red', style = {} }) => (
  <div className={`tack tack-${color}`} style={style} />
);

// ─── FADE IN HOOK ─────────────────────────────────────────────────────────────
function useFadeIn() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const EXPERIENCE = [
  {
    role: 'Intern — Information Security & Governance',
    org: 'Fauji Fertilizer Company (FFC)',
    date: 'May – Jul 2025',
    color: 'red',
    bullets: [
      'Evaluated & implemented ISO/IEC 27001 controls; produced audit-ready security documentation.',
      'Applied COBIT 2019 to assess governance processes and align controls with risk objectives.',
      'Analysed SAP security and finance workflows for access-control and compliance gaps.',
    ],
  },
  {
    role: 'Intern — Information Security & Governance',
    org: 'Aga Khan University (AKU)',
    date: 'Jul – Sep 2024',
    color: 'blue',
    bullets: [
      'Led ISO/IEC 27001 control evaluation exercises and documented compliance gap remediation.',
      'Designed cybersecurity awareness advisories translating threat intelligence for non-technical staff.',
      'Identified vulnerabilities in institutional infrastructure; strengthened incident response practices.',
    ],
  },
  {
    role: 'Marketing Head — GDG on Campus',
    org: 'Google Developer Groups, GIKI Chapter',
    date: 'Apr 2024 – Oct 2025',
    color: 'green',
    bullets: [
      "Directed social media content strategy and visual design; elevated GDG GIKI's online presence.",
      'Led marketing team campaigns that significantly increased participation in tech events.',
    ],
  },
];

const PROJECTS = [
  {
    title: 'Blockchain-Based SIM Registration System',
    date: 'Final Year Project — May 2026',
    tags: ['Ethereum', 'Hyperledger Fabric', 'Solidity', 'React.js', 'IPFS'],
    bullets: [
      'Decentralised digital identity using blockchain + IPFS for tamper-proof credentials.',
      'Smart contracts aligned with W3C DID & Verifiable Credentials standards.',
      'MetaMask + React.js / Node.js full-stack with NADRA integration feasibility study.',
    ],
    stat: null,
  },
  {
    title: 'Explainable AI for Malware Detection in Encrypted Traffic',
    date: 'Dec 2025',
    tags: ['XGBoost', 'LightGBM', 'SHAP', 'Python', 'Network Security'],
    bullets: [
      'Ensemble models detect threats in encrypted traffic without decryption.',
      'Extracted 100+ QoS features from packet & session levels.',
      'SHAP explainability for SOC analyst transparency.',
    ],
    stat: '99.94% detection accuracy',
  },
  {
    title: 'AI-Driven Identity Verification & Document Validation',
    date: 'May 2025',
    tags: ['OpenCV', 'Tesseract', 'Flask', 'React.js', 'PostgreSQL'],
    bullets: [
      '98% OCR accuracy + forgery detection using OpenCV & Tesseract.',
      '60% reduction in manual verification time via full-stack automation.',
      '95% facial recognition accuracy, mitigating identity spoofing.',
    ],
    stat: null,
  },
  {
    title: 'Secure LAN Design — RADIUS & ACL',
    date: 'Academic Project',
    tags: ['Cisco Packet Tracer', 'RADIUS', '802.1X', 'ACL', 'Network Security'],
    bullets: [
      'Designed enterprise LAN with 802.1X RADIUS authentication.',
      'Implemented granular ACLs and network segmentation strategies.',
      'Validated intrusion containment against common threat vectors.',
    ],
    stat: null,
  },
];

const SKILLS = [
  { title: '🔐 Cybersecurity', items: ['Penetration Testing', 'Vuln Assessment', 'SAST/DAST', 'Threat Modelling', 'Network Sniffing'] },
  { title: '☁️ Cloud & DevOps', items: ['AWS EC2', 'Microsoft Azure', 'Docker', 'Terraform', 'GitHub Actions'] },
  { title: '🤖 AI / ML', items: ['XGBoost / LightGBM', 'Neural Networks', 'SHAP', 'TensorFlow', 'scikit-learn'] },
  { title: '💻 Programming', items: ['Python', 'C/C++', 'SQL', 'Bash Scripting', 'Solidity'] },
  { title: '🌐 Web & Backend', items: ['React.js', 'Node.js', 'Flask', 'PostgreSQL', 'MongoDB'] },
  { title: '📋 Governance', items: ['ISO/IEC 27001', 'COBIT 2019', 'NIST', 'Risk Assessment', 'SAP Security'] },
  { title: '🛠 Security Tools', items: ['Burp Suite', 'Metasploit', 'Wireshark', 'OWASP ZAP', 'Nmap'] },
  { title: '🎨 Design', items: ['Canva', 'Figma', 'Adobe Suite', 'Poster Design', 'Social Media'] },
];

const POSTERS = [
  { label: 'GDG Event Poster', emoji: '🎨' },
  { label: 'Tech Workshop', emoji: '💻' },
  { label: 'Security Awareness', emoji: '🔒' },
  { label: 'Campus Campaign', emoji: '📣' },
  { label: 'Event Branding', emoji: '✨' },
];

const CERTS = [
  { icon: '🏆', name: 'Add Certification', issuer: 'Issuing Body', placeholder: true },
  { icon: '🎓', name: 'Add Certification', issuer: 'Issuing Body', placeholder: true },
  { icon: '🔐', name: 'Add Certification', issuer: 'Issuing Body', placeholder: true },
  { icon: '☁️', name: 'Add Certification', issuer: 'Issuing Body', placeholder: true },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Home() {
  useFadeIn();

  return (
    <>
      {/* ── NAVIGATION ─────────────────────────────────────────────────────── */}
      <nav className="nav">
        {['About','Skills','Experience','Projects','Posters','Certifications','Contact'].map(s => (
          <a key={s} href={`#${s.toLowerCase()}`}>{s}</a>
        ))}
      </nav>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section className="hero" id="home">
        {/* Scattered decorative tacks */}
        <div style={{position:'absolute',top:'12%',left:'8%',transform:'rotate(15deg)'}}>
          <div className="tack tack-blue" style={{position:'static',transform:'none'}} />
        </div>
        <div style={{position:'absolute',top:'20%',right:'10%',transform:'rotate(-10deg)'}}>
          <div className="tack tack-green" style={{position:'static',transform:'none'}} />
        </div>
        <div style={{position:'absolute',bottom:'30%',left:'12%'}}>
          <div className="tack tack-yellow" style={{position:'static',transform:'none'}} />
        </div>
        <div style={{position:'absolute',bottom:'25%',right:'8%'}}>
          <div className="tack tack-red" style={{position:'static',transform:'none'}} />
        </div>

        <h1 className="hero-name">Noor-ul-ain Islam</h1>

        <div className="sticky hero-note">
          <Tack color="red" />
          <p className="hero-subtitle">
            <span>Cybersecurity Graduate</span> · AI Security Researcher<br/>
            ISO/IEC 27001 Practitioner · Creative Designer
          </p>
        </div>

        <div className="hero-links">
          <a href="https://www.linkedin.com/in/noor-ul-ain19/" target="_blank" rel="noopener noreferrer" className="link-pill linkedin">
            <LinkedInIcon /> LinkedIn
          </a>
          <a href="https://github.com/n00rislam" target="_blank" rel="noopener noreferrer" className="link-pill github">
            <GithubIcon /> GitHub
          </a>
          <a href="https://drive.google.com/drive/folders/1IDMf9pJJFAgbZbZz3L6x7tHi__bHxn_F?usp=drive_link" target="_blank" rel="noopener noreferrer" className="link-pill drive">
            <DriveIcon /> Poster Portfolio
          </a>
        </div>

        {/* Scroll hint */}
        <div style={{position:'absolute',bottom:'32px',left:'50%',transform:'translateX(-50%)',fontFamily:'var(--font-hand)',fontSize:'1rem',color:'var(--ink-light)',display:'flex',flexDirection:'column',alignItems:'center',gap:'4px',animation:'dropIn 0.7s 0.8s both'}}>
          <span>scroll down ↓</span>
        </div>
      </section>

      {/* ── ABOUT ──────────────────────────────────────────────────────────── */}
      <section className="section fade-in" id="about">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="sticky about-main">
            <Tack color="blue" />
            <h3>Hey, I'm Noor 👋</h3>
            <p>
              I'm a Cybersecurity graduate from <strong>GIKI</strong> (Class of 2026, CGPA 3.23) with a passion for
              making digital systems safer and more resilient. I sit at the intersection of <strong>AI security</strong>,
              <strong> cloud governance</strong>, and <strong>creative design</strong> — a rare combination that lets me
              both break things apart analytically and build them back beautifully.
            </p>
            <br />
            <p>
              I've interned at <strong>Fauji Fertilizer Company</strong> and <strong>Aga Khan University</strong>,
              working on ISO/IEC 27001 evaluations, risk assessments, and cybersecurity awareness programmes.
              Outside the terminal, I design posters, run campaigns, and create visual content that actually gets people's attention.
            </p>
          </div>

          <div className="about-facts">
            {[
              ['🎓', 'BS Cybersecurity — GIKI, Class of 2026'],
              ['📍', 'Based in Islamabad, Pakistan'],
              ['🔬', 'AI + Cybersecurity researcher'],
              ['🎨', 'Poster designer & GDG Marketing Head'],
            ].map(([emoji, text], i) => (
              <div key={i} className={`sticky fact-note`}>
                <Tack color={['red','blue','green','yellow'][i]} />
                <span style={{fontFamily:'var(--font-hand)',fontSize:'1.05rem'}}>{emoji}  {text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ─────────────────────────────────────────────────────────── */}
      <section className="section fade-in" id="skills">
        <h2 className="section-title">Skills</h2>
        <div className="skills-board">
          {SKILLS.map((skill, i) => (
            <div key={i} className={`sticky skill-note`}>
              <Tack color={['red','blue','green','yellow','red','blue','green','yellow'][i]} />
              <h4>{skill.title}</h4>
              <ul>
                {skill.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ─────────────────────────────────────────────────────── */}
      <section className="section fade-in" id="experience">
        <h2 className="section-title">Experience</h2>
        <div className="exp-list">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className={`sticky exp-card`}>
              <Tack color={exp.color} />
              <div className="exp-header">
                <span className="exp-role">{exp.role}</span>
                <span className="exp-date">{exp.date}</span>
              </div>
              <div className="exp-org">📌 {exp.org}</div>
              <ul className="exp-bullets">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ───────────────────────────────────────────────────────── */}
      <section className="section fade-in" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <div key={i} className={`sticky project-card`}>
              <Tack color={['red','blue','green','yellow'][i % 4]} />
              <div className="project-date">{p.date}</div>
              <div className="project-title">{p.title}</div>
              <div className="project-tags">
                {p.tags.map((t, j) => <span key={j} className="tag">{t}</span>)}
              </div>
              <ul className="project-bullets">
                {p.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              {p.stat && <div className="project-stat">⚡ {p.stat}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* ── POSTERS ────────────────────────────────────────────────────────── */}
      <section className="section fade-in" id="posters">
        <h2 className="section-title">Poster Designs & GDG Work</h2>
        <div className="sticky posters-intro">
          <Tack color="yellow" />
          <p style={{fontFamily:'var(--font-hand)',fontSize:'1.1rem',lineHeight:1.6}}>
            Beyond cybersecurity, I create visual content — event posters, social media campaigns, and branding for
            Google Developer Groups on Campus, GIKI. Click any polaroid or the button below to see the full collection! 📸
          </p>
        </div>

        <div className="poster-polaroids">
          {POSTERS.map((p, i) => (
            <a
              key={i}
              className="polaroid"
              href="https://drive.google.com/drive/folders/1IDMf9pJJFAgbZbZz3L6x7tHi__bHxn_F?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Tack color={['red','blue','green','yellow','red'][i]} />
              <div className="polaroid-img">
                <span style={{fontSize:'2.5rem'}}>{p.emoji}</span>
              </div>
              <div className="polaroid-label">{p.label}</div>
            </a>
          ))}
        </div>

        <a
          href="https://drive.google.com/drive/folders/1IDMf9pJJFAgbZbZz3L6x7tHi__bHxn_F?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="drive-btn"
        >
          <DriveIcon /> View Full Poster Collection →
        </a>
      </section>

      {/* ── CERTIFICATIONS ─────────────────────────────────────────────────── */}
      <section className="section fade-in" id="certifications">
        <h2 className="section-title">Certifications</h2>
        <div className="certs-grid">
          {CERTS.map((cert, i) => (
            <div key={i} className={`sticky cert-note`}>
              <Tack color={['red','blue','green','yellow'][i % 4]} />
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-name">{cert.name}</div>
              <div className="cert-issuer">{cert.issuer}</div>
              {cert.placeholder && <div className="cert-placeholder">✏️ placeholder — update me!</div>}
            </div>
          ))}
        </div>
        <p style={{fontFamily:'var(--font-hand)',fontSize:'1rem',color:'var(--ink-light)',marginTop:'20px'}}>
          💡 Update the <code>CERTS</code> array in <code>app/page.js</code> with your real certifications.
        </p>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────────────────── */}
      <section className="section fade-in" id="contact">
        <h2 className="section-title">Contact & Hire Me</h2>
        <div className="contact-board">
          <div className="sticky contact-main">
            <Tack color="red" />
            <h3>Let's Connect 📬</h3>
            <div className="contact-item">📧 <a href="mailto:noorulain.islam@outlook.com">noorulain.islam@outlook.com</a></div>
            <div className="contact-item">📱 <a href="tel:+923125611443">+92-312-5611-443</a></div>
            <div className="contact-item"><LinkedInIcon /> <a href="https://www.linkedin.com/in/noor-ul-ain19/" target="_blank" rel="noopener noreferrer">linkedin.com/in/noor-ul-ain19</a></div>
            <div className="contact-item"><GithubIcon /> <a href="https://github.com/n00rislam" target="_blank" rel="noopener noreferrer">github.com/n00rislam</a></div>
          </div>

          <div className="sticky hire-note">
            <Tack color="green" />
            <h3>Open To 🚀</h3>
            <div className="open-to">
              {['Cloud & AI Security roles','Security Governance','Penetration Testing','Research Collaborations','Freelance Design Work'].map((item, i) => (
                <div key={i} className="open-item">✅ {item}</div>
              ))}
            </div>
          </div>

          <div className="sticky" style={{background:'var(--blue)',transform:'rotate(-1.5deg)',padding:'24px',maxWidth:'240px'}}>
            <Tack color="yellow" />
            <p style={{fontFamily:'var(--font-hand)',fontSize:'1.1rem',lineHeight:1.7,color:'var(--ink)'}}>
              📄 <strong>Download CV</strong><br/>
              <br/>
              <a href="#" style={{color:'var(--tack-red)',fontWeight:700,fontFamily:'var(--font-hand)',fontSize:'1rem'}}>
                Noor-ul-ain_Islam_CV.pdf →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer className="footer">
        <p>📌 Pinned with care by Noor-ul-ain Islam · 2026</p>
        <p style={{marginTop:'6px',opacity:0.6}}>Built with Next.js · Deployed on Vercel</p>
      </footer>
    </>
  );
}
