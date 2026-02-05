import RealNavbar from "@/components/ui/navbar.jsx";
import Footer from "@/components/ui/footer";
import { Github, Linkedin, Mail, Phone, MapPin, Code2, Trophy } from "lucide-react";

const contactLinks = [
  {
    id: 1,
    name: "GitHub",
    username: "@sudaynandan",
    description: "Check out my code and projects",
    url: "https://github.com/suday95",
    icon: Github,
    gradient: "from-gray-700 via-gray-800 to-black",
    hoverGradient: "group-hover:from-gray-600 group-hover:via-gray-700 group-hover:to-gray-900",
    iconColor: "text-white",
    bgGlow: "bg-gray-500/20"
  },
  {
    id: 2,
    name: "LinkedIn",
    username: "/sudaynandan",
    description: "Let's connect professionally",
    url: "https://linkedin.com/in/sudaynandan",
    icon: Linkedin,
    gradient: "from-blue-600 via-blue-700 to-blue-800",
    hoverGradient: "group-hover:from-blue-500 group-hover:via-blue-600 group-hover:to-blue-700",
    iconColor: "text-white",
    bgGlow: "bg-blue-500/20"
  },
  {
    id: 3,
    name: "Codeforces",
    username: "Your Handle",
    description: "Competitive programming profile",
    url: "https://codeforces.com/profile/suday95",
    icon: Code2,
    gradient: "from-red-500 via-orange-500 to-yellow-500",
    hoverGradient: "group-hover:from-red-400 group-hover:via-orange-400 group-hover:to-yellow-400",
    iconColor: "text-white",
    bgGlow: "bg-orange-500/20"
  },
  {
    id: 4,
    name: "LeetCode",
    username: "Your Handle",
    description: "Coding challenges & solutions",
    url: "https://leetcode.com/suday95",
    icon: Trophy,
    gradient: "from-yellow-600 via-orange-600 to-orange-700",
    hoverGradient: "group-hover:from-yellow-500 group-hover:via-orange-500 group-hover:to-orange-600",
    iconColor: "text-white",
    bgGlow: "bg-yellow-500/20"
  },
  {
    id: 5,
    name: "Email",
    username: "sudaynandan95@kgpian.iitkgp.ac.in",
    description: "Send me a message",
    url: "mailto:sudaynandan95@kgpian.iitkgp.ac.in",
    icon: Mail,
    gradient: "from-purple-600 via-purple-700 to-indigo-800",
    hoverGradient: "group-hover:from-purple-500 group-hover:via-purple-600 group-hover:to-indigo-700",
    iconColor: "text-white",
    bgGlow: "bg-purple-500/20"
  },
  {
    id: 6,
    name: "Phone",
    username: "+91 6304183452",
    description: "Call or message me",
    url: "tel:+916304183452",
    icon: Phone,
    gradient: "from-green-600 via-emerald-600 to-teal-700",
    hoverGradient: "group-hover:from-green-500 group-hover:via-emerald-500 group-hover:to-teal-600",
    iconColor: "text-white",
    bgGlow: "bg-green-500/20"
  },
  {
    id: 7,
    name: "Location",
    username: "Andhra Pradesh, India",
    description: "Currently based in",
    url: "https://www.google.com/maps/place/Andhra+Pradesh",
    icon: MapPin,
    gradient: "from-cyan-600 via-sky-600 to-blue-700",
    hoverGradient: "group-hover:from-cyan-500 group-hover:via-sky-500 group-hover:to-blue-600",
    iconColor: "text-white",
    bgGlow: "bg-cyan-500/20"
  }
];

export default function ContactMe() {
  const handleCardClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <RealNavbar variant="dark" />
      <main className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 h-96 w-96 animate-pulse rounded-full bg-blue-500/30 blur-3xl"></div>
          <div className="absolute right-20 bottom-32 h-96 w-96 animate-pulse rounded-full bg-purple-500/30 blur-3xl delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 h-64 w-64 animate-pulse rounded-full bg-cyan-500/20 blur-3xl delay-500"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1
              className="text-6xl font-bold mb-6 bg-clip-text text-transparent max-lg:text-5xl"
              style={{
                background: `linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "drop-shadow(0 0 30px rgba(102, 126, 234, 0.4))"
              }}
            >
              Let's Connect
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              I'm open to research collaborations, internships, and technical discussions
              related to machine learning, AI systems, and full-stack development.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((contact) => {
              const Icon = contact.icon;
              return (
                <div
                  key={contact.id}
                  onClick={() => handleCardClick(contact.url)}
                  className="group relative cursor-pointer transform transition-all duration-500 hover:-translate-y-3 hover:scale-105"
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 ${contact.bgGlow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Card Container */}
                  <div className={`relative h-full bg-gradient-to-br ${contact.gradient} ${contact.hoverGradient} rounded-2xl p-6 border border-white/10 shadow-2xl overflow-hidden transition-all duration-500`}>
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl transform -translate-x-12 translate-y-12 group-hover:scale-150 transition-transform duration-700"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 shadow-lg group-hover:shadow-2xl group-hover:bg-white/30 transition-all duration-500">
                          <Icon className={`w-8 h-8 ${contact.iconColor} group-hover:scale-110 transition-transform duration-500`} />
                        </div>
                      </div>

                      {/* Text Content */}
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
                        {contact.name}
                      </h3>
                      <p className="text-sm text-white/80 mb-1 font-medium group-hover:text-white transition-colors duration-300">
                        {contact.username}
                      </p>
                      <p className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300">
                        {contact.description}
                      </p>

                      {/* Arrow Icon */}
                      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="text-center mt-16">
            <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-6 shadow-2xl">
              <p className="text-gray-300 text-lg">
                <span className="font-semibold text-white">Pro tip:</span> Click on any card to connect with me!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer variant="dark" />
    </>
  );
}