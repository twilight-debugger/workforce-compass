import { Link, useLocation } from "react-router-dom";
import { Activity, ChevronRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Announcement, AnnouncementTag, AnnouncementTitle } from "@/components/ui/announcement";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "@/components/layout/LanguageSelector";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isInternalPage = !["/", "/demo"].includes(location.pathname);

  if (isInternalPage) return null;

  const navLinks = [
    { name: t('nav.intelligence'), href: "/predictive-intelligence" },
    { name: t('nav.simulations'), href: "/portfolio-simulation" },
    { name: t('nav.strategy'), href: "/budget-strategy" },
    { name: t('nav.ma'), href: "/ma-modeling" },
    { name: t('nav.about'), href: "/about" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "border-border/40 bg-background/60 backdrop-blur-xl py-3"
          : "border-transparent bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-2.5 group transition-transform hover:scale-[1.02]"
        >
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
            <Activity className="h-5 w-5 text-primary" />
            <div className="absolute inset-0 rounded-xl border border-primary/20 group-hover:border-primary/40 transition-colors" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Workforce<span className="text-primary/80">IQ</span>
          </span>
        </Link>

        <Announcement className="hidden lg:flex cursor-pointer transition-all hover:scale-[1.02] border-primary/20 bg-primary/5">
          <AnnouncementTag className="bg-primary/10 text-primary">New</AnnouncementTag>
          <AnnouncementTitle className="text-xs font-medium">
            AI Strategy Modeling
            <ArrowUpRight size={14} className="ml-1 text-primary" />
          </AnnouncementTitle>
        </Announcement>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-all rounded-full hover:bg-muted/50",
                location.pathname === link.href
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link to="/demo" className="hidden sm:block">
            <Button variant="ghost" size="sm" className="font-medium">
              {t('nav.view_demo')}
            </Button>
          </Link>
          <Link to="/dashboard">
            <Button size="sm" className="gap-1.5 font-semibold shadow-lg shadow-primary/20">
              {t('nav.command_center')}
              <ChevronRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
          <LanguageSelector className="ml-2" />
        </div>

      </div>
    </nav>
  );
}
