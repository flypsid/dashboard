"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";

const navigation = [
  { name: "home", href: "#home" },
  { name: "services", href: "#services" },
  { name: "projects", href: "#projects" },
  { name: "testimonials", href: "#testimonials" },
  { name: "contact", href: "#contact" },
];

export default function Navbar() {
  const t = useTranslations("HomePage");
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Mise à jour de la section active lors du défilement
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "services",
        "projects",
        "testimonials",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop - 80; // Ajustement pour la hauteur de la navbar
          const sectionBottom = sectionTop + element.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            if (activeSection !== section) {
              setActiveSection(section);
              // Mise à jour de l'URL sans recharger la page
              const newUrl = `${window.location.pathname}#${section}`;
              window.history.pushState({}, "", newUrl);
            }
            break;
          }
        }
      }
    };

    // Gestion du chargement initial avec hash dans l'URL
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && hash !== activeSection) {
        setActiveSection(hash);
        scrollToSection(hash);
      }
    };

    // Vérifier l'URL au chargement initial
    if (typeof window !== "undefined") {
      handleHashChange();
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [activeSection]);

  // Gérer le clic sur un lien de navigation
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      const yOffset = -80; // Ajustement pour la hauteur de la navbar
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Gérer le clic sur un lien de navigation
  const handleNavClick = (section: string, e?: React.MouseEvent) => {
    e?.preventDefault();

    // Mettre à jour l'URL avec le hash (sans recharger la page)
    const newUrl = `${window.location.pathname}#${section}`;
    window.history.pushState({}, "", newUrl);

    // Faire défiler jusqu'à l'élément
    scrollToSection(section);
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  // Gérer le clic en dehors du menu mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-muted/60 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <a
              href="#home"
              className="flex items-center"
              onClick={(e) => handleNavClick("home", e)}
            >
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </a>

            {/* Navigation Desktop */}
            <div className="hidden md:flex items-center gap-6 ml-6">
              {navigation.map((item) => {
                const href = item.href.replace("#", "");
                const isActive = activeSection === href;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(href, e)}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {t(`nav.${item.name}`)}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/dashboard" passHref>
              <Button variant="outline" size="lg" className="hidden sm:flex">
                {t("nav.dashboard")}
              </Button>
            </Link>
            <ThemeToggle />
            <LanguageSwitcher />

            {/* Bouton Menu Mobile */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-foreground/70 hover:text-foreground focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2 mt-2">
              {navigation.map((item) => {
                const href = item.href.replace("#", "");
                const isActive = activeSection === href;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(href, e)}
                    className={`px-3 py-2 text-base font-medium rounded-md ${
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground/80 hover:bg-accent/50 hover:text-accent-foreground"
                    }`}
                  >
                    {t(`nav.${item.name}`)}
                  </a>
                );
              })}
              <div className="px-3 py-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground/80">
                    {t('nav.theme')}
                  </span>
                  <ThemeToggle />
                </div>
              </div>
              <Link href="/dashboard" passHref>
                <Button variant="outline" className="w-full mt-2">
                  {t("nav.dashboard")}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
