import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#080808] text-white flex items-center justify-center px-5">

      <div className="text-center">

        <p className="text-[#ccff00] font-black tracking-[0.3em]">
          ERROR 404
        </p>

        <h1 className="display-font text-7xl md:text-9xl mt-3">
          NOT FOUND
        </h1>

        <p className="text-gray-500 mt-5">
          The workout or page you're looking for
          doesn't exist.
        </p>

        <Link
          href="/"
          className="inline-block bg-[#ccff00] text-black px-7 py-4 font-black mt-7"
        >
          GO HOME
        </Link>

      </div>

    </main>
  );
}