export function uniqueArchive(value, index, self) {
  const result = self.find(el => {
    console.log(value[1], el[1]);
    if (value[1] === el[1]) {
      return true;
    }
    return false;
  });
  return result !== undefined;
}
