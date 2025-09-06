import * as React from "react";
import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, TrendingUp, Users, DollarSign, Zap } from "lucide-react";

const experiences = [
  {
    company: "Aloha ABA",
    location: "Gurugram, India",
    positions: [
      {
        title: "Product Manager (Senior)",
        period: "Apr 2025–Present",
        achievements: [
          { icon: TrendingUp, text: "Own SaaS product vision & roadmap for ABA data platform" },
          { icon: Zap, text: "LLM-powered features → 35% less manual review" },
          { icon: Users, text: "Agentic workflows sped up releases, reduced bottlenecks" },
          { icon: TrendingUp, text: "Built GTM KPIs + mentorship program" },
        ],
      },
      {
        title: "Product Manager II",
        period: "Jul 2024–Mar 2025",
        achievements: [
          { icon: Users, text: "Expanded EVV across PMS → 100% compliance for 50+ providers" },
          { icon: Zap, text: "PDLC optimized → 15% faster TTM, +10% engagement" },
        ],
      },
      {
        title: "Product Manager I",
        period: "Aug 2023–Jun 2024",
        achievements: [
          { icon: DollarSign, text: "New SaaS product dev → $1.6M+ revenue opportunity" },
          { icon: TrendingUp, text: "Built data foundation; aligned 12-month roadmap" },
        ],
      },
    ],
  },
  {
    company: "Cognizant Technology Solutions",
    location: "Gurugram & Pune",
    positions: [
      {
        title: "Product Owner & BD Lead",
        period: "May 2019–Aug 2022",
        achievements: [
          { icon: DollarSign, text: "Managed $390M+ overall program value" },
          { icon: TrendingUp, text: "Cloud transformation → $100k savings, 40% productivity gains" },
          { icon: Users, text: "Data lineage across 7 sources, 4TB+ data" },
        ],
      },
      {
        title: "Project Manager",
        period: "Jun 2017–Apr 2019",
        achievements: [
          { icon: DollarSign, text: "Negotiated vendor contracts → $1.3M saved" },
          { icon: Users, text: "Oversaw 307 contracts / 75 vendors (ACV $130M+)" },
          { icon: Zap, text: "Automated POs → 90% manual effort cut" },
        ],
      },
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-surface/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Journey Timeline
          </h2>
          <div className="w-20 h-1 bg-gradient-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((company, companyIndex) => (
            <motion.div
              key={companyIndex}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: companyIndex * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-16 last:mb-0"
            >
              {/* Company Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary text-white">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    {company.company}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{company.location}</span>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative ml-6 border-l-2 border-card-border">
                {company.positions.map((position, positionIndex) => (
                  <motion.div
                    key={positionIndex}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (companyIndex * 0.2) + (positionIndex * 0.1) }}
                    viewport={{ once: true }}
                    className="relative pl-8 pb-12 last:pb-0"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-secondary shadow-lg border-4 border-background" />
                    
                    {/* Position Content */}
                    <div className="bg-card rounded-xl p-6 border border-card-border shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h4 className="text-xl font-display font-semibold text-foreground">
                          {position.title}
                        </h4>
                        <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm font-medium">{position.period}</span>
                        </div>
                      </div>
                      
                      <div className="grid gap-3">
                        {position.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: (companyIndex * 0.2) + (positionIndex * 0.1) + (achIndex * 0.05) }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 group"
                          >
                            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                              <achievement.icon className="h-4 w-4" />
                            </div>
                            <span className="text-muted-foreground text-sm leading-relaxed">
                              {achievement.text}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}