// METHOD 2
function evenlySpaced(first, second, last) {
    let array = [first, second, last];
    array.sort(function (a, b) {
      return a - b;
    });
  
    let smallest = array[0];
    let middle = array[1];
    let largest = array[2];
  
  //   let avg = (largest + smallest) / 2;
  //   return avg == middle;
  // }

  return ((middle - smallest) !== (largest - middle)) ? false : true
}

console.log(evenlySpaced(4, 6, 2));