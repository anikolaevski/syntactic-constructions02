// eslint-disable-next-line import/prefer-default-export
export function findBy(attr, val) {
  // eslint-disable-next-line func-names
  const func = function (row) { return row[attr] === val; };
  return func;
}
