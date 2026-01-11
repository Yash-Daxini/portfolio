import { SKILLS } from '@/shared/config'
import { Box } from 'lucide-react'
import React from 'react'

interface SkillsSectionProps {
    cardBg: string
    accentColor: string
    borderColor: string
    isDark: boolean
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ cardBg, accentColor, borderColor, isDark }: SkillsSectionProps) => {
    return (
        <section id="skills" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
                <Box className={accentColor} size={28} />
                <h2 className="text-3xl font-bold">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(SKILLS).map(([category, data], index) => (
                    <div
                        key={category}
                        className={`${cardBg} border ${borderColor} rounded-xl p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:border-cyan-400 animate-fade-in`}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <h3 className={`font-mono font-bold mb-4 ${accentColor} uppercase flex items-center gap-2`}>
                            {data.icon}
                            {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {data.items.map((skill, i) => (
                                <span
                                    key={skill}
                                    className={`${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} px-3 py-1.5 rounded-lg text-sm transition-all duration-300 hover:scale-110 cursor-default`}
                                    style={{ animationDelay: `${(index * 100) + (i * 50)}ms` }}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SkillsSection