import { ABOUT, EMAIL, GITHUB, LINKEDIN, PROJECTS, SKILLS } from '@/shared/config';
import { Terminal } from 'lucide-react';
import React, { useRef, useState } from 'react';

interface TerminalSectionProps {
    cardBg: string
    accentBg: string
    accentColor: string
    borderColor: string
    textColor: string
    isDark: boolean
    setIsDark: (isDark: boolean) => void
    downloadResume: () => void
}

const TerminalSection: React.FC<TerminalSectionProps> = ({ cardBg, accentBg, accentColor, borderColor, textColor, isDark, setIsDark, downloadResume }: TerminalSectionProps) => {

    const [terminalInput, setTerminalInput] = useState('');
    const [terminalHistory, setTerminalHistory] = useState([
        { type: 'system', text: 'Welcome to my portfolio! Type "help" for available commands.' }
    ]);
    const terminalEndRef = useRef<any>(null);

    const commands = {
        help: () => 'Available commands: about, skills, projects, contact, clear, resume, theme',
        about: () => ABOUT,
        skills: () => Object.entries(SKILLS).map(([cat, data]) => `${cat.toUpperCase()}: ${data.items.join(', ')}`).join('\n'),
        projects: () => PROJECTS.map((p, i) => `${i + 1}. ${p.title}\n   ${p.description}\n   Tech: ${p.tech.join(', ')}`).join('\n\n'),
        contact: () => `Email: ${EMAIL}\nGitHub: ${GITHUB}\nLinkedIn: ${LINKEDIN}'`,
        clear: () => 'CLEAR',
        resume: () => 'Opening resume download...',
        theme: () => 'Theme toggled!'
    };

    const handleTerminalSubmit = (e: any, cmdKey: string = "") => {
        e.preventDefault();

        if (!terminalInput.trim() && cmdKey === "") return;

        const terminalInputText = terminalInput ? terminalInput : cmdKey;

        const cmd = terminalInput.toLowerCase().trim() || cmdKey.toLowerCase().trim();
        const newHistory = [...terminalHistory, { type: 'input', text: `$ ${terminalInputText}` }];

        if (cmd === 'clear') {
            setTerminalHistory([]);
        } else if (cmd === 'theme') {
            setIsDark(!isDark);
            newHistory.push({ type: 'output', text: commands.theme() });
            setTerminalHistory(newHistory);
        } else if (cmd === 'resume') {
            downloadResume();
            newHistory.push({ type: 'output', text: commands.resume() });
            setTerminalHistory(newHistory);
        } else if (cmd in commands) {
            newHistory.push({ type: 'output', text: commands[cmd as keyof typeof commands]() });
            setTerminalHistory(newHistory);
        } else {
            newHistory.push({ type: 'error', text: `Command not found: ${cmd}. Type "help" for available commands.` });
            setTerminalHistory(newHistory);
        }

        setTerminalInput('');
    };

    return (
        <section className="mb-20">
            <div className="flex items-center gap-3 mb-6">
                <Terminal className={accentColor} size={28} />
                <h2 className="text-3xl font-bold">Interactive Terminal</h2>
            </div>
            <div className={`${cardBg} border ${borderColor} rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500`}>
                <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-200'} px-4 py-3 flex items-center justify-between border-b ${borderColor}`}>
                    <div className="flex items-center gap-3">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer transition-colors"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-colors"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer transition-colors"></div>
                        </div>
                        <span className="font-mono text-sm ml-2 opacity-70">root@portfolio: ~</span>
                    </div>
                    <div className="text-xs opacity-60 font-mono">Type 'help' for commands</div>
                </div>

                <div className={`p-6 font-mono text-sm ${isDark ? 'bg-gray-800' : 'bg-gray-50'} min-h-80 max-h-96 overflow-y-auto`}>
                    {terminalHistory.map((item, i) => (
                        <div key={i} className={`mb-2 animate-fade-in ${item.type === 'error' ? 'text-red-400' :
                            item.type === 'input' ? accentColor :
                                item.type === 'system' ? 'text-green-400' :
                                    'opacity-80'
                            }`}>
                            <pre className="whitespace-pre-wrap break-words font-mono">{item.text}</pre>
                        </div>
                    ))}

                    <div className="flex items-center gap-2 mt-4">
                        <span className={accentColor}>$</span>
                        <input
                            type="text"
                            value={terminalInput}
                            onChange={(e) => setTerminalInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleTerminalSubmit(e)}
                            className={`flex-1 bg-transparent outline-none ${textColor} font-mono`}
                            placeholder="Type a command..."
                            autoFocus
                        />
                    </div>
                    <div ref={terminalEndRef} />
                </div>
            </div>

            {/* Quick Commands */}
            <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-sm opacity-60">Quick commands:</span>
                {Object.keys(commands).map(cmd => (
                    <button
                        key={cmd}
                        onClick={(e) => {
                            setTerminalInput(cmd);
                            handleTerminalSubmit(e, cmd);
                        }}
                        className={`px-3 py-1 rounded-lg border ${borderColor} hover:${accentBg} hover:${isDark ? 'text-white' : 'text-dark'} transition-all text-xs font-mono hover:scale-105`}
                    >
                        {cmd}
                    </button>
                ))}
            </div>
        </section>
    )
}

export default TerminalSection