import { X } from "lucide-react";
import type { Technology } from "./technology";

interface StackItemProps {
    technology: Technology;
    onRemove: (id: string) => void;
}

const StackItem = ({
    technology,
    onRemove,
}: StackItemProps) => {
    return (
        <div className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 p-3">
            <img
                src={technology.icon}
                alt={`${technology.name} logo`}
                className="h-7 w-7 shrink-0 object-contain"
            />

            <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-semibold text-slate-900">
                    {technology.name}
                </h4>

                <p className="mt-0.5 text-xs text-slate-500">
                    {technology.category}
                </p>
            </div>

            <button
                type="button"
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name} from stack`}
                className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md text-slate-400 transition hover:bg-red-50 hover:text-red-500"
            >
                <X size={14} />
            </button>
        </div>
    );
};

export default StackItem;