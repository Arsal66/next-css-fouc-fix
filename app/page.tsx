

// import Image from "next/image";
// import DarkModeToggle from '@/components/DarkModeToggle';
// export default function Home() {
//   return (
//     <main className="min-h-screen flex flex-col items-center justify-center p-10 font-sans gap-8">
//       <DarkModeToggle />
//       <Image
//         src="/next.svg"
//         alt="Next.js Logo"
//         width={150}
//         height={40}
//         priority
//       />

//       <h1 className="text-4xl font-bold text-blue-600">Welcome to FOUC-Free App</h1>

//       <p className="text-lg text-gray-600 max-w-xl text-center">
//         This app demonstrates how to prevent Flash of Unstyled Content (FOUC) using proper font loading, CSS imports, and Next.js App Router best practices.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
//         <a
//           href="https://nextjs.org/docs"
//           className="block p-6 border rounded-xl shadow-md hover:shadow-lg transition bg-white hover:bg-gray-50"
//           target="_blank"
//         >
//           <h2 className="font-semibold text-blue-700">Next.js Docs →</h2>
//           <p className="text-sm text-gray-600">Learn how Next.js works and how to get started.</p>
//         </a>

//         <a
//           href="https://vercel.com"
//           className="block p-6 border rounded-xl shadow-md hover:shadow-lg transition bg-white hover:bg-gray-50"
//           target="_blank"
//         >
//           <h2 className="font-semibold text-blue-700">Deploy to Vercel →</h2>
//           <p className="text-sm text-gray-600">Easily deploy your Next.js app with one click.</p>
//         </a>
//       </div>

//       <footer className="mt-12 text-sm text-gray-500">
//         Built by Arsal 🚀 — No FOUC, just fast performance!
//       </footer>
//     </main>
//   );
// }









import Image from "next/image";
import DarkModeToggle from '@/components/DarkModeToggle';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10 font-sans gap-8 bg-white text-black dark:bg-black dark:text-white">
      <DarkModeToggle />

      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={150}
        height={40}
        priority
        className="dark:invert"
      />

      <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400">
        Welcome to FOUC-Free App
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl text-center">
        This app demonstrates how to prevent Flash of Unstyled Content (FOUC) using proper font loading, CSS imports, and Next.js App Router best practices.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        <a
          href="https://nextjs.org/docs"
          className="block p-6 border rounded-xl shadow-md hover:shadow-lg transition bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700"
          target="_blank"
        >
          <h2 className="font-semibold text-blue-700 dark:text-blue-400">Next.js Docs →</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">Learn how Next.js works and how to get started.</p>
        </a>

        <a
          href="https://vercel.com"
          className="block p-6 border rounded-xl shadow-md hover:shadow-lg transition bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700"
          target="_blank"
        >
          <h2 className="font-semibold text-blue-700 dark:text-blue-400">Deploy to Vercel →</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">Easily deploy your Next.js app with one click.</p>
        </a>
      </div>

      <footer className="mt-12 text-sm text-gray-500 dark:text-gray-400">
        Built by Arsal 🚀 — No FOUC, just fast performance!
      </footer>
    </main>
  );
}
