import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#292929] mt-20">

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-5">

        <div className="flex items-center gap-3">

          <div className="w-9 h-9 bg-[#ccff00] text-black flex items-center justify-center rounded-lg">
            <Dumbbell size={20} />
          </div>

          <span className="font-black text-xl">
            FITLOG
          </span>

        </div>

        <p className="text-gray-500 text-sm text-center">
          © 2026 FitLog — Workout Library.
          Train hard, log honest.
        </p>

      </div>

    </footer>
  );
}