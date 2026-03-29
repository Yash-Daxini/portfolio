import {
  EMAIL,
  GITHUB,
  GITHUB_USERNAME,
  LINKEDIN,
  LINKEDIN_USERNAME,
} from "@/shared/config";
import { MessageSquare, Mail, Github, Linkedin, Terminal } from "lucide-react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

interface ContactSectionProps {
  cardBg: string;
  accentBg: string;
  accentColor: string;
  borderColor: string;
  isDark: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  cardBg,
  accentColor,
  borderColor,
}: ContactSectionProps) => {
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailStatus, setEmailStatus] = useState("");

  const handleEmailSubmit = async () => {
    if (!emailForm.name || !emailForm.email || !emailForm.message) return;

    setEmailStatus("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) return;

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: emailForm.name,
          from_email: emailForm.email,
          message: emailForm.message,
        },
        publicKey,
      );

      setEmailStatus("success");
      setEmailForm({ name: "", email: "", message: "" });
      setTimeout(() => setEmailStatus(""), 3000);
    } catch (error) {
      setEmailStatus("error");
      setTimeout(() => setEmailStatus(""), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        id="contact"
        className="mb-24"
      >
        <div className="flex items-center gap-3 mb-8 pb-3 border-b-2 border-gray-500/20">
          <div className="bg-blue-500/20 p-2 rounded-lg">
            <MessageSquare className="text-blue-400" size={24} />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight">Connect</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8"
        >
          {/* Main Form */}
          <motion.div
            variants={itemVariants}
            className={`lg:col-span-3 ${cardBg} border ${borderColor} rounded-2xl p-8 shadow-xl relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl point-events-none"></div>

            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
              <Terminal size={20} className="text-cyan-400" />
              <span className="font-mono">Init_Transmission()</span>
            </h3>

            <div className="space-y-6 relative z-10">
              <div>
                <label className="block mb-2 font-semibold text-sm opacity-80">
                  Name
                </label>
                <input
                  type="text"
                  value={emailForm.name}
                  onChange={(e) =>
                    setEmailForm({ ...emailForm, name: e.target.value })
                  }
                  className={`w-full p-3 bg-black/30 border ${borderColor} rounded-lg outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 shadow-inner`}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-sm opacity-80">
                  Email
                </label>
                <input
                  type="email"
                  value={emailForm.email}
                  onChange={(e) =>
                    setEmailForm({ ...emailForm, email: e.target.value })
                  }
                  className={`w-full p-3 bg-black/30 border ${borderColor} rounded-lg outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 shadow-inner`}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-sm opacity-80">
                  Message
                </label>
                <textarea
                  value={emailForm.message}
                  onChange={(e) =>
                    setEmailForm({ ...emailForm, message: e.target.value })
                  }
                  className={`w-full p-3 bg-black/30 border ${borderColor} rounded-lg outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/50 transition-all duration-300 shadow-inner h-32 resize-none`}
                  placeholder="Your message..."
                />
              </div>
              <button
                onClick={handleEmailSubmit}
                disabled={emailStatus === "sending"}
                className={`w-full bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white shadow-lg shadow-cyan-500/20 py-3 rounded-lg disabled:opacity-50 font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02]`}
              >
                {emailStatus === "sending" && "Executing..."}
                {emailStatus === "success" && "Transmission Successful!"}
                {!emailStatus && (
                  <>
                    <Mail size={18} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Side Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
            <div className={`${cardBg} border ${borderColor} rounded-2xl p-6 h-full shadow-xl flex flex-col justify-center relative overflow-hidden`}>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-500/5 rounded-full blur-3xl point-events-none"></div>

              <h3 className="font-bold mb-8 uppercase flex items-center gap-2 font-mono text-sm tracking-wider opacity-60 relative z-10">
                // Direct Networks
              </h3>

              <div className="space-y-4 relative z-10">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 bg-black/20 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30 p-4 rounded-xl transition-all duration-300 group"
                >
                  <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm group-hover:text-cyan-400 transition-colors">Email</div>
                    <div className="text-xs opacity-70 break-all font-mono">{EMAIL}</div>
                  </div>
                </a>

                <a
                  href={GITHUB}
                  target="_blank"
                  className="flex items-center gap-4 bg-black/20 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30 p-4 rounded-xl transition-all duration-300 group"
                >
                  <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                    <Github size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm group-hover:text-cyan-400 transition-colors">GitHub</div>
                    <div className="text-xs opacity-70 font-mono">{GITHUB_USERNAME}</div>
                  </div>
                </a>

                <a
                  href={LINKEDIN}
                  target="_blank"
                  className="flex items-center gap-4 bg-black/20 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/30 p-4 rounded-xl transition-all duration-300 group"
                >
                  <div className="bg-gray-800 p-2 rounded-lg group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm group-hover:text-cyan-400 transition-colors">LinkedIn</div>
                    <div className="text-xs opacity-70 font-mono">{LINKEDIN_USERNAME}</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default ContactSection;
