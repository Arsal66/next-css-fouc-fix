
// import Image from "next/image";
// import DarkModeToggle from '@/components/DarkModeToggle';

// export default function Home() {
//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center p-10 font-sans gap-8 bg-white text-black dark:bg-black dark:text-white">
//       <DarkModeToggle />

//       <Image
//         src="/next.svg"
//         alt="Next.js Logo"
//         width={150}
//         height={40}
//         priority
//         className="dark:invert"
//       />

//       <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
//         Welcome to FOUC-Free App
//       </h1>

//       <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl text-center">
//         This app demonstrates how to prevent Flash of Unstyled Content (FOUC) using proper font loading, CSS imports, and Next.js App Router best practices.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
//         <a
//           href="https://nextjs.org/docs"
//           className="block p-6 border rounded-xl shadow-md hover:shadow-lg transition bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700"
//           target="_blank"
//         >
//           <h2 className="font-semibold text-blue-700 dark:text-blue-400">Next.js Docs →</h2>
//           <p className="text-sm text-gray-600 dark:text-gray-300">Learn how Next.js works and how to get started.</p>
//         </a>

//         <a
//           href="https://vercel.com"
//           className="block p-6 border rounded-xl shadow-md hover:shadow-lg transition bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700"
//           target="_blank"
//         >
//           <h2 className="font-semibold text-blue-700 dark:text-blue-400">Deploy to Vercel →</h2>
//           <p className="text-sm text-gray-600 dark:text-gray-300">Easily deploy your Next.js app with one click.</p>
//         </a>
//       </div>

//       <footer className="mt-12 text-sm text-gray-500 dark:text-gray-400">
//         Built by Arsal 🚀 — No FOUC, just fast performance!
//       </footer>
//     </main>
//   );
// }




// app/page.tsx
"use client";
import Image from "next/image";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-10 font-sans transition-colors">
      {/* Dark Mode Toggle */}
      <div className="flex justify-end mb-6">
        <DarkModeToggle />
      </div>

      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Next.js App</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          This is a test page to check FOUC and CSS loading performance.
        </p>

        {/* Image with hover effect */}
        {/* hover:scale-105 hover:shadow-2xl transition-all duration-300 */}
        <div className="max-w-3xl mx-auto shadow-xl rounded-xl overflow-hidden ">
          <Image
            src="/images.jpeg" // replace with your image path in public folder
            alt="Demo Image"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Cards Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
        {["Performance", "Security", "SEO"].map((item) => (
          <div
            key={item}
            className="border dark:border-gray-700 p-6 rounded-xl bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">{item}</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Learn how we enhance {item.toLowerCase()} with Next.js and Tailwind.
            </p>
          </div>
        ))}
      </section>

      <footer className="mt-20 text-center text-sm text-gray-500 dark:text-gray-400">
        🚀 Built by Arsal – Testing CSS FOUC
      </footer>
    </main>
  );
}
