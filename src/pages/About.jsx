import RealNavbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Animation from "@/components/ui/animation";
import {
  Code2, Database, Cloud, Terminal, Award, GraduationCap, Trophy,
  Users, Sparkles, Brain, Zap, BookOpen, Target, Medal,
  Rocket, Layers, GitBranch, Package, Server, Box
} from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <RealNavbar variant="light" />
      <Animation />
      <main className="flex-1 pt-24 pb-20 relative" style={{
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.85) 0%, rgba(118, 75, 162, 0.85) 50%, rgba(240, 147, 251, 0.85) 100%)'
      }}>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              About Me
            </h1>
            <div className="w-24 h-1 bg-white/80 mx-auto rounded-full"></div>
          </div>

          {/* Main Content Cards */}
          <div className="space-y-8">
            {/* Introduction Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl transform transition-all hover:scale-[1.02] duration-300 border-l-4 border-purple-600">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <Sparkles className="text-purple-600" size={28} />
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                I am a second-year undergraduate at the <span className="font-bold text-purple-700">Indian Institute of Technology Kharagpur</span>,
                pursuing a Bachelor's degree in Electrical Engineering with a strong academic focus on machine learning,
                algorithms, and large-scale AI systems. My journey in tech is driven by curiosity and a passion for
                building intelligent systems that solve real-world problems.
              </p>
            </div>

            {/* Core Interests Card */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl transform transition-all hover:scale-[1.02] duration-300 border-l-4 border-indigo-600">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <Brain className="text-indigo-600" size={28} />
                Core Interests
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                My primary interests lie in <span className="font-semibold text-purple-700">applied AI</span>,
                <span className="font-semibold text-purple-700"> natural language processing</span>, and
                <span className="font-semibold text-purple-700"> retrieval-augmented generation</span>.
                I enjoy working at the intersection of theory and systems — building models that are not only accurate,
                but also scalable and production-ready.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                I believe that great engineering is about making the right trade-offs between complexity,
                performance, and maintainability. Good systems make good ideas matter, and I strive to build
                solutions that are both technically sound and practically useful.
              </p>
            </div>

            {/* Skills & Expertise Section - Bento Grid Style */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Code2 className="text-purple-700" size={32} />
                Skills & Expertise
              </h2>

              {/* Bento Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                {/* Programming Languages - Large */}
                <div className="md:col-span-3 md:row-span-2 bg-gradient-to-br from-purple-600 to-indigo-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <Code2 className="text-white" size={24} />
                    <h3 className="font-bold text-white text-lg">Programming Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['C', 'C++', 'Python', 'HTML/CSS', 'JavaScript', 'TypeScript', 'SQL'].map((lang) => (
                      <span key={lang} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors border border-white/30">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* AI/ML - Large Featured */}
                <div className="md:col-span-3 md:row-span-2 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="text-white" size={24} />
                    <h3 className="font-bold text-white text-lg">AI / Machine Learning</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['LLMs', 'Transformers', 'HuggingFace', 'RAG', 'LangChain', 'LangGraph', 'NLP'].map((tech) => (
                      <span key={tech} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-white/30 transition-all border border-white/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Libraries & Frameworks */}
                <div className="md:col-span-2 bg-gradient-to-br from-emerald-50 to-green-100 p-5 rounded-xl border-2 border-green-300 hover:border-green-400 transition-all shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Package className="text-green-700" size={20} />
                    <h3 className="font-bold text-green-800 text-base">Libraries</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['React', 'Next.js', 'Node.js', 'NumPy', 'Pandas'].map((lib) => (
                      <span key={lib} className="bg-green-600 text-white px-2 py-1 rounded-md text-xs font-medium hover:bg-green-700 transition-colors">
                        {lib}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Databases */}
                <div className="md:col-span-2 bg-gradient-to-br from-orange-50 to-amber-100 p-5 rounded-xl border-2 border-orange-300 hover:border-orange-400 transition-all shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="text-orange-700" size={20} />
                    <h3 className="font-bold text-orange-800 text-base">Databases</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['MySQL', 'PostgreSQL', 'Prisma'].map((db) => (
                      <span key={db} className="bg-orange-600 text-white px-2 py-1 rounded-md text-xs font-medium hover:bg-orange-700 transition-colors">
                        {db}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Cloud & DevOps */}
                <div className="md:col-span-2 bg-gradient-to-br from-cyan-50 to-blue-100 p-5 rounded-xl border-2 border-cyan-300 hover:border-cyan-400 transition-all shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Cloud className="text-cyan-700" size={20} />
                    <h3 className="font-bold text-cyan-800 text-base">Cloud / DevOps</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['AWS EC2', 'Docker', 'Vercel'].map((tool) => (
                      <span key={tool} className="bg-cyan-600 text-white px-2 py-1 rounded-md text-xs font-medium hover:bg-cyan-700 transition-colors">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Skills */}
                <div className="md:col-span-3 bg-gradient-to-br from-blue-50 to-indigo-100 p-5 rounded-xl border-2 border-blue-300 hover:border-blue-400 transition-all shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="text-blue-700" size={20} />
                    <h3 className="font-bold text-blue-800 text-base">Technical Skills</h3>
                  </div>
                  <div className="space-y-2">
                    {['Data Structures and Algorithms', 'Machine Learning', 'Socket Programming'].map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Developer Tools */}
                <div className="md:col-span-3 bg-gradient-to-br from-slate-50 to-gray-100 p-5 rounded-xl border-2 border-gray-300 hover:border-gray-400 transition-all shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Terminal className="text-gray-700" size={20} />
                    <h3 className="font-bold text-gray-800 text-base">Developer Tools</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {['Git', 'GitHub', 'Neovim', 'VS Code', 'Linux'].map((tool) => (
                      <span key={tool} className="bg-gray-700 text-white px-2 py-1 rounded-md text-xs font-medium hover:bg-gray-800 transition-colors">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <BookOpen className="text-purple-700" size={32} />
                Relevant Coursework
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'Linear Algebra and Advanced Calculus', grade: null },
                  { name: 'Probability and Statistics', grade: null },
                  { name: 'Optimization Models and Algorithms', grade: null },
                  { name: 'Algorithms-I', grade: 'A' },
                  { name: 'Andrew NG ML/DL Course', grade: null },
                  { name: 'Programming and Data Structures', grade: 'EX' },
                ].map((course, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-md transition-all">
                    <div className="flex items-start gap-2 mb-2">
                      <GraduationCap className="text-purple-600 mt-0.5 flex-shrink-0" size={18} />
                      <h3 className="font-semibold text-gray-800 text-sm leading-tight">{course.name}</h3>
                    </div>
                    {course.grade && (
                      <span className="inline-block bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold mt-1">
                        Grade: {course.grade}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Awards & Achievements */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Trophy className="text-yellow-600" size={32} />
                Awards & Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: Target,
                    title: 'JEE Main 2024',
                    description: 'Secured 99.76 percentile among 15 lakh qualified candidates',
                    color: 'from-yellow-500 to-orange-500',
                    iconColor: 'text-white'
                  },
                  {
                    icon: Trophy,
                    title: 'JEE Advanced 2024',
                    description: 'All India Rank 3170 - Top 1.8% among 180K+ candidates',
                    color: 'from-orange-500 to-red-500',
                    iconColor: 'text-white'
                  },
                  {
                    icon: Medal,
                    title: 'InterIIT Tech Meet 14.0',
                    description: 'Silver Medal for outstanding performance in ObserveAI Problem Statement',
                    color: 'from-gray-400 to-slate-500',
                    iconColor: 'text-white'
                  },
                  {
                    icon: Sparkles,
                    title: 'KDSH 2026',
                    description: '8th place among 6,000+ participants from colleges across India',
                    color: 'from-blue-500 to-indigo-600',
                    iconColor: 'text-white'
                  },
                  {
                    icon: BookOpen,
                    title: 'Algorithms-I Excellence',
                    description: 'Earned A grade, reflecting solid understanding of algorithm design and problem-solving',
                    color: 'from-green-500 to-emerald-600',
                    iconColor: 'text-white'
                  },
                  {
                    icon: Code2,
                    title: 'Programming Mastery',
                    description: 'Achieved EX grade in Programming and Data Structures (theory and lab)',
                    color: 'from-purple-500 to-violet-600',
                    iconColor: 'text-white'
                  },
                ].map((achievement, idx) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={idx} className={`bg-gradient-to-r ${achievement.color} p-5 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1`}>
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          <IconComponent className={achievement.iconColor} size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-lg mb-1">{achievement.title}</h3>
                          <p className="text-white/90 text-sm">{achievement.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Extracurricular Activities */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Rocket className="text-purple-700" size={32} />
                Extracurricular Activities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Users,
                    role: 'NSO Football Team Member',
                    organization: 'IIT Kharagpur',
                    period: '2024 – Present',
                    description: 'Actively representing the institute in national-level competitions',
                    color: 'from-green-500 to-emerald-600'
                  },
                  {
                    icon: Layers,
                    role: 'Web Developer',
                    organization: 'KodeinKGP - DeKodeX Event',
                    period: '2024',
                    description: 'Built event website supporting 700+ participants during peak traffic',
                    color: 'from-blue-500 to-cyan-600'
                  },
                  {
                    icon: Target,
                    role: 'Point of Contact (POC)',
                    organization: 'Tech Traid Hackathon',
                    period: '2024',
                    description: 'Led 36-hour hackathon organized by KodeinKGP, ensuring smooth execution',
                    color: 'from-purple-500 to-pink-600'
                  },
                ].map((activity, idx) => {
                  const IconComponent = activity.icon;
                  return (
                    <div key={idx} className={`bg-gradient-to-br ${activity.color} p-6 rounded-xl hover:shadow-xl transition-all transform hover:scale-105`}>
                      <IconComponent className="text-white mb-3" size={32} />
                      <h3 className="font-bold text-white text-lg mb-1">{activity.role}</h3>
                      <p className="text-white/90 font-semibold mb-2 text-sm">{activity.organization}</p>
                      <p className="text-white/70 text-xs mb-3">{activity.period}</p>
                      <p className="text-white/90 text-sm">{activity.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <GraduationCap className="text-purple-700" size={32} />
                Education
              </h2>
              <div className="space-y-6">
                {/* IIT Kharagpur */}
                <div className="relative pl-8 pb-6 border-l-4 border-purple-600">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-600 rounded-full border-4 border-white shadow-md"></div>
                  <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-purple-100">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-purple-900">Indian Institute of Technology Kharagpur</h3>
                      <span className="text-purple-700 font-semibold">Jul 2024 – Present</span>
                    </div>
                    <p className="text-gray-700 font-medium mb-2">Bachelor of Technology, Electrical Engineering</p>
                    <div className="inline-block bg-purple-600 text-white px-4 py-2 rounded-full font-bold text-lg">
                      CGPA: 9.21/10
                    </div>
                  </div>
                </div>

                {/* Jr College */}
                <div className="relative pl-8 pb-6 border-l-4 border-blue-500">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-blue-100">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-blue-900">Narayana JR College</h3>
                      <span className="text-blue-700 font-semibold">2024</span>
                    </div>
                    <p className="text-gray-700 font-medium mb-2">Class XII (SSC)</p>
                    <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-bold">
                      Percentage: 98.3%
                    </div>
                  </div>
                </div>

                {/* High School */}
                <div className="relative pl-8">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-md"></div>
                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-green-100">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-green-900">Narayana E.M High School</h3>
                      <span className="text-green-700 font-semibold">2022</span>
                    </div>
                    <p className="text-gray-700 font-medium mb-2">Class X (SSC)</p>
                    <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full font-bold">
                      Percentage: 95.5%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Beyond Academics */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl transform transition-all hover:scale-[1.02] duration-300 border-l-4 border-cyan-600">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <Sparkles className="text-cyan-600" size={28} />
                Beyond Academics
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Beyond the classroom and coding sessions, I actively participate in technical societies,
                hackathons, and sports. I believe in the importance of a balanced lifestyle and enjoy collaborating
                with like-minded individuals on ambitious projects.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                I value <span className="font-semibold">clean engineering</span>,
                <span className="font-semibold"> reproducibility</span>, and
                <span className="font-semibold"> thoughtful system design</span>.
                Whether it's writing documentation, optimizing algorithms, or designing user interfaces,
                I approach every problem with attention to detail and a commitment to excellence.
              </p>
            </div>
          </div>

          {/* Bottom Padding for Scroll */}
          <div className="h-32"></div>
        </div>
      </main>
      <Footer variant="light" />
    </div>
  );
}