let smartGarbage = function(trash, bins) {
  let type = Object.keys(bins);
  for (let i of type) {
    if (i === trash) {
      bins[i]++;
    }
  }
  return (bins);
};

console.log(smartGarbage('recycling', {
  waste: 4,
  recycling: 2,
  compost: 5
}));