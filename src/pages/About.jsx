export default function About() {
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
          <p className="mt-2 text-lg text-gray-600">
            I’m <span className="font-semibold">Yared Yohannes Fesshaye</span>, a full-stack Java developer
            focused on building reliable backends and clean frontends.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Strengths</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>SDLC experience (Agile & Waterfall)</li>
              <li>Object-Oriented design & Java 8 features</li>
              <li>Performance & testing mindset</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">What I Enjoy</h3>
            <p className="text-gray-700 leading-relaxed">
              Re-architecting legacy systems, improving release pipelines,
              and making UI/UX simple and fast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
