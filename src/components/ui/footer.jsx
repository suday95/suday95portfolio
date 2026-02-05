import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer({ variant = "light" }) {
  const isDark = variant === "dark";

  return (
    <footer className={`w-full py-12 mt-auto ${isDark
      ? "bg-slate-900 border-t border-slate-700"
      : "bg-slate-100 border-t border-slate-200"
      }`}>
      <div className="w-full px-6 flex flex-col items-center gap-8">

        {/* Name / Brand */}
        <h2 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
          Suday Samala
        </h2>

        {/* Navigation */}
        <ul className={`flex flex-wrap justify-center gap-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          <li><a href="/" className={isDark ? "hover:text-white" : "hover:text-gray-900"}>Home</a></li>
          <li><a href="/projects" className={isDark ? "hover:text-white" : "hover:text-gray-900"}>Projects</a></li>
          <li><a href="/about" className={isDark ? "hover:text-white" : "hover:text-gray-900"}>About</a></li>
          <li><a href="/contact" className={isDark ? "hover:text-white" : "hover:text-gray-900"}>Contact</a></li>
        </ul>

        {/* Social Links */}
        <div className={`flex gap-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
          <a
            href="https://github.com/suday95"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 transition-colors ${isDark ? "hover:text-white" : "hover:text-gray-900"}`}
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/sudaynandan"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 transition-colors ${isDark ? "hover:text-white" : "hover:text-gray-900"}`}
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:sudaynandan95@kgpian.iitkgp.ac.in"
            className={`flex items-center gap-2 transition-colors ${isDark ? "hover:text-white" : "hover:text-gray-900"}`}
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
        </div>

        {/* Copyright */}
        <p className={`text-sm text-center ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          © {new Date().getFullYear()} Suday Samala. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
