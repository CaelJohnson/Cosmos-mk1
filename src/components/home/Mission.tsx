export function Mission() {
  return (
    <section
      id="mission"
      className="relative border-t border-white/5 px-6 py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
          Our mission
        </p>
        <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Real data. Human stories.Why Cosmos?

Built by a physics student who wanted astronomy tools that were easier to use than the websites he kept finding online.Space agencies publish incredible data, but a lot of their tools assume you already know what you're looking at.

Cosmos is an attempt to make space a little more approachable—using real data, simple explanations, and interactive visualizations designed for curious people rather than experts.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-zinc-400">
          Space agencies publish incredible information — but most of it is built
          for researchers. We translate orbit paths, temperatures, and close
          approaches into experiences that answer one question:{" "}
          <span className="text-zinc-200">
            why should I care right now?
          </span>
        </p>
        <ul className="mt-12 grid gap-6 text-left sm:grid-cols-3">
          {[
            {
              title: "See, don’t calculate",
              body: "Comparisons you already understand — bus-sized asteroids, hotter than an oven, weaker than Earth’s gravity.",
            },
            {
              title: "Curiosity first",
              body: "Every screen is designed like a museum exhibit: one idea at a time, room to breathe.",
            },
            {
              title: "Honest, not dumbed down",
              body: "We use real NASA data. We just refuse to bury you in jargon to prove it.",
            },
          ].map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-colors hover:border-white/10 hover:bg-white/[0.04]"
            >
              <h3 className="font-medium text-zinc-100">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
