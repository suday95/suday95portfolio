import Footer from "@/components/ui/footer"
import RealNavbar from "@/components/ui/navbar"
import { useState, useEffect, useRef } from "react"
import aidebimage from "../assets/aidebimage.png"
import falcon from "../assets/image5.png"
import observeai from "../assets/observeai.png"
import rover from "../assets/rover.png"
const data = [
  {
    id: 1,
    heading:
      "ObserveAI PS | InterIIT Tech Meet 14.0 | RAG · FastAPI · Next.js · Supabase · Socket.IO",
    description:
      "Team Project (Nov 2025 – Dec 2025). Developed a domain-specific Retrieval-Augmented Generation (RAG) chatbot with real-time responses and authenticated access via a Next.js + TypeScript dashboard. Implemented a FastAPI backend integrating a custom RAG pipeline with Socket.IO to enable scalable, low-latency real-time query handling. Designed a robust chunking and storage pipeline for over 3,000 transcripts using Supabase Blobs, incorporating transaction-ID based retrieval to ensure accurate, traceable context reconstruction across sessions.",
    sponsor: "",
    image: observeai,
    sponsor_img: ""
  },

  {
    id: 2,
    heading:
      "Eternal PS | InterIIT Tech Meet 14.0 | Autonomous Rover | ROS · WebSockets · Raspberry Pi · React",
    description:
      "Team Project (Nov 2025 – Dec 2025). Developed a real-time monitoring and visualization system for an autonomous rover, enabling continuous tracking of system status, telemetry data, and spatial position. Built a web-based interface to stream live camera feeds and visualize rover movement and location in a 2D environment. Integrated Raspberry Pi hardware with the backend using ROS Bridge and implemented a low-latency WebSocket pipeline to support real-time data streaming under constrained network conditions.",
    sponsor: "",
    image: rover,
    sponsor_img: ""
  },

  {
    id: 3,
    heading:
      "FALCON | KDSH 2026 | ML Research | Long-context Verification · RAG · NLP",
    description:
      "Track A Finalist (Dec 2026 – Jan 2026). Proposed FALCON, a falsification-driven narrative consistency engine for long-context verification of documents exceeding 100K words. Designed a sentence-preserving chunking strategy, atomic claim extraction pipeline, and an iterative falsification mechanism leveraging negation-based retrieval. Achieved strong verification performance with an accuracy of 75% and an F1-score of 0.832, representing a 19% improvement over baseline RAG approaches. The KDSH 2026 project repository is publicly available.",
    sponsor: "",
    image:
      falcon,
    sponsor_img: "",
    url: "https://github.com/gnaneshgunda/KDSH_2026_ADVANCED_FINAL"
  },

  {
    id: 4,
    heading:
      "AI Debate Judge | Intra-Soc Hackathon | ML Engineer | Transformers · RAG · HuggingFace · Supabase",
    description:
      "Individual / Team Project (Oct 2025 – Nov 2025). Built an automated debate evaluation system using agentic AI, combining a RoBERTa-powered RAG pipeline with an LLM-based judge for argument assessment and ranking. Achieved strong scoring reliability with a mean absolute error of approximately 0.62 and a Spearman correlation of around 0.68. Deployed end-to-end inference on HuggingFace Spaces with a production-ready Next.js frontend and Supabase-backed storage. Both the project repository and live deployment are publicly accessible.",
    sponsor: "",
    image:
      aidebimage,
    sponsor_img: "",
    url: "https://ai-debate-app-o82j.vercel.app/"
  }
];



export default function Projects() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const timelineRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const timelineRect = timelineRef.current.getBoundingClientRect()
        const timelineTop = timelineRect.top + window.scrollY
        const timelineHeight = timelineRect.height
        const scrollTop = window.scrollY
        const windowHeight = window.innerHeight

        const viewportCenter = scrollTop + (windowHeight / 2)
        const relativeScroll = viewportCenter - timelineTop
        const progress = Math.min(Math.max((relativeScroll / timelineHeight) * 100, 0), 100)

        setScrollProgress(progress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex w-full flex-col min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <RealNavbar variant="dark" />
      <div className="relative w-full py-20 min-h-screen overflow-hidden bg-[#01011b] mx-0 px-0">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 h-72 w-72 animate-pulse rounded-full bg-[#33bbcf]/20 blur-3xl"></div>
          <div className="absolute right-16 bottom-32 h-96 w-96 animate-pulse rounded-full bg-[#87CEEB]/10 blur-3xl delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 h-64 w-64 animate-pulse rounded-full bg-[#def9fa]/15 blur-3xl delay-500"></div>
        </div>

        <section className="relative z-10">
          {data?.map((eventx, index) => (
            <div className="relative mx-auto flex w-[95%] flex-col" key={index}>
              {/* Event Container */}
              <h2
                className="animate-fadeInUp mt-[32px] mb-6 ml-[5px] bg-clip-text text-center font-[kanit] text-[48px] font-bold max-lg:ml-4 max-lg:text-[35px]"
                style={{
                  marginBottom: index === 0 || index === 5 ? "3.5rem" : "0",
                  background: `radial-gradient(64.18% 64.18% at 71.16% 35.69%, 
                            #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, 
                            #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 20px rgba(135, 206, 235, 0.3))",
                }}
              >
                {index === 0 ? (
                  <div className="flex items-center justify-center gap-5 max-lg:flex-col">
                    Projects
                    <img
                      src="https://i0.wp.com/www.sciencenews.org/wp-content/uploads/2023/04/040823_chatgpt_feat.gif?fit=1024%2C576&ssl=1"
                      className="h-[120px] w-[200px] rounded-full border-4 border-[#87CEEB]/50 shadow-lg shadow-[#87CEEB]/30 transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                ) : index === 5 ? (
                  <div className="flex items-center justify-center gap-5 max-lg:flex-col">

                    <img
                      src="https://i.pinimg.com/originals/bb/0c/c7/bb0cc783196fa9b2119864ff90eb5702.gif"
                      className="h-[120px] w-[200px] rounded-full border-4 border-[#87CEEB]/50 shadow-lg shadow-[#87CEEB]/30 transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                ) : null}
              </h2>

              {/* Timeline Container */}
              <div className="relative flex justify-center">
                {/* Enhanced Timeline Line with glow effect */}
                <div className="absolute left-1/2 z-0 h-full w-[6px] -translate-x-1/2 transform animate-pulse rounded-full bg-gradient-to-b from-[#87CEEB] via-[#5ce1e6] to-[#33bbcf] shadow-lg shadow-[#87CEEB]/50"></div>

                {/* Event Card - Flex Row Layout */}
                <div className="group relative mb-12 flex w-full max-w-[900px] items-center justify-center">
                  {/* Timeline Dot with enhanced glow */}
                  <div className="absolute left-1/2 z-20 h-[20px] w-[20px] -translate-x-1/2 transform animate-pulse rounded-full border-4 border-[#01011b] bg-gradient-to-r from-[#87CEEB] to-[#33bbcf] shadow-lg shadow-[#87CEEB]/60 transition-all duration-500 group-hover:scale-150 group-hover:shadow-[#87CEEB] max-lg:hidden"></div>

                  {/* Event Card with Border - Flex Row */}
                  <div
                    className={`relative w-full transform overflow-hidden rounded-[20px] border-2 border-[#87CEEB]/60 bg-gradient-to-br from-[#0a0a2e]/90 to-[#01011b]/95 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-[#33bbcf] hover:shadow-2xl hover:shadow-[#87CEEB]/30 ${eventx.url ? 'cursor-pointer' : 'cursor-default'}`}
                    onClick={() => eventx.url && window.open(eventx.url, '_blank', 'noopener,noreferrer')}
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-[20px] bg-gradient-to-r from-[#87CEEB]/5 via-[#33bbcf]/10 to-[#87CEEB]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                    {/* Flex Row Container */}
                    <div className="relative z-10 flex items-center gap-8 max-lg:flex-col max-lg:gap-6">
                      {/* Event Image - Left Side (Static) */}
                      <div className="group/image relative h-[240px] w-[400px] flex-shrink-0 max-lg:w-full">
                        <img
                          src={eventx.image}
                          alt="event"
                          className="w-full h-full rounded-[16px] object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110 group-hover:saturate-110"
                        />
                        {/* Enhanced image overlay effect */}
                        <div className="absolute inset-0 rounded-[16px] bg-gradient-to-t from-[#33bbcf]/30 via-[#87CEEB]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                        {/* Animated border effect on hover */}
                        <div className="absolute inset-0 rounded-[16px] border-2 border-transparent transition-all duration-500 group-hover:border-[#87CEEB]/50"></div>
                      </div>

                      {/* Content Section with Flip Effect */}
                      <div className="perspective-1000 flex min-h-[240px] flex-1 items-center justify-center">
                        <div className="transform-style-preserve-3d relative h-full w-full transition-transform duration-700 group-hover:rotate-y-180">
                          {/* Front Face - Default Content */}
                          <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center text-center backface-hidden">
                            <h3 className="mx-0 mt-2 mb-6 font-[kanit] text-[32px] text-white drop-shadow-lg transition-colors duration-300 hover:text-[#87CEEB] max-lg:text-[28px]">
                              {eventx.heading}
                            </h3>

                            {/* Sponsors Section */}
                            {Array.isArray(eventx.sponsor) &&
                              eventx.sponsor.length > 0 && (
                                <div className="mt-6 flex flex-col items-center gap-4">
                                  <div className="font-poppins text-[22px] font-semibold text-[#87CEEB]">
                                    <h5 className="drop-shadow-md">
                                      Sponsored by:
                                    </h5>
                                  </div>
                                  <div className="flex flex-wrap justify-center gap-4">
                                    {eventx.sponsor.map((sponsor, i) => (
                                      <div
                                        key={i}
                                        className="flex items-center gap-3 rounded-full border border-[#87CEEB]/30 bg-[#87CEEB]/10 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:bg-[#87CEEB]/20"
                                      >
                                        <div className="group/sponsor relative h-[40px] w-[40px]">
                                          <Image
                                            src={eventx.sponsor_img[i]}
                                            alt={sponsor}
                                            fill
                                            className="rounded-full border-2 border-[#87CEEB]/50 object-cover transition-all duration-300 group-hover/sponsor:border-[#87CEEB]"
                                            sizes="40px"
                                          />
                                        </div>
                                        <h4 className="mx-[8px] my-0 text-[16px] font-medium text-white drop-shadow-sm">
                                          {sponsor}
                                        </h4>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                          </div>

                          {/* Back Face - Description Content */}
                          <div className="relative inset-0 flex h-full w-full rotate-y-180 flex-col items-center justify-center rounded-lg bg-gradient-to-br from-[#1a1a3e]/20 to-[#0a0a2e]/20 p-4 text-center backface-hidden">
                            {/* Animated background pattern */}
                            <div className="absolute inset-0 rounded-lg opacity-10">
                              <div className="animate-float absolute top-4 left-4 h-12 w-12 rounded-full border-2 border-[#87CEEB]"></div>
                              <div className="animate-float-delay absolute right-4 bottom-4 h-8 w-8 rounded-full border-2 border-[#33bbcf]"></div>
                              <div className="absolute top-1/2 left-4 h-6 w-6 animate-pulse rounded-full bg-[#87CEEB]/20"></div>
                            </div>

                            {/* Title with glow */}
                            <h3 className="animate-glow mb-6 bg-gradient-to-r from-[#87CEEB] to-[#33bbcf] bg-clip-text font-[kanit] text-[28px] text-transparent drop-shadow-lg max-lg:text-[24px]">
                              {eventx.heading}
                            </h3>

                            {/* Description */}
                            <div className="relative max-w-full">
                              <p className="animate-typewriter text-center font-[poppins] text-[16px] leading-relaxed text-white">
                                {eventx.description}
                              </p>

                              {/* Glowing border effect around description */}
                              <div className="absolute -inset-2 animate-pulse rounded-lg bg-gradient-to-r from-[#87CEEB]/20 via-[#33bbcf]/20 to-[#87CEEB]/20 opacity-50 blur-lg"></div>
                            </div>

                            {/* Decorative line */}
                            <div className="animate-shimmer mt-6 h-1 w-32 bg-gradient-to-r from-transparent via-[#87CEEB] to-transparent"></div>

                            {/* Floating particles */}
                            <div className="pointer-events-none absolute inset-0">
                              <div className="animate-float-particle absolute top-1/4 left-1/4 h-1 w-1 rounded-full bg-[#87CEEB]"></div>
                              <div className="animate-float-particle-delay absolute top-3/4 right-1/4 h-1 w-1 rounded-full bg-[#33bbcf]"></div>
                              <div className="animate-float-particle-slow absolute top-1/2 right-1/3 h-1 w-1 rounded-full bg-[#def9fa]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }

        .backface-hidden {
          backface-visibility: hidden;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(180deg);
          }
        }

        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-6px) rotate(-180deg);
          }
        }

        @keyframes float-particle {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-15px) translateX(8px);
            opacity: 1;
          }
        }

        @keyframes float-particle-delay {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-12px) translateX(-8px);
            opacity: 1;
          }
        }

        @keyframes float-particle-slow {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-18px) translateX(4px);
            opacity: 0.8;
          }
        }

        @keyframes glow {
          0%,
          100% {
            filter: drop-shadow(0 0 10px rgba(135, 206, 235, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(135, 206, 235, 0.8));
          }
        }

        @keyframes typewriter {
          from {
            opacity: 0;
            transform: translateX(-15px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 3s ease-in-out infinite 1s;
        }

        .animate-float-particle {
          animation: float-particle 4s ease-in-out infinite;
        }

        .animate-float-particle-delay {
          animation: float-particle-delay 4s ease-in-out infinite 2s;
        }

        .animate-float-particle-slow {
          animation: float-particle-slow 6s ease-in-out infinite 1s;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-typewriter {
          animation: typewriter 0.8s ease-out 0.3s both;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
      </div>
      <Footer variant="dark" />
    </div>
  )
}
