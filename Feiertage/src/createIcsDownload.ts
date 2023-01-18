export function createIcsDownload(icsContent: string) {
  const createLink = document.getElementById('app') as HTMLElement;

  const blob = new Blob([icsContent], { type: 'text/ics;charset=utf-8,' });
  const objUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', objUrl);
  link.setAttribute('download', 'Feiertage.ics');
  link.textContent = 'Click to Download';

  const clear = document.querySelector('a') as HTMLElement;

  createLink.append(link);
  clear.remove();
}
