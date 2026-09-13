import { Star } from "lucide-react";
import type { Technology } from "./technology";

interface TechItemProps {
    technology: Technology;
    isSelected: boolean;
    onAdd: (technology: Technology) => void;
}

const getBadgeStyles = (badge: string): string => {
    const badgeStyles: Record<string, string> = {
        Popular: "bg-sky-50 text-sky-500",
        Versatile: "bg-emerald-50 text-emerald-500",
        Fast: "bg-orange-50 text-orange-500",
        "Full Stack": "bg-violet-50 text-violet-500",
        Standard: "bg-green-50 text-green-500",
        "Top SQL": "bg-blue-50 text-blue-500",
        Cache: "bg-red-50 text-red-500",
        Ubiquitous: "bg-amber-50 text-amber-500",
        Essential: "bg-cyan-50 text-cyan-500",
        Robust: "bg-sky-50 text-sky-500",
        Modern: "bg-teal-50 text-teal-500",
        Containers: "bg-indigo-50 text-indigo-500",
    };

    return badgeStyles[badge] ?? "bg-slate-100 text-slate-500";
};

const TechItem = ({
    technology,
    isSelected,
    onAdd,
}: TechItemProps) => {
    return (
        <article className="flex min-h-67.5 flex-col rounded-xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
            
            {/* Icon + Badge */}
            <div className="flex items-start justify-between gap-4">
                <img
                    src={technology.icon}
                    alt={`${technology.name} logo`}
                    className="h-8 w-8 object-contain"
                />

                <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${getBadgeStyles(
                        technology.badge
                    )}`}
                >
                    {technology.badge}
                </span>
            </div>

            {/* Technology name */}
            <h3 className="mt-4 text-lg font-bold text-slate-900">
                {technology.name}
            </h3>

            {/* Description */}
            <p className="mt-2 text-[13px] leading-5 text-slate-500">
                {technology.description}
            </p>

            {/* Bottom information */}
            <div className="mt-auto pt-5">
                <div className="mb-4 flex items-center justify-between gap-2">

                    <span className="rounded bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600">
                        {technology.category}
                    </span>

                    <span className="min-w-0 truncate text-[11px] text-slate-500">
                        {technology.difficulty}
                    </span>

                    <span className="flex shrink-0 items-center gap-1 text-[11px] font-semibold text-orange-500">
                        <Star
                            size={11}
                            fill="currentColor"
                            aria-hidden="true"
                        />
                        {technology.rating}
                    </span>
                </div>

                {/* Add button */}
                <button
                    type="button"
                    onClick={() => onAdd(technology)}
                    disabled={isSelected}
                    className={`w-full rounded-md py-2.5 text-xs font-semibold transition ${
                        isSelected
                            ? "cursor-not-allowed bg-slate-200 text-slate-500"
                            : "cursor-pointer bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                >
                    {isSelected ? "✓ Added to Stack" : "Add to Stack"}
                </button>
            </div>
        </article>
    );
};

export default TechItem;