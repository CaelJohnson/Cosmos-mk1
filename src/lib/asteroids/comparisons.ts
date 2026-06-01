export function sizeLabel(diameterM: number): string {
  if (diameterM < 8) return "About the size of a car";
  if (diameterM < 20) return "Roughly bus-sized";
  if (diameterM < 45) return "As wide as a house";
  if (diameterM < 100) return "About as long as a basketball court";
  if (diameterM < 200) return "Taller than the Statue of Liberty";
  if (diameterM < 450) return "Taller than the Empire State Building";
  if (diameterM < 1000) return "More than half a kilometer wide";
  return "Over a kilometer wide — a small mountain in space";
}

export function distanceLabel(lunar: number, km: number): string {
  if (lunar < 0.5) {
    return `Passes closer than half the Earth–Moon distance (${lunar.toFixed(2)} lunar distances)`;
  }
  if (lunar < 1) {
    return `Closer than the Moon — about ${(lunar * 100).toFixed(0)}% of that distance`;
  }
  if (lunar < 5) {
    return `${lunar.toFixed(1)}× the Earth–Moon distance (${formatKm(km)} km)`;
  }
  return `${formatKm(km)} km away — roughly ${Math.round(lunar)} Moon distances`;
}

function formatKm(km: number): string {
  if (km >= 1_000_000) return `${(km / 1_000_000).toFixed(1)}M`;
  if (km >= 1000) return `${Math.round(km / 1000)}k`;
  return Math.round(km).toLocaleString();
}

export function velocityLabel(kph: number): string {
  if (kph > 100_000) return `Very fast — ${Math.round(kph / 1000)}k km/h`;
  return `${Math.round(kph).toLocaleString()} km/h`;
}
