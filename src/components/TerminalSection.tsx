import { ABOUT, EMAIL, GITHUB, LINKEDIN, PROJECTS, SKILLS } from '@/shared/config';
import { Terminal } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface TerminalData {
    type: string,
    text: string,
    result?: TerminalResult
}

interface TerminalResult {
    type: string,
    content: string
}
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

    const [lastLoggedInDate, setLastLoggedInDate] = useState<string>("");
    const [terminalInput, setTerminalInput] = useState('');
    const [terminalHistory, setTerminalHistory] = useState<TerminalData[]>([]);
    const terminalEndRef = useRef<any>(null);
    const terminalContainerRef = useRef<HTMLDivElement>(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);


    useEffect(() => {
        if (terminalContainerRef.current && terminalEndRef.current) {
            terminalEndRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'nearest'
            });
        }

        setLastLoggedInDate(new Date().toLocaleString());

        if (terminalHistory.length == 0) {
            setTerminalHistory([{
                type: 'system',
                text: `Last login: ${new Date().toLocaleString()} on ttys001\n\nWelcome to Portfolio Terminal v1.0\nType 'help' to see available commands.\n`
            }]);
        }
    }, [terminalHistory]);

    const commands = {
        help: () => ({
            type: 'help',
            content: [
                { cmd: 'about', desc: 'Display information about me' },
                { cmd: 'skills', desc: 'List technical skills and expertise' },
                { cmd: 'projects', desc: 'Show featured projects' },
                { cmd: 'contact', desc: 'Get contact information' },
                { cmd: 'resume', desc: 'Download resume' },
                { cmd: 'theme', desc: 'Toggle dark/light theme' },
                { cmd: 'fullscreen', desc: 'Toggle fullscreen mode (or use fs)' },
                { cmd: 'clear', desc: 'Clear terminal screen' },
                { cmd: 'whoami', desc: 'Print current user' },
                { cmd: 'date', desc: 'Display current date and time' }
            ]
        }),
        about: () => ({
            type: 'text',
            content: ABOUT
        }),
        skills: () => ({
            type: 'skills',
            content: SKILLS
        }),
        projects: () => ({
            type: 'projects',
            content: PROJECTS
        }),
        contact: () => ({
            type: 'contact',
            content: {
                email: EMAIL,
                github: GITHUB,
                linkedin: LINKEDIN
            }
        }),
        clear: () => ({ type: 'clear' }),
        resume: () => ({
            type: 'text',
            content: 'Downloading resume...'
        }),
        theme: () => ({
            type: 'text',
            content: `Theme switched to ${isDark ? 'light' : 'dark'} mode`
        }),
        whoami: () => ({
            type: 'text',
            content: 'yash-daxini'
        }),
        date: () => ({
            type: 'text',
            content: lastLoggedInDate
        })
    };

    const renderOutput = (item: any) => {
        const result = item.result;

        if (!result) return null;

        switch (result.type) {
            case 'help':
                return (
                    <div className="mt-2 space-y-1">
                        <div className="text-cyan-400 font-bold mb-2">Available Commands:</div>
                        {result.content.map((cmd: any, i: number) => (
                            <div key={i} className="flex gap-4 pl-4">
                                <span className="text-green-400 font-bold w-20">{cmd.cmd}</span>
                                <span className="opacity-70">{cmd.desc}</span>
                            </div>
                        ))}
                    </div>
                );

            case 'skills':
                return (
                    <div className="mt-2 space-y-3">
                        {Object.entries(result.content).map(([category, data]: [string, any]) => (
                            <div key={category}>
                                <div className="text-cyan-400 font-bold flex items-center gap-2 mb-1">
                                    ├─ {category.toUpperCase()}
                                </div>
                                <div className="pl-6 flex flex-wrap gap-2">
                                    {data.items.map((skill: string, i: number) => (
                                        <span key={i} className="text-green-400">
                                            • {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'projects':
                return (
                    <div className="mt-2 space-y-4">
                        {result.content.map((project: any, i: number) => (
                            <div key={i} className="border-l-2 border-cyan-400 pl-4">
                                <div className="text-cyan-400 font-bold">
                                    [{i + 1}] {project.title}
                                </div>
                                <div className="opacity-70 text-sm mt-1">{project.description}</div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tech.map((tech: string, j: number) => (
                                        <span key={j} className="text-yellow-400 text-xs">
                                            #{tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                );

            case 'contact':
                return (
                    <div className="mt-2 space-y-2 pl-4">
                        <div className="flex items-center gap-3">
                            <span className="text-cyan-400 font-bold w-24">Email:</span>
                            <span className="text-green-400">{result.content.email}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-cyan-400 font-bold w-24">GitHub:</span>
                            <span className="text-green-400">{result.content.github}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-cyan-400 font-bold w-24">LinkedIn:</span>
                            <span className="text-green-400">{result.content.linkedin}</span>
                        </div>
                    </div>
                );

            case 'text':
                return (
                    <div className="mt-1 opacity-80">
                        {result.content}
                    </div>
                );

            default:
                return null;
        }
    };

    const handleTerminalSubmit = (e: any, cmdKey: string = "") => {
        e.preventDefault();

        if (!terminalInput.trim() && cmdKey === "") return;

        const terminalInputText = terminalInput ? terminalInput : cmdKey;
        const cmd = terminalInput.toLowerCase().trim() || cmdKey.toLowerCase().trim();

        // Add to command history (only if typing, not from quick commands)
        if (terminalInput && !commandHistory.includes(terminalInputText)) {
            setCommandHistory([...commandHistory, terminalInputText]);
        }
        setHistoryIndex(-1);

        const newEntry: any = {
            type: 'input',
            text: terminalInputText,
            timestamp: new Date().toLocaleString()
        };

        if (cmd === 'clear') {
            setTerminalHistory([]);
            setTerminalInput('');
            return;
        } else if (cmd === 'theme') {
            setIsDark(!isDark);
            newEntry.result = commands.theme();
        } else if (cmd === 'resume') {
            downloadResume();
            newEntry.result = commands.resume();
        } else if (cmd === 'fullscreen' || cmd === 'fs') {
            setIsFullscreen(!isFullscreen);
            newEntry.result = {
                type: 'text',
                content: `Fullscreen mode ${!isFullscreen ? 'enabled' : 'disabled'}`
            };
        } else if (cmd in commands) {
            newEntry.result = commands[cmd as keyof typeof commands]();
        } else {
            newEntry.result = {
                type: 'error',
                content: `zsh: command not found: ${cmd}`
            };
        }

        setTerminalHistory([...terminalHistory, newEntry]);
        setTerminalInput('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
                setHistoryIndex(newIndex);
                setTerminalInput(commandHistory[commandHistory.length - 1 - newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setTerminalInput(commandHistory[commandHistory.length - 1 - newIndex]);
            } else if (historyIndex === 0) {
                setHistoryIndex(-1);
                setTerminalInput('');
            }
        } else if (e.key === 'Escape') {
            e.preventDefault();
            setIsFullscreen(false);
        }
    };

    return (
        <>
            {/* Fullscreen Overlay */}
            {isFullscreen && (
                <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm animate-fade-in" ref={terminalContainerRef}>
                    <div className="h-full flex flex-col p-4">
                        {/* Fullscreen Terminal Header */}
                        <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-200'} px-4 py-3 flex items-center justify-between border-b ${borderColor} rounded-t-xl`}>
                            <div className="flex items-center gap-3">
                                <div className="flex gap-2">
                                    <div onClick={() => setIsFullscreen(false)} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer transition-colors"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-colors"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer transition-colors"></div>
                                </div>
                                <span className="font-mono text-sm ml-2 opacity-70">zsh - portfolio [FULLSCREEN]</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-xs opacity-60 font-mono hidden sm:block">yash@portfolio:~$</div>
                                <button
                                    onClick={() => setIsFullscreen(false)}
                                    className="text-xs font-mono px-3 py-1 rounded bg-red-500/20 hover:bg-red-500/30 text-red-400 transition-colors"
                                >
                                    ESC to exit
                                </button>
                            </div>
                        </div>

                        {/* Fullscreen Terminal Body */}
                        <div className={`flex-1 p-6 font-mono text-sm ${isDark ? 'bg-gray-900' : 'bg-gray-50'} overflow-y-auto rounded-b-xl`}>
                            {terminalHistory.map((item, i) => (
                                <div key={i} className="mb-4">
                                    {item.type === 'system' ? (
                                        <div className="text-green-400 whitespace-pre-wrap">
                                            {item.text}
                                        </div>
                                    ) : (
                                        <>
                                            <div className="flex items-start gap-2 mb-1">
                                                <span className="text-green-400 shrink-0">➜</span>
                                                <span className="text-cyan-400 shrink-0">~</span>
                                                <span className={accentColor}>{item.text}</span>
                                            </div>
                                            {item.result && (
                                                <div className={item.result.type === 'error' ? 'text-red-400' : ''}>
                                                    {item.result.type === 'error' ? (
                                                        item.result.content
                                                    ) : (
                                                        renderOutput(item)
                                                    )}
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            ))}

                            <div className="flex items-center gap-2">
                                <span className="text-green-400">➜</span>
                                <span className="text-cyan-400">~</span>
                                <input
                                    type="text"
                                    value={terminalInput}
                                    onChange={(e) => setTerminalInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleTerminalSubmit(e)}
                                    onKeyDown={handleKeyDown}
                                    className={`flex-1 bg-transparent outline-none ${textColor} font-mono`}
                                    placeholder="type a command..."
                                    autoFocus
                                />
                            </div>
                            <div ref={terminalEndRef} />
                        </div>
                    </div>
                </div>
            )}

            {/* Normal Terminal Section */}
            <section className="mb-20" ref={terminalContainerRef}>
                <div className="flex items-center gap-3 mb-6">
                    <Terminal className={accentColor} size={28} />
                    <h2 className="text-3xl font-bold">Interactive Terminal</h2>
                </div>
                <div className={`${cardBg} border ${borderColor} rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500`}>
                    {/* Terminal Header */}
                    <div className={`${isDark ? 'bg-gray-700' : 'bg-gray-200'} px-4 py-3 flex items-center justify-between border-b ${borderColor}`}>
                        <div className="flex items-center gap-3">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer transition-colors"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer transition-colors"></div>
                                <div onClick={() => setIsFullscreen(true)} className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer transition-colors"></div>
                            </div>
                            <span className="font-mono text-sm ml-2 opacity-70">zsh - portfolio</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="text-xs opacity-60 font-mono hidden sm:block">yash@portfolio:~$</div>
                            <button
                                onClick={() => setIsFullscreen(true)}
                                className="text-xs font-mono px-2 py-1 rounded hover:bg-cyan-400/10 transition-colors opacity-60 hover:opacity-100"
                                title="Toggle fullscreen"
                            >
                                [ ⛶ ]
                            </button>
                        </div>
                    </div>

                    {/* Terminal Body */}
                    <div className={`p-4 sm:p-6 font-mono text-xs sm:text-sm ${isDark ? 'bg-gray-900' : 'bg-gray-50'} min-h-80 max-h-96 overflow-y-auto`}>
                        {terminalHistory.map((item, i) => (
                            <div key={i} className="mb-4">
                                {item.type === 'system' ? (
                                    <div className="text-green-400 whitespace-pre-wrap">
                                        {item.text}
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex items-start gap-2 mb-1">
                                            <span className="text-green-400 shrink-0">➜</span>
                                            <span className="text-cyan-400 shrink-0">~</span>
                                            <span className={accentColor}>{item.text}</span>
                                        </div>
                                        {item.result && (
                                            <div className={item.result.type === 'error' ? 'text-red-400' : ''}>
                                                {item.result.type === 'error' ? (
                                                    item.result.content
                                                ) : (
                                                    renderOutput(item)
                                                )}
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}

                        <div className="flex items-center gap-2">
                            <span className="text-green-400">➜</span>
                            <span className="text-cyan-400">~</span>
                            <input
                                type="text"
                                value={terminalInput}
                                onChange={(e) => setTerminalInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleTerminalSubmit(e)}
                                onKeyDown={handleKeyDown}
                                className={`flex-1 bg-transparent outline-none ${textColor} font-mono`}
                                placeholder="type a command..."
                                autoFocus
                            />
                        </div>
                        <div ref={terminalEndRef} />
                    </div>
                </div>

                {/* Quick Commands */}
                <div className="mt-4 flex flex-wrap gap-2 items-center">
                    <span className="text-sm opacity-60 hidden sm:inline">Quick commands:</span>
                    {Object.keys(commands).filter(cmd => cmd !== 'clear' && cmd !== 'whoami' && cmd !== 'date').map(cmd => (
                        <button
                            key={cmd}
                            onClick={(e) => {
                                setTerminalInput(cmd);
                                handleTerminalSubmit(e, cmd);
                            }}
                            className={`px-3 py-1.5 rounded-lg border ${borderColor} hover:border-cyan-400 hover:bg-cyan-400/10 transition-all text-xs font-mono hover:scale-105`}
                        >
                            $ {cmd}
                        </button>
                    ))}
                    <button
                        onClick={() => setIsFullscreen(true)}
                        className={`px-3 py-1.5 rounded-lg border ${borderColor} hover:border-cyan-400 hover:bg-cyan-400/10 transition-all text-xs font-mono hover:scale-105`}
                    >
                        ⛶ fullscreen
                    </button>
                </div>
            </section>
        </>
    )
}

export default TerminalSection