import * as React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Bot, Users, Rocket, BarChart3, Target } from "lucide-react";

const skills = [
  {
    name: "Product Strategy & Vision",
    description: "Turning ideas into SaaS products that scale.",
    icon: Target,
    level: 95,
  },
  {
    name: "AI & LLM Integration",
    description: "Embedding intelligence into workflows.",
    icon: Bot,
    level: 90,
  },
  {
    name: "Agile Leadership",
    description: "Driving teams to deliver with speed & clarity.",
    icon: Users,
    level: 92,
  },
  {
    name: "GTM Execution",
    description: "Launching SaaS products that win markets.",
    icon: Rocket,
    level: 88,
  },
  {
    name: "Data-Driven Decisions",
    description: "Using insight to sharpen strategy.",
    icon: BarChart3,
    level: 94,
  },
  {
    name: "Innovation & Problem Solving",
    description: "Creating solutions for complex challenges.",
    icon: Lightbulb,
    level: 96,
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-surface/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Skills & Superpowers
          </h2>
          <div className="w-16 h-0.5 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-card-border/50 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-primary text-white group-hover:scale-105 transition-transform duration-200">
                      <skill.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-display font-semibold group-hover:text-primary transition-colors duration-200">
                      {skill.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {skill.description}
                  </p>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-muted-foreground">
                        Expertise
                      </span>
                      <span className="text-xs font-bold text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted/50 rounded-full h-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-1.5 bg-gradient-primary rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}