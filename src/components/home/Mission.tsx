export function Mission() {
return ( <section
   id="mission"
   className="relative border-t border-white/5 px-6 py-28"
 > <div className="mx-auto max-w-3xl text-center"> <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
Why Cosmos? </p>

```
    <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
      Astronomy shouldn't require a manual.
    </h2>

    <p className="mt-6 text-lg leading-relaxed text-zinc-400">
      Cosmos started as a summer project by a physics student who wanted
      astronomy tools that were easier to use than the websites he kept
      finding online.
    </p>

    <p className="mt-4 text-lg leading-relaxed text-zinc-400">
      Space agencies publish incredible data, but many of their tools assume
      you already know what you're looking at. Cosmos takes real space data
      and presents it in a way that's approachable, interactive, and
      designed for curious people rather than experts.
    </p>

    <ul className="mt-12 grid gap-6 text-left sm:grid-cols-3">
      {[
        {
          title: "See, don't calculate",
          body: "Learn through visualizations and comparisons instead of digging through equations and technical reports.",
        },
        {
          title: "Curiosity first",
          body: "Explore planets, moons, asteroids, and more at your own pace without needing a background in astronomy.",
        },
        {
          title: "Real data, plain English",
          body: "The information comes from real sources. The explanations are written for humans.",
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
```

);
}
