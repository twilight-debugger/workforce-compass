import React from "react";
import { Navbar } from "@/components/landing/Navbar";
import { motion } from "framer-motion";
import {
    Target,
    Zap,
    FlaskConical,
    ShieldCheck,
    Users,
    BarChart3,
    ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnoAI from "@/components/ui/animated-shader-background";
import { GlowingShadow } from "@/components/ui/glowing-shadow";

const About = () => {
    const sections = [
        {
            icon: Target,
            title: "Our Mission",
            content: "WorkforceIQ (Workforce Compass) is designed to give enterprise leaders the ultimate decision intelligence suite. We believe organizational changes shouldn't be a leap of faith, but a calculated, data-driven strategy."
        },
        {
            icon: FlaskConical,
            title: "Deterministic Simulations",
            content: "Move beyond simple projections. Our engine runs complex Monte Carlo simulations to stress-test your organizational structure against market volatility, budget constraints, and talent risks."
        },
        {
            icon: Zap,
            title: "AI Strategy Modeling",
            content: "Leverage advanced decision intelligence to receive natural-language recommendations. Our Strategic Copilot helps you navigate the complexities of M&A, restructuring, and portfolio optimization."
        }
    ];

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
            {/* Background */}
            <div className="fixed inset-0 z-0">
                <AnoAI />
            </div>

            <div className="relative z-10 pt-32 pb-20 px-6">
                <div className="mx-auto max-w-5xl">
                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                            About <span className="text-primary italic">WorkforceIQ</span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            The world's most advanced Synthetic Digital Twin Engine for Organizations.
                            Built for the next generation of strategic decision makers.
                        </p>
                    </motion.div>

                    {/* Grid Sections */}
                    <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3 mb-24">
                        {sections.map((section, idx) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <GlowingShadow className="h-full --glow-opacity:0.3 p-8 flex flex-col items-start gap-4">
                                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                                        <section.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold">{section.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {section.content}
                                    </p>
                                </GlowingShadow>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 text-center"
                    >
                        <h2 className="text-3xl font-bold mb-4">Ready to see it in action?</h2>
                        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                            Joint the organizations that are already using WorkforceIQ to de-risk their future.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link to="/dashboard">
                                <Button size="lg" className="h-12 px-8 font-bold">
                                    Get Started
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <Link to="/">
                                <Button variant="outline" size="lg" className="h-12 px-8 border-white/20 bg-transparent hover:bg-white/5">
                                    Back to Home
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
