export default function Home() {
  return (
    <section className="min-h-[60vh] py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Avatar + Intro */}
        <div className="flex flex-col items-center text-center space-y-4">
          <img
            src="/me.jpg"                // <-- your file in /public
            alt="Yared Yohannes Fesshaye"
            width={160}
            height={160}
            loading="eager"
            className="h-40 w-40 rounded-full object-cover shadow-md ring-2 ring-blue-600/20"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Hi, I’m <span className="text-blue-600">Yared Yohannes Fesshaye</span>
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              Full-stack Java Developer — Spring Boot • React • AWS • SQL
            </p>
          </div>
        </div>

        {/* Cards (kept like your previous layout, just slightly polished) */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">What I Do</h3>
            <p className="text-gray-700 leading-relaxed">
              I build reliable backend services and clean frontends using Java, Spring Boot,
              JPA/Hibernate, REST APIs, React, and AWS.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Current Role</h3>
            <p className="text-gray-700 leading-relaxed">
              Full-Stack Developer @ LCG (Nov 2022 – Present). Re-architecting legacy apps,
              CI/CD, Spring MVC → Spring Boot migrations, production support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
