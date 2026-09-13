import bannerStack from "../assets/banner-stack.png";

const Hero = () => {
    return (
        <section id="home" className="bg-white">
            <div className="mx-auto grid min-h-140 w-full max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:min-h-150 md:grid-cols-2 md:py-20 lg:min-h-162.5 lg:px-8 lg:py-24">

                {/* Hero Content */}
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl">
                        Build Your Ideal
                        <br />
                        <span className="gradient-text">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500 md:mx-0 lg:text-[17px] lg:leading-7">
                        Explore frontend, backend, database, and tooling options, <br />
                        compare them side by side, and put together the stack that fits your <br /> 
                        next project.
                    </p>

                    <div className="mt-7 flex flex-wrap items-center justify-center gap-3 md:justify-start">
                        <a
                            href="#technologies"
                            className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md bg-linear-to-r from-[#F97316] to-[#EC4899] px-5 text-sm font-semibold text-white transition duration-200 hover:opacity-90"
                        >
                            Explore Technologies
                        </a>

                        <a
                            href="#about"
                            className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-md border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 transition duration-200 hover:border-slate-300 hover:bg-slate-50"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex items-center justify-center md:justify-end">
                    <img
                        src={bannerStack}
                        alt="Development technology stack illustration"
                        className="h-auto w-full max-w-75 object-contain sm:max-w-85 md:max-w-95 lg:max-w-107.5"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;