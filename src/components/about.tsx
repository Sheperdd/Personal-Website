"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const skills = [
  "Java",
  "Python",
  "C/C++",
  "Linux",
  "SQL",
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "React Native",
  "MongoDB",
  "PostgreSQL",
  "Supabase",
  "Jackson",
  "Git",
  "RESTful APIs",
  "tRPC",
  "TanStack Query",
  "Stripe",
  "Figma",
];

const softSkills = [
  "Problem Solving",
  "Communication",
  "Leadership",
  "Team Collaboration",
  "Mentorship",
  "Project Management",
  "Adaptability",
  "Critical Thinking",
];

export function About() {
  return (
    <section id="about" className="bg-background pb-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_2fr] items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <Image src="/me.png" alt="Profile" fill className="object-cover" />
            </div>
          </motion.div>
          <div className="absolute -inset-4 rounded-full border border-primary/20 -z-10 animate-pulse" />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              About Me
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I am an Honors Computer Science student at Western University (Class of 2027) specializing in full-stack development and system architecture. My technical work focuses on building scalable applications using modern tools like Next.js, React Native, and OpenAI. 
            </p>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Complementing this, my background as a robotics mentor and programming instructor has honed my ability to deconstruct complex algorithmic problems—a skill I apply to writing clean, structured, and maintainable code.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-muted p-4 rounded-2xl lg:col-span-2 mt-12"
          >
            <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-4 py-2 bg-background rounded-full text-sm font-medium shadow-sm border"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-muted p-4 rounded-2xl lg:col-span-2"
          >
            <h3 className="text-xl font-bold mb-6">Workplace Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 2.5 + index * 0.1 }}
                  className="px-4 py-2 bg-background rounded-full text-sm font-medium shadow-sm border"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
