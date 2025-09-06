import * as React from "react";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              About Me
            </h2>
            <div className="w-16 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-muted-foreground">
                  I'm a <strong className="text-foreground">SaaS Product Builder and Product Leader</strong> who thrives where{" "}
                  <strong className="text-primary">strategy, systems, and execution meet</strong>.
                </p>
                
                <p className="text-xl leading-relaxed text-muted-foreground">
                  From <strong className="text-foreground">SaaS platforms</strong> to{" "}
                  <strong className="text-foreground">data-driven ecosystems</strong>, I've built products that cut costs, 
                  speed up releases, and open new revenue streams.
                </p>
                
                <p className="text-xl leading-relaxed text-muted-foreground">
                  I turn <strong className="text-secondary">ambiguity into clarity</strong>,{" "}
                  <strong className="text-secondary">ideas into roadmaps</strong>, and{" "}
                  <strong className="text-secondary">roadmaps into impact</strong>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-surface rounded-3xl p-10 border border-border shadow-lg">
                <h3 className="text-2xl font-display font-semibold mb-8 text-center">
                  What Drives Me
                </h3>
                <div className="space-y-6">
                  {[
                    { icon: "🚀", text: "Building products that scale from zero to traction" },
                    { icon: "🤖", text: "Leveraging AI to solve real business problems" },
                    { icon: "📊", text: "Making data-driven decisions that drive growth" },
                    { icon: "🎯", text: "Turning complex challenges into simple solutions" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      <span className="text-3xl">{item.icon}</span>
                      <span className="text-lg text-muted-foreground">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}