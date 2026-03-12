import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FlaskConical, GitCompareArrows, BrainCircuit } from "lucide-react";
import { GlowingShadow } from "@/components/ui/glowing-shadow";


export function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: FlaskConical,
      title: t('features.simulate.title'),
      description: t('features.simulate.desc'),
    },
    {
      icon: GitCompareArrows,
      title: t('features.compare.title'),
      description: t('features.compare.desc'),
    },
    {
      icon: BrainCircuit,
      title: t('features.ai.title'),
      description: t('features.ai.desc'),
    },
  ];

  return (
    <section id="features" className="py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-foreground">
          {t('features.heading')}
        </h2>
        <p className="mb-16 text-center text-muted-foreground">
          {t('features.subheading')}
        </p>
        <div className="grid gap-12 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group flex flex-col items-center text-center"
            >
              <GlowingShadow className="--card-width:120px; --card-radius:1.5rem; --glow-scale:0.85; --glow-opacity:0.6; --glow-blur:3; aspect-square mb-8 flex items-center justify-center border-none">
                <f.icon className="h-10 w-10 text-foreground transition-transform duration-300 group-hover:scale-110" />
              </GlowingShadow>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
