import { SKILLS } from "@/shared/config";
import { Code2 } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useTilt } from "@/hooks/useTilt";

interface SkillsSectionProps {
  cardBg: string;
  accentColor: string;
  borderColor: string;
  isDark: boolean;
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

const SkillsSection: React.FC<SkillsSectionProps> = ({
  cardBg,
  accentColor,
  borderColor,
}: SkillsSectionProps) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="skills"
        className="mb-20"
      >
        <div className="flex items-center gap-3 mb-8 pb-3 border-b-2 border-gray-500/20">
          <div className="bg-cyan-500/20 p-2 rounded-lg">
            <Code2 className="text-cyan-400" size={24} />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">
            Technical Stack
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {Object.entries(SKILLS).map(([category, data]) => (
            <motion.div
              variants={itemVariants}
              key={category}
            >
              <TiltCard
                className={`${cardBg} border ${borderColor} rounded-2xl p-6 shadow-xl hover:shadow-cyan-500/10 transition-shadow duration-300 relative overflow-hidden group h-full`}
              >
                {/* Subtle tech background glow */}
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors duration-500"></div>

                <h3
                  className={`font-mono font-bold mb-5 ${accentColor} flex items-center gap-2 pb-3 border-b border-gray-700`}
                >
                  <span className="opacity-80">{data.icon}</span>
                  <span className="tracking-wider text-sm">{`<${category} />`}</span>
                </h3>

                <div className="flex flex-wrap gap-2">
                  {data.items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-sm rounded-lg bg-black/20 border border-transparent group-hover:border-cyan-500/20 hover:!border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 cursor-default shadow-sm font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
};

export default SkillsSection;
