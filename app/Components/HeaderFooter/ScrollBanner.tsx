type ScrollBannerProps = {
    children: React.ReactNode;
};

export default function ScrollBanner({ children }: ScrollBannerProps) {
    return (
        <div className="relative mx-auto inline-flex w-full h-full flex-col items-center justify-center px-3 py-2 md:px-4 md:py-3">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 top-0 h-[clamp(44px,6vw,76px)] bg-[url(/images/styling/backdrop_765_top.gif)] bg-top bg-no-repeat bg-size-[100%_100%]" />
                <div className="absolute inset-x-[2%] top-[clamp(40px,5vw,68px)] bottom-[clamp(40px,5vw,68px)] bg-[url(/images/styling/backdrop_745.gif)] bg-top bg-repeat-y bg-size-[100%_auto]" />
                <div className="absolute inset-x-0 bottom-0 h-[clamp(44px,6vw,76px)] bg-[url(/images/styling/backdrop_765_bottom.gif)] bg-bottom bg-no-repeat bg-size-[100%_100%]" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center">
                {children}
            </div>
        </div>
        );
    }