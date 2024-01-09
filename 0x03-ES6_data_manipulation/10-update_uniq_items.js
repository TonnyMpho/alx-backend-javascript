/*
 * function named updateUniqueItems that returns an updated map
 * for all items with initial quantity at 1
 */

export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  map.forEach((q, key) => {
    if (q === 1) {
      console.log(q, key);
      map.set(key, 100);
    }
  });
  return map;
}
