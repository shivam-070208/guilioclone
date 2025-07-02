
import { useEffect, useRef } from "react";

const Loader = () => {
    const loaderef = useRef(null)
 useEffect(() => {
    const el = loaderef.current;
    if (!el) return;

    const preventScroll = (e) => e.preventDefault();
    el.addEventListener("wheel", preventScroll, { passive: false });

    return () => {
      el.removeEventListener("wheel", preventScroll);
    };
  }, [loaderef]);

  return (
    <div ref={loaderef} className="fixed  w-screen h-screen top-0 inset-0 z-100 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] flex flex-col justify-between items-center text-white">
      {/* Top Heading */}
      <div className="mt-20 text-center">
        <h1 className="text-2xl md:text-4xl font-bold tracking-wider ">
          Loading My Portfolio...
        </h1>
        <p className="text-sm text-blue-200 mt-2">Please wait while we load awesomeness.</p>
      </div>

      {/* Orbiting Loader */}
      <div className="relative w-64 h-64 mb-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold tracking-widest text-white">
          Loading
        </div>

        {/* Rotating Ellipses */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute border border-white/70 rounded-full w-40 h-10`}
            style={{
              transformOrigin: "50% 100%",
              animation: `spin-${i} 4s linear infinite`,
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${60 * i}deg)`,
            }}
          />
        ))}
      </div>

      {/* Keyframes */}
      <style jsx>{`
        ${[...Array(6)]
          .map(
            (_, i) => `
          @keyframes spin-${i} {
            0% {
              transform: translate(-50%, -50%) rotate(${60 * i}deg) rotate(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotate(${60 * i}deg) rotate(360deg);
            }
          }
        `
          )
          .join("\n")}
      `}</style>
    </div>
  );
};

export default Loader;
