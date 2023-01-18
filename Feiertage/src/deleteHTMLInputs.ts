export function deleteLink() {
  const clearLink = document.querySelector('a') as HTMLElement;
  if (clearLink != null) {
    clearLink.remove();
  }
}

export function clearTable() {
  const table = document.getElementById('table') as HTMLTableElement;
  table.innerHTML = '';
}
