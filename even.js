function evenlySpaced(i, j, k) {
    let array = [i, j, k];
    array.sort(function (a, b) {
      return a - b;
    });
  
    let smallest = array[0];
    let middle = array[1];
    let largest = array[2];
  
    let avg = (largest + smallest) / 2;
    return avg == middle;
  }

  console.log(evenlySpaced(4, 6, 2));