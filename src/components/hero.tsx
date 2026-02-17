"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#10b981_100%)] opacity-30" />
      
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-[8rem]">
            Hi, I'm <span className="text-primary">Shane Edelstein</span>
          </h1>
          <p className="mx-auto max-w-[900px] text-gray-500 text-xl md:text-2xl lg:text-3xl dark:text-gray-400">
            Computer Science Student at Western University. Passionate about Full Stack Development, AI, and building scalable digital experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <Link
            href="#projects"
            className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="inline-flex h-14 items-center justify-center rounded-md border border-input bg-background px-8 text-lg font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Resume
            <Download className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex h-14 items-center justify-center rounded-md border border-input bg-background px-8 text-lg font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Contact
          </Link>
          <Link
            href="https://www.linkedin.com/in/shaneedelstein/"
            target="_blank"
            className="inline-flex h-14 items-center justify-center rounded-md border border-input bg-background px-8 text-lg font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            LinkedIn
            <Linkedin className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="https://github.com/Sheperdd"
            target="_blank"
            className="inline-flex h-14 items-center justify-center rounded-md border border-input bg-background px-8 text-lg font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            GitHub
            <Github className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
