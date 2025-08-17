export default function Projects() {
  const projects = [
    {
      title: "Legacy → Spring Boot Migration",
      desc: "Converted Struts actions to Spring Boot controllers; improved reliability and deployment with Tomcat."
    },
    {
      title: "REST APIs & Data Layer",
      desc: "Built RESTful services with Spring Boot & JPA; tuned SQL for Oracle/MySQL."
    },
    {
      title: "CI/CD & Containers",
      desc: "Set up CI/CD; containerized microservices with Docker; improved release cadence."
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Projects</h1>
          <p className="mt-2 text-lg text-gray-600">
            Selected work demonstrating backend expertise, migration strategies, and DevOps skills.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={i}
              className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800">{p.title}</h3>
              <p className="text-gray-700 mt-2 leading-relaxed">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
