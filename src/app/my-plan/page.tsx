"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsCard from "@/components/StatsCard";
import MyPlanCard from "@/components/MyPlanCard";

import { useFitLog } from "@/context/FitLogContext";

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState<
    "plan" | "saved"
  >("plan");

  const {
    plan,
    saved,
    removeFromPlan,
    removeSaved,
    markAsDone,
  } = useFitLog();

  const minutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const calories = plan.reduce(
    (total, workout) =>
      total + workout.caloriesBurned,
    0
  );

  const currentList =
    activeTab === "plan" ? plan : saved;

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-5 md:px-8 py-16">

        {/* Header */}
        <div className="mb-10">
          <p className="text-[#ccff00] text-sm font-bold tracking-[0.2em]">
            YOUR WORKOUTS
          </p>

          <h1 className="display-font text-6xl mt-2">
            MY PLAN
          </h1>

          <p className="text-gray-500 mt-3">
            Cap of five lifts for today. Finish them,
            then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">

          <StatsCard
            title="Exercises"
            value={plan.length}
          />

          <StatsCard
            title="Minutes"
            value={minutes}
            suffix="min"
          />

          <StatsCard
            title="Calories"
            value={calories}
            suffix="kcal"
          />

        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#292929] mb-8">

          <button
            onClick={() => setActiveTab("plan")}
            className={`px-6 py-4 text-sm font-black ${
              activeTab === "plan"
                ? "text-[#ccff00] border-b-2 border-[#ccff00]"
                : "text-gray-500"
            }`}
          >
            TODAY'S PLAN ({plan.length})
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`px-6 py-4 text-sm font-black ${
              activeTab === "saved"
                ? "text-[#ccff00] border-b-2 border-[#ccff00]"
                : "text-gray-500"
            }`}
          >
            SAVED ({saved.length})
          </button>

        </div>

        {/* List */}
        {currentList.length === 0 ? (
          <div className="border border-[#292929] min-h-[300px] flex flex-col items-center justify-center text-center p-6">

            <h2 className="display-font text-4xl">
              NOTHING HERE YET
            </h2>

            <p className="text-gray-500 mt-3 max-w-md">
              Browse the library and add a lift to get
              today moving.
            </p>

            <a
              href="/"
              className="mt-6 bg-[#ccff00] text-black px-6 py-3 font-black"
            >
              GO TO WORKOUTS
            </a>

          </div>
        ) : (
          <div className="space-y-4">

            {currentList.map((workout) => (
              <MyPlanCard
                key={workout.id}
                workout={workout}
                saved={activeTab === "saved"}
                onDone={
                  activeTab === "plan"
                    ? markAsDone
                    : undefined
                }
                onRemove={
                  activeTab === "plan"
                    ? removeFromPlan
                    : removeSaved
                }
              />
            ))}

          </div>
        )}

      </main>

      <Footer />
    </>
  );
}