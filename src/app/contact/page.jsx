export default function ContactPage() {
  return (
    <main className="max-w-3xl m-auto grid place-items-center gap-5">
      <h1 className="row-start-1">Get In Touch</h1>
      <p className="row-start-2 text-text text-center">
        Thanks for visiting my portfolio! <br />
        If you're interested in working with someone who combines creative
        thinking with a strong focus on user experience and accessible design,
        feel free to get in touch. I'm always happy to connect regarding
        potential collaborations, internships, or freelance work.
      </p>
      <form className="w-4/6 flex flex-col gap-5 text-left">
        <label className="text-sm text-heading">
          Email
          <input
            type="email"
            placeholder="Please enter your email"
            required
            className="mt-1 w-full p-2 rounded bg-white text-black"
          />
        </label>
        <label className="text-sm text-heading">
          Mobile
          <input
            type="tel"
            placeholder="Enter mobile"
            className="mt-1 w-full p-2 rounded bg-white text-black"
          />
        </label>
        <label className="text-sm text-heading">
          Message
          <textarea
            placeholder="Enter your message"
            rows="4"
            className="mt-1 w-full p-2 rounded bg-white text-black"
          />
        </label>
        <button
          type="submit"
          className="mt-4 bg-active text-white py-3 font-bold rounded hover:brightness-110 shadow-lg shadow-green-700/30"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
