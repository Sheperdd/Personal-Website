"use client";

import { motion } from "framer-motion";

const skills = [
  "Java",
  "Python",
  "C/C++",
  "SQL",
  "TypeScript/JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "React Native",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Git",
];

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              {/* Replace with your actual image */}
              <div className="absolute inset-0 bg-muted flex items-center justify-center text-muted-foreground">
                <span className="text-sm">Add /public/me.jpg</span>
              </div>
              {/* <Image src="/me.jpg" alt="Profile" fill className="object-cover" /> */}
            </div>
            {/* Decoratiive circle */}
            <div className="absolute -inset-4 rounded-full border border-primary/20 -z-10 animate-pulse" />
          </motion.div>

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
              I am an Honors Specialization Computer Science student at the University of Western Ontario (Expected 2027). 
              With a strong foundation in Operating Systems, OOP, and Algorithms, I specialize in building full-stack applications and solving complex engineering problems.
            </p>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              My experience ranges from teaching fundamental programming concepts as an instructor to developing sophisticated e-commerce platforms and AI-integrated productivity apps.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-muted p-8 rounded-2xl lg:col-span-2"
          >
            <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
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
