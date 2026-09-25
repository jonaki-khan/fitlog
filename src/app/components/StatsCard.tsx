"use client";

import Link from "next/link";

import {
  Clock,
  Flame,
  Star,
  Dumbbell,
  Plus,
  Bookmark,
} from "lucide-react";

import toast from "react-hot-toast";

import type { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";

interface WorkoutDetailsProps {
  workout: Workout;
}

export default function WorkoutDetails({
  workout,
}: WorkoutDetailsProps) {
  const {
    addToPlan,
    saveWorkout,
    isInPlan,
    isSaved,
  } = useFitLog();

  return (
    <div className="grid lg:grid-cols-2 gap-10">

      {/* Left */}
      <div>
        <div className="border border-[#292929] overflow-hidden">
          <img
            src={workout.image}
            alt={workout.name}
            className="w-full h-[450px] lg:h-[650px] object-cover"
          />
        </div>
      </div>

      {/* Right */}
      <div>

        <div className="flex flex-wrap gap-2 mb-5">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="bg-[#ccff00] text-black px-3 py-1 text-xs font-black"
            >
              {group.toUpperCase()}
            </span>
          ))}
        </div>

        <h1 className="display-font text-5xl md:text-6xl uppercase leading-none">
          {workout.name}
        </h1>

        <p className="text-gray-400 mt-6 leading-7">
          {workout.description}
        </p>

        {/* Specs */}
        <div className="border border-[#292929] mt-8">

          <SpecRow
            label="EQUIPMENT"
            value={workout.equipment}
          />

          <SpecRow
            label="DIFFICULTY"
            value={workout.difficulty}
          />

          <SpecRow
            label="SETS"
            value={String(workout.sets)}
          />

          <SpecRow
            label="REPS"
            value={workout.reps}
          />

          <SpecRow
            label="DURATION"
            value={`${workout.duration} min`}
          />

          <SpecRow
            label="CALORIES"
            value={`${workout.caloriesBurned} kcal`}
          />

          <SpecRow
            label="RATING"
            value={`★ ${workout.rating}`}
          />

        </div>

        {/* Instructions */}
        <div className="mt-10">

          <h2 className="text-xl font-black mb-5">
            INSTRUCTIONS
          </h2>

          <div className="space-y-4">
            {workout.instructions.map(
              (instruction, index) => (
                <div
                  key={index}
                  className="flex gap-4"
                >
                  <div className="w-8 h-8 shrink-0 bg-[#ccff00] text-black flex items-center justify-center font-black">
                    {index + 1}
                  </div>

                  <p className="text-gray-400">
                    {instruction}
                  </p>
                </div>
              )
            )}
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-10">

          <button
            onClick={() => addToPlan(workout)}
            disabled={isInPlan(workout.id)}
            className={`flex-1 py-4 font-black flex items-center justify-center gap-2 ${
              isInPlan(workout.id)
                ? "bg-gray-700 text-gray-400"
                : "bg-[#ccff00] text-black"
            }`}
          >
            <Plus size={20} />

            {isInPlan(workout.id)
              ? "ALREADY IN PLAN"
              : "ADD TO TODAY'S PLAN"}
          </button>

          <button
            onClick={() => saveWorkout(workout)}
            className={`flex-1 py-4 border font-black flex items-center justify-center gap-2 ${
              isSaved(workout.id)
                ? "border-[#ccff00] text-[#ccff00]"
                : "border-gray-700"
            }`}
          >
            <Bookmark size={20} />

            {isSaved(workout.id)
              ? "SAVED"
              : "SAVE FOR LATER"}
          </button>

        </div>

        <Link
          href="/"
          className="block text-center text-gray-500 hover:text-white mt-6"
        >
          ← Back to Library
        </Link>

      </div>
    </div>
  );
}

function SpecRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between gap-5 px-5 py-4 border-b border-[#292929] last:border-b-0">
      <span className="text-xs text-gray-500 font-bold">
        {label}
      </span>

      <span className="text-sm text-right font-bold">
        {value}
      </span>
    </div>
  );
}