
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  let total = 0;
  if(fromN === toN){
    return toN;
  };
  total = fromN + sum(fromN + 1, toN);     
  return total
}

module.exports = sum;