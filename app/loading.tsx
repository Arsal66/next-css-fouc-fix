// app/loading.tsx

import { Geist, Geist_Mono } from "next/font/google";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white">
      <p className="text-xl animate-pulse">Loading...</p>
    </div>
  );
}
