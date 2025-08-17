export default function Contact() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Contact</h1>

      <div className="rounded-xl border border-gray-200 p-4">
        <p className="text-gray-700">
          I’m available for full-time roles and freelance work.
        </p>
        <div className="mt-4 space-y-1">
          <p><span className="font-semibold">Phone:</span> +1 (301) 944-2826</p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a className="text-blue-600 hover:underline" href="mailto:yohanesy585@gmail.com">
              yohanesy585@gmail.com
            </a>
          </p>
          <p><span className="font-semibold">Location:</span> Rockville, MD</p>
        </div>
      </div>

      {/* Optional quick contact form (posts nowhere yet) */}
      <form className="grid gap-3 sm:max-w-md">
        <input
          type="text"
          placeholder="Your name"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Your email"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-500"
        >
          Send
        </button>
      </form>
    </section>
  );
}
