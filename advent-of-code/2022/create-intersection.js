/**
 * Generiert ein neues Set aus der Schnittmenge der angegebenen Sets.
 * @param {Set<>} a
 * @param {Set<>} b
 * @returns {Set<>}
 */
export function createIntersection(a, b) {
  return new Set([...a].filter(item => b.has(item)));
}
