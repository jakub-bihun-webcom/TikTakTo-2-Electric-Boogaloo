export class FeiertageService {
  async getFeiertage(){
    const bundeslandInput = document.getElementById('bundeslandAuswahl') as HTMLInputElement;
    const yearInput = document.getElementById('jahr') as HTMLInputElement;
    let yearValue: string = yearInput.value;
    let bundeslandValue: string = bundeslandInput.value;

    const response = await fetch(`https://feiertage-api.de/api/?jahr=${yearValue}&nur_land=${bundeslandValue}`);
    const json = await response.json();
    console.log(json)
    return json
  }
}
