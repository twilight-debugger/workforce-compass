import { NavLink, useLocation } from "react-router-dom";
import {
    Activity,
    LayoutDashboard,
    FlaskConical,
    PieChart,
    History,
    Settings,
    Zap,
    Layers,
    Wallet,
    GitMerge,
    BotMessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
    label: string;
    icon: React.ElementType;
    path: string;
    disabled?: boolean;
}

interface NavSection {
    title: string;
    items: NavItem[];
}

const sections: NavSection[] = [
    {
        title: "Main Operations",
        items: [
            { label: "Command Center", icon: LayoutDashboard, path: "/dashboard" },
            { label: "Scenario Lab", icon: FlaskConical, path: "/scenario-lab" },
            { label: "Org Analytics", icon: PieChart, path: "/analytics" },
        ]
    },
    {
        title: "Decision Intelligence",
        items: [
            { label: "Predictive AI", icon: Zap, path: "/predictive-intelligence" },
            { label: "Strategic Copilot", icon: BotMessageSquare, path: "/copilot" },
            { label: "Decision History", icon: History, path: "/history" },
        ]
    },
    {
        title: "Strategy & Simulation",
        items: [
            { label: "Portfolio Sim", icon: Layers, path: "/portfolio-simulation" },
            { label: "Budget Strategy", icon: Wallet, path: "/budget-strategy" },
            { label: "M&A Modeling", icon: GitMerge, path: "/ma-modeling" },
        ]
    },
    {
        title: "System",
        items: [
            { label: "About", icon: Activity, path: "/about" },
            { label: "Settings", icon: Settings, path: "/settings", disabled: true },
        ]
    }
];

export function Sidebar() {
    const location = useLocation();

    return (
        <aside className="w-64 border-r border-border/40 bg-card/40 backdrop-blur-2xl flex flex-col shrink-0 relative z-20 shadow-[10px_0_30px_rgba(0,0,0,0.1)]">
            {/* Header */}
            <div className="p-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center border border-border transition-colors group-hover:bg-primary/5">
                    <Activity className="h-5 w-5 text-primary" />
                </div>
                <div className="flex flex-col">
                    <span className="font-bold tracking-tight text-xl leading-tight">Compass<span className="text-primary font-black ml-0.5">.</span></span>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-black text-muted-foreground/40 mt-0.5">Decision Suite</span>
                </div>
            </div>

            {/* Navigation Sections */}
            <nav className="flex-1 px-4 pb-4 overflow-y-auto custom-scrollbar space-y-8 scroll-py-4">
                {sections.map((section, idx) => (
                    <div key={idx} className="space-y-3">
                        <h4 className="px-3 text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground/50 border-l-2 border-primary/20 ml-1">
                            {section.title}
                        </h4>
                        <div className="space-y-1">
                            {section.items.map((item) => {
                                const isActive = location.pathname === item.path || (item.path !== "/" && location.pathname.startsWith(item.path));

                                return (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        className={({ isActive }) => cn(
                                            "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group text-[13px] font-medium",
                                            isActive
                                                ? "bg-secondary text-foreground"
                                                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                                            item.disabled && "opacity-30 cursor-not-allowed pointer-events-none"
                                        )}
                                    >
                                        <item.icon className={cn(
                                            "h-4 w-4 shrink-0 transition-colors",
                                            isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                                        )} />
                                        <span className="truncate">{item.label}</span>
                                        {item.disabled && (
                                            <span className="ml-auto text-[8px] bg-muted/40 px-1.5 py-0.5 rounded-full uppercase font-black tracking-tighter opacity-60">
                                                Soon
                                            </span>
                                        )}
                                    </NavLink>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-border mt-auto bg-muted/30">
                <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                        Deterministic Sync
                    </span>
                </div>
            </div>
        </aside>
    );
}
