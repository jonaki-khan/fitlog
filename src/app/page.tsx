"use client";

import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkoutCard from "@/components/WorkoutCard";
import Footer from "@/components/Footer";
import SortDropdown from "@/components/SortDropdown";

import type { Workout } from "@/types/workout";

export default function Home() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("duration");

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        const response = await fetch(
          "https://api.abcz.workers.dev/api/fitlog"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch workouts");
        }

        const data = await response.json();

        setWorkouts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadWorkouts();
  }, []);

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (sortBy === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return a.duration - b.duration;
  });

  return (
    <main>
      <Navbar />

      <Hero />

      <section
        id="library"
        className="max-w-7xl mx-auto px-5 md:px-8 py-16"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">

          <div>
            <p className="text-[#ccff00] font-bold text-sm tracking-[0.2em]">
              TRAIN SMART
            </p>

            <h2 className="display-font text-5xl mt-2">
              THE LIBRARY
            </h2>

            <p className="text-gray-500 mt-2">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          <SortDropdown
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>

        {loading ? (
          <div className="min-h-[300px] flex flex-col items-center justify-center">
            <div className="w-10 h-10 border-4 border-gray-700 border-t-[#ccff00] rounded-full animate-spin" />

            <p className="text-gray-500 mt-5">
              Loading workouts...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {sortedWorkouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                workout={workout}
              />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}