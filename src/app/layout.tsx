import type { Metadata } from "next";
import "./globals.css";
import { FitLogProvider } from "@/context/FitLogContext";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "FitLog - Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FitLogProvider>
          {children}
          <Toaster position="top-right" />
        </FitLogProvider>
      </body>
    </html>
  );
}