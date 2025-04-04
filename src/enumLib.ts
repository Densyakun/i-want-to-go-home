export type EnumObjectType = { [key: string]: number | string };

export function findFirstKey(enumObject: EnumObjectType, value: number | string) {
  return Object.entries(enumObject).find(([_, kind]) => kind === value)?.[0] || "";
}

export function createArrayWithOnlyFirstKey(enumObject: EnumObjectType, valueSize = getMaxValue(enumObject) + 1) {
  return Array(valueSize).fill(undefined).map((_, index) =>
    findFirstKey(enumObject, index)
  );
}

export function createNumericKeysObjectWithOnlyFirstKey(enumObject: EnumObjectType) {
  const object: { [key: number]: number | string } = {};
  Object.values(enumObject).forEach(value => {
    if (typeof value === "number")
      object[value] = findFirstKey(enumObject, value)
  });
  return object;
}

export function getMaxValue(enumObject: EnumObjectType) {
  return Math.max(...Object.keys(enumObject).map(value => parseInt(value) || 0));
}
