export async function getFeiertage() {
  const response = await fetch(`https://feiertage-api.de/api/?jahr=2019&nur_land=NW`);
  const json = await response.json();

  console.log(json);
}
