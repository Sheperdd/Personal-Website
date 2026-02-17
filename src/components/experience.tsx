"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

// Placeholder data based on user context - to be verified/refined by user
const experience = [
  {
    company: "Brickworks Academy",
    role: "Programming Instructor",
    period: "Jun 2025 - Sep 2025",
    description: "Taught fundamental programming concepts and logical thinking to students aged 9 to 13. Developed their problem-solving skills by guiding them through structured solution design, breaking down complex problems into manageable, hands-on coding projects.",
  },
  {
    company: "First Lego League", 
    role: "Robotics Mentor",
    period: "Jun 2021 - Sep 2023",
    description: "Mentored the award-winning Glen Ames P.S. Robotics Team, leading them to two international competitions. Instructed students in LEGO EV3 and Python programming, with a strong emphasis on object-oriented code, structure, and clear documentation.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-[700px] mx-auto">
            My journey through education, teaching, and engineering.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-12 pb-12">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 h-5 w-5 rounded-full border-4 border-background bg-primary shadow-sm" />
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mt-1 sm:mt-0">
                    <Calendar className="mr-2 h-4 w-4" />
                    {job.period}
                  </div>
                </div>
                
                <div className="flex items-center text-primary font-medium mb-4">
                  <Briefcase className="mr-2 h-4 w-4" />
                  {job.company}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
