import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Zap, Users, TrendingUp, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "LLM-Powered Therapy Analytics",
    description: "Embedded LLM summarization + tagging, built agentic workflows for SaaS platform operations.",
    problem: "Manual reviews slowed SaaS platform operations.",
    approach: "Embedded LLM summarization + tagging, built agentic workflows.",
    outcome: "35% faster reviews, accelerated release cycles.",
    icon: Zap,
    tags: ["AI/LLM", "SaaS", "Automation"],
    metrics: [
      { label: "Review Speed", value: "+35%" },
      { label: "Manual Effort", value: "-60%" },
    ],
  },
  {
    title: "EVV Compliance at Scale",
    description: "Expanded EVV in PMS, standardized data, and built comprehensive dashboards.",
    problem: "Providers struggled with SaaS compliance complexity.",
    approach: "Expanded EVV in PMS, standardized data, dashboards.",
    outcome: "100% compliance for 50+ providers, +10% engagement.",
    icon: Users,
    tags: ["Compliance", "SaaS", "Data"],
    metrics: [
      { label: "Compliance Rate", value: "100%" },
      { label: "Provider Engagement", value: "+10%" },
    ],
  },
  {
    title: "Data Modernization (Cognizant)",
    description: "Cloud roadmap, lineage mapping, and modernization PoCs for enterprise transformation.",
    problem: "Fragmented data, rising infra costs.",
    approach: "Cloud roadmap, lineage mapping, modernization PoCs.",
    outcome: "$100k saved, 40% productivity boost, $390M+ program base.",
    icon: TrendingUp,
    tags: ["Data", "Cloud", "Strategy"],
    metrics: [
      { label: "Cost Savings", value: "$100k" },
      { label: "Productivity", value: "+40%" },
    ],
  },
  {
    title: "Vendor/PO Automation",
    description: "Automated PO workflows + vendor strategy for enterprise operations.",
    problem: "Manual approvals slowed enterprise ops.",
    approach: "Automated PO workflows + vendor strategy.",
    outcome: "$1.3M saved, 90% effort cut.",
    icon: DollarSign,
    tags: ["Automation", "Process", "Enterprise"],
    metrics: [
      { label: "Cost Savings", value: "$1.3M" },
      { label: "Effort Reduction", value: "-90%" },
    ],
  },
];

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = React.useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Highlight Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            From concept to impact: SaaS products and systems that drive real business results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer border-card-border bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary text-white group-hover:scale-110 transition-transform">
                        <project.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-card-border">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-2xl font-bold text-primary font-display">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Expanded Details */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: selectedProject === index ? "auto" : 0,
                      opacity: selectedProject === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    {selectedProject === index && (
                      <div className="pt-4 border-t border-card-border space-y-4">
                        <div>
                          <h4 className="font-semibold text-destructive mb-1">Problem</h4>
                          <p className="text-sm text-muted-foreground">{project.problem}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-warning mb-1">Approach</h4>
                          <p className="text-sm text-muted-foreground">{project.approach}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-success mb-1">Outcome</h4>
                          <p className="text-sm text-muted-foreground">{project.outcome}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}