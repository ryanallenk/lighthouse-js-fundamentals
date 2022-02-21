const judgeVegetable = function (vegetables, metric) {
  vegetables.sort(function(a, b) {
    return a[metric] - b[metric];
  });
  return vegetables[0].submitter;
};