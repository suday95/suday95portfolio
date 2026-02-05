
import RealNavbar from "@/components/ui/navbar.jsx";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react";
import image_1 from "../assets/image_1.png"
import Footer from "@/components/ui/footer.jsx";
import { useEffect, useState } from "react"
import profile from "../assets/profile.jpeg"
import { Download, Sparkles } from "lucide-react";

import image1 from "../assets/image.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.jpeg"
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.png"

const quotes = [
  "Good systems make good ideas matter.",
  "Clarity beats complexity.",
  "Models learn. Systems decide.",
  "Build it clean. Make it scale.",
  "Engineering is choosing the right trade-offs.",
]

function Quote() {
  const [text, setText] = useState("")
  const [quoteIndex, setQuoteIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const typingSpeed = 45
  const deletingSpeed = 30
  const pauseAfterTyping = 1200

  useEffect(() => {
    const currentQuote = quotes[quoteIndex]

    let timeout

    if (!isDeleting) {
      // Typing
      if (text.length < currentQuote.length) {
        timeout = setTimeout(() => {
          setText(currentQuote.slice(0, text.length + 1))
        }, typingSpeed)
      } else {
        // Pause before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, pauseAfterTyping)
      }
    } else {
      // Deleting
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentQuote.slice(0, text.length - 1))
        }, deletingSpeed)
      } else {
        setIsDeleting(false)
        setQuoteIndex((prev) => (prev + 1) % quotes.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [text, isDeleting, quoteIndex])

  return (
    <p className="text-gray-600 italic text-base md:text-lg mt-4 h-[1.5em] flex items-center gap-1">
      <Sparkles className="text-purple-500 flex-shrink-0" size={18} />
      <span>"{text}"</span>
      <span className="animate-pulse">|</span>
    </p>
  )
}




export default function Home() {
  const autoplay = useRef(
    Autoplay({ delay: 1500, stopOnInteraction: true })
  )
  return (
    <>
      <div className="w-full min-h-screen flex flex-col">
        <RealNavbar variant="light" />

        {/* Main Content */}
        <div className="flex-1 py-16 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">

            {/* Hero Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 md:mb-24">

              {/* Left Column - Text Content */}
              <div className="order-1 lg:order-1 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src={image_1} className="w-14 h-18 md:w-18 md:h-24 object-cover" alt="Logo" />
                  <div className="h-px flex-1 bg-gradient-to-r from-purple-400 to-transparent"></div>
                </div>

                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3">
                    Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Suday Nandan Reddy</span>
                  </h1>
                  <Quote />
                </div>

                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                  I am a second-year undergraduate student at the <span className="font-bold text-purple-700">Indian Institute of Technology Kharagpur</span>, pursuing Electrical Engineering with a strong interest in machine learning and AI systems.
                </p>

                {/* CV Download Button */}
                <div className="pt-4">
                  <a
                    href="https://drive.google.com/file/d/1IJv0zsOkkyO9hke5gzPLhxvE4WAOKQz4/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 !text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Download size={20} />
                    Download My CV
                  </a>
                </div>
              </div>

              {/* Right Column - Profile Image */}
              <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative group">
                  {/* Background decorative circle */}
                  <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 lg:w-[340px] lg:h-[340px] rounded-full 
                                bg-gradient-to-br from-purple-200/20 via-blue-200/15 to-indigo-200/20
                                -z-10 transform -translate-x-4 -translate-y-4 md:-translate-x-5 md:-translate-y-5
                                group-hover:from-purple-300/30 group-hover:via-blue-300/25 group-hover:to-indigo-300/30
                                transition-all duration-500 ease-in-out
                                shadow-[0_0_60px_rgba(147,51,234,0.1)]
                                group-hover:shadow-[0_0_100px_rgba(147,51,234,0.2)]"></div>

                  <img
                    src={profile}
                    alt="Profile"
                    className="w-56 h-56 md:w-72 md:h-72 lg:w-[300px] lg:h-[300px] rounded-full object-cover shadow-xl 
                              brightness-[0.7] saturate-[0.9]
                              relative z-10
                              transition-all duration-500 ease-in-out
                              group-hover:brightness-[0.8] group-hover:scale-[1.05] 
                              group-hover:shadow-[0_0_40px_rgba(59,130,246,0.5),0_15px_50px_rgba(0,0,0,0.3)]
                              animate-float"
                    style={{
                      border: '3px solid rgba(148, 163, 184, 0.2)',
                      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3), inset 0 0 0 1px rgba(255, 255, 255, 0.05)'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Carousel Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
                Highlights & Achievements
              </h2>

              {/* Unified Carousel - Works on all screen sizes */}
              <div className="w-full">
                <Carousel
                  plugins={[autoplay.current]}
                  className="w-full mx-auto max-w-4xl"
                  onMouseEnter={autoplay.current.stop}
                  onMouseLeave={autoplay.current.play}
                >
                  <CarouselContent>
                    {[image1, image2, image5, image6, image3, image4].map((img, idx) => (
                      <CarouselItem key={idx} className="pl-2 md:pl-4">
                        <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                          <img src={img} alt={`Achievement ${idx + 1}`} className="w-full h-auto object-cover" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-1 md:left-2" />
                  <CarouselNext className="right-1 md:right-2" />
                </Carousel>
              </div>
            </div>

          </div>
        </div>

        <Footer variant="light" />
      </div>
    </>
  );
}