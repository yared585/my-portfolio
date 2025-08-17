export default function Education() {
  return (
    <section className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm space-y-4">
      <h2 className="text-xl font-semibold">Education</h2>

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
  );
}
