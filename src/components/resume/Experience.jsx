export default function Experience() {
  return (
    <section className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm space-y-6">
      <h2 className="text-xl font-semibold">Experience</h2>

      {/* LCG */}
      <article className="relative rounded-xl border border-gray-200 p-4">
        <div className="absolute -left-3 top-4 h-3 w-3 rounded-full bg-blue-600"></div>
        <h3 className="font-semibold">Full Stack Developer (Java) — LCG</h3>
        <p className="text-gray-600 text-sm">Rockville, MD — Nov 2022 – Present</p>
        <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
          <li>Java, JEE, JSP, Struts/Spring, Hibernate/iBATIS, Maven/Ant, Tomcat.</li>
          <li>Oracle RDBMS, REST/SOAP; XHTML/JSP/JSTL with CSS.</li>
          <li>Re-architected legacy apps; CI/CD; Tomcat deployments.</li>
          <li>Spring MVC/AOP/Boot/Batch; converted Struts actions to Spring Boot controllers.</li>
          <li>Front-end with JSP/HTML5/CSS3/React; production support.</li>
          <li>AWS/Azure/GCP exposure; Docker; Agile Scrum; Git workflows.</li>
        </ul>
      </article>

      {/* MoreWithUs */}
      <article className="relative rounded-xl border border-gray-200 p-4">
        <div className="absolute -left-3 top-4 h-3 w-3 rounded-full bg-blue-600"></div>
        <h3 className="font-semibold">Full Stack Developer (Java) — MoreWithUs</h3>
        <p className="text-gray-600 text-sm">DeKalb, IL — Jul 2021 – Jul 2022</p>
        <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
          <li>Spring REST controllers/services; DTO/DAO/Business Delegate patterns.</li>
          <li>Designed/built Java apps; testing & debugging; microservice REST APIs with Spring Boot.</li>
          <li>Java 8 (lambdas, streams); internal expense APIs to SAP.</li>
          <li>Documentation & releases; code quality improvements; Tomcat deployments.</li>
        </ul>
      </article>

      {/* IT-Point */}
      <article className="relative rounded-xl border border-gray-200 p-4">
        <div className="absolute -left-3 top-4 h-3 w-3 rounded-full bg-blue-600"></div>
        <h3 className="font-semibold">Full Stack Developer — IT-Point Consulting</h3>
        <p className="text-gray-600 text-sm">Arlington, VA — Nov 2018 – May 2021</p>
        <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
          <li>Mentored teammates; built features, handled change requests & bug fixes.</li>
          <li>JUnit & integration tests; CI with Maven, TeamCity, Git/Bitbucket.</li>
          <li>RESTful services; Spring MVC/AOP/Boot/Batch; Spring Security.</li>
          <li>Front-end with HTML/CSS/JSP/JS; RestTemplate integrations; SOAP & REST services.</li>
          <li>Postman for HTTP testing; JDBC/SQL; Tomcat deployments.</li>
        </ul>
      </article>
    </section>
  );
}
