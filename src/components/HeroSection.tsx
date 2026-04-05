import { ABOUT, EMAIL, GITHUB, LINKEDIN, PROJECTS } from "@/shared/config";
import { Cpu, Download, Github, Linkedin, Mail, Moon, Sun } from "lucide-react";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  cardBg: string;
  accentBg: string;
  accentColor: string;
  borderColor: string;
  isDark: boolean;
  downloadResume: (theme?: "dark" | "light") => void;
  resumeMenuRef: any;
  showResumeMenu: boolean;
  setShowResumeMenu: (showResumeMenu: boolean) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  cardBg,
  accentBg,
  accentColor,
  borderColor,
  isDark,
  downloadResume,
  resumeMenuRef,
  showResumeMenu,
  setShowResumeMenu,
}) => {
  const heroRef = useRef(null);

  // Define variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <>
      <section ref={heroRef} id="about" className="mb-20 pt-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`border ${borderColor} rounded-xl p-8 lg:p-12 ${cardBg} shadow-xl hover:shadow-cyan-500/10 transition-shadow duration-500`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 relative z-10 items-center">

            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="mb-8">
                <motion.div variants={itemVariants} className="mb-3 font-mono text-sm opacity-70 border-b border-gray-500/30 pb-2 w-fit">
                  <span className={accentColor}>{"<"}</span>
                  <span className="text-gray-400">System.init </span>
                  <span className={accentColor}>{"/>"}</span>
                </motion.div>
                <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
                  Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 font-mono">Yash Daxini</span>
                </motion.h1>
                <motion.h2 variants={itemVariants} className="text-xl md:text-2xl mb-6 opacity-80 font-medium">
                  Software Engineer & Full-Stack Developer
                </motion.h2>
                <motion.p variants={itemVariants} className="text-lg opacity-70 leading-relaxed max-w-2xl text-shadow-sm">
                  {ABOUT}
                </motion.p>
              </div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-8 font-mono text-sm">
                <div className="relative" ref={resumeMenuRef}>
                  <button
                    onClick={() => setShowResumeMenu(!showResumeMenu)}
                    className={`${accentBg} px-6 py-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg shadow-cyan-500/20`}
                  >
                    <Download size={18} />
                    <span>Download_Resume</span>
                  </button>

                  {showResumeMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`absolute top-full left-0 mt-3 ${cardBg} border ${borderColor} rounded-lg p-2 min-w-[200px] z-20 shadow-2xl backdrop-blur-xl`}
                    >
                      <button
                        onClick={() => downloadResume("dark")}
                        className={`w-full text-left px-4 py-3 rounded-md hover:bg-cyan-500/20 transition-colors flex items-center gap-2`}
                      >
                        <Moon size={14} className="opacity-70" />
                        Dark Theme
                      </button>
                      <button
                        onClick={() => downloadResume("light")}
                        className={`w-full text-left px-4 py-3 rounded-md hover:bg-cyan-500/20 transition-colors flex items-center gap-2 mt-1`}
                      >
                        <Sun size={14} className="opacity-70" />
                        Light Theme
                      </button>
                    </motion.div>
                  )}
                </div>

                <a
                  href="#contact"
                  className={`border ${borderColor} bg-transparent px-6 py-3 rounded-lg flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-cyan-500/10 shadow-lg`}
                >
                  <Mail size={18} />
                  <span>Contact_Route</span>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="flex gap-4 mt-10 w-fit font-mono text-sm">
                <a
                  href={GITHUB}
                  target="_blank"
                  className="p-3 rounded-lg border border-gray-700 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 hover:scale-110 flex items-center gap-2 group"
                >
                  <Github size={20} className="group-hover:text-cyan-400" />
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  className="p-3 rounded-lg border border-gray-700 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 hover:scale-110 flex items-center gap-2 group"
                >
                  <Linkedin size={20} className="group-hover:text-cyan-400" />
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="p-3 rounded-lg border border-gray-700 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300 hover:scale-110 flex items-center gap-2 group"
                >
                  <Mail size={20} className="group-hover:text-cyan-400" />
                </a>
              </motion.div>
            </motion.div>

            {/* Status Card (Right) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`border border-cyan-500/30 rounded-xl p-6 h-fit bg-slate-900/50 backdrop-blur-sm relative overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>
              <h3 className="font-mono font-bold mb-5 flex items-center gap-2 opacity-90 border-b border-gray-700 pb-3">
                <Cpu size={18} className="text-cyan-400" />
                <span>sys_status</span>
              </h3>
              <div className="space-y-4 text-sm font-mono">
                <div className="flex justify-between items-center bg-black/20 p-2 rounded-md">
                  <span className="opacity-60 text-xs">LOCATION</span>
                  <span className="text-cyan-400 font-semibold text-xs">Remote</span>
                </div>
                <div className="flex justify-between items-center bg-black/20 p-2 rounded-md">
                  <span className="opacity-60 text-xs">PROJECTS</span>
                  <span className="text-cyan-400 font-semibold text-xs">{PROJECTS.length} Executed</span>
                </div>
                <div className="flex justify-between items-center bg-black/20 p-2 rounded-md">
                  <span className="opacity-60 text-xs">STATUS</span>
                  <span className="text-green-400 font-semibold text-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    Available
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-gray-700 font-mono">
                <div className="flex justify-between text-xs mb-2 opacity-60">
                  <span>Stack_Allocation</span>
                  <span>Sys.Load</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-[10px] mb-1 opacity-80">
                      <span>Full Stack</span>
                      <span>90%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 w-[90%] rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] mb-1 opacity-80">
                      <span>DevOps/Linux</span>
                      <span>85%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 w-[85%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
