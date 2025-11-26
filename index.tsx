import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Mail, Linkedin, Github, MapPin, Briefcase, Award, GraduationCap, Terminal, Server, Cloud, Shield, Database, FolderOpen, Quote, ExternalLink, Link as LinkIcon } from 'lucide-react';

// --- Styles & Constants ---
const COLORS = {
  bg: '#FFE5E5', // Light pink background
  text: '#000000',
  border: '#000000',
  white: '#FFFFFF',
  cyan: '#00FFFF',
  yellow: '#FFEB3B', // Brighter yellow
  red: '#FF5252',
  purple: '#D0BCFF', // Lighter purple
  green: '#69F0AE',
  dark: '#1a1a1a',
  blue: '#448AFF'
};

const BORDER_THICKNESS = '4px';
const SHADOW_OFFSET = '8px';

const STYLES = {
  container: {
    fontFamily: '"Space Mono", monospace',
    backgroundColor: COLORS.bg,
    color: COLORS.text,
    minHeight: '100vh',
    backgroundImage: `radial-gradient(${COLORS.text} 1px, transparent 1px)`,
    backgroundSize: '40px 40px',
    overflowX: 'hidden' as const,
    paddingBottom: '100px',
  },
  card: {
    backgroundColor: COLORS.white,
    border: `${BORDER_THICKNESS} solid ${COLORS.border}`,
    boxShadow: `${SHADOW_OFFSET} ${SHADOW_OFFSET} 0px 0px ${COLORS.border}`,
    position: 'relative' as const,
  },
  button: {
    fontFamily: '"Archivo Black", sans-serif',
    textTransform: 'uppercase' as const,
    fontWeight: 'bold',
    padding: '14px 28px',
    border: `${BORDER_THICKNESS} solid ${COLORS.border}`,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'all 0.1s ease',
    fontSize: '1rem',
    textDecoration: 'none',
    color: COLORS.text,
  },
  sectionHeading: {
    fontFamily: '"Archivo Black", sans-serif',
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    textTransform: 'uppercase' as const,
    textAlign: 'center' as const,
    marginBottom: '60px',
    backgroundColor: COLORS.cyan,
    border: `${BORDER_THICKNESS} solid ${COLORS.border}`,
    boxShadow: `${SHADOW_OFFSET} ${SHADOW_OFFSET} 0px 0px ${COLORS.border}`,
    padding: '15px 30px',
    display: 'inline-block',
    transform: 'rotate(-2deg)',
  },
};

// --- Components ---

const Button = ({ children, color = COLORS.cyan, href, icon: Icon, style = {} }: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const btnStyle = {
    ...STYLES.button,
    backgroundColor: color,
    boxShadow: isHovered 
      ? `2px 2px 0px 0px ${COLORS.border}` 
      : `${SHADOW_OFFSET} ${SHADOW_OFFSET} 0px 0px ${COLORS.border}`,
    transform: isHovered 
      ? `translate(6px, 6px)` 
      : 'translate(0, 0)',
    ...style,
  };

  const content = (
    <>
      {Icon && <Icon size={22} strokeWidth={2.5} />}
      {children}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        style={btnStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      style={btnStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </button>
  );
};

const NavBar = () => (
  <nav style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '30px',
    maxWidth: '1400px',
    margin: '0 auto',
    flexWrap: 'wrap',
    gap: '20px',
  }}>
    <div style={{
      ...STYLES.card,
      padding: '12px 24px',
      fontFamily: '"Archivo Black", sans-serif',
      fontSize: '1.8rem',
      backgroundColor: COLORS.white,
      transform: 'rotate(-2deg)',
      boxShadow: `5px 5px 0px 0px ${COLORS.border}`,
    }}>
      PAVAN.exe
    </div>
    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
      <Button color={COLORS.blue} style={{ color: COLORS.white }} icon={Linkedin} href="https://www.linkedin.com/in/pavan90/">
        LINKEDIN
      </Button>
      <Button color={COLORS.dark} style={{ color: COLORS.white }} icon={Github} href="https://github.com/PavanAnganna90">
        GITHUB
      </Button>
      <Button color={COLORS.cyan} icon={Mail} href="mailto:pavan.nag90@gmail.com">
        CONTACT ME
      </Button>
    </div>
  </nav>
);

const Sticker = ({ text, color, rotate = '0deg', top, right, bottom, left }: any) => (
  <div style={{
    position: 'absolute',
    backgroundColor: color,
    color: COLORS.text,
    padding: '15px',
    fontFamily: '"Archivo Black", sans-serif',
    textTransform: 'uppercase',
    border: `3px solid ${COLORS.border}`,
    boxShadow: `4px 4px 0px 0px ${COLORS.border}`,
    transform: `rotate(${rotate})`,
    top, left, right, bottom,
    zIndex: 10,
    fontSize: '0.9rem',
    textAlign: 'center',
    minWidth: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    width: '100px',
    height: '100px',
  }}>
    {text}
  </div>
);

const Hero = () => {
  return (
    <header style={{
      maxWidth: '1200px',
      margin: '60px auto 100px auto',
      padding: '20px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '60px',
      alignItems: 'center',
    }}>
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ 
          backgroundColor: COLORS.purple, 
          display: 'inline-block', 
          padding: '8px 16px', 
          border: `3px solid ${COLORS.border}`, 
          fontWeight: 'bold',
          marginBottom: '20px',
          transform: 'rotate(-2deg)',
          boxShadow: `4px 4px 0px 0px ${COLORS.border}`,
        }}>
          Hello World! I'm Pavan
        </div>
        
        <h1 style={{
          fontFamily: '"Archivo Black", sans-serif',
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          lineHeight: '1',
          textTransform: 'uppercase',
          marginBottom: '30px',
          color: COLORS.white,
          textShadow: `
            4px 4px 0px ${COLORS.text}, 
            -1px -1px 0 ${COLORS.text},  
            1px -1px 0 ${COLORS.text},
            -1px 1px 0 ${COLORS.text},
            1px 1px 0 ${COLORS.text}
          `,
          WebkitTextStroke: `3px ${COLORS.text}`,
        }}>
          PLATFORM /<br/>
          <span style={{ 
            color: COLORS.yellow, 
            textShadow: `4px 4px 0px ${COLORS.border}`,
            display: 'inline-block',
          }}>CLOUD</span><br/>
          ENGINEER
        </h1>

        <div style={{
          ...STYLES.card,
          padding: '25px',
          maxWidth: '550px',
          backgroundColor: COLORS.white,
        }}>
          <p style={{ lineHeight: '1.6', fontSize: '1.1rem', fontWeight: 'bold' }}>
            Seasoned Platform & Cloud Engineer with 8+ years of experience delivering highly available, scalable systems across cloud platforms. 
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <div style={{
          ...STYLES.card,
          padding: '15px 15px 60px 15px',
          backgroundColor: COLORS.white,
          transform: 'rotate(3deg)',
          width: '350px',
          boxShadow: `12px 12px 0px 0px ${COLORS.border}`,
        }}>
          <Sticker 
            text="8+ YRS EXP" 
            color={COLORS.yellow} 
            rotate="15deg" 
            top="-30px" 
            right="-30px" 
          />
          
          <div style={{
            width: '100%',
            height: '350px',
            backgroundColor: '#ddd',
            border: `3px solid ${COLORS.border}`,
            marginBottom: '20px',
            overflow: 'hidden',
          }}>
             {/* 
                NOTE: Use your real image here. 
                Since I cannot directly access your local files, I am using a placeholder.
                Replace 'https://images.unsplash.com/...' with your local file path (e.g. './pavan.jpg').
             */}
            <img 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" 
              alt="Pavan Profile" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ 
            fontFamily: '"Archivo Black", sans-serif', 
            fontSize: '1.8rem', 
            textAlign: 'center',
            textTransform: 'uppercase'
          }}>
            @pavan90
          </div>
        </div>
      </div>
    </header>
  );
};

const Ticker = ({ text, color, rotate }: any) => (
  <div style={{
    backgroundColor: color,
    borderTop: `${BORDER_THICKNESS} solid ${COLORS.border}`,
    borderBottom: `${BORDER_THICKNESS} solid ${COLORS.border}`,
    padding: '15px 0',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    transform: `rotate(${rotate}) scale(1.05)`,
    margin: '40px 0',
    position: 'relative',
    zIndex: 5,
  }}>
    <style>
      {`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}
    </style>
    <div style={{
      display: 'inline-block',
      fontFamily: '"Archivo Black", sans-serif',
      fontSize: '1.4rem',
      textTransform: 'uppercase',
      animation: 'ticker 20s linear infinite',
      whiteSpace: 'nowrap',
    }}>
      <span style={{ margin: '0 20px' }}>{text}</span>
      <span style={{ margin: '0 20px' }}>•</span>
      <span style={{ margin: '0 20px' }}>{text}</span>
      <span style={{ margin: '0 20px' }}>•</span>
      <span style={{ margin: '0 20px' }}>{text}</span>
      <span style={{ margin: '0 20px' }}>•</span>
      <span style={{ margin: '0 20px' }}>{text}</span>
      <span style={{ margin: '0 20px' }}>•</span>
      <span style={{ margin: '0 20px' }}>{text}</span>
      <span style={{ margin: '0 20px' }}>•</span>
      <span style={{ margin: '0 20px' }}>{text}</span>
      <span style={{ margin: '0 20px' }}>•</span>
      <span style={{ margin: '0 20px' }}>{text}</span>
      <span style={{ margin: '0 20px' }}>•</span>
      <span style={{ margin: '0 20px' }}>{text}</span>
      <span style={{ margin: '0 20px' }}>•</span>
    </div>
  </div>
);

const Summary = () => (
  <section style={{ maxWidth: '1000px', margin: '100px auto', padding: '20px' }}>
    <div style={{
      ...STYLES.card,
      padding: '0',
      backgroundColor: COLORS.dark,
      color: COLORS.white,
    }}>
      <div style={{
        backgroundColor: '#333',
        padding: '10px 20px',
        borderBottom: `${BORDER_THICKNESS} solid ${COLORS.border}`,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}>
        <div style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: COLORS.red, border: '2px solid black' }}></div>
        <div style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: COLORS.yellow, border: '2px solid black' }}></div>
        <div style={{ width: '15px', height: '15px', borderRadius: '50%', backgroundColor: COLORS.green, border: '2px solid black' }}></div>
        <span style={{ marginLeft: '10px', fontFamily: 'monospace', fontWeight: 'bold' }}>root@pavan:~$ cat summary.txt</span>
      </div>
      <div style={{ padding: '30px', lineHeight: '1.8', fontSize: '1.1rem' }}>
        <p>
          <span style={{ color: COLORS.green }}>➜</span> Proven ability to architect and automate Kubernetes-based infrastructures, manage microservices lifecycles, and enforce SLO/SLI metrics to ensure 99.99% uptime.
        </p>
        <br/>
        <p>
          <span style={{ color: COLORS.green }}>➜</span> Skilled in IaC (Terraform, Ansible), GitOps, observability (Datadog, Prometheus), and event-driven architectures (Kafka).
        </p>
        <br/>
        <p>
          <span style={{ color: COLORS.green }}>➜</span> Adept at root cause analysis, chaos engineering, and continuous improvement to reduce MTTR and operational toil.
        </p>
        <br/>
        <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '10px', color: COLORS.yellow }}>
          <MapPin size={20} />
          <span>Austin, Texas Metropolitan Area</span>
        </div>
      </div>
    </div>
  </section>
);

const ExperienceCard = ({ role, company, duration, location, details, color }: any) => {
  const isList = Array.isArray(details);
  
  return (
    <div style={{
      ...STYLES.card,
      backgroundColor: COLORS.white,
      padding: '30px',
      marginBottom: '40px',
      borderLeft: `15px solid ${color}`,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <div>
          <h3 style={{ margin: 0, fontFamily: '"Archivo Black", sans-serif', fontSize: '1.5rem', textTransform: 'uppercase' }}>{role}</h3>
          <h4 style={{ margin: '5px 0 0 0', fontSize: '1.2rem', fontWeight: 'bold' }}>{company}</h4>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontWeight: 'bold', backgroundColor: COLORS.dark, color: COLORS.white, padding: '5px 10px', display: 'inline-block' }}>{duration}</div>
          <div style={{ marginTop: '5px', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '5px' }}>
            <MapPin size={16} /> {location}
          </div>
        </div>
      </div>
      
      {isList ? (
        <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
          {details.map((item: string, index: number) => (
            <li key={index} style={{ marginBottom: '10px' }}>{item}</li>
          ))}
        </ul>
      ) : (
        <p style={{ lineHeight: '1.6', fontSize: '1.05rem' }}>{details}</p>
      )}
    </div>
  );
};

const ExperienceSection = () => {
  const experiences = [
    {
      role: 'Site Reliability Engineer',
      company: 'Ford Motor Company',
      duration: 'Apr 2024 - Aug 2024',
      location: 'Austin, TX',
      color: COLORS.blue,
      details: "At Ford’s Connected Vehicle division, I focused on bringing clarity and reliability to how services shipped across teams. I rebuilt the release foundation using GitOps-based pipelines (GitHub Actions → ArgoCD → Helm) and reusable Terraform modules aligned with platform standards, while introducing SLO-driven dashboards that gave teams a shared understanding of system health. This improved release predictability, reduced rollout inconsistencies, and helped teams make more informed decisions around shipping and incident triage."
    },
    {
      role: 'Platform Engineer',
      company: 'New York Life Insurance',
      duration: 'Mar 2019 - Dec 2022',
      location: 'Lebanon, NJ',
      color: COLORS.green,
      details: "At New York Life, I helped modernize how regulated systems were delivered by re-architecting CI/CD and infrastructure workflows around modular Jenkins + Terraform patterns. This shift standardized how environments were provisioned, improved configuration consistency across hybrid/on-prem/cloud systems, and reduced deployment risk for SOX-bound applications. I also unified observability across Prometheus, ELK, and Sumo Logic, giving incident teams a clearer picture of system health and enabling faster, more predictable RCA during major events."
    },
    {
      role: 'DevOps Engineer',
      company: 'Walgreens',
      duration: 'Apr 2017 - Feb 2019',
      location: 'Deerfield, IL',
      color: COLORS.red,
      details: "At Walgreens, I helped bring consistency to a hybrid delivery environment by building CI/CD patterns that worked seamlessly across both AWS and on-prem store systems. I implemented dual-mode pipelines using AWS CodeDeploy and Jenkins, introduced Terraform modules to standardize provisioning, and paired them with Ansible automation to eliminate config drift. To support reliability at scale, I rolled out Datadog metrics/tracing and centralized logging with Splunk, enabling earlier detection of issues and shifting teams from reactive support toward proactive monitoring and incident reduction."
    },
    {
      role: 'DevOps Engineer',
      company: 'Merck',
      duration: 'Apr 2017 - Dec 2017',
      location: 'Charlotte, NC',
      color: COLORS.purple,
      details: [
        'Automated OS patching, provisioning, and backup routines using Ansible.',
        'Developed and maintained Jenkins pipelines integrating with ServiceNow workflows.',
        'Configured Dynatrace, Splunk, and Nagios for unified monitoring.'
      ]
    }
  ];

  return (
    <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={STYLES.sectionHeading}>Experience</h2>
      </div>
      {experiences.map((exp, idx) => (
        <ExperienceCard key={idx} {...exp} />
      ))}
    </section>
  );
};

const EducationSection = () => (
  <section style={{ maxWidth: '1000px', margin: '100px auto', padding: '20px' }}>
    <div style={{ textAlign: 'center' }}>
      <h2 style={STYLES.sectionHeading}>Education</h2>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
      <div style={{
        ...STYLES.card,
        padding: '30px',
        backgroundColor: COLORS.white,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderBottom: `10px solid ${COLORS.yellow}`
      }}>
        <div style={{ backgroundColor: COLORS.yellow, padding: '10px', border: `3px solid ${COLORS.border}`, marginBottom: '20px', borderRadius: '50%' }}>
          <GraduationCap size={32} />
        </div>
        <h3 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: '1.4rem', marginBottom: '10px' }}>M.S. Information Systems</h3>
        <p style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '5px' }}>University of Maryland Baltimore County</p>
        <p style={{ color: '#555' }}>2013 - 2015</p>
      </div>

       <div style={{
        ...STYLES.card,
        padding: '30px',
        backgroundColor: COLORS.white,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderBottom: `10px solid ${COLORS.yellow}`
      }}>
        <div style={{ backgroundColor: COLORS.yellow, padding: '10px', border: `3px solid ${COLORS.border}`, marginBottom: '20px', borderRadius: '50%' }}>
          <GraduationCap size={32} />
        </div>
        <h3 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: '1.4rem', marginBottom: '10px' }}>B.Tech Electronics & Comm.</h3>
        <p style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '5px' }}>JNTUH College of Engineering</p>
        <p style={{ color: '#555' }}>2008 - 2012</p>
      </div>
    </div>

    <div style={{ textAlign: 'center', marginTop: '80px' }}>
      <h2 style={{...STYLES.sectionHeading, backgroundColor: COLORS.purple, transform: 'rotate(2deg)'}}>Certifications</h2>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
       <div style={{ 
          ...STYLES.card, 
          padding: '20px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '15px',
          backgroundColor: COLORS.white,
          minWidth: '300px'
        }}>
          <Award size={32} color={COLORS.blue} />
          <div>
            <div style={{ fontWeight: 'bold' }}>CKA: Certified Kubernetes Administrator</div>
            <div style={{ fontSize: '0.8rem', color: '#555' }}>Sep 2022 - Sep 2025</div>
          </div>
       </div>
       <div style={{ 
          ...STYLES.card, 
          padding: '20px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '15px',
          backgroundColor: COLORS.white,
          minWidth: '300px'
        }}>
          <Award size={32} color={COLORS.green} />
          <div>
            <div style={{ fontWeight: 'bold' }}>AWS Certified Solution Architect</div>
            <div style={{ fontSize: '0.8rem', color: '#555' }}>Expired</div>
          </div>
       </div>
       <div style={{ 
          ...STYLES.card, 
          padding: '20px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '15px',
          backgroundColor: COLORS.white,
          minWidth: '300px'
        }}>
          <Award size={32} color={COLORS.purple} />
          <div>
            <div style={{ fontWeight: 'bold' }}>Sumo Pro User</div>
            <div style={{ fontSize: '0.8rem', color: '#555' }}>Issued Jan 2019</div>
          </div>
       </div>
    </div>
  </section>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "Inmate Tracking System",
      org: "Patuxent Institution / UMBC",
      desc: "Analyzed each phase of SDLC and developed a system to minimize human errors and improve tracking efficiency.",
      icon: Shield
    },
    {
      title: "Movie Booking & Searching",
      org: "UMBC",
      desc: "Implemented a Movie Booking and Searching System on MySQL using PHP, HTML to streamline ticket reservations.",
      icon: Database
    }
  ];

  return (
    <section style={{ maxWidth: '1000px', margin: '100px auto', padding: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{...STYLES.sectionHeading, backgroundColor: COLORS.red, transform: 'rotate(-1deg)'}}>Projects</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
        {projects.map((proj, idx) => (
          <div key={idx} style={{
            ...STYLES.card,
            padding: '30px',
            backgroundColor: COLORS.white,
          }}>
            <div style={{ 
              backgroundColor: COLORS.red, 
              color: COLORS.white, 
              display: 'inline-block', 
              padding: '5px 10px', 
              fontWeight: 'bold', 
              border: `2px solid ${COLORS.border}`,
              marginBottom: '15px',
              boxShadow: `3px 3px 0 0 ${COLORS.border}`
            }}>
              PROJECT
            </div>
            <h3 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: '1.5rem', marginBottom: '5px' }}>{proj.title}</h3>
            <p style={{ fontStyle: 'italic', fontWeight: 'bold', marginBottom: '15px' }}>{proj.org}</p>
            <p style={{ lineHeight: '1.6', marginBottom: '20px' }}>{proj.desc}</p>
            
            <Button 
              href="https://github.com/PavanAnganna90" 
              color={COLORS.yellow} 
              icon={LinkIcon}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              View Project
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

const RecommendationsSection = () => (
  <section style={{ maxWidth: '800px', margin: '100px auto', padding: '20px' }}>
    <div style={{ textAlign: 'center' }}>
      <h2 style={{...STYLES.sectionHeading, backgroundColor: COLORS.green, transform: 'rotate(2deg)'}}>Testimonials</h2>
    </div>
    
    <div style={{
      ...STYLES.card,
      padding: '40px',
      backgroundColor: COLORS.white,
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    }}>
      <Quote size={40} color={COLORS.blue} style={{ transform: 'rotate(180deg)' }} />
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', fontStyle: 'italic' }}>
        "Pavan's work ethic and his priorities are always the client first. He always goes out of his way to find the right solution for his clients issues and make sure everything is going well. He is very responsive and run projects with high professionalism and high quality. I recommend to Pavan because I know he will take care of any new challenge."
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '20px', borderTop: `2px solid ${COLORS.border}`, paddingTop: '20px' }}>
        <div style={{ width: '50px', height: '50px', backgroundColor: COLORS.text, borderRadius: '50%' }}></div>
        <div>
          <div style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: '1.1rem' }}>Marco Coronel</div>
          <div style={{ fontSize: '0.9rem' }}>System Engineer - Project Coord</div>
        </div>
      </div>
    </div>
  </section>
);

const SkillsSection = () => {
  const skillCategories = [
    { title: 'Cloud & Platform', items: ['AWS (EKS, EC2, Lambda)', 'Azure (AKS)', 'Linux', 'VMware'], icon: Cloud, color: COLORS.cyan },
    { title: 'IaC & Automation', items: ['Terraform', 'Ansible', 'CloudFormation', 'ArgoCD', 'Jenkins'], icon: Server, color: COLORS.yellow },
    { title: 'Monitoring', items: ['Datadog', 'Prometheus', 'Grafana', 'Splunk', 'PagerDuty'], icon: Terminal, color: COLORS.red },
    { title: 'Containerization', items: ['Docker', 'Kubernetes', 'Helm', 'ECS', 'Istio'], icon: FolderOpen, color: COLORS.purple },
  ];

  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={STYLES.sectionHeading}>Skills</h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div key={idx} style={{
              ...STYLES.card,
              padding: '25px',
              backgroundColor: COLORS.white,
            }}>
              <div style={{
                backgroundColor: cat.color,
                display: 'inline-flex',
                padding: '10px',
                border: `3px solid ${COLORS.border}`,
                marginBottom: '15px',
                boxShadow: `4px 4px 0px 0px ${COLORS.border}`,
              }}>
                <Icon size={24} />
              </div>
              <h3 style={{ fontFamily: '"Archivo Black", sans-serif', marginBottom: '15px', fontSize: '1.2rem' }}>{cat.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {cat.items.map((item: string, i: number) => (
                  <span key={i} style={{
                    backgroundColor: '#eee',
                    padding: '5px 10px',
                    fontSize: '0.9rem',
                    border: `2px solid ${COLORS.border}`,
                    fontWeight: 'bold',
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer style={{
    backgroundColor: COLORS.dark,
    color: COLORS.white,
    padding: '60px 20px',
    textAlign: 'center',
    marginTop: '100px',
    borderTop: `${BORDER_THICKNESS} solid ${COLORS.border}`,
  }}>
    <h2 style={{ fontFamily: '"Archivo Black", sans-serif', fontSize: '2rem', marginBottom: '30px', color: COLORS.yellow }}>LET'S CONNECT</h2>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
      <Button color={COLORS.blue} style={{ color: COLORS.white }} icon={Linkedin} href="https://www.linkedin.com/in/pavan90/">LINKEDIN</Button>
      <Button color={COLORS.white} style={{ color: COLORS.text }} icon={Github} href="https://github.com/PavanAnganna90">GITHUB</Button>
      <Button color={COLORS.cyan} icon={Mail} href="mailto:pavan.nag90@gmail.com">EMAIL ME</Button>
    </div>
    <p style={{ fontFamily: '"Space Mono", monospace', opacity: 0.7 }}>
      © 2025 Pavan Anganna. Built with React & Neo-Brutalism.
    </p>
  </footer>
);

const App = () => {
  return (
    <div style={STYLES.container}>
      <NavBar />
      <Hero />
      <Ticker text="DEVOPS • SRE • KUBERNETES • CLOUD • AUTOMATION" color={COLORS.cyan} rotate="-2deg" />
      <Summary />
      <Ticker text="JENKINS • TERRAFORM • AWS • AZURE • DOCKER" color={COLORS.yellow} rotate="2deg" />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <RecommendationsSection />
      <SkillsSection />
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);