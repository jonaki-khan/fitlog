"use client";

import Link from "next/link";

import {
  Clock,
  Flame,
  Star,
  Check,
  X,
} from "lucide-react";

import type { Workout } from "@/types/workout";

interface MyPlanCardProps {
  workout: Workout;
  onDone?: (id: number) => void;
  onRemove: (id: number) => void;
  saved?: boolean;
}

export default function MyPlanCard({
  workout,
  onDone,
  onRemove,
  saved = false,
}: MyPlanCardProps) {
  return (
    <div className="card-dark p-4 flex flex-col md:flex-row gap-5">

      {/* Image */}
      <img
        src={workout.image}
        alt={workout.name}
        className="w-full md:w-44 h-32 object-cover"
      />

      {/* Info */}
      <div className="flex-1">

        <div className="flex flex-wrap gap-2 mb-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="text-[10px] text-[#ccff00] font-black"
            >
              {group.toUpperCase()}
            </span>
          ))}
        </div>

        <h3 className="font-black text-xl uppercase">
          {workout.name}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {workout.equipment}
        </p>

        <div className="flex gap-5 mt-4 text-xs text-gray-400">

          <span className="flex items-center gap-1">
            <Clock size={14} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <Flame size={14} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1 text-[#ccff00]">
            <Star size={14} />
            {workout.rating}
          </span>

        </div>

      </div>

      {/* Actions */}
      <div className="flex md:flex-col gap-2 md:w-40">

        <Link
          href={`/workout/${workout.id}`}
          className="border border-gray-700 px-3 py-2 text-xs font-bold text-center"
        >
          VIEW DETAILS
        </Link>

        {!saved && onDone && (
          <button
            onClick={() => onDone(workout.id)}
            className="bg-[#ccff00] text-black px-3 py-2 text-xs font-black flex items-center justify-center gap-1"
          >
            <Check size={14} />
            MARK AS DONE
          </button>
        )}

        <button
          onClick={() => onRemove(workout.id)}
          className="border border-red-900 text-red-500 px-3 py-2 text-xs font-bold flex items-center justify-center gap-1"
        >
          <X size={14} />
          REMOVE
        </button>

      </div>
    </div>
  );
}