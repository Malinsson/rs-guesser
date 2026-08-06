import type { ReactNode } from "react";

type ScrollBackdropProps = {
  children: ReactNode;
};

export default function ScrollBackdrop({ children }: ScrollBackdropProps) {
  return (
    <div className="relative h-auto w-full max-w-7xl">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 z-1 h-[clamp(72px,14vw,140px)] bg-[url(/images/styling/backdrop_765_top.gif)] bg-top bg-no-repeat bg-size-[100%_100%]" />
        <div className="absolute inset-x-[2.5%] top-[clamp(56px,10vw,120px)] bottom-[clamp(56px,10vw,120px)] z-0 bg-[url(/images/styling/backdrop_745.gif)] bg-top bg-repeat-y bg-size-[100%_auto]" />
        <div className="absolute inset-x-0 bottom-0 z-1 h-[clamp(72px,14vw,140px)] bg-[url(/images/styling/backdrop_765_bottom.gif)] bg-bottom bg-no-repeat bg-size-[100%_100%]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-8 px-4 py-16 md:px-8 md:py-26 lg:py-30">
        {children}
      </div>
    </div>
  );
}