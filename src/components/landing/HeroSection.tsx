import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GlowingShadow } from "@/components/ui/glowing-shadow";

export function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16">
      <GlowingShadow className="--card-width:800px; aspect-auto p-8 md:p-12 lg:p-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mt-6 text-xl text-muted-foreground max-w-[42rem] mx-auto animate-fade-in [animation-delay:400ms]">
            {t('hero.subtitle')}
          </p>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {t('hero.tagline')}
          </p>
          <h1 className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-7xl">
            {t('hero.title_part1')}
            <br />
            <span className="text-muted-foreground">{t('hero.title_part2')}</span>
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground">
            Enterprise leaders use WorkforceIQ to model workforce risk scenarios,
            compare HR strategies side-by-side, and receive AI-generated strategic
            recommendations — all in real time.
          </p>
          <Link to="/dashboard">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all"
            >
              <span className="relative z-10">Launch Command Center</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
              {/* shimmer overlay */}
              <span className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-background/20 to-transparent" />
            </motion.button>
          </Link>
        </motion.div>
      </GlowingShadow>
    </section>
  );
}
