import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const metrics = [
  { value: "10+", label: "years in product leadership" },
  { value: "$390M+", label: "overall program value overseen" },
  { value: "35%", label: "faster reviews with AI" },
  { value: "100%", label: "compliance at scale" },
];

export function HeroSection() {
  const [currentMetric, setCurrentMetric] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-surface">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional workspace"
          className="w-full h-full object-cover opacity-5 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Prateek Kiran
              </span>{" "}
              👋
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Product Leader • SaaS Builder • AI & LLM Innovator
            </p>
          </motion.div>

          {/* Pitch */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            From zero to traction: SaaS products powered by strategy, AI, and crisp execution.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-white shadow-primary group"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Let's Build the Future
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-card-border hover:bg-card/50 group"
            >
              <Download className="mr-2 h-4 w-4" />
              View Interactive Resume
              <ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Animated Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-16"
          >
            <div className="relative h-20 flex items-center justify-center">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: currentMetric === index ? 1 : 0,
                    scale: currentMetric === index ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 flex flex-col items-center justify-center ${
                    currentMetric === index ? "pointer-events-auto" : "pointer-events-none"
                  }`}
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary font-display">
                    {metric.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground mt-1">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Metric Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {metrics.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentMetric(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentMetric === index
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}