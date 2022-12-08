/**
 * Generiert ein neues Set aus der Schnittmenge der angegebenen Sets.
 * @param section1
 * @param section2
 * @returns {Set<>}
 */
export function createIntersection(section1, section2) {
  return new Set([...section1].filter(item => section2.has(item)));
}
