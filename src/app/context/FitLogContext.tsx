"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type { Workout } from "@/types/workout";
import toast from "react-hot-toast";

interface FitLogContextType {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  saveWorkout: (workout: Workout) => void;
  removeSaved: (id: number) => void;
  markAsDone: (id: number) => void;
  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
}

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined
);

export function FitLogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

  const addToPlan = (workout: Workout) => {
    if (plan.length >= 5) {
      toast.error("Today's plan can contain only 5 workouts");
      return;
    }

    if (plan.some((item) => item.id === workout.id)) {
      toast.error("Workout is already in today's plan");
      return;
    }

    setPlan([...plan, workout]);

    toast.success("Added to today's plan");
  };

  const removeFromPlan = (id: number) => {
    setPlan(plan.filter((item) => item.id !== id));

    toast.success("Workout removed from plan");
  };

  const saveWorkout = (workout: Workout) => {
    if (saved.some((item) => item.id === workout.id)) {
      toast.error("Workout is already saved");
      return;
    }

    setSaved([...saved, workout]);

    toast.success("Workout saved for later");
  };

  const removeSaved = (id: number) => {
    setSaved(saved.filter((item) => item.id !== id));

    toast.success("Removed from saved");
  };

  const markAsDone = (id: number) => {
    toast.success("Workout marked as done");

    setPlan(plan.filter((item) => item.id !== id));
  };

  const isInPlan = (id: number) => {
    return plan.some((item) => item.id === id);
  };

  const isSaved = (id: number) => {
    return saved.some((item) => item.id === id);
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        removeFromPlan,
        saveWorkout,
        removeSaved,
        markAsDone,
        isInPlan,
        isSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider"
    );
  }

  return context;
}