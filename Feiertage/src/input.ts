export async function getFeiertage() {
  const bundeslandInput = document.getElementById('bundeslandAuswahl') as HTMLInputElement;
  let bundeslandValue = bundeslandInput.value;
  console.log(bundeslandValue);
  const response = await fetch(`https://feiertage-api.de/api/?jahr=2019&nur_land=${bundeslandValue}`);
  const json = await response.json();
  console.log(json);
}
