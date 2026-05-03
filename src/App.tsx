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

const LOGOS = [
  { name: 'KPMG', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/KPMG_logo.svg/2560px-KPMG_logo.svg.png' },
  { name: 'Axis Bank', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Axis_Bank_logo.svg/2560px-Axis_Bank_logo.svg.png' },
  { name: 'Zion', url: 'https://logo.clearbit.com/zionmarketresearch.com' },
  { name: 'Greensole', url: 'https://logo.clearbit.com/greensole.com' },
  { name: 'Finnet Media', url: 'https://logo.clearbit.com/finnetmedia.com' },
  { name: 'Quantum IT Innovation', url: 'https://logo.clearbit.com/quantumitinnovation.com' },
  { name: 'Purple Rain Techsafe', url: 'https://logo.clearbit.com/purple-rain.io' },
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
    <div className="bg-[#000814] text-slate-200 font-sans selection:bg-navy-500 selection:text-white">
      {/* 1. HERO SECTION */}
      <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-navy-900/10 to-transparent pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
              Ria Sinha
            </h1>
            <p className="text-xl md:text-2xl font-medium text-navy-400 uppercase tracking-widest">
              Digital Strategy and Growth
            </p>
          </div>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
            "I work on research-led digital strategy, combining analytics, content, and execution to improve acquisition, positioning, and scalable growth. 
            My experience spans financial services, digital marketing, and ecosystem operations, with a focus on structured problem-solving and measurable outcomes."
          </p>

          <div className="flex flex-wrap gap-6 text-sm md:text-base text-slate-500">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-navy-500" />
              Mumbai, India
            </div>
            <a href="mailto:ria.sinha0707@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-navy-500" />
              ria.sinha0707@gmail.com
            </a>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-navy-500" />
              +91 9892546077
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#work" 
              className="px-8 py-3 bg-navy-600 hover:bg-navy-500 text-white rounded-md font-semibold transition-all transform hover:-translate-y-1"
            >
              View Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-slate-700 hover:border-slate-500 text-white rounded-md font-semibold transition-all"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. BRANDS WORKED WITH */}
      <section id="brands" className="py-24 bg-black/50 border-y border-slate-900 px-6 md:px-12 lg:px-24">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-navy-400 mb-12 text-center">
          Brands Worked With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
          {LOGOS.map((logo, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex justify-center"
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                title={logo.name}
                className="max-h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. IMPACT */}
      <section id="work" className="py-24 px-6 md:px-12 lg:px-24 bg-[#000814]">
        <motion.div {...fadeIn} className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
            <BarChart3 className="text-navy-500" />
            The Work, in Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPACT_STATS.map((stat, idx) => (
              <div key={idx} className="p-8 bg-[#001229] border border-slate-900 rounded-lg hover:border-navy-900/50 transition-colors group">
                <p className="text-4xl font-bold text-navy-400 mb-2 group-hover:text-white transition-colors">
                  {stat.value}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 4. INTERNSHIPS AND EXPERIENCE */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...fadeIn} className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
            <Briefcase className="text-navy-500" />
            Internships & Experience
          </motion.h2>
          
          <div className="space-y-8">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="group relative pl-8 border-l border-slate-800 hover:border-navy-600 transition-colors py-4"
              >
                <div className="absolute left-0 top-6 w-3 h-3 -translate-x-[6.5px] rounded-full bg-slate-800 group-hover:bg-navy-600 transition-colors" />
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-navy-400 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-navy-500 font-medium tracking-wide">
                      {exp.role}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-slate-400">
                      <ChevronRight className="w-4 h-4 text-navy-500 mt-1 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ALSO WORKED WITH */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#000814]">
        <div className="max-w-5xl mx-auto">
          <motion.h3 {...fadeIn} className="text-2xl font-bold text-white mb-12 flex items-center gap-4">
            <Building2 className="text-navy-400 w-5 h-5" />
            Also Worked With
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALSO_WORKED_WITH.map((item, idx) => (
              <div key={idx} className="p-6 border border-slate-900 rounded hover:bg-navy-950/20 transition-all">
                <h4 className="font-bold text-slate-200 mb-1">{item.name}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ACADEMIC EXTRACURRICULARS */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...fadeIn} className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
            <Users className="text-navy-500" />
            Academic Extracurriculars
          </motion.h2>
          
          <motion.div {...fadeIn} className="p-8 bg-[#001229] border border-slate-900 rounded-xl relative overflow-hidden">
             <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Incubator and Accelerator Centre (IAC)</h3>
              <div className="h-0.5 w-12 bg-navy-500 mb-6" />
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Led onboarding of 60+ companies',
                  'Coordinated with 25+ mentors and founders',
                  'Managed a 10-member team',
                  'Built structured outreach and coordination systems'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-navy-500" />
                    {item}
                  </li>
                ))}
              </ul>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 7. SKILLS AND TOOLS */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#000814]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...fadeIn} className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
            <Wrench className="text-navy-500" />
            Skills & Tools
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {SKILLS.map((set, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-bold text-navy-400 uppercase tracking-widest">{set.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {set.items.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 bg-slate-900 text-slate-300 text-sm rounded border border-slate-800">
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
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.h2 {...fadeIn} className="text-3xl font-bold text-white mb-16 flex items-center gap-4">
            <GraduationCap className="text-navy-500" />
            Education
          </motion.h2>
          
          <div className="space-y-12">
            <motion.div {...fadeIn} className="flex gap-6 items-start">
              <div className="p-3 bg-navy-950 rounded-lg">
                <GraduationCap className="text-navy-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Jai Hind College, Mumbai</h3>
                <p className="text-navy-500">Bachelor’s in Digital Strategy</p>
                <p className="text-slate-400 mt-1">CGPA: 9.64</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-400">
              <div className="border-l border-slate-800 pl-6">
                <h4 className="text-white font-semibold">Mithibai Junior College</h4>
              </div>
              <div className="border-l border-slate-800 pl-6">
                <h4 className="text-white font-semibold">Kendriya Vidyalaya</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CONTACT */}
      <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-navy-950/20 border-t border-navy-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Let’s build structured growth systems that deliver measurable results.
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 mb-12">
              <div className="p-8 bg-black/40 rounded-xl border border-slate-900 space-y-4">
                <Mail className="w-8 h-8 text-navy-500 mx-auto" />
                <h3 className="text-xl font-semibold">Email</h3>
                <a href="mailto:ria.sinha0707@gmail.com" className="text-slate-400 hover:text-navy-400 transition-colors block">
                  ria.sinha0707@gmail.com
                </a>
              </div>
              <div className="p-8 bg-black/40 rounded-xl border border-slate-900 space-y-4">
                <Phone className="w-8 h-8 text-navy-500 mx-auto" />
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-slate-400">+91 9892546077</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 text-slate-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-navy-500" />
                Mumbai, India
              </div>
              <a 
                href="https://www.linkedin.com/in/ria-sinha-70b519318?originalSubdomain=in" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5 text-navy-500" />
                linkedin.com/in/ria-sinha-70b519318
              </a>
            </div>

            <div className="mt-16">
              <button className="px-12 py-4 bg-navy-600 hover:bg-navy-500 text-white rounded-full font-bold transition-all group shadow-lg shadow-navy-900/20">
                Send a Message
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 px-6 md:px-12 bg-black border-t border-slate-900 text-center">
        <p className="text-xs text-slate-600 uppercase tracking-widest">
          © {new Date().getFullYear()} Ria Sinha. Structured Strategy & Growth.
        </p>
      </footer>
    </div>
  );
}
