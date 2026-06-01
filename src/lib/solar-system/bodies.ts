import type { SolarBody, SolarSection } from "./types";

export const solarBodies: Record<string, SolarBody> = {
  sun: {
    id: "sun",
    name: "Sun",
    kind: "star",
    tagline: "The engine of the solar system",
    description:
      "A giant ball of hot plasma — so massive that everything else orbits it. Without the Sun, Earth would be a frozen rock drifting in the dark.",
    gravity: "About 28× stronger than Earth’s — you’d be crushed long before you could stand.",
    temperature: "Surface around 10,000°F — hot enough to vaporize any material we know.",
    atmosphere: "Not really an atmosphere like a planet — it’s mostly hydrogen and helium churning in violent fusion.",
    survival:
      "No. You’d be vaporized instantly. Even spacecraft have to stay millions of miles away.",
    funFacts: [
      "Light from the Sun takes about 8 minutes to reach Earth — so when you see sunshine, you’re looking at the past.",
      "The Sun contains 99.8% of all mass in the solar system.",
      "It’s middle-aged: roughly 4.6 billion years old, with billions more to go.",
    ],
    gradient: "from-amber-300 via-orange-400 to-yellow-500",
    visual: "2xl",
  },

  mercury: {
    id: "mercury",
    name: "Mercury",
    kind: "planet",
    planetClass: "terrestrial",
    tagline: "The speedy scorched world",
    description:
      "The smallest planet and closest to the Sun. It has almost no air, wild temperature swings, and a surface covered in ancient craters.",
    gravity: "About 38% of Earth’s — you’d feel light, but you couldn’t jump to orbit.",
    temperature:
      "Up to 800°F in daylight, below -300°F at night — hotter than an oven, then colder than Antarctica in seconds (if you could survive the switch).",
    atmosphere:
      "Essentially none — a whisper-thin exosphere, not enough to breathe or block radiation.",
    survival:
      "No. Extreme heat, brutal cold, and deadly solar radiation. Spacesuits wouldn’t cut it on the surface.",
    funFacts: [
      "A year on Mercury is only 88 Earth days — but its day is longer than its year.",
      "Despite being closest to the Sun, it’s not the hottest planet (Venus wins that).",
      "If you could stand on Mercury at the right moment, the Sun would look three times larger than from Earth.",
    ],
    gradient: "from-zinc-400 to-zinc-600",
    visual: "xs",
  },

  venus: {
    id: "venus",
    name: "Venus",
    kind: "planet",
    planetClass: "terrestrial",
    tagline: "Earth’s evil twin",
    description:
      "Similar size to Earth but wrapped in thick clouds. The surface is a crushing, toxic pressure cooker — beautiful in the sky, hellish up close.",
    gravity: "About 90% of Earth’s — you’d feel almost normal weight.",
    temperature:
      "Around 900°F surface-wide — hot enough to melt lead, day or night.",
    atmosphere:
      "Thick carbon dioxide clouds with sulfuric acid — a runaway greenhouse that traps heat forever.",
    survival:
      "No. The air would crush you, cook you, and poison you. Probes that landed didn’t last long.",
    funFacts: [
      "Venus spins backward compared to most planets — the Sun rises in the west there.",
      "A day on Venus is longer than its year.",
      "It’s the brightest object in our night sky after the Moon — we call it the morning or evening star.",
    ],
    gradient: "from-amber-100 via-yellow-200 to-orange-300",
    visual: "md",
  },

  earth: {
    id: "earth",
    name: "Earth",
    kind: "planet",
    planetClass: "terrestrial",
    tagline: "The only home we know",
    description:
      "A rocky world with liquid water, a protective magnetic field, and the perfect distance from the Sun for life as we know it.",
    gravity: "1× Earth — this is our baseline.",
    temperature:
      "Comfortable on average — roughly 59°F globally, with huge regional variety.",
    atmosphere:
      "Nitrogen and oxygen with just enough greenhouse effect to keep us warm — not too much, not too little.",
    survival:
      "Yes — you’re living the proof. Bring snacks.",
    funFacts: [
      "Earth isn’t a perfect sphere — it bulges slightly at the equator from its spin.",
      "Most of Earth’s volume is actually hotter than the surface of the Sun (the inner core is extreme).",
      "From space, Earth is the only planet we know of that looks vividly alive — blue oceans, white clouds, green land.",
    ],
    gradient: "from-blue-500 via-teal-400 to-emerald-500",
    visual: "md",
  },

  moon: {
    id: "moon",
    name: "Moon",
    kind: "moon",
    parentId: "earth",
    tagline: "Earth’s constant companion",
    description:
      "Our only natural satellite — a dusty, airless world that stabilizes Earth’s tilt and drives the tides.",
    gravity: "About 17% of Earth’s — you could jump six times higher (in a spacesuit).",
    temperature:
      "From 260°F in sunlight to -280°F in shadow — no atmosphere to smooth things out.",
    atmosphere: "None — completely airless.",
    survival:
      "Only with heavy life support. Apollo astronauts stayed hours; long-term needs underground shelters.",
    funFacts: [
      "The Moon is slowly drifting away — about an inch farther from Earth each year.",
      "We always see the same side because it rotates once per orbit (tidal locking).",
      "Footprints from Apollo missions could last millions of years — no wind or rain to erase them.",
    ],
    gradient: "from-zinc-300 to-zinc-500",
    visual: "sm",
  },

  mars: {
    id: "mars",
    name: "Mars",
    kind: "planet",
    planetClass: "terrestrial",
    tagline: "The red desert next door",
    description:
      "A cold, rusty world with the tallest volcano and deepest canyon in the solar system. Humanity’s favorite “maybe someday” destination.",
    gravity: "About 38% of Earth’s — you’d feel bouncy in a spacesuit.",
    temperature:
      "Average around -80°F — colder than Antarctica, with occasional brief warmth near the equator.",
    atmosphere:
      "Thin carbon dioxide air — less than 1% the pressure of Earth’s, too thin to breathe.",
    survival:
      "Not without enclosed habitats. You’d need pressurized suits, heat, and radiation shielding 24/7.",
    funFacts: [
      "Mars has two tiny moons — Phobos and Deimos — named after the Greek gods of fear and panic.",
      "A day on Mars is about 24 hours 37 minutes — surprisingly Earth-like.",
      "Evidence suggests Mars once had rivers and lakes; the water is mostly gone or frozen underground.",
    ],
    gradient: "from-red-600 via-orange-700 to-red-800",
    visual: "sm",
  },

  "asteroid-belt": {
    id: "asteroid-belt",
    name: "Asteroid Belt",
    kind: "region",
    tagline: "The solar system’s rocky river",
    description:
      "A wide ring of rocky debris between Mars and Jupiter — not a dense sci-fi asteroid field, but millions of objects mostly far apart. Ceres, the largest body here, is classified as a dwarf planet.",
    gravity:
      "Depends on which asteroid you land on — most are so small you’d barely feel any pull.",
    temperature:
      "Frigid — well below freezing, with no cozy atmosphere to hold heat.",
    atmosphere: "None on individual asteroids — open vacuum.",
    survival:
      "Only in a spacecraft. You’d drift, freeze, and suffocate in seconds without protection.",
    funFacts: [
      "The total mass of the entire belt is less than our Moon — it’s mostly empty space.",
      "Hollywood’s “dense asteroid fields” are fiction — real gaps are usually huge.",
      "NASA’s Dawn mission visited Vesta and Ceres — two of the belt’s biggest residents.",
    ],
    gradient: "from-stone-500 via-amber-900/40 to-stone-600",
    visual: "lg",
  },

  jupiter: {
    id: "jupiter",
    name: "Jupiter",
    kind: "planet",
    planetClass: "gas-giant",
    tagline: "King of the planets",
    description:
      "A colossal ball of hydrogen and helium with no solid surface — storms bigger than Earth, including the famous Great Red Spot.",
    gravity: "About 2.4× Earth’s — you’d feel very heavy very fast.",
    temperature:
      "Cloud tops around -230°F — cold, but deeper layers get ferociously hot.",
    atmosphere:
      "Mostly hydrogen and helium with colorful ammonia clouds — a stormy, swirling sky with no ground below.",
    survival:
      "No. You’d fall forever, get crushed by pressure, and cooked by heat as you descended.",
    funFacts: [
      "Jupiter has at least 95 known moons — four are famous: Io, Europa, Ganymede, Callisto.",
      "It acts like a cosmic vacuum cleaner, deflecting asteroids that might otherwise hit Earth.",
      "Jupiter is so wide that 1,300 Earths could fit inside it.",
    ],
    gradient: "from-amber-700 via-orange-300 to-amber-900",
    visual: "2xl",
  },

  io: {
    id: "io",
    name: "Io",
    kind: "moon",
    parentId: "jupiter",
    tagline: "The most volcanic place we know",
    description:
      "Jupiter’s innermost Galilean moon — tortured by gravity until its surface erupts with hundreds of volcanoes.",
    gravity: "About 18% of Earth’s.",
    temperature:
      "Surface averages around -202°F, but lava fountains can hit thousands of degrees.",
    atmosphere: "Very thin sulfur dioxide — not breathable.",
    survival:
      "No. Radiation from Jupiter plus active volcanism and extreme cold make it lethal.",
    funFacts: [
      "Io’s volcanoes can shoot plumes hundreds of miles high.",
      "It’s the most volcanically active body in the solar system.",
      "Its surface changes color as sulfur snows and lava repaint the landscape.",
    ],
    gradient: "from-yellow-400 via-orange-500 to-red-600",
    visual: "xs",
  },

  europa: {
    id: "europa",
    name: "Europa",
    kind: "moon",
    parentId: "jupiter",
    tagline: "An ice shell hiding an ocean",
    description:
      "A smooth, cracked ice moon that may harbor a salty ocean beneath — one of the top places scientists wonder about alien life.",
    gravity: "About 13% of Earth’s.",
    temperature: "Surface around -260°F — frozen solid on top.",
    atmosphere: "Extremely thin oxygen — nothing you could breathe.",
    survival:
      "Not on the surface. Any future explorers would need subsurface access and heavy shielding from Jupiter’s radiation.",
    funFacts: [
      "Europa may hold twice as much water as all of Earth’s oceans — locked under ice.",
      "The dark lines on its surface are cracks where the ice shifts and refreezes.",
      "NASA’s Europa Clipper mission is studying whether it could support life.",
    ],
    gradient: "from-slate-200 via-blue-100 to-slate-300",
    visual: "sm",
  },

  ganymede: {
    id: "ganymede",
    name: "Ganymede",
    kind: "moon",
    parentId: "jupiter",
    tagline: "The solar system’s largest moon",
    description:
      "Bigger than Mercury — a frozen world with its own magnetic field and evidence of underground layers.",
    gravity: "About 15% of Earth’s.",
    temperature: "Around -280°F on the surface.",
    atmosphere: "Very thin oxygen — essentially none.",
    survival: "No — deep cold and radiation from Jupiter.",
    funFacts: [
      "Ganymede is the only moon known to generate its own magnetic field.",
      "It may have more water underground than all of Earth’s oceans.",
      "If it orbited the Sun instead of Jupiter, we’d call it a planet.",
    ],
    gradient: "from-zinc-400 to-slate-500",
    visual: "md",
  },

  saturn: {
    id: "saturn",
    name: "Saturn",
    kind: "planet",
    planetClass: "gas-giant",
    tagline: "The ringed jewel",
    description:
      "A pale gold gas giant famous for its rings — made of countless ice and rock particles, not a solid disc.",
    gravity: "About 1.1× Earth’s — surprisingly close to home for such a giant.",
    temperature: "Cloud tops near -285°F.",
    atmosphere:
      "Hydrogen and helium with ammonia clouds — like Jupiter’s cousin, but colder and calmer-looking.",
    survival:
      "No solid ground — you’d sink, freeze, and eventually be crushed.",
    funFacts: [
      "Saturn is less dense than water — in a giant bathtub, it would float.",
      "Its rings are only tens of meters thick in places but span hundreds of thousands of miles.",
      "Saturn’s moon Titan has lakes of liquid methane — a whole different kind of weather.",
    ],
    gradient: "from-amber-200 via-yellow-100 to-amber-400",
    visual: "2xl",
  },

  titan: {
    id: "titan",
    name: "Titan",
    kind: "moon",
    parentId: "saturn",
    tagline: "Moon with clouds and lakes",
    description:
      "Saturn’s largest moon — thick orange haze, rivers and lakes of liquid methane, and a surface unlike anywhere else we’ve seen.",
    gravity: "About 14% of Earth’s.",
    temperature: "Around -290°F — incredibly cold.",
    atmosphere:
      "Thick nitrogen with methane clouds — the only moon with a dense atmosphere; still not breathable for humans.",
    survival:
      "Not without full life support. Cold, toxic chemistry, and no oxygen make the surface deadly.",
    funFacts: [
      "Titan’s atmosphere is thicker than Earth’s — but you still couldn’t breathe it.",
      "The Huygens probe landed here in 2005 and sent photos from the surface.",
      "Methane rain and rivers carve a landscape that looks eerily Earth-like.",
    ],
    gradient: "from-orange-700 via-amber-600 to-orange-900",
    visual: "md",
  },

  enceladus: {
    id: "enceladus",
    name: "Enceladus",
    kind: "moon",
    parentId: "saturn",
    tagline: "The geyser moon",
    description:
      "A small, bright ice moon that shoots water vapor from cracks near its south pole — a hint of a warm ocean below.",
    gravity: "About 1% of Earth’s — barely any pull.",
    temperature: "Around -330°F on the surface.",
    atmosphere: "Very thin water vapor — almost none.",
    survival: "No — too cold, too little gravity, and open space radiation.",
    funFacts: [
      "Enceladus reflects almost all sunlight — it’s one of the brightest objects in the solar system.",
      "Its geysers feed Saturn’s faint E ring.",
      "Scientists think a salty ocean under the ice could be habitable for microbes.",
    ],
    gradient: "from-white via-blue-50 to-slate-200",
    visual: "xs",
  },

  uranus: {
    id: "uranus",
    name: "Uranus",
    kind: "planet",
    planetClass: "ice-giant",
    tagline: "The tilted ice giant",
    description:
      "An ice giant — not a rocky world like Earth, but not quite the same as Jupiter either. It spins on its side, giving it extreme seasons.",
    gravity: "About 89% of Earth’s — similar weight, hostile everything else.",
    temperature: "Cloud tops around -370°F — colder than any other planet.",
    atmosphere:
      "Hydrogen, helium, and methane — the methane gives it a calm blue-green color.",
    survival:
      "No. No surface, brutal cold, and a atmosphere that deepens into crushing slush.",
    funFacts: [
      "Uranus rotates on its side — likely from an ancient collision.",
      "It has faint rings and 28 known moons (and counting).",
      "From Uranus, the Sun looks like a bright star — daylight is dim and eerie.",
    ],
    gradient: "from-cyan-300 via-teal-200 to-blue-400",
    visual: "lg",
  },

  neptune: {
    id: "neptune",
    name: "Neptune",
    kind: "planet",
    planetClass: "ice-giant",
    tagline: "The windiest planet",
    description:
      "The farthest major planet — deep blue, wracked by supersonic winds and storms we barely understand.",
    gravity: "About 1.1× Earth’s.",
    temperature: "Cloud tops near -360°F.",
    atmosphere:
      "Hydrogen, helium, and methane — similar recipe to Uranus, but deeper blue and wilder weather.",
    survival: "No — same story as other giants: no ground, no mercy.",
    funFacts: [
      "Neptune’s winds can exceed 1,200 mph — faster than the speed of sound on Earth.",
      "It was the first planet found by math: astronomers predicted its position before anyone saw it.",
      "A Neptunian year lasts about 165 Earth years.",
    ],
    gradient: "from-blue-600 via-indigo-500 to-blue-800",
    visual: "lg",
  },

  triton: {
    id: "triton",
    name: "Triton",
    kind: "moon",
    parentId: "neptune",
    tagline: "Neptune’s captured wanderer",
    description:
      "Neptune’s largest moon — probably a captured Kuiper Belt object. It has geysers of nitrogen and orbits backward.",
    gravity: "About 8% of Earth’s.",
    temperature: "Around -391°F — one of the coldest surfaces known.",
    atmosphere: "Thin nitrogen — barely there.",
    survival: "No — extreme cold and distance from the Sun.",
    funFacts: [
      "Triton orbits Neptune in reverse — a clue it wasn’t born there.",
      "It’s slowly spiraling inward and may shatter into a ring millions of years from now.",
      "Nitrogen geysers on Triton were among the first eruptions seen beyond Mars.",
    ],
    gradient: "from-rose-100 via-pink-200 to-slate-300",
    visual: "sm",
  },

  ceres: {
    id: "ceres",
    name: "Ceres",
    kind: "dwarf-planet",
    planetClass: "dwarf-planet",
    tagline: "The belt’s biggest resident",
    description:
      "The largest object in the asteroid belt — round enough to be a dwarf planet, small enough to fit inside Texas.",
    gravity: "About 3% of Earth’s — you’d float with a gentle hop.",
    temperature: "Around -100°F on average in the belt.",
    atmosphere: "Very thin water vapor — essentially none.",
    survival:
      "Only with full spacecraft life support. Low gravity and radiation make the surface unwelcoming.",
    funFacts: [
      "Ceres may have a salty underground ocean — Dawn mission found bright salt deposits.",
      "It was the first asteroid discovered (1801) before we reclassified it as a dwarf planet.",
      "Bright spots on Ceres puzzled scientists until we learned they’re salt left by ancient water.",
    ],
    gradient: "from-zinc-500 to-stone-400",
    visual: "xs",
  },

  pluto: {
    id: "pluto",
    name: "Pluto",
    kind: "dwarf-planet",
    planetClass: "dwarf-planet",
    tagline: "The little world that started a debate",
    description:
      "A icy dwarf planet in the outer solar system with a giant heart-shaped glacier, a big moon (Charon), and a story that made everyone care about what counts as a planet.",
    gravity: "About 6% of Earth’s.",
    temperature: "Around -375°F — colder than any place on Earth.",
    atmosphere:
      "Thin nitrogen that freezes and snows onto the surface when Pluto moves farther from the Sun.",
    survival:
      "Not on the surface. New Horizons flew by in 2015 — humans have only seen it from afar.",
    funFacts: [
      "Pluto’s heart (Tombaugh Regio) is a glacier made of nitrogen ice.",
      "Its moon Charon is so large they orbit a point in space between them.",
      "When Pluto was “demoted,” textbooks changed — but public love for Pluto only grew.",
    ],
    gradient: "from-amber-200 via-rose-200 to-stone-400",
    visual: "sm",
  },

  eris: {
    id: "eris",
    name: "Eris",
    kind: "dwarf-planet",
    planetClass: "dwarf-planet",
    tagline: "The discovery that shook Pluto’s status",
    description:
      "Slightly smaller than Pluto but more massive — the find that forced astronomers to define “dwarf planet” clearly.",
    gravity: "Similar to Pluto’s — very light.",
    temperature: "Around -390°F.",
    atmosphere: "Collapses onto the surface when far from the Sun — seasonal ice.",
    survival: "No — it’s one of the most distant worlds we’ve studied up close.",
    funFacts: [
      "Eris is named after the Greek goddess of discord — fitting for the planet debate.",
      "Its moon Dysnomia is named after the spirit of lawlessness.",
      "Eris takes about 557 Earth years to orbit the Sun once.",
    ],
    gradient: "from-zinc-300 to-slate-400",
    visual: "xs",
  },

  haumea: {
    id: "haumea",
    name: "Haumea",
    kind: "dwarf-planet",
    planetClass: "dwarf-planet",
    tagline: "The squashed spinning top",
    description:
      "An elongated icy world that spins so fast (about 4 hours) it stretched into a rugby-ball shape. Named after a Hawaiian goddess of childbirth.",
    gravity: "Roughly 4% of Earth’s.",
    temperature: "Around -400°F.",
    atmosphere: "None — frozen and airless.",
    survival: "No.",
    funFacts: [
      "Haumea has a ring — rare for such a small body.",
      "It has two small moons: Hiʻiaka and Namaka.",
      "Its surface is unusually bright — water ice that reflects like fresh snow.",
    ],
    gradient: "from-slate-200 to-zinc-300",
    visual: "xs",
  },

  makemake: {
    id: "makemake",
    name: "Makemake",
    kind: "dwarf-planet",
    planetClass: "dwarf-planet",
    tagline: "Bright red ice in the far dark",
    description:
      "A reddish dwarf planet discovered in 2005 — named after a Rapa Nui creation deity. No moons confirmed for a long time; now we know of at least one tiny one.",
    gravity: "About 4% of Earth’s.",
    temperature: "Around -395°F.",
    atmosphere: "Mostly frozen — may have brief methane when closer to the Sun.",
    survival: "No.",
    funFacts: [
      "Makemake was discovered just after Eris — a busy year for the outer solar system.",
      "Its reddish color comes from radiation-baked ice on the surface.",
      "It’s the second-brightest Kuiper Belt object after Pluto.",
    ],
    gradient: "from-amber-800 via-red-900 to-stone-700",
    visual: "xs",
  },

  "kuiper-belt": {
    id: "kuiper-belt",
    name: "Kuiper Belt",
    kind: "region",
    tagline: "The solar system’s frozen frontier",
    description:
      "A vast doughnut of icy bodies beyond Neptune — home to Pluto, Eris, and countless comets. This is where the solar system gets quiet, cold, and weird.",
    gravity:
      "On individual objects, almost nothing — many are so small you’d weigh pounds.",
    temperature:
      "Around -400°F and colder — among the coldest places in the solar system.",
    atmosphere: "None on most objects — bare ice and rock in vacuum.",
    survival:
      "Only through robotic probes. Humans have never gone; New Horizons is our eyes so far.",
    funFacts: [
      "Short-period comets (like Halley) may originate here before falling toward the Sun.",
      "The belt may hold hundreds of thousands of objects bigger than 60 miles wide.",
      "Beyond the Kuiper Belt lies the Oort Cloud — a shell of comets almost a light-year away.",
    ],
    gradient: "from-indigo-900/60 via-violet-900/40 to-transparent",
    visual: "lg",
  },
};

export const solarSections: SolarSection[] = [
  {
    id: "sun",
    label: "The Sun",
    bodyIds: ["sun"],
  },
  {
    id: "terrestrial",
    label: "Rocky planets",
    subtitle: "Terrestrial worlds — solid surfaces, smaller, closer in",
    bodyIds: ["mercury", "venus", "earth", "moon", "mars"],
  },
  {
    id: "asteroid-belt",
    label: "Asteroid Belt",
    subtitle: "Between Mars and Jupiter — rocky leftovers that never became a planet",
    bodyIds: ["asteroid-belt", "ceres"],
  },
  {
    id: "giants",
    label: "Giant planets",
    subtitle: "Gas giants (Jupiter, Saturn) and ice giants (Uranus, Neptune) — no solid ground",
    bodyIds: [
      "jupiter",
      "io",
      "europa",
      "ganymede",
      "saturn",
      "titan",
      "enceladus",
      "uranus",
      "neptune",
      "triton",
    ],
  },
  {
    id: "dwarf-planets",
    label: "Dwarf planets",
    subtitle: "Round worlds that never cleared their orbital neighborhood",
    bodyIds: ["pluto", "eris", "haumea", "makemake"],
  },
  {
    id: "kuiper",
    label: "Edge of the solar system",
    subtitle: "Beyond the major planets",
    bodyIds: ["kuiper-belt"],
  },
];

export function getBody(id: string): SolarBody | undefined {
  return solarBodies[id];
}

export function getPlanetClassLabel(
  planetClass: SolarBody["planetClass"]
): string | null {
  switch (planetClass) {
    case "terrestrial":
      return "Terrestrial (rocky)";
    case "gas-giant":
      return "Gas giant";
    case "ice-giant":
      return "Ice giant";
    case "dwarf-planet":
      return "Dwarf planet";
    default:
      return null;
  }
}
