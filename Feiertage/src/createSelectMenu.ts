import { deleteLink } from './createIcsDownload';
import { clearTable } from './input';

const bundeslaender = new Map();

bundeslaender.set('BW', 'Baden-Württemberg');
bundeslaender.set('BY', 'Bayern');
bundeslaender.set('BE', 'Berlin');
bundeslaender.set('BB', 'Brandenburg');
bundeslaender.set('HB', 'Bremen');
bundeslaender.set('HH', 'Hamburg');
bundeslaender.set('BW', 'Baden-Württemberg');
bundeslaender.set('HE', 'Hessen');
bundeslaender.set('MV', 'Mecklenburg-Vorpommern');
bundeslaender.set('NI', 'Niedersachsen');
bundeslaender.set('NW', 'Nordrhein-Westfalen');
bundeslaender.set('RP', 'Rheinland-Pfalz');
bundeslaender.set('SL', 'Saarland');
bundeslaender.set('SN', 'Sachsen');
bundeslaender.set('ST', 'Sachsen-Anhalt');
bundeslaender.set('SH', 'Schleswig Holstein');
bundeslaender.set('TH', 'Thüringen');

export function createSelectMenu(): void {
  const dropDownMenu = document.getElementById('bundeslandAuswahl') as HTMLElement;
  dropDownMenu.onchange = function () {
    clearTable();
    deleteLink();
  };
  bundeslaender.forEach((land, key) => {
    const option = dropDownMenu.appendChild(document.createElement('option'));
    option.innerText = land;
    option.value = key;
  });
}
