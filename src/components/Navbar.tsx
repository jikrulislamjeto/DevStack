import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navigationLinks } from "./constants/navigation";
import Brand from "./Brand";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState<string | null>(null);

    const handleMenuToggle = () => {
        setIsMenuOpen((previous) => !previous);
    };

    const handleNavClick = (label: string) => {
        setActiveLink(label);
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
            <div className="mx-auto flex h-17 w-full max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">

                {/* Desktop Brand */}
                <div className="hidden md:block">
                    <Brand />
                </div>

                {/* Mobile Hamburger */}
                <button
                    type="button"
                    onClick={handleMenuToggle}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                    className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-md text-slate-700 transition hover:bg-slate-100 md:hidden"
                >
                    {isMenuOpen ? (
                        <X size={20} />
                    ) : (
                        <Menu size={20} />
                    )}
                </button>

                {/* Mobile Center Brand */}
                <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
                    <div className="min-[380px]:hidden">
                        <a
                            href="#home"
                            aria-label="Dev Stack Home"
                            className="brand-gradient flex h-7 w-7 items-center justify-center rounded-md text-[10px] font-bold text-white"
                        >
                            DS
                        </a>
                    </div>

                    <div className="hidden min-[380px]:block">
                        <Brand />
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav
                    className="hidden items-center gap-7 md:flex"
                    aria-label="Main navigation"
                >
                    {navigationLinks.map((link) => {
                        const isActive = activeLink === link.label;

                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => handleNavClick(link.label)}
                                className={`py-2 text-sm font-medium transition-colors duration-200 ${isActive
                                        ? "text-pink-500"
                                        : "text-slate-600 hover:text-pink-500"
                                    }`}
                            >
                                {link.label}
                            </a>
                        );
                    })}
                </nav>

                {/* Authentication */}
                <div className="flex shrink-0 items-center gap-1 min-[380px]:gap-2 sm:gap-3">
                    <button
                        type="button"
                        className="cursor-pointer text-[9px] font-medium text-slate-700 transition-colors hover:text-pink-500 min-[380px]:text-xs sm:text-sm"
                    >
                        Sign In
                    </button>

                    <button
                        type="button"
                        className="cursor-pointer rounded-full bg-pink-600 px-2.5 py-2 text-[9px] font-semibold text-white transition hover:bg-pink-500 hover:opacity-90 min-[380px]:px-3.5 min-[380px]:text-xs sm:px-5 sm:text-sm"
                    >
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <nav
                    className="border-t border-slate-100 bg-white px-4 py-3 md:hidden"
                    aria-label="Mobile navigation"
                >
                    <div className="mx-auto flex max-w-7xl flex-col">
                        {navigationLinks.map((link) => {
                            const isActive = activeLink === link.label;

                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => handleNavClick(link.label)}
                                    className={`border-b border-slate-100 py-3.5 text-base font-medium transition-colors last:border-b-0 ${isActive
                                            ? "text-pink-500"
                                            : "text-slate-700 hover:text-pink-500"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Navbar;