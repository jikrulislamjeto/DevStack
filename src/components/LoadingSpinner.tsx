const LoadingSpinner = () => {
    return (
        <div
            className="flex min-h-64 flex-col items-center justify-center"
            role="status"
            aria-live="polite"
        >
            <div className="relative flex h-14 w-14 items-center justify-center">
                {/* Outer gradient spinner */}
                <div className="absolute h-14 w-14 animate-spin rounded-full bg-conic from-[#F97316] via-[#EC4899] to-transparent p-1">
                    <div className="h-full w-full rounded-full bg-white" />
                </div>

                {/* Center dot */}
                <div className="h-3 w-3 rounded-full bg-linear-to-r from-[#F97316] to-[#EC4899]" />
            </div>

            <p className="mt-4 text-sm font-medium text-slate-500">
                Loading technologies...
            </p>
        </div>
    );
};

export default LoadingSpinner;