"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, BarChart3, Code2, Plug } from "lucide-react";

const serviceIcons = {
  "Data Visualization": BarChart3,
  "Visualisation de Données": BarChart3,
  "Real-time Analytics": Lightbulb,
  "Analyse en Temps Réel": Lightbulb,
  "Custom Development": Code2,
  "Développement Sur Mesure": Code2,
  Integration: Plug,
  Intégration: Plug,
} as const;

interface ServiceItem {
  title: string;
  description: string;
}

export default function ServicesSection() {
  const t = useTranslations("HomePage.services");
  const services = t.raw("items") as ServiceItem[];

  const titleHtml = t.rich("title", {
    highlight: (chunks) =>
      `<span class="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">${chunks}</span>`,
  }) as string;

  return (
    <section id="services" className="py-20 bg-muted/20">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon =
              serviceIcons[service.title as keyof typeof serviceIcons];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="h-full transition-all hover:shadow-lg hover:border-primary/20">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {Icon && <Icon className="h-6 w-6" />}
                      </div>
                      <CardTitle className="ml-3 text-lg">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
