import {
    FaGithub,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";

import { footerGroups } from "./constants/navigation";
import Brand from "./Brand";

const socialLinks = [
    {
        label: "GitHub",
        href: "https://github.com",
        icon: FaGithub,
    },
    {
        label: "Twitter",
        href: "https://twitter.com",
        icon: FaXTwitter,
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com",
        icon: FaLinkedinIn,
    },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            id="about"
            className="border-t border-slate-100 bg-white"
        >
            {/* Main Footer */}
            <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:px-8">

                {/* Brand Section */}
                <div>
                    <Brand />

                    <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
                        Curated tools, technologies, and resources for developers building
                        modern software.
                    </p>

                    {/* Social Links */}
                    <div className="mt-5 flex items-center gap-4">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;

                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="text-slate-400 transition-colors duration-200 hover:text-pink-500"
                                >
                                    <Icon size={16} />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Footer Link Groups */}
                {footerGroups.map((group) => (
                    <div key={group.title}>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                            {group.title}
                        </h3>

                        <ul className="mt-4 space-y-3">
                            {group.links.map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-xs text-slate-500 transition-colors duration-200 hover:text-pink-500"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Footer Bottom Bar */}
            <div className="border-t border-slate-100">
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-3 px-4 py-5 text-xs text-slate-400 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
                    <p>
                        © {currentYear} Dev Stack. All rights reserved.
                    </p>

                    <div className="flex items-center gap-5">
                        <a
                            href="#"
                            className="transition-colors duration-200 hover:text-slate-600"
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                            className="transition-colors duration-200 hover:text-slate-600"
                        >
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;