"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Min-Max Life (Productivity)",
    description:
      "Gamified productivity app using React Native (Expo), TypeScript, and Supabase. Features reduced manual input via OpenAI GPT-4 API for automatic quest assignment and real-time stat visualization.",
    tags: ["React Native", "TypeScript", "Supabase", "OpenAI", "TanStack Query"],
    github: "https://github.com/Sheperdd/min_max",
    image: "/min_max.png", 
  },
  {
    title: "Multi-tenant E-Commerce",
    description:
      "Full-stack platform enabling users to create digital storefronts. Features isolated data with PayloadCMS & MongoDB, Stripe Connect integration for payments, and a pickup-only farmer's market system.",
    tags: ["Next.js 15", "PayloadCMS", "MongoDB", "Stripe Connect", "tRPC"],
    github: "https://github.com/Sheperdd/ecommerce",
    image: "/e-commerce.png",
  },
  {
    title: "Legend of a Missing Diamond",
    description:
      "2D adventure puzzle engine in Java. Features object-oriented design patterns, JSON-based persistence, and rigorous JUnit testing for collision and game state management.",
    tags: ["Java", "JUnit", "Jackson", "Figma", "Game Dev"],
    github: "https://github.com/Sheperdd/Legend-of-a-Missing-Diamond",
    image: "/diamond.png",
    download: "/Legend-Of-A-Missing-Diamond.jar", 
  },
  {
    title: "Personal Website",
    description:
      "A modern, responsive, and interactive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features smooth animations and a dynamic dark mode, as well as device-specific layouts.",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Sheperdd/Personal-Website",
    image: "/website.png",
  },
  {
    title: "File Manager",
    description:
      "A lightweight, graphical file manager for Linux built with C++ and wxWidgets. Features core file system operations and a custom UI for efficient navigation.",
    tags: ["C++", "Linux", "wxWidgets"],
    github: "https://github.com/Sheperdd/File_Manager",
    image: "/file-manager.png",
  }
  // {
  //   title: "Project Stealth (In Progress)",
  //   description:
  //     "A new unannounced project I'm currently developing. Focused on pushing the boundaries of modern web performance and interactivity.",
  //   tags: ["Under Development", "Coming Soon"],
  //   github: "https://github.com/Sheperdd",
  //   image: "/placeholder.jpg",
  // },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            A selection of my recent work and experiments.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-lg border bg-background shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-2 text-muted-foreground flex-1">
                  {project.description}
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Link>
                  {(project as any).download && (
                    <Link
                      href={(project as any).download}
                      target="_blank"
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Download JAR
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
