import { useTranslation } from "react-i18next";
import {
    Languages
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LanguageSelector({ className }: { className?: string }) {
    const { i18n } = useTranslation();

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'es', name: 'Español', flag: '🇪🇸' },
        { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
        { code: 'zh', name: '中文', flag: '🇨🇳' },
        { code: 'ar', name: 'العربية', flag: '🇸🇦' },
        { code: 'ur', name: 'اردو', flag: '🇵🇰' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺' },
        { code: 'fr', name: 'Français', flag: '🇫🇷' },
        { code: 'pt', name: 'Português', flag: '🇧🇷' },
    ];

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className={cn("gap-2 px-2 h-9 font-medium", className)}
                >
                    <Languages className="h-4 w-4" />
                    <span className="hidden sm:inline-block">{currentLanguage.name}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        className={cn(
                            "flex items-center gap-2 cursor-pointer",
                            i18n.language === lang.code && "bg-accent"
                        )}
                        onClick={() => i18n.changeLanguage(lang.code)}
                    >
                        <span className="text-sm font-medium">{lang.name}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
