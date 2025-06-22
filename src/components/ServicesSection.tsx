"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { 
  RefreshCw, 
  GitMerge, 
  Shield, 
  BarChart3,
  ShoppingCart,
  Rocket,
  Cpu
} from "lucide-react";

const serviceIcons = {
  // Features - English
  "Data Visualization": BarChart3,
  "Visualisation de Données": BarChart3,
  "Real-time Analytics": RefreshCw,
  "Analyse en Temps Réel": RefreshCw,
  "Custom Development": GitMerge,
  "Développement Sur Mesure": GitMerge,
  "Integration": Shield,
  "Intégration": Shield,
  
  // Use Cases
  "Finance & Accounting": BarChart3,
  "Finance & Comptabilité": BarChart3,
  "E-Commerce": ShoppingCart,
  "SaaS & Startups": Rocket,
  "Web3 & Blockchain": Cpu,
} as const;

interface ServiceItem {
  title: string;
  description: string;
}

export default function ServicesSection() {
  const t = useTranslations("HomePage.services");
  const services = t.raw("items") as ServiceItem[];

  const titleHtml = "Enterprise-Grade Analytics Platform";
  const description = "Powerful insights for data-driven decisions";

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
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground">✨ Key Features</h3>
          <div className="space-y-6">
            {services.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="p-6 bg-background rounded-xl border hover:shadow-md transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {(() => {
                      const Icon = serviceIcons[service.title as keyof typeof serviceIcons];
                      return Icon ? <Icon className="h-5 w-5" /> : null;
                    })()}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{service.title}</h4>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">🏢 Use Cases</h3>
            <div className="space-y-6">
              <div className="p-6 bg-background rounded-xl border">
                <h4 className="font-semibold text-lg mb-3">💰 Finance & Accounting</h4>
                <p className="text-muted-foreground">Monitor cash flow, revenue streams, profit margins, and cost centers with real-time dashboards.</p>
              </div>
              
              <div className="p-6 bg-background rounded-xl border">
                <h4 className="font-semibold text-lg mb-3">🛍️ E-Commerce</h4>
                <p className="text-muted-foreground">Track sales funnels, customer journey analytics, product performance, and churn rate.</p>
              </div>
              
              <div className="p-6 bg-background rounded-xl border">
                <h4 className="font-semibold text-lg mb-3">👨‍💼 SaaS & Startups</h4>
                <p className="text-muted-foreground">Visualize MRR, active users, support ticket trends, and feature adoption metrics.</p>
              </div>
              
              <div className="p-6 bg-background rounded-xl border">
                <h4 className="font-semibold text-lg mb-3">🌐 Web3 & Blockchain</h4>
                <p className="text-muted-foreground">Integrate with on-chain data: wallet activity, validator stats, token metrics, and smart contract events.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
