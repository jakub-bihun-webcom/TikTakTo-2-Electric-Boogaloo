/**
 * Methode um 2 Arrays miteinander zu vergleichen und ein neues Set mit der Schnittmenge zu bilden.
 * @type {{createNewIntersection(*, *): Set<T>}}
 */
export const intersectionMethod = {
    createNewIntersection(section1, section2){
        return new Set ([...section1].filter(item => section2.has(item)));
    }
}

