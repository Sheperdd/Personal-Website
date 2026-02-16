"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="text-muted-foreground md:text-xl">
            I'm currently looking for internships and new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <motion.a
            href="mailto:shaneedelstein@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-primary text-primary-foreground font-medium text-lg shadow-lg hover:bg-primary/90 transition-colors"
          >
            <Mail className="h-5 w-5" />
            Say Hello
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
