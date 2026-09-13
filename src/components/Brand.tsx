import DevStackLogo from "../assets/DevStack Logo.svg";

interface BrandProps {
    compact?: boolean;
}

const Brand = ({ compact = false }: BrandProps) => {
    return (
        <a
            href="#home"
            className="group flex items-center gap-2"
        >
            <img
                src={DevStackLogo}
                alt="Dev Stack logo"
                className="h-7 w-7 rounded-md transition group-hover:scale-105"
            />

            {!compact && (
                <span className="text-xl font-bold tracking-tight text-slate-900">
                    Dev <span className="gradient-text">Stack</span>
                </span>
            )}
        </a>
    );
};

export default Brand;
