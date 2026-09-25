"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkoutDetails from "@/components/WorkoutDetails";

import type { Workout } from "@/types/workout";

export default function WorkoutPage() {
  const params = useParams();

  const [workout, setWorkout] = useState<Workout | null>(
    null
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWorkout = async () => {
      try {
        const response = await fetch(
          `https://api.abcz.workers.dev/api/fitlog/${params.id}`
        );

        if (!response.ok) {
          throw new Error("Workout not found");
        }

        const data = await response.json();

        setWorkout(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadWorkout();
  }, [params.id]);

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-5 md:px-8 py-12">
        {loading ? (
          <div className="min-h-[500px] flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-gray-700 border-t-[#ccff00] rounded-full animate-spin" />
          </div>
        ) : workout ? (
          <WorkoutDetails workout={workout} />
        ) : (
          <div className="text-center py-20">
            <h1 className="text-4xl font-black">
              WORKOUT NOT FOUND
            </h1>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}