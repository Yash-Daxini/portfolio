import { PROJECTS } from "@/shared/config";
import { Github, ExternalLink, TerminalSquare } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useTilt } from "@/hooks/useTilt";

interface ProjectsProps {
  cardBg: string;
  accentColor: string;
  borderColor: string;
}

const TiltCard: React.FC<{ children: React.ReactNode; className: string }> = ({
  children,
  className,
}) => {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt(6);
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </div>
  );
};

const Projects: React.FC<ProjectsProps> = ({
  cardBg,
  accentColor,
  borderColor,
}: ProjectsProps) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="projects"
        className="mb-24"
      >
        <div className="flex items-center gap-3 mb-8 pb-3 border-b-2 border-gray-500/20">
          <div className="bg-green-500/20 p-2 rounded-lg">
            <TerminalSquare className="text-green-400" size={24} />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">
            Featured Projects
          </h2>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
            >
              <TiltCard
                className={`${cardBg} border ${borderColor} rounded-2xl p-6 shadow-xl hover:shadow-cyan-500/10 transition-shadow duration-300 flex flex-col group relative overflow-hidden h-full`}
              >
                {/* Decorative top border glow */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="mb-4 flex-1 mt-2">
                  <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                    <span className="text-cyan-400 font-mono text-sm">{">"}</span>
                    <span className="tracking-tight">{project.title}</span>
                  </h3>
                  <p className="opacity-70 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`text-cyan-400 bg-cyan-400/10 text-xs font-mono px-2 py-1 rounded-md`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {(project.githubLink || project.liveLink) && (
                  <div className="flex gap-4 pt-5 border-t border-gray-700/50 mt-auto">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        className={`flex flex-1 justify-center items-center gap-2 font-mono text-xs font-bold text-gray-300 hover:text-cyan-400 bg-black/20 hover:bg-cyan-400/10 py-2.5 rounded-lg transition-all duration-300`}
                      >
                        <Github size={14} />
                        Source
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        className={`flex flex-1 justify-center items-center gap-2 font-mono text-xs font-bold text-gray-900 bg-cyan-500 hover:bg-cyan-400 py-2.5 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/20`}
                      >
                        <ExternalLink size={14} />
                        Deploy
                      </a>
                    )}
                  </div>
                )}
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
};

export default Projects;
