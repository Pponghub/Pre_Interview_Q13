export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  const result: number[] = [];

  let sortedCollection2 = [];
  for (let i = collection2.length - 1; i >= 0; i--) {
    sortedCollection2.push(collection2[i]);
  }

  let i = 0,
    j = 0,
    k = 0;
  while (
    i < collection1.length ||
    j < sortedCollection2.length ||
    k < collection3.length
  ) {
    const val = [];

    if (i < collection1.length) {
      val.push({ value: collection1[i], from: "i" });
    }
    if (j < sortedCollection2.length) {
      val.push({ value: sortedCollection2[j], from: "j" });
    }
    if (k < collection3.length) {
      val.push({ value: collection3[k], from: "k" });
    }

    let min = val[0];
    if (val.length > 1 && min.value > val[1].value) {
      min = val[1];
    }
    if (val.length > 2 && min.value > val[2].value) {
      min = val[2];
    }

    switch (min.from) {
      case "i":
        result.push(collection1[i]);
        i++;
        break;
      case "j":
        result.push(sortedCollection2[j]);
        j++;
        break;
      case "k":
        result.push(collection3[k]);
        k++;
        break;
    }
  }

  return result;
}
