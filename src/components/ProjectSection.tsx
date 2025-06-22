"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectItem {
  title: string;
  description: string;
  category: string;
}

export default function ProjectSection() {
  const t = useTranslations("HomePage.project");
  const projects = t.raw("items") as ProjectItem[];

  // Get category color class
  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      "Data Analysis":
        "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
      "Analyse de Données":
        "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
      Productivity:
        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
      Productivité:
        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
      "E-commerce":
        "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    };
    return (
      colorMap[category] ||
      "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    );
  };

  const titleHtml = t.rich("title", {
    highlight: (chunks) =>
      `<span class="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">${chunks}</span>`,
  }) as string;

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            dangerouslySetInnerHTML={{ __html: titleHtml }}
          />
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full flex flex-col overflow-hidden group">
                <div className="h-48 bg-muted/50 flex items-center justify-center">
                  <div className="text-4xl font-bold text-muted-foreground/20 group-hover:text-primary/20 transition-colors">
                    {project.title.charAt(0)}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(
                        project.category
                      )}`}
                    >
                      {project.category}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group-hover:text-primary transition-colors"
                  >
                    <span className="flex items-center">
                      Visit
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
