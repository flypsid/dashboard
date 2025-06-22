"use client";

import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function CtaSection() {
  const t = useTranslations("HomePage.ctaSection");
  const [isCopied, setIsCopied] = useState(false);
  const email = "contact@rfx.zone";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  return (
    <section id="contact" className="py-16 bg-muted/40">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("description")}
          </p>
          
          <div className="flex flex-col items-center space-y-4">
            <Button 
              onClick={copyToClipboard}
              className="gap-2 hover:bg-primary/90 transition-colors"
              size="lg"
            >
              <Copy className="h-5 w-5" />
              {isCopied ? t("copied") : t("button")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
