import { motion } from "framer-motion"
import RealNavbar from "@/components/ui/navbar"
import Footer from "@/components/ui/footer"
import { TiltCard } from "@/components/ui/tilt-card"
import {
  Code2, Database, Cloud, Terminal, Brain, Zap,
  BookOpen, Target, Medal, Trophy, Rocket, Layers,
  GraduationCap, Users, Sparkles, Package, Server,
  ChevronRight,
} from "lucide-react"

// ─── Data ─────────────────────────────────────────────────────────────────────

const SKILL_GRID = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: ["C", "C++", "Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
    gradient: "from-purple-600 to-indigo-700",
    span: "lg:col-span-3",
  },
  {
    title: "AI / Machine Learning",
    icon: Brain,
    items: ["LLMs", "Transformers", "HuggingFace", "RAG", "LangChain", "LangGraph", "NLP"],
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    span: "lg:col-span-3",
  },
  {
    title: "Libraries & Frameworks",
    icon: Package,
    items: ["React", "Next.js", "Node.js", "FastAPI", "NumPy", "Pandas"],
    gradient: "from-emerald-600 to-teal-700",
    span: "lg:col-span-2",
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "Supabase", "Prisma"],
    gradient: "from-orange-600 to-amber-700",
    span: "lg:col-span-2",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS EC2", "Docker", "Vercel"],
    gradient: "from-cyan-600 to-blue-700",
    span: "lg:col-span-2",
  },
  {
    title: "Technical Skills",
    icon: Zap,
    items: ["Data Structures & Algorithms", "Machine Learning", "Socket Programming", "CUDA"],
    gradient: "from-blue-600 to-indigo-700",
    span: "lg:col-span-3",
  },
  {
    title: "Developer Tools",
    icon: Terminal,
    items: ["Git", "GitHub", "Neovim", "VS Code", "Linux"],
    gradient: "from-slate-600 to-gray-700",
    span: "lg:col-span-3",
  },
]

const COURSES = [
  { name: "Linear Algebra & Advanced Calculus", grade: null },
  { name: "Probability and Statistics", grade: null },
  { name: "Optimization Models and Algorithms", grade: null },
  { name: "Algorithms-I", grade: "A" },
  { name: "Andrew NG ML/DL Course", grade: null },
  { name: "Programming and Data Structures", grade: "EX" },
]

const ACHIEVEMENTS = [
  {
    icon: Target,
    title: "JEE Main 2024",
    description: "99.76 percentile among 15 lakh qualified candidates",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Trophy,
    title: "JEE Advanced 2024",
    description: "All India Rank 3170 — Top 1.8% among 180K+ candidates",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Medal,
    title: "InterIIT Tech Meet 14.0",
    description: "Silver Medal for ObserveAI Problem Statement",
    gradient: "from-slate-500 to-slate-600",
  },
  {
    icon: Sparkles,
    title: "KDSH 2026",
    description: "8th place among 6,000+ participants from colleges across India",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: BookOpen,
    title: "Algorithms-I Excellence",
    description: "A grade — solid command of algorithm design and analysis",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Code2,
    title: "Programming Mastery",
    description: "EX grade in Programming and Data Structures (theory + lab)",
    gradient: "from-purple-500 to-violet-600",
  },
]

const ACTIVITIES = [
  {
    icon: Users,
    role: "NSO Football Team",
    org: "IIT Kharagpur",
    period: "2024 – Present",
    desc: "Representing the institute in national-level inter-collegiate competitions",
    gradient: "from-green-600 to-emerald-700",
  },
  {
    icon: Layers,
    role: "Web Developer",
    org: "KodeinKGP – DeKodeX Event",
    period: "2024",
    desc: "Built event website supporting 700+ participants during peak traffic",
    gradient: "from-blue-600 to-cyan-700",
  },
  {
    icon: Target,
    role: "Point of Contact (POC)",
    org: "Tech Traid Hackathon",
    period: "2024",
    desc: "Led 36-hour hackathon by KodeinKGP — logistics, judging, and execution",
    gradient: "from-purple-600 to-pink-700",
  },
]

const EDUCATION = [
  {
    school: "Indian Institute of Technology Kharagpur",
    degree: "B.Tech, Electrical Engineering",
    period: "Jul 2024 – Present",
    score: "CGPA: 9.21 / 10",
    accent: "border-purple-500",
    dot: "bg-purple-500",
    badge: "bg-purple-600",
  },
  {
    school: "Narayana JR College",
    degree: "Class XII (SSC)",
    period: "2024",
    score: "98.3%",
    accent: "border-blue-500",
    dot: "bg-blue-500",
    badge: "bg-blue-600",
  },
  {
    school: "Narayana E.M High School",
    degree: "Class X (SSC)",
    period: "2022",
    score: "95.5%",
    accent: "border-emerald-500",
    dot: "bg-emerald-500",
    badge: "bg-emerald-600",
  },
]

// ─── Animation presets ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: "easeOut" },
  }),
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

// ─── Small helpers ────────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.22em] text-purple-400 font-medium mb-2">
      {children}
    </p>
  )
}

function SectionHeading({ label, title, icon: Icon }) {
  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <SectionLabel>{label}</SectionLabel>
      <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
        <Icon size={26} className="text-purple-400 flex-shrink-0" />
        {title}
      </h2>
    </motion.div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function About() {
  return (
    <div className="w-full bg-slate-950 text-white min-h-screen">
      <RealNavbar variant="dark" />

      {/* ── Hero banner ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0d0820] to-black" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-purple-700/15 blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full bg-cyan-600/10 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Get to know me</SectionLabel>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Me
              </span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Second-year EE undergraduate at IIT Kharagpur, building AI systems at the
              intersection of research and engineering.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-24">

        {/* ── Introduction ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TiltCard
            tiltLimit={5}
            scale={1.01}
            className="rounded-2xl border border-purple-500/25 bg-white/[0.03] p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center flex-shrink-0">
                <Sparkles size={19} className="text-white" />
              </div>
              <div>
                <SectionLabel>Introduction</SectionLabel>
                <h2 className="text-xl font-bold text-white">Who I am</h2>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              I am a second-year undergraduate at the{" "}
              <span className="text-purple-400 font-semibold">Indian Institute of Technology Kharagpur</span>,
              pursuing a Bachelor's degree in Electrical Engineering with a strong academic focus on
              machine learning, algorithms, and large-scale AI systems. My journey in tech is driven
              by curiosity and a passion for building intelligent systems that solve real-world problems.
            </p>
            <p className="text-gray-400 leading-relaxed text-[15px] mt-4">
              My primary interests lie in{" "}
              <span className="text-cyan-400 font-medium">applied AI</span>,{" "}
              <span className="text-cyan-400 font-medium">natural language processing</span>, and{" "}
              <span className="text-cyan-400 font-medium">retrieval-augmented generation</span> — working at
              the intersection of theory and systems to build models that are not only accurate, but
              also scalable and production-ready.
            </p>
          </TiltCard>
        </motion.section>

        {/* ── Skills ── */}
        <section>
          <SectionHeading label="What I work with" title="Skills & Expertise" icon={Code2} />
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {SKILL_GRID.map((group, i) => {
              const Icon = group.icon
              return (
                <motion.div key={group.title} variants={fadeUp} custom={i} className={`${group.span} sm:col-span-2`}>
                  <TiltCard
                    tiltLimit={7}
                    scale={1.02}
                    className={`h-full rounded-2xl bg-gradient-to-br ${group.gradient} p-6 border border-white/10 shadow-lg`}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Icon size={18} className="text-white/90" />
                      <h3 className="font-bold text-white text-sm">{group.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map(item => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-lg text-[11px] bg-white/15 text-white/90 border border-white/20 hover:bg-white/25 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </TiltCard>
                </motion.div>
              )
            })}
          </motion.div>
        </section>

        {/* ── Education ── */}
        <section>
          <SectionHeading label="Academic background" title="Education" icon={GraduationCap} />
          <div className="relative pl-6 space-y-6">
            {/* Vertical line */}
            <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-emerald-500 rounded-full" />

            {EDUCATION.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative"
              >
                {/* Dot */}
                <div className={`absolute -left-[29px] top-5 w-4 h-4 rounded-full ${edu.dot} border-4 border-slate-950 shadow-md`} />
                <TiltCard
                  tiltLimit={4}
                  scale={1.01}
                  className={`rounded-xl border-l-4 ${edu.accent} bg-white/[0.03] border border-white/[0.07] p-6`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-white font-bold text-base">{edu.school}</h3>
                    <span className="text-gray-500 text-sm">{edu.period}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{edu.degree}</p>
                  <span className={`inline-block ${edu.badge} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                    {edu.score}
                  </span>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Coursework ── */}
        <section>
          <SectionHeading label="Academic depth" title="Relevant Coursework" icon={BookOpen} />
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {COURSES.map((course, i) => (
              <motion.div key={i} variants={fadeUp} custom={i}>
                <TiltCard
                  tiltLimit={8}
                  scale={1.03}
                  className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-5 h-full"
                >
                  <div className="flex items-start gap-3">
                    <GraduationCap size={16} className="text-purple-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 text-sm font-medium leading-snug">{course.name}</p>
                      {course.grade && (
                        <span className="inline-block mt-2 bg-purple-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                          Grade: {course.grade}
                        </span>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ── Achievements ── */}
        <section>
          <SectionHeading label="Recognition" title="Awards & Achievements" icon={Trophy} />
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {ACHIEVEMENTS.map((a, i) => {
              const Icon = a.icon
              return (
                <motion.div key={i} variants={fadeUp} custom={i}>
                  <TiltCard
                    tiltLimit={8}
                    scale={1.03}
                    className={`rounded-xl bg-gradient-to-br ${a.gradient} p-5 border border-white/10 shadow-lg h-full`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 border border-white/20">
                        <Icon size={18} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-sm mb-1">{a.title}</h3>
                        <p className="text-white/75 text-xs leading-relaxed">{a.description}</p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              )
            })}
          </motion.div>
        </section>

        {/* ── Extracurricular ── */}
        <section>
          <SectionHeading label="Beyond the classroom" title="Extracurricular" icon={Rocket} />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {ACTIVITIES.map((act, i) => {
              const Icon = act.icon
              return (
                <motion.div key={i} variants={fadeUp} custom={i}>
                  <TiltCard
                    tiltLimit={8}
                    scale={1.03}
                    className={`rounded-xl bg-gradient-to-br ${act.gradient} p-6 border border-white/10 shadow-lg h-full`}
                  >
                    <Icon size={28} className="text-white mb-4 opacity-90" />
                    <h3 className="font-bold text-white text-base mb-0.5">{act.role}</h3>
                    <p className="text-white/80 text-sm font-medium mb-1">{act.org}</p>
                    <p className="text-white/50 text-xs mb-3">{act.period}</p>
                    <p className="text-white/80 text-sm leading-relaxed">{act.desc}</p>
                  </TiltCard>
                </motion.div>
              )
            })}
          </motion.div>
        </section>

        {/* ── Beyond academics ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TiltCard
            tiltLimit={4}
            scale={1.01}
            className="rounded-2xl border border-cyan-500/25 bg-white/[0.03] p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                <Sparkles size={19} className="text-white" />
              </div>
              <div>
                <SectionLabel>Philosophy</SectionLabel>
                <h2 className="text-xl font-bold text-white">Beyond Academics</h2>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              Beyond the classroom and coding sessions, I actively participate in technical societies,
              hackathons, and sports. I believe in the importance of a balanced lifestyle and enjoy
              collaborating with like-minded individuals on ambitious projects.
            </p>
            <p className="text-gray-400 leading-relaxed text-[15px] mt-4">
              I value{" "}
              <span className="text-cyan-400 font-medium">clean engineering</span>,{" "}
              <span className="text-cyan-400 font-medium">reproducibility</span>, and{" "}
              <span className="text-cyan-400 font-medium">thoughtful system design</span>.
              Whether writing documentation, optimising algorithms, or designing interfaces —
              every problem gets attention to detail and a commitment to excellence.
            </p>
          </TiltCard>
        </motion.section>

      </div>

      <Footer variant="dark" />
    </div>
  )
}
