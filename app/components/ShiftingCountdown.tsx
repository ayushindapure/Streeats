"use client"

import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// NOTE: Change this date to whatever date you want to countdown to :)
const COUNTDOWN_FROM = "2025-2-13";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

type Units = "Day" | "Hour" | "Minute" | "Second";

const ShiftingCountdown = () => {
  return (
    <div className="bg-gradient-to-br from-orange-600 to-orange-500 p-4">
      <div className="mx-auto flex w-full items-center ">
        <CountdownItem unit="Day" text="days" />
        <CountdownItem unit="Hour" text="hours" />
        <CountdownItem unit="Minute" text="minutes" />
        <CountdownItem unit="Second" text="seconds" />
      </div>
    </div>
  );
};

const CountdownItem = ({ unit, text }: { unit: Units; text: string }) => {
  const { ref, time } = useTimer(unit);

  return (
    <>
    <div className="mx-aut">
   <div className="flex h-6 w-auto items-center justify-center text-center border-slate-200 font-mono md:h-8">
  <div className="relative flex items-baseline gap-1">
    <span
      ref={ref}
      className="text-lg font-medium text-white md:text-xl lg:text-2xl"
    >
      {time}
    </span>
    <span className="text-xs pr-2 font-light text-slate-100 md:text-sm">
      {text}:
    </span>
  </div>
  </div>

</div>

    </>
  );
};

export default ShiftingCountdown;

// NOTE: Framer motion exit animations can be a bit buggy when repeating
// keys and tabbing between windows. Instead of using them, we've opted here
// to build our own custom hook for handling the entrance and exit animations
const useTimer = (unit: Units) => {
  const [ref, animate] = useAnimate();

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeRef = useRef(0);

  const [time, setTime] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = async () => {
    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
    const distance = +end - +now;

    let newTime = 0;

    if (unit === "Day") {
      newTime = Math.floor(distance / DAY);
    } else if (unit === "Hour") {
      newTime = Math.floor((distance % DAY) / HOUR);
    } else if (unit === "Minute") {
      newTime = Math.floor((distance % HOUR) / MINUTE);
    } else {
      newTime = Math.floor((distance % MINUTE) / SECOND);
    }

    if (newTime !== timeRef.current) {
      // Exit animation
      await animate(
        ref.current,
        { y: ["0%", "-50%"], opacity: [1, 0] },
        { duration: 0.35 }
      );

      timeRef.current = newTime;
      setTime(newTime);

      // Enter animation
      await animate(
        ref.current,
        { y: ["50%", "0%"], opacity: [0, 1] },
        { duration: 0.35 }
      );
    }
  };

  return { ref, time };
};