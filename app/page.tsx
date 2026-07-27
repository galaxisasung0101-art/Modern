"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Zap, ShieldCheck, Code2, Menu, X, Activity, Server, Cpu } from "lucide-react";

// --- TILT CARD COMPONENT ---
// Efek 3D mengikuti gerakan kursor mouse
const TiltCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-200, 200], [10, -10]);
  const rotateY = useTransform(x, [-200, 200], [-10, 10]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ perspective: 2000 }}
      className="relative w-full max-w-2xl mx-auto z-10"
    >
      <motion.div
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="w-full rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden cursor-crosshair"
      >
        {/* Browser Header Mockup */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-slate-700"></div>
            <div className="w-3 h-3 rounded-full bg-slate-700"></div>
            <div className="w-3 h-3 rounded-full bg-slate-700"></div>
          </div>
          <div className="mx-auto flex items-center justify-center px-12 sm:px-24 h-6 rounded bg-slate-800/50 border border-white/5 text-xs text-slate-400 font-mono">
            nexus-dashboard.app
          </div>
        </div>
        
        {/* Dashboard Content Mockup */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
          <div className="col-span-1 md:col-span-2 rounded-xl bg-slate-800/30 border border-white/5 p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-medium text-slate-300">Live Traffic</div>
              <Activity className="w-4 h-4 text-indigo-400" />
            </div>
            {/* Live Chart Visual */}
            <div className="h-32 flex items-end gap-2">
              {[40, 70, 45, 90, 65, 85, 100, 50, 75, 60, 95].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-gradient-to-t from-indigo-500/20 to-blue-400 rounded-t-sm transition-all duration-500" 
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex-1 rounded-xl bg-slate-800/30 border border-white/5 p-5 flex flex-col justify-center">
              <Server className="w-5 h-5 text-emerald-400 mb-2" />
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-xs text-slate-400">Uptime SLA</div>
            </div>
            <div className="flex-1 rounded-xl bg-slate-800/30 border border-white/5 p-5 flex flex-col justify-center">
              <Cpu className="w-5 h-5 text-purple-400 mb-2" />
              <div className="text-2xl font-bold text-white">12ms</div>
              <div className="text-xs text-slate-400">Global Latency</div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Decorative Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/20 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
    </motion.div>
  );
};

// --- MAIN HERO PAGE ---
export default function HeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 overflow-hidden relative font-sans">
      
      {/* BACKGROUND GRID & GLOW SPOTLIGHTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        ></div>
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-indigo-600/10 blur-[120px]"></div>
      </div>

      {/* GLASS NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#030712]/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Code2 className="w-6 h-6 text-indigo-500" />
            <span className="font-bold tracking-widest text-lg">NEXUS</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Features</a>
            <a href="#solutions" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Solutions</a>
            <a href="#docs" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Docs</a>
            <a href="#pricing" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Pricing</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Sign In</button>
            <button className="relative px-5 py-2 text-sm font-semibold text-white rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all overflow-hidden group">
              <span className="relative z-10">Get Access</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </button>
          </div>

          <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-white/10 bg-[#030712] px-6 py-4 flex flex-col gap-4">
            <a href="#features" className="text-sm font-medium text-slate-300">Features</a>
            <a href="#solutions" className="text-sm font-medium text-slate-300">Solutions</a>
            <a href="#docs" className="text-sm font-medium text-slate-300">Docs</a>
            <a href="#pricing" className="text-sm font-medium text-slate-300">Pricing</a>
            <hr className="border-white/10" />
            <button className="text-sm font-medium text-slate-300 text-left">Sign In</button>
            <button className="w-full py-2.5 text-sm font-semibold text-white rounded-lg bg-indigo-600">Get Access</button>
          </div>
        )}
      </nav>

      {/* HERO CONTENT */}
      <main className="relative z-10 pt-40 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-center"
        >
          {/* Top Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <Zap className="w-3.5 h-3.5" />
              <span>Nexus v3.0 is now live</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Build. Scale. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400 drop-shadow-sm">
              Dominate Your Market.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            The ultimate infrastructure framework designed for modern engineering teams. Deploy instantly, scale infinitely, and monitor everything in real-time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-20">
            <button className="group relative flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all shadow-[0_0_40px_rgba(79,70,229,0.4)] hover:shadow-[0_0_60px_rgba(79,70,229,0.6)]">
              Start Building Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-semibold transition-all">
              <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              View Documentation
            </button>
          </motion.div>

          {/* 3D Tilt Card Mockup */}
          <motion.div variants={itemVariants} className="w-full relative">
            <TiltCard />
          </motion.div>
        </motion.div>
      </main>

      {/* Shimmer Button Keyframe Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}
