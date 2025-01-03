import React, { useEffect, useRef } from "react";
import anime from "animejs";

const Logo: React.FC = () => {
  const dotRef = useRef<HTMLSpanElement>(null);
  const leftTextRef = useRef<HTMLSpanElement>(null);
  const rightTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timeline = anime.timeline({
      easing: "easeOutExpo",
    });

    timeline
      .add({
        targets: leftTextRef.current,
        translateX: [-100, 0],
        opacity: [0, 1],
        duration: 1200,
        easing: "spring(1, 80, 10, 0)",
      })
      .add(
        {
          targets: rightTextRef.current,
          translateX: [100, 0],
          opacity: [0, 1],
          duration: 1200,
          easing: "spring(1, 80, 10, 0)",
        },
        "-=1000"
      )
      .add(
        {
          targets: dotRef.current,
          translateY: [-50, 0],
          opacity: [0, 1],
          duration: 1000,
          easing: "easeOutBounce",
        },
        "-=800"
      );
  }, []);

  return (
    <button
      className="flex gap-4 transform transition-transform hover:scale-105"
      onClick={() => {
        window.location.reload();
      }}
      aria-label="Reload page"
    >
      <div className="hidden sm:block cursor-pointer group">
        <div className="relative inline-flex">
          <div className="flex items-center font-semibold">
            <span ref={leftTextRef} className="text-white opacity-0">
              utkarsh
            </span>
            <span
              ref={dotRef}
              className="text-orange-500 font-bold text-xl opacity-0"
            >
              .
            </span>
            <span ref={rightTextRef} className="text-white opacity-0">
              me
            </span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Logo;