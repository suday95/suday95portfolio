import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Footer from "@/components/ui/footer"
import RealNavbar from "@/components/ui/navbar"
import { TiltCard } from "@/components/ui/tilt-card"
import {
  Brain, Cpu, Code2, Medal, ChevronRight, ArrowUpRight,
} from "lucide-react"

import observeaiImg from "../assets/observeai.png"
import roverImg from "../assets/rover.png"
import aidebImg from "../assets/aidebimage.png"

const PROJECTS = [
  {
    title: "ObserveAI – Domain-specific RAG System",
    subtitle: "InterIIT Tech Meet 14.0",
    award: "Silver Medal",
    awardIcon: Medal,
    description:
      "Production-grade RAG chatbot for large-scale transcript analysis with real-time responses and authenticated access. Designed an end-to-end pipeline with efficient chunking and transaction-ID based retrieval across 3,000+ transcripts.",
    points: [
      "End-to-end RAG pipeline with transaction-ID based retrieval for 3,000+ transcripts",
      "FastAPI backend with Socket.IO for scalable real-time query handling",
      "Next.js + TypeScript dashboard with authentication and Supabase-backed storage",
    ],
    tech: ["Next.js", "FastAPI", "RAG", "Supabase", "Socket.IO", "LangChain"],
    image: observeaiImg,
    gradient: "from-cyan-500/20 to-blue-600/20",
    accent: "border-cyan-500/40",
    glow: "shadow-cyan-500/10",
    icon: Brain,
    github: "https://github.com/suday95",
  },
  {
    title: "Autonomous Rover Monitoring System",
    subtitle: "InterIIT Tech Meet 14.0",
    award: null,
    description:
      "Real-time monitoring and visualization platform for an autonomous rover. Streamed live telemetry, status, and camera feeds through a low-latency WebSocket pipeline integrated with Raspberry Pi via ROS Bridge.",
    points: [
      "Live telemetry + camera feeds via low-latency WebSocket pipeline",
      "Raspberry Pi ↔ backend integration using ROS Bridge",
      "Web-based real-time rover position and movement visualization",
    ],
    tech: ["ROS", "WebSockets", "Raspberry Pi", "React", "Python"],
    image: roverImg,
    gradient: "from-emerald-500/20 to-teal-600/20",
    accent: "border-emerald-500/40",
    glow: "shadow-emerald-500/10",
    icon: Cpu,
    github: "https://github.com/suday95",
  },
  {
    title: "AI Debate Judge",
    subtitle: "Intra-Soc Hackathon",
    award: null,
    description:
      "Automated debate evaluation system using agentic AI and retrieval-augmented generation. RoBERTa-powered RAG pipeline for argument evaluation and ranking, achieving MAE ≈ 0.62 and Spearman ≈ 0.68.",
    points: [
      "RoBERTa-powered RAG pipeline for argument evaluation and ranking",
      "MAE ≈ 0.62, Spearman correlation ≈ 0.68",
      "Full-stack deployment on HuggingFace Spaces with Supabase backend",
    ],
    tech: ["Transformers", "RAG", "HuggingFace", "Supabase", "RoBERTa"],
    image: aidebImg,
    gradient: "from-purple-500/20 to-indigo-600/20",
    accent: "border-purple-500/40",
    glow: "shadow-purple-500/10",
    icon: Code2,
    github: "https://github.com/suday95",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" },
  }),
}

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.22em] text-purple-400 font-medium mb-2">
      {children}
    </p>
  )
}

export default function Projects() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const timelineRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return
      const rect = timelineRef.current.getBoundingClientRect()
      const top = rect.top + window.scrollY
      const relativeScroll = window.scrollY + window.innerHeight / 2 - top
      const progress = Math.min(Math.max((relativeScroll / rect.height) * 100, 0), 100)
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="w-full bg-slate-950 text-white min-h-screen">
      <RealNavbar variant="dark" />

      {/* ── Hero banner ── */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0d0820] to-black" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-purple-700/15 blur-[140px]" />
          <div className="absolute top-0 right-0 w-[360px] h-[360px] rounded-full bg-cyan-600/10 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>What I've built</SectionLabel>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Projects &{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Work
              </span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              End-to-end systems from hackathons and research — spanning RAG pipelines,
              real-time robotics, and AI evaluation frameworks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="relative pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative flex flex-col items-center" ref={timelineRef}>

            {/* Timeline track */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-[3px] bg-white/[0.06] rounded-full hidden lg:block overflow-hidden">
              <div
                className="absolute inset-x-0 top-0 w-full rounded-full bg-gradient-to-b from-purple-500 via-cyan-400 to-purple-500 transition-all duration-300"
                style={{
                  height: `${scrollProgress}%`,
                  boxShadow: "0 0 16px rgba(168,85,247,0.6)",
                }}
              />
            </div>

            {PROJECTS.map((project, index) => {
              const Icon = project.icon
              const AwardIcon = project.awardIcon

              return (
                <motion.div
                  key={index}
                  className="relative w-full mb-16 lg:mb-20"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                  custom={0}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-20 top-10 hidden lg:flex">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${project.gradient.replace("/20", "")} border-4 border-slate-950 shadow-lg`} />
                  </div>

                  <TiltCard
                    tiltLimit={6}
                    scale={1.02}
                    className={`rounded-2xl border ${project.accent} bg-white/[0.03] backdrop-blur-sm shadow-xl ${project.glow} overflow-hidden`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr]">

                      {/* Image panel */}
                      <div className={`relative h-56 lg:h-auto bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-90 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Overlay gradient to blend into card */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent lg:via-transparent lg:to-slate-950/80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 lg:from-transparent to-transparent" />

                        {/* Award badge */}
                        {project.award && (
                          <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-400/40 text-yellow-300 text-xs font-semibold backdrop-blur-sm">
                            {AwardIcon && <AwardIcon size={12} />}
                            {project.award}
                          </div>
                        )}
                      </div>

                      {/* Content panel */}
                      <div className="p-7 flex flex-col gap-5">

                        {/* Header */}
                        <div>
                          <div className="flex items-start justify-between gap-3 mb-1">
                            <h2 className="text-xl font-bold text-white leading-snug">{project.title}</h2>
                            <div className={`w-9 h-9 flex-shrink-0 rounded-xl bg-gradient-to-br ${project.gradient.replace("/20", "/40")} border ${project.accent} flex items-center justify-center`}>
                              <Icon size={17} className="text-white" />
                            </div>
                          </div>
                          <p className="text-sm text-purple-400 font-medium">{project.subtitle}</p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-[14px] leading-relaxed">{project.description}</p>

                        {/* Points */}
                        <ul className="space-y-2">
                          {project.points.map((pt, i) => (
                            <li key={i} className="flex items-start gap-2 text-[13px] text-gray-300">
                              <ChevronRight size={14} className="text-purple-400 flex-shrink-0 mt-0.5" />
                              {pt}
                            </li>
                          ))}
                        </ul>

                        {/* Tech + link */}
                        <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map(t => (
                              <span
                                key={t}
                                className="px-2.5 py-1 rounded-full text-[11px] bg-white/[0.07] text-gray-300 border border-white/[0.08]"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                          >
                            View code
                            <ArrowUpRight size={13} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer variant="dark" />
    </div>
  )
}
