"use client";

import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

export default function Navbar() {
  const pathname = usePathname();

  const { plan, saved } = useFitLog();

  return (
    <nav className="sticky top-0 z-50 bg-black/95 border-b border-[#292929]">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-black text-xl"
        >
          <div className="w-9 h-9 bg-[#ccff00] text-black flex items-center justify-center rounded-lg">
            <Dumbbell size={20} />
          </div>

          <span>FITLOG</span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-bold ${
              pathname === "/"
                ? "text-[#ccff00]"
                : "text-gray-400"
            }`}
          >
            WORKOUT
          </Link>

          <Link
            href="/my-plan"
            className={`text-sm font-bold ${
              pathname === "/my-plan"
                ? "text-[#ccff00]"
                : "text-gray-400"
            }`}
          >
            MY PLAN
          </Link>
        </div>

        {/* Counters */}
        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="bg-[#ccff00] text-black px-4 py-2 rounded-full text-xs font-black"
          >
            PLAN {plan.length}
          </Link>

          <Link
            href="/my-plan"
            className="border border-gray-600 px-4 py-2 rounded-full text-xs font-black"
          >
            SAVED {saved.length}
          </Link>
        </div>
      </div>
    </nav>
  );
}