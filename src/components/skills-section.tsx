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
  const [hoveredSkill, setHoveredSkill] = React.useState<number | null>(null);

  return (
    <section id="skills" className="py-20 bg-surface/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Skills & Superpowers
          </h2>
          <div className="w-20 h-1 bg-gradient-secondary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            The core competencies that drive product success and team excellence.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group"
              >
                <div className="bg-card rounded-2xl p-6 border border-card-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary text-white group-hover:scale-110 transition-transform">
                      <skill.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>

                  {/* Skill Level Indicator */}
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-muted-foreground">
                        Proficiency
                      </span>
                      <span className="text-sm font-bold text-primary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className="h-2 bg-gradient-primary rounded-full relative overflow-hidden"
                      >
                        <motion.div
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent ${
                            hoveredSkill === index ? "opacity-100" : "opacity-0"
                          } transition-opacity`}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Radar Chart Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-card rounded-2xl p-8 border border-card-border inline-block">
              <h3 className="text-lg font-display font-semibold mb-4">
                Skill Distribution
              </h3>
              <div className="w-48 h-48 mx-auto relative">
                {/* Simple circular representation */}
                <div className="absolute inset-0 rounded-full border-4 border-muted">
                  {skills.map((skill, index) => {
                    const angle = (index * 360) / skills.length;
                    const radius = (skill.level / 100) * 80;
                    return (
                      <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="absolute w-3 h-3 bg-gradient-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                          left: `50%`,
                          top: `50%`,
                          transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
                        }}
                      />
                    );
                  })}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary font-display">
                      92%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Average
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}