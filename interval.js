//1)
function printArray(array, timeout) {
    for (var i = 0; i < array.length; i += 1) {
      (function(i) {
        setTimeout(() => {
            console.log(i);
        }, i * timeout)
      })(array[i]);
    }
  }
  
  printArray([1, 2, 3], 3000);
  
  //2
  function printArray (array, timeout) {
    for (let i = 0; i < array.length; i += 1) {
      setTimeout(() => {
          console.log(array[i]);
      }, array[i] * timeout)
    }
  }
  
  printArray([1, 2, 3], 3000);