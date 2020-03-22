

exports.min = function min (array) {
  if ((array) && (this.length !== 0)) {
    let minn = [0];
    for (let maxItem of array) {
      if (maxItem < minn ) {
        minn = maxItem;
      }
    }
    return minn;
  } else return 0;
}

exports.max = function max (array) {
  if ((array) && (this.length !== 0)) {
  let maxn = [0];
  for (let maxItem of array) {
    if (maxItem > maxn) {
      maxn = maxItem;
    }
  }
  return maxn;
  } else return 0;
}

exports.avg = function avg (array) {
  if ((array) && (array.length != 0)) {
    let result = array.reduce(function(sum, current) {
      return sum + current;
    }, 0);
    console.log (result/array.length);
    return (result/array.length);
  } else return 0;
}
