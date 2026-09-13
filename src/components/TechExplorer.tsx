import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import type { Technology } from "./technology";
import LoadingSpinner from "./LoadingSpinner";
import StackSidebar from "./StackSidebar";
import TechItem from "./TechItem";

const TechExplorer = () => {
    const [technologies, setTechnologies] = useState<Technology[]>([]);
    const [selectedTechnologies, setSelectedTechnologies] =
        useState<Technology[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadTechnologies = async (): Promise<void> => {
            try {
                setIsLoading(true);
                setError(null);

                const response = await fetch("/data/technologies.json");

                if (!response.ok) {
                    throw new Error("Failed to load technologies.");
                }

                const data: Technology[] = await response.json();

                setTechnologies(data);
            } catch (error) {
                const message =
                    error instanceof Error
                        ? error.message
                        : "Something went wrong while loading technologies.";

                setError(message);
            } finally {
                setIsLoading(false);
            }
        };

        loadTechnologies();
    }, []);

    const addTechnology = (technology: Technology): void => {
        const alreadySelected = selectedTechnologies.some(
            (item) => item.id === technology.id
        );

        if (alreadySelected) {
            toast.warning(`${technology.name} is already in your stack.`);
            return;
        }

        setSelectedTechnologies((previous) => [
            ...previous,
            technology,
        ]);

        toast.success(`${technology.name} added to your stack.`);
    };

    const removeTechnology = (id: string): void => {
        const technology = selectedTechnologies.find(
            (item) => item.id === id
        );

        setSelectedTechnologies((previous) =>
            previous.filter((item) => item.id !== id)
        );

        if (technology) {
            toast.info(`${technology.name} removed from your stack.`);
        }
    };

    const removeAllTechnologies = (): void => {
        if (selectedTechnologies.length === 0) {
            return;
        }

        setSelectedTechnologies([]);

        toast.info("All technologies removed from your stack.");
    };

    return (
        <section
            id="technologies"
            className="scroll-mt-20 bg-white pb-24 pt-10"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
                <div>
                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                        Explore{" "}
                        <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
                            Technologies
                        </span>
                    </h2>

                    <p className="mt-2 text-base leading-6 text-slate-500">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

                {/* Loading */}
                {isLoading ? (
                    <LoadingSpinner />

                ) : error ? (

                    /* Error */
                    <div
                        className="mt-8 rounded-lg border border-red-200 bg-red-50 p-4 text-base text-red-600"
                        role="alert"
                    >
                        {error}
                    </div>

                ) : (

                    /* Technologies + Stack */
                    <div className="mt-8 grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_260px] xl:grid-cols-[minmax(0,1fr)_280px]">

                        {/* Technology Items */}
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                            {technologies.map((technology) => (
                                <TechItem
                                    key={technology.id}
                                    technology={technology}
                                    isSelected={selectedTechnologies.some(
                                        (selected) =>
                                            selected.id === technology.id
                                    )}
                                    onAdd={addTechnology}
                                />
                            ))}
                        </div>

                        {/* Your Stack */}
                        <StackSidebar
                            selectedTechnologies={selectedTechnologies}
                            onRemove={removeTechnology}
                            onRemoveAll={removeAllTechnologies}
                        />
                    </div>
                )}
            </div>
        </section>
    );
};

export default TechExplorer;