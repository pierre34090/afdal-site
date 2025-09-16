// app/page.tsx
export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4">
      <h1 className="text-4xl font-bold mb-6">Welcome to Afdal</h1>
      <p className="max-w-xl text-lg text-gray-700 mb-8">
        Optimized solutions for real-world complexity.  
        We specialize in generating sets of optimized solutions, not just one.
      </p>
      <a
        href="/solution"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Discover our Solution
      </a>
    </section>
  );
}
