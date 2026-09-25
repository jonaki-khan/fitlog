import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import hero from '../assets/banner.png'

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left */}
        <div>
          <p className="text-[#ccff00] text-sm font-bold tracking-[0.3em] mb-5">
            WORKOUT LIBRARY
          </p>

          <h1 className="display-font text-5xl md:text-7xl lg:text-8xl leading-[0.9] uppercase">
            TRAIN WITH
            <br />
            <span className="text-[#ccff00]">
              INTENT.
            </span>
            <br />
            LOG EVERY SET.
          </h1>

          <p className="text-gray-400 max-w-xl mt-7 text-base md:text-lg leading-7">
            FitLog is a dark, no-nonsense gym companion:
            pick a lift, lock it into today's plan, and watch
            the week's work add up.
          </p>

          <Link
            href="#library"
            className="inline-flex items-center gap-2 mt-8 bg-[#ccff00] text-black px-6 py-4 font-black"
          >
            BROWSE WORKOUTS
            <ArrowDownRight size={20} />
          </Link>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="overflow-hidden border border-[#292929]">
            <img
              src={hero}
              alt="Fit Log"
              className="w-full h-[400px] md:h-[520px] object-cover"
            />
          </div>

          <div className="absolute bottom-5 left-5 bg-[#ccff00] text-black px-4 py-2 font-black text-sm">
            TRAIN HARD
          </div>
        </div>
      </div>
    </section>
  );
}