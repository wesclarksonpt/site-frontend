export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <img
        src="images/hero.png"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Transform Your Life, One Step at a Time
        </h1>
        <p className="italic text-lg md:text-xl mb-6">
          "You can’t reach the top without taking the stairs—unless there’s an elevator, but even then you still gotta push the button."
        </p>
        <a
          href="#contact"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}

