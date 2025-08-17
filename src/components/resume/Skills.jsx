export default function Skills() {
  return (
    <section className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm space-y-4">
      <h2 className="text-xl font-semibold">Skills</h2>

      <div className="grid md:grid-cols-2 gap-4 text-gray-800">
        <p><span className="font-semibold">Languages:</span> Java SE 8, C++, Python, R, SQL, HTML, CSS, TypeScript</p>
        <p><span className="font-semibold">Frameworks:</span> Struts, Angular, Spring Boot, Spring Data JPA, Spring MVC, Hibernate</p>
        <p><span className="font-semibold">Web:</span> HTML5, CSS, Bootstrap, JSON, SPA, jQuery, JSP</p>
        <p><span className="font-semibold">Web Services:</span> REST/JSON</p>
        <p><span className="font-semibold">Databases:</span> MySQL, MongoDB</p>
        <p><span className="font-semibold">Security:</span> Spring Security (JWT)</p>
        <p><span className="font-semibold">Tools:</span> VS Code, Git, Swagger, Postman, Docker Hub, Eclipse</p>
        <p><span className="font-semibold">Platforms:</span> Windows, Linux, Cloud Deployment</p>
        <p><span className="font-semibold">Cloud:</span> AWS (S3, EC2), Google Cloud Firebase</p>
        <p><span className="font-semibold">Design Patterns:</span> MVC, RestController, Singleton, Observer</p>
        <p><span className="font-semibold">SDLC:</span> Agile, Scrum, Waterfall</p>
      </div>
    </section>
  );
}
