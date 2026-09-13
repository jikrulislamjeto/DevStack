import type { Technology } from "./technology";
import StackItem from "./StackItem";

interface StackSidebarProps {
    selectedTechnologies: Technology[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

const StackSidebar = ({
    selectedTechnologies,
    onRemove,
    onRemoveAll,
}: StackSidebarProps) => {
    const selectedCount = selectedTechnologies.length;

    return (
        <aside className="h-fit rounded-xl border border-slate-200 bg-white p-5 lg:sticky lg:top-24">
            <h3 className="text-base font-bold text-slate-900">
                Your Stack
            </h3>

            <p className="mt-1 text-xs text-slate-400">
                {selectedCount === 0
                    ? "No technologies selected yet."
                    : `${selectedCount} ${selectedCount === 1
                        ? "Technology"
                        : "Technologies"
                    } Selected`}
            </p>

            {selectedCount === 0 ? (
                <div className="mt-5 flex min-h-28 items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-50/50 px-4">
                    <p className="text-center text-xs leading-5 text-slate-400">
                        Your stack is empty.
                        <br />
                        Add technologies to get started.
                    </p>
                </div>
            ) : (
                <>
                    <div className="mt-5 space-y-2">
                        {selectedTechnologies.map((technology) => (
                            <StackItem
                                key={technology.id}
                                technology={technology}
                                onRemove={onRemove}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={onRemoveAll}
                        className="mt-4 w-full cursor-pointer rounded-md border border-red-200 bg-white py-2.5 text-xs font-semibold text-red-500 transition hover:bg-red-50"
                    >
                        Remove All
                    </button>
                </>
            )}
        </aside>
    );
};

export default StackSidebar;