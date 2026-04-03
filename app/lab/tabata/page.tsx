"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

type Phase = "idle" | "countdown" | "work" | "rest" | "roundBreak" | "done";

function useBeep() {
  const ctxRef = useRef<AudioContext | null>(null);

  function getCtx() {
    if (!ctxRef.current) ctxRef.current = new AudioContext();
    return ctxRef.current;
  }

  function beep(freq: number, duration: number, count = 1) {
    const ctx = getCtx();
    for (let i = 0; i < count; i++) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = freq;
      osc.type = "sine";
      gain.gain.value = 0.3;
      const start = ctx.currentTime + i * (duration + 0.08);
      osc.start(start);
      gain.gain.setValueAtTime(0.3, start);
      gain.gain.exponentialRampToValueAtTime(0.01, start + duration);
      osc.stop(start + duration + 0.05);
    }
  }

  const workBeep = () => beep(880, 0.15, 3);
  const restBeep = () => beep(440, 0.3, 2);
  const countdownBeep = () => beep(660, 0.1, 1);
  const doneBeep = () => {
    beep(523, 0.2, 1);
    setTimeout(() => beep(659, 0.2, 1), 250);
    setTimeout(() => beep(784, 0.2, 1), 500);
    setTimeout(() => beep(1047, 0.4, 1), 750);
  };

  return { workBeep, restBeep, countdownBeep, doneBeep };
}

export default function TabataPage() {
  const [rounds, setRounds] = useState(8);
  const [sets, setSets] = useState(1);
  const [workTime, setWorkTime] = useState(20);
  const [restTime, setRestTime] = useState(10);
  const [roundBreakTime, setRoundBreakTime] = useState(60);

  const [phase, setPhase] = useState<Phase>("idle");
  const [timeLeft, setTimeLeft] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);
  const [currentSet, setCurrentSet] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { workBeep, restBeep, countdownBeep, doneBeep } = useBeep();

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const nextPhase = useCallback(() => {
    if (phase === "countdown") {
      setPhase("work");
      setTimeLeft(workTime);
      setCurrentRound(1);
      setCurrentSet(1);
      workBeep();
    } else if (phase === "work") {
      if (currentRound < rounds) {
        setPhase("rest");
        setTimeLeft(restTime);
        restBeep();
      } else if (currentSet < sets) {
        setPhase("roundBreak");
        setTimeLeft(roundBreakTime);
        restBeep();
      } else {
        setPhase("done");
        setTimeLeft(0);
        doneBeep();
      }
    } else if (phase === "rest") {
      setPhase("work");
      setCurrentRound((r) => r + 1);
      setTimeLeft(workTime);
      workBeep();
    } else if (phase === "roundBreak") {
      setPhase("work");
      setCurrentSet((s) => s + 1);
      setCurrentRound(1);
      setTimeLeft(workTime);
      workBeep();
    }
  }, [phase, currentRound, currentSet, rounds, sets, workTime, restTime, roundBreakTime, workBeep, restBeep, doneBeep]);

  useEffect(() => {
    if (phase === "idle" || phase === "done") {
      clearTimer();
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) return 0;
        if (t <= 4 && t > 1) countdownBeep();
        return t - 1;
      });
    }, 1000);

    return clearTimer;
  }, [phase, clearTimer, countdownBeep]);

  useEffect(() => {
    if (timeLeft === 0 && phase !== "idle" && phase !== "done") {
      nextPhase();
    }
  }, [timeLeft, phase, nextPhase]);

  function startTimer() {
    setPhase("countdown");
    setTimeLeft(5);
    setCurrentRound(0);
    setCurrentSet(0);
    countdownBeep();
  }

  function stopTimer() {
    clearTimer();
    setPhase("idle");
    setTimeLeft(0);
  }

  const formatTime = (s: number) =>
    `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  const totalTime = sets * (rounds * workTime + (rounds - 1) * restTime) + (sets - 1) * roundBreakTime;

  const phaseLabel: Record<Phase, string> = {
    idle: "",
    countdown: "GET READY!",
    work: "GO GO GO!",
    rest: "REST",
    roundBreak: "BREAK",
    done: "",
  };

  const phaseBg: Record<Phase, string> = {
    idle: "bg-orange-500",
    countdown: "bg-yellow-500",
    work: "bg-red-600",
    rest: "bg-green-600",
    roundBreak: "bg-blue-600",
    done: "bg-orange-500",
  };

  // Settings screen
  if (phase === "idle") {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 bg-orange-500 min-h-screen text-white">
        <Link
          href="/lab"
          className="absolute top-4 left-4 text-white/50 hover:text-white text-sm transition-colors"
        >
          &larr; The Lab
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-5xl font-black tracking-tight mb-2">TABATA</h1>
          <p className="text-orange-200 text-lg font-medium">Push your limits</p>
        </div>

        <div className="w-full max-w-sm space-y-4">
          <SettingRow label="Rounds" value={rounds} onChange={setRounds} min={1} max={20} />
          <SettingRow label="Sets" value={sets} onChange={setSets} min={1} max={10} />
          <SettingRow label="Work (sec)" value={workTime} onChange={setWorkTime} min={5} max={120} step={5} />
          <SettingRow label="Rest (sec)" value={restTime} onChange={setRestTime} min={5} max={120} step={5} />
          {sets > 1 && (
            <SettingRow label="Set break (sec)" value={roundBreakTime} onChange={setRoundBreakTime} min={10} max={300} step={10} />
          )}

          <div className="text-center text-orange-200 text-sm mt-2">
            Total: {formatTime(totalTime)}
          </div>

          <button
            onClick={startTimer}
            className="w-full py-5 bg-white text-orange-600 text-2xl font-black rounded-2xl shadow-lg hover:bg-orange-100 active:scale-95 transition-all mt-6"
          >
            START
          </button>
        </div>

        <p className="text-orange-300 text-xs mt-8">Tap START and give it everything you&apos;ve got!</p>
      </div>
    );
  }

  // Done screen
  if (phase === "done") {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-4 bg-orange-500 min-h-screen text-white">
        <div className="text-center animate-bounce">
          <div className="text-8xl mb-4">&#127881;</div>
          <h1 className="text-5xl font-black mb-3">CRUSHED IT!</h1>
          <p className="text-orange-200 text-xl font-medium mb-2">
            {sets} set{sets > 1 ? "s" : ""} &middot; {rounds} rounds &middot; {formatTime(totalTime)}
          </p>
          <p className="text-orange-300 text-base">You&apos;re a machine. Come back tomorrow!</p>
        </div>
        <button
          onClick={stopTimer}
          className="mt-10 px-10 py-4 bg-white text-orange-600 text-xl font-black rounded-2xl shadow-lg hover:bg-orange-100 active:scale-95 transition-all"
        >
          AGAIN?
        </button>
      </div>
    );
  }

  // Active timer
  const progress = phase === "work"
    ? (workTime - timeLeft) / workTime
    : phase === "rest"
    ? (restTime - timeLeft) / restTime
    : phase === "roundBreak"
    ? (roundBreakTime - timeLeft) / roundBreakTime
    : phase === "countdown"
    ? (5 - timeLeft) / 5
    : 0;

  return (
    <div className={`flex-1 flex flex-col items-center justify-center px-4 min-h-screen transition-colors duration-500 text-white ${phaseBg[phase]}`}>
      <p className="text-white/70 text-lg font-bold tracking-widest uppercase mb-2">
        {phaseLabel[phase]}
      </p>

      <div className="relative w-64 h-64 flex items-center justify-center mb-6">
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="4" opacity="0.2" />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 45}`}
            strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress)}`}
            className="transition-all duration-1000 ease-linear"
          />
        </svg>
        <span className="text-7xl font-black tabular-nums">{timeLeft}</span>
      </div>

      <div className="text-center mb-8">
        <p className="text-2xl font-bold">
          Round {currentRound}/{rounds}
        </p>
        {sets > 1 && (
          <p className="text-white/70 text-base">
            Set {currentSet}/{sets}
          </p>
        )}
      </div>

      <button
        onClick={stopTimer}
        className="px-8 py-3 bg-white/20 text-white text-lg font-bold rounded-xl border-2 border-white/30 hover:bg-white/30 active:scale-95 transition-all"
      >
        STOP
      </button>
    </div>
  );
}

function SettingRow({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
}) {
  return (
    <div className="flex items-center justify-between bg-white/15 rounded-xl px-5 py-3">
      <span className="font-bold text-base">{label}</span>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(Math.max(min, value - step))}
          className="w-9 h-9 rounded-full bg-white/20 text-white font-bold text-lg flex items-center justify-center hover:bg-white/30 active:scale-90 transition-all"
        >
          &minus;
        </button>
        <span className="w-12 text-center font-black text-xl tabular-nums">{value}</span>
        <button
          onClick={() => onChange(Math.min(max, value + step))}
          className="w-9 h-9 rounded-full bg-white/20 text-white font-bold text-lg flex items-center justify-center hover:bg-white/30 active:scale-90 transition-all"
        >
          +
        </button>
      </div>
    </div>
  );
}
