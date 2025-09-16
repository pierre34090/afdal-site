// app/solution/page.tsx
export default function SolutionPage() {
  return (
    <section className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Our Solution: Afdal Route</h2>
      <p className="text-lg text-gray-700 mb-6">
        Afdal Route is our production-ready solution. It provides optimized
        routing with multiple alternatives, ensuring flexibility and robustness
        in real-world logistics.
      </p>
      <a
        href="https://example.com" // 👉 mettre ici le vrai lien prod
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Try Afdal Route
      </a>
    </section>
  );
}
