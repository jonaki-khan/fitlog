import Link from "next/link";
import {
  Clock,
  Flame,
  Star,
  Dumbbell,
} from "lucide-react";

import type { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({
  workout,
}: WorkoutCardProps) {
  return (
    <Link href={`/workout/${workout.id}`}>
      <div className="card-dark group hover:border-[#ccff00] transition overflow-hidden">

        {/* Image */}
        <div className="h-56 overflow-hidden">
          <img
            src={workout.image}
            alt={workout.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="p-5">

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="text-[10px] font-black border border-gray-700 px-2 py-1"
              >
                {group.toUpperCase()}
              </span>
            ))}
          </div>

          {/* Name */}
          <h3 className="font-black text-xl uppercase">
            {workout.name}
          </h3>

          {/* Equipment */}
          <div className="flex items-center gap-2 text-gray-500 text-sm mt-3">
            <Dumbbell size={15} />
            {workout.equipment}
          </div>

          {/* Stats */}
          <div className="border-t border-[#292929] mt-5 pt-4 flex justify-between text-xs text-gray-400">

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
      </div>
    </Link>
  );
}