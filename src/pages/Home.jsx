import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import Autoplay from "embla-carousel-autoplay"
import {
  Download, Sparkles, Code2, Brain, Database, Globe, Cpu,
  FlaskConical, GraduationCap, Star, Zap, Award, ChevronDown,
  Github, Linkedin, Mail,
} from "lucide-react"

import RealNavbar from "@/components/ui/navbar.jsx"
import Footer from "@/components/ui/footer.jsx"
import { SplineScene } from "@/components/ui/splite.jsx"
import { TiltCard } from "@/components/ui/tilt-card.jsx"
import { ContainerScroll } from "@/components/ui/container-scroll-animation.jsx"
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline.jsx"
import {
  Carousel, CarouselContent, CarouselItem,
  CarouselPrevious, CarouselNext,
} from "@/components/ui/carousel"

import image_1 from "../assets/image_1.png"
import profile from "../assets/profile.jpeg"
import image1 from "../assets/image.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.jpeg"
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.png"

// ─── Paste your Spline public scene URL here ──────────────────────────────────
// Spline → Export → "3D Viewer" tab → toggle "Public" → copy the .splinecode URL
const ROBOT_SCENE = "https://prod.spline.design/dSSdkRrZIyREqfyQ/scene.splinecode"

// ─── Data ─────────────────────────────────────────────────────────────────────

const QUOTES = [
  "Good systems make good ideas matter.",
  "Clarity beats complexity.",
  "Models learn. Systems decide.",
  "Build it clean. Make it scale.",
  "Engineering is choosing the right trade-offs.",
]

const TIMELINE_DATA = [
  {
    id: 1, title: "IIT Kharagpur",
    content: "B.Tech Electrical Engineering, 2nd year. Strong focus on signals, systems, and computational theory.",
    icon: GraduationCap, status: "in-progress", energy: 85,
    date: "2023 – Now", relatedIds: [2, 3],
  },
  {
    id: 2, title: "ML Research",
    content: "Transformers, computer vision, efficient inference. Research-grade model implementations.",
    icon: Brain, status: "in-progress", energy: 92,
    date: "2024 – Now", relatedIds: [1, 4, 5],
  },
  {
    id: 3, title: "Systems & HPC",
    content: "CUDA programming, Linux internals, memory-efficient computing and hardware-aware ML.",
    icon: Cpu, status: "completed", energy: 76,
    date: "2024", relatedIds: [1, 4],
  },
  {
    id: 4, title: "AI Projects",
    content: "End-to-end AI applications — raw datasets to production-ready APIs. Several shipped.",
    icon: Code2, status: "completed", energy: 95,
    date: "2023 – 2024", relatedIds: [2, 3, 6],
  },
  {
    id: 5, title: "Open Source",
    content: "Contributing to ML tooling, releasing paper reproductions and educational content.",
    icon: Star, status: "in-progress", energy: 68,
    date: "2024 – Now", relatedIds: [2, 6],
  },
  {
    id: 6, title: "Achievements",
    content: "Top placements in national hackathons, coding contests, and academic competitions.",
    icon: Award, status: "completed", energy: 88,
    date: "2023 – 2024", relatedIds: [4, 1],
  },
]

const SKILLS = [
  {
    title: "Machine Learning", icon: Brain,
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face"],
    gradient: "from-purple-500 to-indigo-600", border: "border-purple-500/30",
  },
  {
    title: "Systems & HPC", icon: Cpu,
    items: ["CUDA", "C++17", "Linux", "OpenMP"],
    gradient: "from-cyan-400 to-blue-600", border: "border-cyan-500/30",
  },
  {
    title: "Data Science", icon: Database,
    items: ["NumPy", "Pandas", "Matplotlib", "SQL"],
    gradient: "from-emerald-400 to-teal-600", border: "border-emerald-500/30",
  },
  {
    title: "Web Development", icon: Globe,
    items: ["React", "Vite", "Tailwind CSS", "FastAPI"],
    gradient: "from-orange-400 to-red-500", border: "border-orange-500/30",
  },
  {
    title: "AI / LLMs", icon: Zap,
    items: ["Transformers", "LoRA / PEFT", "RAG", "vLLM"],
    gradient: "from-pink-500 to-rose-600", border: "border-pink-500/30",
  },
  {
    title: "Research", icon: FlaskConical,
    items: ["Computer Vision", "NLP", "Optimisation", "Paper impl."],
    gradient: "from-violet-500 to-purple-700", border: "border-violet-500/30",
  },
]

const STATS = [
  { label: "Year", value: "2nd" },
  { label: "Institute", value: "IIT KGP" },
  { label: "Department", value: "Elec. Engg." },
  { label: "Focus", value: "AI / ML" },
]

// ─── Animation presets ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" },
  }),
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

// ─── Typewriter quote ─────────────────────────────────────────────────────────

function Quote() {
  const [text, setText] = useState("")
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = QUOTES[quoteIndex]
    let timeout
    if (!isDeleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 45)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 1400)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 28)
      } else {
        setIsDeleting(false)
        setQuoteIndex(prev => (prev + 1) % QUOTES.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [text, isDeleting, quoteIndex])

  return (
    <p className="text-gray-400 italic text-sm md:text-base mt-3 h-[1.6em] flex items-center gap-2">
      <Sparkles className="text-purple-400 flex-shrink-0" size={14} />
      <span>"{text}"</span>
      <span className="animate-pulse text-cyan-400">|</span>
    </p>
  )
}

// ─── Section label ────────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.22em] text-purple-400 font-medium mb-2">
      {children}
    </p>
  )
}

// ─── Home ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 1800, stopOnInteraction: true }))

  return (
    <div className="w-full bg-slate-950 text-white">
      <RealNavbar variant="dark" />

      {/* ═══════════════════════════════════════════════════════════
          HERO  –  Spline robot is the main visual
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0d0820] to-black" />

        {/* Ambient colour blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-purple-700/20 blur-[160px]" />
          <div className="absolute bottom-0 right-0 w-[440px] h-[440px] rounded-full bg-cyan-600/15 blur-[140px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-indigo-800/10 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-6 items-center min-h-[calc(100vh-5rem)]">

            {/* ── Left: text ── */}
            <motion.div
              className="space-y-7 order-2 lg:order-1 flex flex-col justify-center"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              {/* Status badge */}
              <motion.div variants={fadeUp} custom={0}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Open to research &amp; internship opportunities
                </span>
              </motion.div>

              {/* Logo accent */}
              <motion.div variants={fadeUp} custom={1} className="flex items-center gap-3">
                <img src={image_1} className="w-10 h-14 object-cover opacity-80" alt="logo" />
                <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
              </motion.div>

              {/* Name + quote */}
              <motion.div variants={fadeUp} custom={2}>
                <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-white leading-[1.08] tracking-tight">
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Suday Nandan
                  </span>
                </h1>
                <Quote />
              </motion.div>

              {/* Bio */}
              <motion.p
                variants={fadeUp} custom={3}
                className="text-gray-400 text-[15px] leading-relaxed max-w-md"
              >
                Second-year undergrad at{" "}
                <span className="text-cyan-400 font-semibold">IIT Kharagpur</span>{" "}
                (Electrical Engineering). I build intelligent systems where ML meets robust
                engineering — from CUDA kernels to production-ready AI pipelines.
              </motion.p>

              {/* CTA buttons */}
              <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-3">
                <a
                  href="https://drive.google.com/file/d/1IJv0zsOkkyO9hke5gzPLhxvE4WAOKQz4/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-600/30 hover:shadow-purple-500/40 hover:scale-105"
                >
                  <Download size={16} />
                  Download CV
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center gap-2 border border-white/15 text-gray-300 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/8 hover:border-white/30 transition-all"
                >
                  View Projects
                </a>
              </motion.div>

              {/* Socials */}
              <motion.div variants={fadeUp} custom={5} className="flex gap-3">
                {[
                  { href: "https://github.com/suday95", Icon: Github, label: "GitHub" },
                  { href: "https://linkedin.com/in/sudaynandan", Icon: Linkedin, label: "LinkedIn" },
                  { href: "mailto:sudaynandan95@kgpian.iitkgp.ac.in", Icon: Mail, label: "Email" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    title={label}
                    className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/12 hover:border-white/25 transition-all"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Right: Spline 3-D robot (the hero visual) ── */}
            <motion.div
              className="order-1 lg:order-2 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Glow ring behind robot */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-radial from-purple-600/15 via-indigo-600/8 to-transparent blur-2xl pointer-events-none" />

              <div className="h-[340px] sm:h-[480px] lg:h-[620px] xl:h-[680px] w-full rounded-3xl overflow-hidden relative">
                <SplineScene scene={ROBOT_SCENE} className="w-full h-full" />

                {/* Bottom fade so robot blends into page */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20">
          <span className="text-[9px] uppercase tracking-[0.25em]">scroll</span>
          <ChevronDown size={18} className="animate-bounce" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          STATS STRIP
      ═══════════════════════════════════════════════════════════ */}
      <motion.section
        className="py-7 bg-black/60 border-y border-white/[0.07]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {STATS.map(({ label, value }) => (
            <div key={label}>
              <p className="text-2xl sm:text-3xl font-bold text-white">{value}</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-gray-600 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════════════════════
          ABOUT ME — ContainerScroll
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-slate-950">
        <ContainerScroll
          titleComponent={
            <div className="text-center space-y-4 px-4">
              <SectionLabel>Who I am</SectionLabel>
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Engineer.{" "}
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Researcher.
                </span>{" "}
                Builder.
              </h2>
              <p className="text-gray-500 text-sm">Scroll to explore ↓</p>
            </div>
          }
        >
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-4 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">

              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <img
                    src={profile}
                    alt="Suday Nandan"
                    className="w-20 h-20 rounded-full object-cover border-2 border-purple-500/50 shadow-xl shadow-purple-500/20 flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-white font-bold text-lg leading-tight">Suday Nandan Reddy</h3>
                    <p className="text-purple-400 text-sm">Samala · IIT Kharagpur</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Passionate about building AI systems that work in production. When not coding,
                  I&apos;m reading papers, competing in hackathons, or exploring new research
                  directions at the intersection of theory and systems.
                </p>
                <div className="flex gap-3">
                  {[
                    { href: "https://github.com/suday95", label: "GitHub" },
                    { href: "https://linkedin.com/in/sudaynandan", label: "LinkedIn" },
                  ].map(({ href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-white/8 text-white text-xs hover:bg-white/15 transition-colors border border-white/10"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                {[
                  { label: "Interests", value: "ML / AI, Systems, Research" },
                  { label: "Languages", value: "Python, C++, JavaScript" },
                  { label: "Frameworks", value: "PyTorch, React, FastAPI" },
                  { label: "Currently", value: "AI pipelines @ IIT KGP" },
                  { label: "Looking for", value: "Research & internship roles" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex justify-between items-center py-2.5 border-b border-white/[0.06]"
                  >
                    <span className="text-gray-600 text-xs uppercase tracking-wider">{label}</span>
                    <span className="text-white text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ContainerScroll>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SKILLS — TiltCards
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>What I work with</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Skills</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {SKILLS.map((skill, i) => {
              const Icon = skill.icon
              return (
                <motion.div key={skill.title} variants={fadeUp} custom={i}>
                  <TiltCard
                    className={`rounded-2xl border ${skill.border} bg-white/[0.03] p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full`}
                  >
                    <div className="space-y-4">
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center shadow-md`}>
                        <Icon size={20} className="text-white" />
                      </div>
                      <h3 className="text-white font-bold text-base">{skill.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map(item => (
                          <span
                            key={item}
                            className="px-2.5 py-1 rounded-full text-[11px] bg-white/[0.07] text-gray-400 border border-white/[0.08]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          JOURNEY — RadialOrbitalTimeline
      ═══════════════════════════════════════════════════════════ */}
      <section>
        <div className="pt-20 pb-4 text-center bg-slate-950">
          <SectionLabel>My story so far</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Journey</h2>
          <p className="text-gray-600 text-sm">Click a node to expand · click background to reset</p>
        </div>
        <RadialOrbitalTimeline timelineData={TIMELINE_DATA} />
      </section>

      {/* ═══════════════════════════════════════════════════════════
          HIGHLIGHTS — Carousel
      ═══════════════════════════════════════════════════════════ */}
      <motion.section
        className="py-24 bg-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Gallery</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Highlights &amp; Achievements</h2>
          </div>
          <Carousel
            plugins={[autoplay.current]}
            className="w-full"
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.play}
          >
            <CarouselContent>
              {[image1, image2, image5, image6, image3, image4].map((img, idx) => (
                <CarouselItem key={idx} className="pl-4">
                  <div className="rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/60">
                    <img src={img} alt={`Highlight ${idx + 1}`} className="w-full h-auto object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/8 border-white/15 text-white hover:bg-white/20 hover:text-white" />
            <CarouselNext className="right-2 bg-white/8 border-white/15 text-white hover:bg-white/20 hover:text-white" />
          </Carousel>
        </div>
      </motion.section>

      <Footer variant="dark" />
    </div>
  )
}
