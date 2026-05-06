/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ArrowRight, 
  BarChart3, 
  Users, 
  Building2, 
  Briefcase, 
  GraduationCap, 
  Wrench,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const LOGO_NAMES = [
  'KPMG',
  'Axis Bank',
  'Zion',
  'Greensole',
  'Finnet Media',
  'Quantum IT',
  'Purple Rain',
];

const IMPACT_STATS = [
  { label: 'Financial institutions researched', value: '50+' },
  { label: 'Banks benchmarked', value: '10+' },
  { label: 'Outreach contacts structured', value: '110+' },
  { label: 'Influencer records built', value: '200+' },
  { label: 'Companies onboarded', value: '60+' },
  { label: 'Mentors and founders coordinated', value: '25+' },
  { label: '10-member team managed', value: '10+' },
];

const EXPERIENCE = [
  {
    company: 'KPMG',
    role: 'Technical Enablement Intern',
    points: [
      'Benchmarking and research across 50+ financial institutions',
      'Built structured evaluation frameworks',
      'Contributed to reporting systems',
    ]
  },
  {
    company: 'Axis Bank',
    role: 'Digital Marketing Intern',
    points: [
      'Analyzed acquisition funnels and user drop-offs',
      'Conducted competitor benchmarking',
      'Supported UX and conversion improvements',
    ]
  },
  {
    company: 'Zion',
    role: 'Social Media and Strategy Intern',
    points: [
      'Developed SEO-led content strategies',
      'Worked on website content and campaigns',
      'Built outreach systems',
    ]
  },
  {
    company: 'Greensole',
    role: 'Social Media Intern',
    points: [
      'Executed influencer outreach campaigns',
      'Supported brand positioning',
      'Assisted campaign coordination',
    ]
  },
];

const ALSO_WORKED_WITH = [
  { name: 'Finnet Media', desc: 'Influencer systems and campaign tracking' },
  { name: 'Quantum IT Innovation', desc: 'Digital marketing execution' },
  { name: 'Purple Rain Techsafe', desc: 'Business development and outreach' },
  { name: 'Nutridig', desc: 'Content and marketing support' },
  { name: 'Pertue', desc: 'Creative and campaign support' },
];

const SKILLS = [
  { category: 'Analytics and Research', items: ['SQL', 'Python', 'R', 'Competitor Analysis'] },
  { category: 'Digital Marketing and Strategy', items: ['SEO', 'Content Strategy', 'Funnel Analysis'] },
  { category: 'Tools and Systems', items: ['SEO Tools', 'Analytics Platforms', 'AI Tools', 'Automation Workflows'] },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function App() {
  return (
    <div className="bg-[#000814] text-slate-200 font-sans selection:bg-navy-500 selection:text-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 py-20 overflow-hidden text-center">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-navy-600/20 blur-[120px] rounded-full animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy-900/10 blur-[150px] rounded-full animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-[#000814]/50 to-[#000814]" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6 mb-12"
          >
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-2 text-glow">
              Ria Sinha
            </h1>
            <motion.p 
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.4em" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-lg md:text-xl font-medium text-navy-400 uppercase"
            >
              Digital Strategy and Growth
            </motion.p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-16 font-light italic"
          >
            "I work on research-led digital strategy, combining analytics, content, and execution to improve acquisition, positioning, and scalable growth."
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-6 mb-24"
          >
            <a 
              href="#work" 
              className="group relative px-10 py-4 bg-navy-600/90 text-white rounded-full font-bold transition-all hover:bg-navy-500 overflow-hidden shadow-[0_0_20px_rgba(0,115,255,0.2)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a 
              href="#contact" 
              className="px-10 py-4 glass text-white rounded-full font-bold transition-all hover:bg-white/10"
            >
              Contact
            </a>
          </motion.div>

          {/* Worked With Section - Refined */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="pt-16 border-t border-white/5 mx-auto max-w-2xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500 mb-10">
              Worked with 9+ brands
            </p>
            <div className="flex flex-wrap justify-center gap-10 md:gap-14 items-center">
              {['KPMG', 'AXIS BANK', 'FINNET', 'GREENSOLE'].map((brand, i) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 + (i * 0.1) }}
                  whileHover={{ scale: 1.05, opacity: 1 }}
                  className="text-white/30 hover:text-white transition-all cursor-default duration-500 font-black text-lg md:text-xl tracking-[0.2em] italic"
                >
                  {brand}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. BRANDS WORKED WITH GRID */}
      <section id="brands" className="py-32 bg-black/40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
             {...fadeIn}
             className="text-xs font-bold uppercase tracking-[0.4em] text-navy-400 mb-20 text-center"
          >
            Industry Reach & Collaborations
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 items-center">
            {LOGO_NAMES.map((name, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.3, y: 0 }}
                whileHover={{ opacity: 0.8, scale: 1.1 }}
                viewport={{ once: true }}
                className="text-white transition-all duration-700 font-bold text-sm md:text-base tracking-[0.4em] uppercase"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. IMPACT - STATS */}
      <section id="impact" className="py-32 px-6 bg-gradient-to-b from-black/40 to-[#000814]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">The Work, in Numbers</h2>
            <div className="h-1 w-24 bg-navy-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPACT_STATS.map((stat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-10 glass rounded-2xl hover:bg-white/10 transition-all duration-500 overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <BarChart3 className="w-12 h-12 text-navy-400" />
                </div>
                <h3 className="text-5xl font-black text-white mb-4 group-hover:text-navy-400 transition-colors">
                  {stat.value}
                </h3>
                <p className="text-slate-400 text-sm font-medium tracking-wide leading-relaxed uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCE TIMELINE */}
      <section className="py-32 px-6 bg-black relative">
        <div className="absolute inset-0 bg-navy-950/10 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Experience</h2>
            <p className="text-navy-400 font-medium tracking-[0.2em] uppercase">Structured problem-solving in action</p>
          </div>
          
          <div className="space-y-24">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="w-full md:w-1/2 order-2 md:order-none">
                  <div className="glass p-10 rounded-3xl group hover:border-navy-600 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,115,255,0.1)]">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-navy-600/20 rounded-xl">
                        <Briefcase className="text-navy-400 w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white group-hover:text-navy-400 transition-colors">
                          {exp.company}
                        </h3>
                        <p className="text-navy-600 font-semibold uppercase tracking-widest text-xs">
                          {exp.role}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-4">
                      {exp.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-4 text-slate-400 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-navy-600 mt-2.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-4">
                   <div className="w-1 px-1 bg-gradient-to-b from-navy-600/0 via-navy-600 to-navy-600/0 h-24 rounded-full" />
                   <div className="text-9xl font-black text-white/5 select-none">{idx + 1}</div>
                   <div className="w-1 px-1 bg-gradient-to-b from-navy-600/0 via-navy-600 to-navy-600/0 h-24 rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ALSO WORKED WITH */}
      <section className="py-32 px-6 bg-[#000814]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 px-4">
            <div className="space-y-4">
              <p className="text-navy-400 font-bold uppercase tracking-widest text-sm">Collaborations</p>
              <h3 className="text-4xl font-bold text-white">Extended Engagements</h3>
            </div>
            <ArrowRight className="w-10 h-10 text-white/10 hidden md:block" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALSO_WORKED_WITH.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="p-8 glass-dark rounded-2xl group border border-white/5 hover:border-navy-900/50 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-navy-900/40 flex items-center justify-center p-2 text-navy-400 group-hover:bg-navy-600 group-hover:text-white transition-all">
                    <Building2 className="w-full h-full" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-100">{item.name}</h4>
                </div>
                <p className="text-slate-500 leading-relaxed text-sm group-hover:text-slate-400 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ACADEMIC EXTRACURRICULARS */}
      <section className="py-32 px-6 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-navy-600/5 blur-[150px] rounded-full" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/3">
               <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 className="space-y-6"
               >
                 <Users className="w-16 h-16 text-navy-500 mb-8" />
                 <h2 className="text-5xl font-bold text-white tracking-tight">Ecosystem Leadership</h2>
                 <p className="text-slate-400 text-lg leading-relaxed">Scaling startups and coordinating mentorship frameworks at Jai Hind College IAC.</p>
               </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-full md:w-2/3 glass p-10 md:p-16 rounded-[40px] relative"
            >
              <h3 className="text-3xl font-bold text-white mb-10">Incubator and Accelerator Centre (IAC)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  'Led onboarding of 60+ companies',
                  'Coordinated with 25+ mentors and founders',
                  'Managed a 10-member team',
                  'Built structured outreach systems'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 transition-transform hover:translate-x-2">
                    <div className="w-4 h-4 rounded boder-2 border-navy-500 flex items-center justify-center p-0.5">
                      <CheckCircle2 className="w-full h-full text-navy-500" />
                    </div>
                    <p className="text-slate-300 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. SKILLS AND TOOLS */}
      <section className="py-32 px-6 bg-[#000814]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Competency Map</h2>
             <div className="h-1 w-20 bg-navy-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SKILLS.map((set, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.15 }}
                className="p-10 glass-dark rounded-3xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-navy-600/5 blur-3xl -mr-10 -mt-10" />
                <Wrench className="w-10 h-10 text-navy-400 mb-8" />
                <h3 className="text-xl font-bold text-white mb-8 tracking-widest uppercase">{set.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {set.items.map((skill, sIdx) => (
                    <span key={sIdx} className="px-5 py-2 bg-navy-950/40 text-slate-300 text-sm font-medium rounded-full border border-white/5 hover:border-navy-600 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. EDUCATION */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-8 mb-20">
            <GraduationCap className="w-16 h-16 text-navy-600 opacity-20" />
            <h2 className="text-5xl font-bold text-white">Education</h2>
          </div>
          
          <div className="space-y-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass p-12 rounded-[40px] flex flex-col md:flex-row gap-10 items-center hover:shadow-[0_0_50px_rgba(0,115,255,0.1)] transition-shadow duration-700"
            >
              <div className="w-24 h-24 bg-navy-600 rounded-2xl flex items-center justify-center p-6 text-white shadow-xl shadow-navy-900/40">
                <GraduationCap className="w-full h-full" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-2">Jai Hind College, Mumbai</h3>
                <p className="text-navy-400 text-xl font-semibold mb-2 italic">Bachelor’s in Digital Strategy</p>
                <div className="inline-block px-4 py-1 rounded-full bg-navy-600/20 text-navy-400 font-bold border border-navy-600/30">
                  CGPA: 9.64
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-2xl flex items-center gap-6">
                <div className="w-2 h-12 bg-navy-800 rounded-full" />
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Mithibai Junior College</h4>
                  <p className="text-slate-500 text-sm">Science & Management</p>
                </div>
              </div>
              <div className="glass p-8 rounded-2xl flex items-center gap-6">
                <div className="w-2 h-12 bg-navy-800 rounded-full" />
                <div>
                  <h4 className="text-white font-bold text-xl mb-1">Kendriya Vidyalaya</h4>
                  <p className="text-slate-500 text-sm">Secondary Education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CONTACT - PREMIUM CTA */}
      <section id="contact" className="py-40 px-6 bg-gradient-to-t from-navy-950/40 to-[#000814] relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-navy-600/10 blur-[150px] rounded-full" />
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tight leading-tight max-w-4xl mx-auto text-glow">
              Let’s build systems that <span className="text-navy-500">deliver results.</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 mb-20">
              <div className="p-10 glass-dark rounded-3xl group hover:border-navy-500 transition-all duration-500">
                <Mail className="w-10 h-10 text-navy-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-slate-400 mb-2 uppercase tracking-widest text-xs">Email</h3>
                <a href="mailto:ria.sinha0707@gmail.com" className="text-2xl font-bold text-white hover:text-navy-400 transition-colors">
                  ria.sinha0707
                </a>
              </div>
              <div className="p-10 glass-dark rounded-3xl group hover:border-navy-500 transition-all duration-500">
                <Phone className="w-10 h-10 text-navy-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-slate-400 mb-2 uppercase tracking-widest text-xs">Call</h3>
                <p className="text-2xl font-bold text-white">+91 9892546077</p>
              </div>
              <div className="p-10 glass-dark rounded-3xl group hover:border-navy-500 transition-all duration-500">
                <Linkedin className="w-10 h-10 text-navy-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-slate-400 mb-2 uppercase tracking-widest text-xs">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/ria-sinha-70b519318?originalSubdomain=in" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-2xl font-bold text-white hover:text-navy-400 transition-colors"
                >
                  Connect 
                </a>
              </div>
            </div>

            <button className="px-16 py-6 bg-navy-600 hover:bg-navy-500 text-white rounded-full font-black text-xl transition-all group shadow-2xl shadow-navy-600/30 hover:scale-105 active:scale-95">
              Launch Partnership
              <ArrowRight className="inline-block ml-3 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-black border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
           <h4 className="text-2xl font-black text-white italic tracking-tighter">Ria Sinha.</h4>
           <p className="text-slate-600 text-xs font-bold uppercase tracking-[0.3em]">Strategy • Growth • Analytics</p>
        </div>
        <p className="text-[10px] text-slate-700 uppercase tracking-[0.5em]">
          © {new Date().getFullYear()} All Rights Reserved. Mumbai, IND.
        </p>
      </footer>
    </div>
  );
}
