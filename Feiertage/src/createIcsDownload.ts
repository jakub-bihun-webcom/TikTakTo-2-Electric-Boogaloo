export function createIcsDownload(icsContent) {
  const blob = new Blob([icsContent], { type: 'text/ics;charset=utf-8,' });
  const objUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', objUrl);
  link.setAttribute('download', 'Feiertage.ics');
  link.textContent = 'Click to Download';
  const createLink = document.querySelector('a') as HTMLAnchorElement;
  createLink.append(link);
}
