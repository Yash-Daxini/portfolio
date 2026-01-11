import { EMAIL, GITHUB, GITHUB_USERNAME, LINKEDIN, LINKEDIN_USERNAME } from '@/shared/config'
import { MessageSquare, Mail, Github, Linkedin } from 'lucide-react'
import React, { useState } from 'react'

interface ContactSectionProps {
    cardBg: string
    accentBg: string
    accentColor: string
    borderColor: string
    isDark: boolean
}

const ContactSection: React.FC<ContactSectionProps> = ({ cardBg, accentBg, accentColor, borderColor, isDark }: ContactSectionProps) => {

    const [emailForm, setEmailForm] = useState({ name: '', email: '', message: '' });
    const [emailStatus, setEmailStatus] = useState('');

    const handleEmailSubmit = async () => {
        if (!emailForm.name || !emailForm.email || !emailForm.message) return;

        setEmailStatus('sending');

        // EmailJS integration
        setTimeout(() => {
            setEmailStatus('success');
            setEmailForm({ name: '', email: '', message: '' });
            setTimeout(() => setEmailStatus(''), 3000);
        }, 1000);
    };

    return (
        <section id="contact" className="mb-20">
            <div className="flex items-center gap-3 mb-6">
                <MessageSquare className={accentColor} size={28} />
                <h2 className="text-3xl font-bold">Get in Touch</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className={`lg:col-span-3 ${cardBg} border ${borderColor} rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500`}>
                    <h3 className="font-bold text-xl mb-6">Send a Message</h3>
                    <div className="space-y-5">
                        <div>
                            <label className="block mb-2 font-medium text-sm opacity-80">Name</label>
                            <input
                                type="text"
                                value={emailForm.name}
                                onChange={(e) => setEmailForm({ ...emailForm, name: e.target.value })}
                                className={`w-full p-4 border ${borderColor} rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} outline-none focus:border-cyan-400 transition-all duration-300`}
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium text-sm opacity-80">Email</label>
                            <input
                                type="email"
                                value={emailForm.email}
                                onChange={(e) => setEmailForm({ ...emailForm, email: e.target.value })}
                                className={`w-full p-4 border ${borderColor} rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} outline-none focus:border-cyan-400 transition-all duration-300`}
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium text-sm opacity-80">Message</label>
                            <textarea
                                value={emailForm.message}
                                onChange={(e) => setEmailForm({ ...emailForm, message: e.target.value })}
                                className={`w-full p-4 border ${borderColor} rounded-lg ${isDark ? 'bg-gray-700' : 'bg-white'} outline-none focus:border-cyan-400 transition-all duration-300 h-40 resize-none`}
                                placeholder="Your message here..."
                            />
                        </div>
                        <button
                            onClick={handleEmailSubmit}
                            disabled={emailStatus === 'sending'}
                            className={`w-full ${accentBg} text-white py-4 rounded-lg transition-all duration-300 disabled:opacity-50 font-medium hover:opacity-90 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2`}
                        >
                            {emailStatus === 'sending' && '⟳ Sending...'}
                            {emailStatus === 'success' && '✓ Message Sent!'}
                            {!emailStatus && (
                                <>
                                    <Mail size={20} />
                                    Send Message
                                </>
                            )}
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    <div className={`${cardBg} border ${borderColor} rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500`}>
                        <h3 className="font-bold mb-4">Direct Contact</h3>
                        <div className="space-y-4">
                            <a href="mailto:your.email@example.com" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
                                <div className={`p-2 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-200'} group-hover:bg-cyan-400 transition-colors`}>
                                    <Mail size={20} className="group-hover:text-white" />
                                </div>
                                <div>
                                    <div className="text-xs opacity-60">Email</div>
                                    <div className="font-medium">{EMAIL}</div>
                                </div>
                            </a>
                            <a href={GITHUB} target="_blank" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
                                <div className={`p-2 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-200'} group-hover:bg-cyan-400 transition-colors`}>
                                    <Github size={20} className="group-hover:text-white" />
                                </div>
                                <div>
                                    <div className="text-xs opacity-60">GitHub</div>
                                    <div className="font-medium">{GITHUB_USERNAME}</div>
                                </div>
                            </a>
                            <a href={LINKEDIN} target="_blank" className="flex items-center gap-3 hover:opacity-80 transition-opacity group">
                                <div className={`p-2 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-200'} group-hover:bg-cyan-400 transition-colors`}>
                                    <Linkedin size={20} className="group-hover:text-white" />
                                </div>
                                <div>
                                    <div className="text-xs opacity-60">LinkedIn</div>
                                    <div className="font-medium">{LINKEDIN_USERNAME}</div>
                                </div>
                            </a>
                            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                                <Mail size={20} />
                                <span>{EMAIL}</span>
                            </a>
                        </div>
                    </div>
                    <div className={`border-t ${borderColor} pt-6`}>
                        <h3 className="font-mono font-bold mb-3">Location</h3>
                        <p className="opacity-80">Available for remote opportunities worldwide</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection