function BuildMaxHeap(array){
  // array.sort(function(a,b){return b-a})
  for(var i = Math.floor(array.length / 2); i >= 0; i--){
    maxHeapify(array, i);
  }
  return array;
}

function maxHeapify(array, i) {
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var largest = i;
  if(left <= array.length && array[left] > array[largest]){
    largest = left;
  }
  if(right <= array.length && array[right] > array[largest]){
    largest = right;
  }
  if(largest != i){
        var temp = array[i];
        array[i] = array[largest];
        array[largest] = temp;
        maxHeapify(array, largest);
  }
}

//Test
var initialArray = [16, 4, 3, 9, 1, 2, 8, 14, 7, 10];
console.log(BuildMaxHeap(initialArray));

/*
Note: when you start with different structure on a heap you get different results so this depend on
how child is insereted and bubbled-up(swapped with parents), which will stop as soon as it is smaller than its parent
of which there can be multiple valid candidates for a position in a heap.
*/