import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/yourusername"
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-5 h-5" />,
      href: "https://twitter.com/yourusername"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/yourusername"
    }
  ];

  return (
    <footer className="bg-background border-t border-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">{t("HomePage.nav.dashboard")}</h3>
            <p className="text-muted-foreground mb-4">
              {t("HomePage.hero.description")}
            </p>
            <Link href="/dashboard">
              <Button variant="outline">
                {t("HomePage.nav.dashboard")}
              </Button>
            </Link>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("Footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("HomePage.nav.home")}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("HomePage.nav.services")}
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("HomePage.nav.projects")}
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("HomePage.nav.testimonials")}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  {t("HomePage.nav.contact")}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t("Footer.connect")}</h3>
            <p className="text-muted-foreground mb-4">
              {t("Footer.followUs")}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-muted/40 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {t("Footer.allRightsReserved")}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("Footer.privacyPolicy")}
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("Footer.termsOfService")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
