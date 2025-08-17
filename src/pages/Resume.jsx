export default function Resume() {
  return (
    <section className="space-y-8">
      {/* Header / Contact */}
      <header className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h1 className="text-3xl font-bold">Yared Yohannes Fesshaye</h1>
        <p className="text-gray-600">Full-Stack Java Developer</p>

        <div className="mt-4 grid gap-2 sm:grid-cols-3 text-sm">
          <p><span className="font-semibold">Phone:</span> +1 (301) 944-2826</p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a href="mailto:yohanesy585@gmail.com" className="text-blue-600 hover:underline">
              yohanesy585@gmail.com
            </a>
          </p>
          <p><span className="font-semibold">Location:</span> 13202 Justice Rd, Rockville, MD 20853</p>
        </div>

        {/* Optional: put a file named resume.pdf in /public to enable the button */}
        <div className="mt-4">
 <a
  href="/resume.pdf"
  download="Yared_Yohannes_Resume.pdf"
  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
>
  📄 Download Resume
</a>

        </div>
      </header>

      {/* Professional Summary */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-3">
        <h2 className="text-xl font-semibold border-b pb-2">Professional Summary</h2>
        <p className="text-gray-700">
          Graduate from University of Maryland with proficiency in programming using Java, Struts, SQL,
          Spring Boot, Angular, AWS, AWS Workspaces, and Google Cloud Firebase. Able to deliver under tight
          production deadlines across all phases of the SDLC. Experienced working on multiple tasks and
          demonstrating strong problem-solving and communication skills.
        </p>
        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1 list-disc pl-5 text-gray-700">
          <li>5+ years SDLC experience (Agile & Waterfall).</li>
          <li>5+ years Full-Stack Java (Spring Boot, Hibernate, JPA, JDBC).</li>
          <li>OOP, multithreading, collections, Java 8 features.</li>
          <li>Frontend: JavaScript, HTML, CSS, TypeScript, React, JSP.</li>
          <li>Spring Framework & Spring Data JPA; REST (Core, Boot, Data JPA, Security).</li>
          <li>Spring Security (auth/authz).</li>
          <li>RDBMS: Oracle, MySQL, SQL Server; NoSQL: MongoDB.</li>
          <li>DB design/normalization, ER modeling, SQL/PLSQL, HQL.</li>
          <li>Performance improvements via unit/integration testing.</li>
          <li>Angular (directives, services, routing, DI, RxJS).</li>
          <li>Docker fundamentals; microservice containerization.</li>
          <li>RESTful web services & middleware configuration.</li>
        </ul>
      </section>

      {/* Skills */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
        <h2 className="text-xl font-semibold border-b pb-2">Skills</h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-800">
          <p><span className="font-semibold">Languages:</span> Java SE 8, C++, Python, R, SQL (MySQL), HTML, CSS, TypeScript, JSP, Struts</p>
          <p><span className="font-semibold">Web:</span> HTML5, CSS, Bootstrap, JSON, SPA, jQuery, JSP</p>
          <p><span className="font-semibold">Frameworks:</span> Struts, Angular, Spring Boot, Spring JPA/Data, Spring Core/MVC/REST, Hibernate</p>
          <p><span className="font-semibold">Web Services:</span> RESTful, JSON</p>
          <p><span className="font-semibold">Databases:</span> MySQL, MongoDB (plus Oracle/SQL Server experience)</p>
          <p><span className="font-semibold">Security:</span> Spring Security with JWT</p>
          <p><span className="font-semibold">Tools:</span> VS Code, Git (branching/merging), Swagger, Postman, Docker Hub, Eclipse</p>
          <p><span className="font-semibold">Platforms:</span> Windows, Linux, Cloud Deployment</p>
          <p><span className="font-semibold">Cloud:</span> AWS (S3, EC2), Google Cloud Firebase, AWS Workspaces</p>
          <p><span className="font-semibold">Design Patterns:</span> MVC, RestController, Singleton, Observer</p>
          <p><span className="font-semibold">SDLC:</span> Agile (Scrum), Waterfall</p>
        </div>
      </section>

      {/* Education */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4">
        <h2 className="text-xl font-semibold border-b pb-2">Education</h2>
        <div className="space-y-3">
          <div className="border-l-4 border-blue-600 pl-4">
            <p className="font-semibold">Bachelor’s in Computer Science — University of Maryland (2021)</p>
            <p className="text-gray-600 text-sm">1000 Hilltop Cir, Baltimore, MD 21250</p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <p className="font-semibold">Associate Degree in Engineering — Montgomery College (2019)</p>
            <p className="text-gray-600 text-sm">51 Mannakee St, Rockville, MD 20850</p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <p className="font-semibold">Certifications & Memberships</p>
            <p className="text-gray-700 text-sm">
              Udemy Data Science Certificate (2019); Phi Theta Kappa Honor Society (2019); Software Development Club
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">
        <h2 className="text-xl font-semibold border-b pb-2">Experience</h2>

        {/* LCG */}
        <article className="relative rounded-lg border border-gray-200 p-4">
          <div className="absolute -left-3 top-4 h-3 w-3 rounded-full bg-blue-600"></div>
          <h3 className="font-semibold">Full Stack Developer (Java) — LCG</h3>
          <p className="text-gray-600 text-sm">6000 Executive Boulevard, Rockville, MD 20852 — Nov 2022 – Present</p>
          <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
            <li>Java, JEE, JSP, SOA, Struts/Spring, Hibernate/iBATIS, Maven/Ant, Apache Tomcat.</li>
            <li>Oracle RDBMS; REST/SOAP services; XHTML/JSP/JSTL with CSS.</li>
            <li>Re-architected legacy applications; CI/CD implementations; Tomcat deployments.</li>
            <li>Developed Spring MVC, AOP, Boot, Batch modules; converted Struts Action classes to Spring Boot controllers.</li>
            <li>Frontend development with JSP, HTML5, CSS3, React.js.</li>
            <li>Explored AWS, Azure, GCP; containerization with Docker.</li>
            <li>Agile (Scrum); Git branching/merging; production support.</li>
          </ul>
        </article>

        {/* MoreWithUs */}
        <article className="relative rounded-lg border border-gray-200 p-4">
          <div className="absolute -left-3 top-4 h-3 w-3 rounded-full bg-blue-600"></div>
          <h3 className="font-semibold">Full Stack Developer (Java) — MoreWithUs</h3>
          <p className="text-gray-600 text-sm">2500 N Annie Glidden Rd, DeKalb, IL 60115 — Jul 2021 – Jul 2022</p>
          <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
            <li>Spring REST controllers/services; DTO, DAO, Business Delegate patterns.</li>
            <li>Designed, built, and maintained Java applications & websites.</li>
            <li>Analysis, programming, testing, debugging; timely issue resolution.</li>
            <li>Microservice REST APIs using Spring Boot; Java 8 (lambdas, streams, collections).</li>
            <li>Exposed internal expense APIs to SAP; design documentation & releases.</li>
            <li>Improved code quality via best practices; Tomcat deployments.</li>
          </ul>
        </article>

        {/* IT-Point Consulting */}
        <article className="relative rounded-lg border border-gray-200 p-4">
          <div className="absolute -left-3 top-4 h-3 w-3 rounded-full bg-blue-600"></div>
          <h3 className="font-semibold">Full Stack Developer — IT-Point Consulting</h3>
          <p className="text-gray-600 text-sm">901 S Highland St, Arlington, VA 22204 — Nov 2018 – May 2021</p>
          <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
            <li>Supported and coached team members; new features, change requests, bug fixes.</li>
            <li>Ensured dev testing coverage (JUnit, integration); contributed to automation.</li>
            <li>Developed RESTful web services; CI with Maven, TeamCity, Git, Bitbucket.</li>
            <li>Spring MVC/AOP/Boot/Batch; Spring Security for auth/authz.</li>
            <li>Frontend with HTML, CSS, JSP, JavaScript; client-side validation.</li>
            <li>Integrated REST APIs via Spring RestTemplate; created REST & SOAP services.</li>
            <li>Postman for HTTP testing (GET/POST/PUT); JDBC/SQL; Tomcat deployments.</li>
          </ul>
        </article>
      </section>
    </section>
  );
}
