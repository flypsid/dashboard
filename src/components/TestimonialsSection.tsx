"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";

// Définition du type pour les témoignages
interface TestimonialItem {
  content: string;
  author: string;
  role: string;
}

export default function TestimonialsSection() {
  const t = useTranslations("HomePage.testimonials");
  const testimonials = t.raw("items") as unknown as TestimonialItem[];

  // Fonction pour obtenir la première lettre du prénom
  const getFirstLetter = (name: string): string => {
    return name[0]?.toUpperCase() || "U";
  };

  // Récupération du titre avec mise en forme
  const titleHtml = t.rich("title", {
    highlight: (chunks) =>
      `<span class="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">${chunks}</span>`,
  }) as string;

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          dangerouslySetInnerHTML={{ __html: titleHtml }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.author}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="bg-background p-6 rounded-xl shadow-sm border relative h-full">
                <Quote className="h-8 w-8 text-muted-foreground/20 absolute top-4 right-4" />
                <p className="text-lg italic text-muted-foreground mb-6">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="relative h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                    {getFirstLetter(testimonial.author)}
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
