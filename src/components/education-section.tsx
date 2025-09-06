import * as React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const education = [
  {
    degree: "PGDM",
    institution: "IIM Udaipur",
    period: "2015–2017",
    location: "Udaipur, India",
    type: "Post Graduate Diploma in Management",
  },
  {
    degree: "B.Tech",
    institution: "Dehradun Institute of Technology",
    period: "2009–2013",
    location: "Dehradun, India",
    type: "Bachelor of Technology",
  },
];

const certifications = [
  {
    name: "PMP®",
    issuer: "Project Management Institute",
    description: "Project Management Professional",
  },
  {
    name: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    description: "Cloud computing fundamentals",
  },
  {
    name: "PAC™",
    issuer: "Professional Agile Certification",
    description: "Product and Agile Coaching",
  },
  {
    name: "Agile Scrum Master",
    issuer: "Scrum Alliance",
    description: "Agile methodology and team leadership",
  },
];

export function EducationSection() {
  return (
    <section className="py-20 bg-surface/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-card-border bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl font-display text-primary">
                            {edu.degree}
                          </CardTitle>
                          <CardDescription className="text-base font-medium text-foreground">
                            {edu.institution}
                          </CardDescription>
                          <p className="text-sm text-muted-foreground mt-1">
                            {edu.type}
                          </p>
                        </div>
                        <Badge variant="outline" className="border-primary/20 text-primary">
                          {edu.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-3">
              <Award className="h-6 w-6 text-secondary" />
              Certifications
            </h3>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-card-border bg-card/50 backdrop-blur-sm hover:shadow-md hover:shadow-secondary/10 transition-all duration-300 group">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                          <Award className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                            {cert.name}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-1">
                            {cert.issuer}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {cert.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}