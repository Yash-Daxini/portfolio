"use client";

import React, { useEffect, useState } from "react";

interface BootSequenceProps {
  onComplete: () => void;
}

const BOOT_MESSAGES = [
  { text: "BIOS Date 10/24/23 11:22:33 Ver 08.00.10", delay: 100 },
  { text: "CPU: Intel(R) Core(TM) i9-13900K @ 3.00GHz", delay: 150 },
  { text: "Memory: 65536MB OK", delay: 200 },
  { text: "Initializing USB Controllers .. Done.", delay: 300 },
  { text: "Booting from Hard Disk...", delay: 500 },
  {
    text: "Loading Linux 6.1.0-18-amd64 ...",
    delay: 600,
    color: "text-gray-300",
  },
  { text: "Loading initial ramdisk ...", delay: 700, color: "text-gray-300" },
  { text: "[  OK  ] Started Next.js Portfolio Core.", delay: 850, isOk: true },
  { text: "[  OK  ] Reached target Basic System.", delay: 900, isOk: true },
  { text: "[  OK  ] Started UI Components Service.", delay: 950, isOk: true },
  { text: "Starting Developer Personality Module...", delay: 1000 },
  {
    text: "[  OK  ] Started Developer Personality Module.",
    delay: 1200,
    isOk: true,
  },
  {
    text: "[  OK  ] Started Interactive Terminal Subsystem.",
    delay: 1300,
    isOk: true,
  },
  {
    text: "[  OK  ] Reached target Graphical Interface.",
    delay: 1400,
    isOk: true,
  },
  { text: "Mounting Virtual DOM...", delay: 1500 },
  {
    text: "[  OK  ] Mounted Virtual DOM successfully.",
    delay: 1600,
    isOk: true,
  },
  {
    text: "Welcome to Yash Daxini's Portfolio OS LTS.",
    delay: 1800,
    color: "text-cyan-400 font-bold",
  },
  { text: "systemd[1]: Starting User Session...", delay: 2000 },
];

const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [messages, setMessages] = useState<number>(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let timeoutIds: NodeJS.Timeout[] = [];

    // Schedule all messages
    BOOT_MESSAGES.forEach((msg, index) => {
      const timeoutId = setTimeout(() => {
        if (isMounted) {
          setMessages(index + 1);
        }
      }, msg.delay);
      timeoutIds.push(timeoutId);
    });

    // Schedule completion
    const completionDelay = BOOT_MESSAGES[BOOT_MESSAGES.length - 1].delay + 600;
    const fadeOutTimeout = setTimeout(() => {
      if (isMounted) setIsFadingOut(true);
    }, completionDelay);

    const completeTimeout = setTimeout(() => {
      if (isMounted) onComplete();
    }, completionDelay + 500); // 500ms for the fade out transition

    timeoutIds.push(fadeOutTimeout, completeTimeout);

    return () => {
      isMounted = false;
      timeoutIds.forEach(clearTimeout);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-black z-[9999] flex flex-col p-4 sm:p-8 font-mono text-sm sm:text-base overflow-hidden transition-opacity duration-500 ${isFadingOut ? "opacity-0" : "opacity-100"}`}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
          backgroundSize: "100% 2px, 3px 100%",
        }}
      />

      {BOOT_MESSAGES.slice(0, messages).map((msg, idx) => (
        <div key={idx} className="mb-1 leading-snug tracking-tight">
          {msg.isOk ? (
            <>
              <span className="text-gray-300">[ </span>
              <span className="text-green-500 font-bold">OK</span>
              <span className="text-gray-300"> ] </span>
              <span className="text-gray-300">
                {msg.text.replace("[  OK  ] ", "")}
              </span>
            </>
          ) : (
            <span className={msg.color || "text-gray-300"}>{msg.text}</span>
          )}
        </div>
      ))}

      {messages < BOOT_MESSAGES.length && (
        <div className="w-2 h-4 bg-gray-300 animate-pulse mt-1" />
      )}
    </div>
  );
};

export default BootSequence;
