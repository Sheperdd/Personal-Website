"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    school: "Western University",
    degree: "Honors Specialization in Computer Science",
    period: "2023 - 2027",
    description: "Coursework includes Operating Systems, Algorithms, Data Structures, Software Engineering, and Database Management Systems.",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Education
          </h2>
          <p className="text-muted-foreground text-lg max-w-[700px] mx-auto">
            Academic background and qualifications.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="flex-shrink-0 bg-primary/10 p-4 rounded-xl">
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>
                
                <div className="flex-grow space-y-4">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h3 className="text-2xl font-bold">{edu.school}</h3>
                      <p className="text-xl text-primary font-medium">{edu.degree}</p>
                    </div>
                    <div className="flex items-center text-muted-foreground bg-muted px-3 py-1 rounded-full text-sm">
                      <Calendar className="mr-2 h-4 w-4" />
                      {edu.period}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {edu.description}
                  </p>
                </div>
              </div>
              
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 -mt-8 -mr-8 h-24 w-24 rounded-full bg-primary/5 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
